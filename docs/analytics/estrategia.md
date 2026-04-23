# Estratégia de Analytics — Portal do Cliente

**Versão:** 1.0  
**Última atualização:** Abril 2026  
**Responsável:** Pedro Costa  
**Ferramenta primária:** Google Analytics 4 (GA4)  
**Ferramenta secundária (UX):** Microsoft Clarity (gravações + heatmaps)

---

## 1. Princípios

1. **Segregação por jornada** — cada jornada tem seu próprio namespace de eventos. Nunca misturar prefixos (`hotel_`, `flight_`, `car_`, `account_`, `app_`)
2. **Moeda agnóstica** — `currency` sempre reflete `CurrencyConfig.label`; nunca hardcodar "BRL" ou "Tribz"
3. **Camada de abstração obrigatória** — o time NÃO chama `gtag()` ou `dataLayer.push()` diretamente nos componentes. Todo disparo passa por `src/lib/analytics.ts`
4. **Sem PII nos eventos** — nunca enviar nome, CPF, e-mail ou telefone como parâmetro de evento
5. **Server-side é fonte de verdade para receita** — o GA4 só rastreia a intenção (checkout_completed). A confirmação financeira vem do backend

---

## 2. Arquitetura da Camada de Analytics

### 2.1 Arquivo central

```
src/
└── lib/
    └── analytics.ts        ← única fonte de disparo de eventos
```

### 2.2 Estrutura do módulo

```ts
// src/lib/analytics.ts

declare global {
  interface Window { dataLayer: unknown[] }
}

type EventParams = Record<string, string | number | boolean | null | undefined>

function track(eventName: string, params: EventParams = {}) {
  if (typeof window === "undefined") return
  window.dataLayer?.push({ event: eventName, ...params })
}

// User identity (chamar após login)
export function identifyUser(userId: string, productId: string) {
  window.dataLayer?.push({
    event: "user_identified",
    user_id: userId,        // hash anônimo — nunca e-mail/CPF
    product_id: productId,  // "tribpass" | "trib" | "voala" | "meuclube"
  })
}

// Exporta por namespace de jornada
export const hotelAnalytics = { ... }   // ver seção 4.1
export const flightAnalytics = { ... }  // ver seção 4.2
export const carAnalytics = { ... }     // ver seção 4.3
export const accountAnalytics = { ... } // ver seção 4.4
export const appAnalytics = { ... }     // ver seção 4.5
```

### 2.3 Google Tag Manager

Toda configuração de GA4, Clarity e outros pixels passa pelo **GTM**. O código do portal só precisa publicar no `dataLayer` — o GTM roteará os eventos para as ferramentas corretas.

**Variável GTM obrigatória em todas as tags:** `product_id` (vem do `identifyUser`) — permite filtrar dados por instância (Trib Pass, Voalá, etc.) em qualquer ferramenta.

---

## 3. User Properties (GA4)

Configurar como **User Properties** no GA4 (não como parâmetros de evento):

| Propriedade   | Valores                                   | Origem                     |
| ------------- | ----------------------------------------- | -------------------------- |
| `product_id`  | `tribpass`, `trib`, `voala`, `meuclube`   | `CurrencyConfig.productId` |
| `currency`    | `tribz`, `brl`, `pontos`                  | `CurrencyConfig.label`     |
| `user_tier`   | `standard`, `premium`, `vip`              | API de perfil              |
| `has_balance` | `true` / `false`                          | API de saldo               |

---

## 4. Eventos por Jornada

### 4.1 Jornada Hotel (`hotel_`)

> Spec completa: `docs/jornadas/hotel/mapa-eventos.md`

#### Funil de conversão

```
hotel_search_submitted (busca)
  → hotel_results_viewed (resultados carregados)
    → hotel_view_rooms_clicked (clique no card — idx 0-based)
      → hotel_drawer_opened (drawer aberto)
        → hotel_drawer_room_selected (quarto selecionado no drawer)
          OU
      → hotel_pdp_viewed (entrou no PDP)
        → hotel_book_clicked (clicou em reservar)
  → hotel_checkout_started (entrou no pagamento)
    → hotel_checkout_step_completed (step=1/2/3)
    → hotel_checkout_completed (enviou reserva)
      → hotel_booking_confirmation_viewed (confirmação vista)
```

**Meta MVP 1:** ≥ 25% de `hotel_search_submitted` → `hotel_booking_confirmation_viewed`

#### Onde taggear no código

| Arquivo                                          | Evento                              | Gatilho de código                      |
| ------------------------------------------------ | ----------------------------------- | -------------------------------------- |
| `src/app/pages/HomePage.tsx`                     | `hotel_search_submitted`            | `onSubmit` do formulário de busca      |
| `src/app/pages/SearchResults.tsx`                | `hotel_results_viewed`              | `useEffect` no mount da página         |
| `src/app/pages/SearchResults.tsx`                | `hotel_filter_applied`              | `onChange` dos filtros do sidebar      |
| `src/app/pages/SearchResults.tsx`                | `hotel_sort_changed`                | `onChange` do select de ordenação      |
| `src/app/pages/SearchResults.tsx`                | `hotel_view_rooms_clicked`          | `onClick` do botão "Ver quartos"       |
| `src/app/components/HotelDrawer.tsx` *(futuro)*  | `hotel_drawer_opened`               | `useEffect` quando `isOpen` vira `true`|
| `src/app/components/HotelDrawer.tsx` *(futuro)*  | `hotel_drawer_room_selected`        | `onClick` do botão "Reservar" no drawer|
| `src/app/pages/HotelDetails.tsx`                 | `hotel_pdp_viewed`                  | `useEffect` no mount da página         |
| `src/app/pages/HotelDetails.tsx`                 | `hotel_gallery_opened`              | `onClick` que abre modal de galeria    |
| `src/app/pages/HotelDetails.tsx`                 | `hotel_room_tab_changed`            | `onValueChange` do Tabs de quarto      |
| `src/app/pages/HotelDetails.tsx`                 | `hotel_book_clicked`                | `onClick` do CTA sticky / quarto       |
| `src/app/pages/Payment.tsx` (contexto hotel)     | `hotel_checkout_started`            | `useEffect` no mount da página         |
| `src/app/pages/Payment.tsx` (contexto hotel)     | `hotel_checkout_step_completed`     | `onValueChange` do Accordion (step)    |
| `src/app/pages/Payment.tsx` (contexto hotel)     | `hotel_checkout_completed`          | `onSubmit` do form de pagamento        |
| `src/app/pages/BookingConfirmation.tsx` (hotel)  | `hotel_booking_confirmation_viewed` | `useEffect` no mount da página         |

---

### 4.2 Jornada Aéreo (`flight_`)

> Spec completa: `docs/jornadas/aereo/mapa-eventos.md`

#### Funil de conversão

```
flight_search_submitted (busca)
  → flight_results_viewed (resultados carregados)
    → flight_select_clicked (clicou em selecionar — leg=ida)
      → flight_class_modal_opened (modal de tarifa aberto)
        → flight_class_selected (tarifa escolhida)
        → flight_class_advanced (avançou)
          → [repetir para leg=volta se ida/volta]
  → flight_checkout_started (entrou no pagamento)
    → flight_checkout_step_completed (step=1/2/3)
    → flight_payment_method_selected (método selecionado)
    → flight_checkout_completed (enviou reserva)
      → flight_booking_confirmation_viewed (confirmação vista)
```

**Meta MVP 1:** ≥ 20% de `flight_search_submitted` → `flight_booking_confirmation_viewed`

#### Onde taggear no código

| Arquivo                                              | Evento                               | Gatilho de código                           |
| ---------------------------------------------------- | ------------------------------------ | ------------------------------------------- |
| `src/app/pages/HomePage.tsx`                         | `flight_search_submitted`            | `onSubmit` do formulário de busca (aba aérea)|
| `src/app/pages/FlightResults.tsx`                    | `flight_results_viewed`              | `useEffect` no mount                        |
| `src/app/pages/FlightResults.tsx`                    | `flight_filter_applied`              | `onChange` de cada filtro                   |
| `src/app/pages/FlightResults.tsx`                    | `flight_date_changed`                | `onChange` do DateCarousel                  |
| `src/app/pages/FlightResults.tsx`                    | `flight_details_clicked`             | `onClick` de "Ver detalhes"                 |
| `src/app/pages/FlightResults.tsx`                    | `flight_select_clicked`              | `onClick` de "Selecionar" em cada row       |
| `src/app/components/figma/FlightDetailsModal.tsx`    | `flight_details_modal_opened`        | `useEffect` quando `isOpen` vira `true`     |
| `src/app/components/figma/FlightDetailsModal.tsx`    | `flight_details_expanded`            | `onClick` de "Mais detalhes"                |
| `src/app/components/figma/ClassSelectionModal.tsx`   | `flight_class_modal_opened`          | `useEffect` quando `isOpen` vira `true`     |
| `src/app/components/figma/ClassSelectionModal.tsx`   | `flight_class_selected`              | `onClick` em uma tarifa                     |
| `src/app/components/figma/ClassSelectionModal.tsx`   | `flight_class_advanced`              | `onClick` de "Avançar"                      |
| `src/app/pages/FlightPayment.tsx`                    | `flight_checkout_started`            | `useEffect` no mount                        |
| `src/app/pages/FlightPayment.tsx`                    | `flight_checkout_step_completed`     | `onValueChange` do Accordion                |
| `src/app/pages/FlightPayment.tsx`                    | `flight_payment_method_selected`     | `onChange` do seletor de método             |
| `src/app/pages/FlightPayment.tsx`                    | `flight_checkout_completed`          | `onSubmit` do form                          |
| `src/app/pages/FlightConfirmation.tsx`               | `flight_booking_confirmation_viewed` | `useEffect` no mount                        |

---

### 4.3 Jornada Aluguel de Carro (`car_`) *(planejado)*

> Spec ainda não escrita — eventos abaixo são estimativa para alinhar estrutura.

```
car_search_submitted → car_results_viewed → car_select_clicked
  → car_checkout_started → car_checkout_completed
    → car_booking_confirmation_viewed
```

Parâmetros esperados: `pickup_location`, `dropoff_location`, `pickup_date`, `return_date`, `car_category`, `price`, `currency`.

---

### 4.4 Jornada de Conta (`account_`)

#### Eventos

| Evento                         | Gatilho                                       | Parâmetros                           |
| ------------------------------ | --------------------------------------------- | ------------------------------------ |
| `account_profile_viewed`       | Usuário entra na aba "Meus Dados"             | —                                    |
| `account_history_viewed`       | Usuário entra na aba "Histórico"              | —                                    |
| `account_settings_viewed`      | Usuário entra na aba "Configurações"          | —                                    |
| `account_card_add_started`     | Abre `AddCardModal`                           | —                                    |
| `account_card_add_completed`   | Submete novo cartão com sucesso               | `card_type` (`credit`/`debit`)       |
| `account_traveler_add_started` | Abre `AddTravelerModal`                       | —                                    |
| `account_traveler_add_completed`| Submete novo viajante com sucesso            | `relationship` (parentesco)          |
| `account_card_deleted`         | Confirma deleção de cartão                    | —                                    |

#### Onde taggear no código

| Arquivo                                   | Evento                           | Gatilho de código                   |
| ----------------------------------------- | -------------------------------- | ----------------------------------- |
| `src/app/pages/ProfilePage.tsx`           | `account_profile_viewed`         | `onValueChange` Tab "Meus Dados"    |
| `src/app/pages/ProfilePage.tsx`           | `account_history_viewed`         | `onValueChange` Tab "Histórico"     |
| `src/app/pages/ProfilePage.tsx`           | `account_settings_viewed`        | `onValueChange` Tab "Configurações" |
| `src/app/pages/ProfilePage.tsx`           | `account_card_add_started`       | `onClick` botão "+" em Pagamentos   |
| `src/app/components/AddCardModal.tsx`     | `account_card_add_completed`     | `onSubmit` com sucesso              |
| `src/app/pages/ProfilePage.tsx`           | `account_traveler_add_started`   | `onClick` botão "+" em Viajantes    |
| `src/app/components/AddTravelerModal.tsx` | `account_traveler_add_completed` | `onSubmit` com sucesso              |

---

### 4.5 Eventos Globais (`app_`)

Estes eventos são transversais a todas as jornadas e devem ser implementados em pontos de infraestrutura, não em páginas individuais.

| Evento                  | Gatilho                                          | Parâmetros                                         |
| ----------------------- | ------------------------------------------------ | -------------------------------------------------- |
| `app_session_started`   | Primeiro render após autenticação                | `product_id`, `currency`                           |
| `app_page_viewed`       | Cada mudança de rota                             | `page_path`, `page_title`, `journey` (ver abaixo)  |
| `app_search_tab_changed`| Troca de aba na SearchSection da Home            | `tab` (`hotel`, `aereo`, `carro`)                  |
| `app_notification_opened`| Clique no sino de notificações                  | —                                                  |
| `app_error_displayed`   | Qualquer boundary de erro ou toast de erro       | `error_code`, `page_path`, `journey`               |
| `app_balance_viewed`    | Usuário visualiza saldo de Tribz/pontos          | `balance_amount`, `currency`                       |

**Parâmetro `journey`** em `app_page_viewed`:  
Mapeie a rota para o namespace: `/resultados-hotel` → `hotel`, `/resultados-aereo` → `flight`, `/aluguel-carro` → `car`, `/minha-conta` → `account`, `/` → `home`.

#### Onde taggear no código

| Arquivo                          | Evento                    | Gatilho de código                             |
| -------------------------------- | ------------------------- | --------------------------------------------- |
| `src/app/routes.tsx`             | `app_page_viewed`         | `useEffect` no listener de `useLocation()`    |
| `src/app/routes.tsx`             | `app_session_started`     | `useEffect` no mount do router (após login)   |
| `src/app/pages/HomePage.tsx`     | `app_search_tab_changed`  | `onValueChange` das Tabs da SearchSection     |
| `src/app/components/Header.tsx`  | `app_notification_opened` | `onClick` do ícone Bell                       |
| `src/app/components/ui/Sonner`   | `app_error_displayed`     | Wrapper de toast — evento no tipo `error`     |

---

## 4.6 Jornada do Carrinho (`cart_`)

> Spec completa: `docs/jornadas/carrinho/mapa-eventos.md`

#### Funil de conversão

```
cart_viewed (carrinho aberto)
  → cart_checkout_started (clicou em "Finalizar Compra")
    → [hotel|flight]_checkout_started (entrada no pagamento)
      → [hotel|flight]_checkout_completed (reserva enviada)
        → [hotel|flight]_booking_confirmation_viewed
```

**Meta MVP 1:** ≥ 70% de `cart_viewed` → `cart_checkout_started`

#### Onde taggear no código

| Arquivo                             | Evento                    | Gatilho de código                                          |
| ----------------------------------- | ------------------------- | ---------------------------------------------------------- |
| `src/app/pages/CartPage.tsx`        | `cart_viewed`             | `useEffect` no mount — após carrinho carregado             |
| `src/app/pages/CartPage.tsx`        | `cart_upsell_viewed`      | `useEffect` no mount (mesmo tick que `cart_viewed`)        |
| `src/app/pages/CartPage.tsx`        | `cart_item_removed`       | `onClick` do botão `Trash2` por item                       |
| `src/app/pages/CartPage.tsx`        | `cart_upsell_clicked`     | `onClick` dos CTAs da seção de cross-sell                  |
| `src/app/pages/CartPage.tsx`        | `cart_checkout_started`   | `onClick` de qualquer botão "Finalizar Compra" da página   |
| `src/app/pages/CartPage.tsx`        | `cart_offer_expired`      | `onExpire` callback do `CartCountdownBadge`                |

#### Parâmetro `services` — identificação de origem

O parâmetro `services` presente na URL `/carrinho?services=...` deve ser incluído em **todos os eventos `cart_`**. É a chave de segmentação que permite responder:

> *"Qual composição de carrinho tem maior taxa de conversão para o pagamento?"*

| Valor de `services`    | Segmento no GA4               |
| ---------------------- | ----------------------------- |
| `hotel`                | Carrinho apenas hospedagem    |
| `flight`               | Carrinho apenas aéreo         |
| `hotel,flight`         | Carrinho misto (fase 2)       |

---

## 5. Métricas de Produto por Jornada

### 5.1 Hotel

| Métrica                     | Cálculo                                              | Meta MVP 1 |
| --------------------------- | ---------------------------------------------------- | ---------- |
| Taxa de conversão           | `confirmation_viewed / search_submitted`             | ≥ 25%      |
| Taxa de abandono checkout   | `1 - checkout_completed / checkout_started`          | ≤ 40%      |
| Taxa de abertura do drawer  | `drawer_opened / view_rooms_clicked`                 | ≥ 70%      |
| Taxa de saída para PDP      | `pdp_viewed / view_rooms_clicked`                    | baseline   |
| Step mais abandonado        | Qual `step` de `checkout_step_completed` tem menos eventos | —     |

### 5.2 Aéreo

| Métrica                       | Cálculo                                              | Meta MVP 1 |
| ----------------------------- | ---------------------------------------------------- | ---------- |
| Taxa de conversão             | `confirmation_viewed / search_submitted`             | ≥ 20%      |
| Taxa de seleção de tarifa     | `class_advanced / class_modal_opened`                | ≥ 60%      |
| Método de pagamento preferido | Distribuição de `flight_payment_method_selected`     | baseline   |
| Taxa de abandono checkout     | `1 - checkout_completed / checkout_started`          | ≤ 45%      |
| Rotas mais buscadas           | `(origin, destination)` em `search_submitted`        | baseline   |

### 5.3 Cross-jornada

| Métrica                     | Cálculo                                              |
| --------------------------- | ---------------------------------------------------- |
| Jornada mais iniciada       | Distribuição de `search_submitted` por prefixo       |
| Jornada com maior conversão | Comparar taxas entre jornadas                        |
| Sessões multi-jornada       | Sessões com `search_submitted` em mais de um prefixo |
| Instância mais ativa        | `app_session_started` filtrado por `product_id`      |

---

## 6. Métricas de UX (Microsoft Clarity)

> Clarity se integra nativamente com GA4 — ativar a integração no painel do Clarity para enriquecer as gravações com os eventos do GA4 e navegar de um funil GA4 diretamente para a sessão correspondente no Clarity.

### 6.1 Onde configurar gravações (Filtros de URL)

Criar **Segments** no Clarity com os filtros abaixo para analisar jornadas isoladamente:

| Segmento Clarity       | Filtro de URL                   | Por que gravar                                   |
| ---------------------- | ------------------------------- | ------------------------------------------------ |
| Resultados Hotel       | `Contains /resultados-hotel`    | Entender uso de filtros e scroll                 |
| PDP Hotel              | `Contains /hotel`               | Entender engajamento com galeria e quartos       |
| Resultados Aéreo       | `Contains /resultados-aereo`    | Uso do DateCarousel e seleção de voos            |
| Checkout (ambos)       | `Contains /pagamento-`          | Drop-off por step — dado mais crítico            |
| Perfil                 | `Contains /minha-conta`         | Descoberta de funcionalidades de conta           |

### 6.2 Heatmaps prioritários

O Clarity gera heatmaps de **Click**, **Scroll** e **Area** automaticamente por URL. Priorizar análise nestas páginas:

| Página                  | Tipo de heatmap | Hipótese a validar                                    |
| ----------------------- | --------------- | ----------------------------------------------------- |
| Home                    | Click           | Usuários clicam na aba certa? Uso de cada jornada     |
| Resultados Hotel        | Scroll + Click  | Até onde scrollam? Filtros são usados?                |
| Resultados Aéreo        | Click           | DateCarousel é usado? "Ver detalhes" vs "Selecionar"  |
| Pagamento Hotel         | Scroll + Click  | Qual step causa abandono? Usuário chega no step 3?    |
| Pagamento Aéreo         | Click           | Qual método de pagamento é selecionado mais vezes?    |

### 6.3 Smart Events automáticos do Clarity

O Clarity detecta automaticamente os eventos abaixo — monitorar no dashboard sem instrumentação adicional:

| Smart Event             | O que indica                                                      | Onde investigar                  |
| ----------------------- | ----------------------------------------------------------------- | -------------------------------- |
| **Dead Clicks**         | Cliques em elementos não interativos — possível confusão de UI    | Resultados, cards de voo/hotel   |
| **Rage Clicks**         | Cliques repetidos — frustração com elemento que não responde      | Checkout, formulários            |
| **Excessive Scrolling** | Scroll excessivo sem interação — usuário perdido ou sem encontrar | Resultados de busca              |
| **Quick Backs**         | Usuário volta rapidamente após entrar em uma página               | PDP hotel, modal de tarifa aérea |

### 6.4 Pesquisas in-app *(componente próprio)*

O Clarity não tem surveys nativo. Implementar como componente React no próprio portal, disparado via `useEffect` após os eventos GA4 correspondentes:

| Trigger (evento GA4)                      | Pergunta                                              | Objetivo                           |
| ----------------------------------------- | ----------------------------------------------------- | ---------------------------------- |
| `hotel_booking_confirmation_viewed`       | "O que você achou do processo de reserva?" (1–5 CSAT) | Satisfação pós-compra hotel        |
| `flight_booking_confirmation_viewed`      | "O que você achou do processo de reserva?" (1–5 CSAT) | Satisfação pós-compra aéreo        |
| 60s em `/pagamento-*` sem `step_completed`| "Está tendo alguma dificuldade?" (campo aberto)       | Detectar fricção no checkout       |
| Primeira visita ao `/minha-conta`         | "Encontrou o que procurava?" (sim/não + campo aberto) | Usabilidade da área de conta       |

> Respostas das pesquisas devem ser enviadas para o backend e/ou como evento `app_survey_answered` no GA4 com parâmetros `survey_id` e `answer`.

---

## 7. Eventos de UX Avançados *(fase 2)*

Estes eventos requerem implementação mais elaborada — adiar para após MVP 1:

| Evento                      | Descrição                                                       |
| --------------------------- | --------------------------------------------------------------- |
| `scroll_depth`              | Percentual scrollado em páginas de resultados (25/50/75/100%)  |
| `idle_timeout`              | Usuário ficou inativo por X segundos no checkout               |
| `field_validation_error`    | Campo do formulário exibiu erro de validação (qual campo)       |
| `session_replay_tagged`     | Sessão marcada manualmente como "interessante" pelo time        |
| `result_list_end_reached`   | Usuário chegou ao fim da lista de resultados sem selecionar     |

---

## 8. Implementação Técnica — Guia do Time

### 8.1 Passo a passo para taggear um novo evento

1. **Verificar** se o evento já existe em `src/lib/analytics.ts`
2. **Adicionar** a função tipada no namespace correto (ex: `hotelAnalytics.searchSubmitted(...)`)
3. **Chamar** a função no componente/page — nunca `gtag()` diretamente
4. **Documentar** no `mapa-eventos.md` da jornada correspondente
5. **Testar** com GTM Preview Mode antes de publicar

### 8.2 Estrutura de uma função de evento

```ts
// src/lib/analytics.ts

export const hotelAnalytics = {
  searchSubmitted: (params: {
    destination: string
    check_in: string
    check_out: string
    guests: number
    rooms: number
  }) => track("hotel_search_submitted", params),

  resultsViewed: (params: {
    destination: string
    result_count: number
    nights: number
  }) => track("hotel_results_viewed", params),

  // ... demais eventos
}
```

### 8.3 Uso nos componentes

```tsx
// src/app/pages/HomePage.tsx
import { hotelAnalytics } from "@/lib/analytics"

function handleHotelSearch(data: HotelSearchData) {
  hotelAnalytics.searchSubmitted({
    destination: data.destination,
    check_in: data.checkIn,
    check_out: data.checkOut,
    guests: data.guests,
    rooms: data.rooms,
  })
  // ... restante da lógica
}
```

### 8.4 Regras de implementação

- **Nunca chamar eventos em `render`** — apenas em handlers (`onClick`, `onSubmit`, `onValueChange`) ou em `useEffect` com dependência vazia (mount)
- **Eventos de "viewed"** → `useEffect` com array de dependências vazio (mount da página)
- **Eventos de interação** → no handler do evento de UI, antes da lógica de negócio
- **`currency` e `product_id`** → sempre ler de `CurrencyConfig`, nunca hardcodar
- **Não bloquear fluxo por falha de analytics** — toda chamada deve ser fire-and-forget (sem `await`)

### 8.5 Checklist de QA para cada jornada

```
[ ] Evento de search_submitted dispara com parâmetros corretos
[ ] Evento de results_viewed dispara no mount (não duplicado)
[ ] Eventos de filtro/interação disparam apenas uma vez por ação
[ ] Checkout_started dispara no mount da página de pagamento
[ ] Checkout_step_completed dispara com step correto (1, 2, 3)
[ ] Checkout_completed dispara apenas no submit com sucesso (não no erro)
[ ] Confirmation_viewed dispara no mount da confirmação
[ ] currency reflete CurrencyConfig — não está hardcoded
[ ] Nenhum PII (CPF, email, telefone) está nos parâmetros
[ ] GTM Preview Mode mostra os eventos sem erros
```

---

## 9. Estrutura de Dashboards GA4 Recomendada

### Report collection: "Portal do Cliente — Produto"

| Dashboard               | Métricas principais                                                   |
| ----------------------- | --------------------------------------------------------------------- |
| **Funil Hotel**         | Conversão step-a-step; abandono por etapa; tempo médio no checkout    |
| **Funil Aéreo**         | Conversão step-a-step; método de pagamento; rotas mais buscadas       |
| **Home & Descoberta**   | Tab mais usada na Home; bounce após busca sem resultados              |
| **Saúde da Plataforma** | `app_error_displayed` por `page_path`; sessões por `product_id`       |
| **Conta do Usuário**    | Adição de cartão/viajante; tab mais visitada no perfil                |

---

## 10. Links e Referências

- Mapa de eventos Hotel: `docs/jornadas/hotel/mapa-eventos.md`
- Mapa de eventos Aéreo: `docs/jornadas/aereo/mapa-eventos.md`
- Design System tokens: `docs/design-system/tokens.md`
- PRD: `PRD-Portal-do-Cliente.md`
- GTM Container: *(a configurar — registrar ID aqui após setup)*
- GA4 Property: *(a configurar — registrar ID aqui após setup)*
- Clarity Project ID: *(a configurar — registrar ID aqui após setup)*

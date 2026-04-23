# Memória de Longo Prazo — Portal do Cliente

> Atualizado ao final de cada sessão. Fonte de verdade sobre o estado e progresso do projeto.

---

## Estado Atual do Projeto

- **Fase:** Em desenvolvimento ativo
- **Última atualização:** 2026-04-23

---

## Progresso por Área

### Feito

#### Infraestrutura
- Estrutura base configurada: React + TypeScript + Vite + Tailwind v4
- Design System Rules documentadas no CLAUDE.md (tokens, tipografia, espaçamento, sombras, componentes)
- Sistema de memória file-based: Cold Start / End of Session / /docs/memory/ / /docs/sessions/

#### Header (todos os contextos)
- Header global refatorado: sem hamburguer, nav ativa por rota, `UserActions` exportado e reutilizável
- Header hoteleiro (`SearchResultsHeader`) e aéreo (`FlightResultsHeader`) com `UserActions`
- Logo Trib Pass clicável → homepage em todos os headers
- User Info hover com cor sólida `#ebebef` (acessibilidade)
- Bell do lucide-react em todos os headers
- Header da home com sincronização bidirecional com SearchSection
- **ShoppingCart icon com badge de contagem** adicionado ao `UserActions` (2026-04-23) — clique navega para `/carrinho`

#### Página de Perfil (`/minha-conta/perfil`)
- ProfilePage completa com tabs: Meus Dados, Histórico, Configurações
- `AddCardModal` e `AddTravelerModal` implementados e conectados
- `PaymentCardItem`: slide ao clicar nos ⋮ revela editar/apagar

#### Home Page
- SearchSection com tabs: Hospedagem, Passagem aérea, Aluguel de carro
- Sincronização Header ↔ SearchSection via state no HomePage

#### Auditoria de identidade visual (2026-04-10)
- `#3e63dd` (azul plataforma) eliminado de todo o codebase — 15 arquivos corrigidos
- Cor primária consolidada: `#12a594` / `bg-primary`

#### Documentação — Design System (2026-04-13)
- `docs/design-system/tokens.md` — reescrita completa a partir dos JSONs exportados do Figma DS
- `docs/design-system/componentes.md` — reescrita completa, 35 componentes mapeados

#### Documentação — Jornadas
- `docs/jornadas/hotel/` — spec-telas.md, criterios-aceite.md, componentes.md, mapa-eventos.md, **visao-geral.md atualizada com passo do carrinho**
- `docs/jornadas/aereo/` — todos os docs completos, **visao-geral.md atualizada com passo do carrinho**
- `docs/jornadas/carrinho/` — **NOVO (2026-04-23)**: visao-geral.md, spec-telas.md, mapa-eventos.md, componentes.md completos

#### Analytics (2026-04-23) — NOVO
- `docs/analytics/estrategia.md` — estratégia completa GA4 + Microsoft Clarity (não Hotjar), segmentada por jornada
- `src/lib/analytics.ts` — camada de rastreamento para todas as jornadas:
  - `appAnalytics` — sessão, page view, tab change, notification, balance
  - `hotelAnalytics` — search, results, filter, sort, drawer, pdp, book, checkout, confirmation
  - `flightAnalytics` — search, results, filter, class modal, checkout, confirmation
  - `accountAnalytics` — profile, history, settings, card/traveler add
  - `cartAnalytics` — viewed, item_removed, upsell, checkout_started, offer_expired
- Todas as funções emitem via `window.dataLayer.push()` (GTM pattern)

#### Tela de Carrinho `/carrinho` (2026-04-23) — NOVO
- `src/lib/cartContext.tsx` — React Context: `HotelCartItem`, `FlightCartItem`, `addItem`, `removeItem`, `clearCart`, persistência `sessionStorage`
- `src/app/pages/CartPage.tsx` — tela completa com:
  - Cards de hotel (thumbnail, rating, quarto, datas, preço) e voo (airline, rota IATA, tarifa)
  - Countdown regressivo de oferta (20 min) com badge warning → error ao expirar
  - CrossSellSection: mostra serviços ausentes do carrinho
  - Resumo de pagamento com subtotal + taxas (10%) + total
  - Estado vazio com CTAs de busca
- `src/app/App.tsx` — envolvido com `<CartProvider>`
- `src/app/routes.tsx` — rota `/carrinho` registrada
- Fluxo Hotel: `HotelDetails.tsx` (linha 898) + `HotelRoomsDrawer.tsx` (prop `onReserve`) + `HotelResultCard.tsx` → adicionam ao cart → `/carrinho?services=hotel`
- Fluxo Voo: `FlightResults.tsx` (linha 1862) → adiciona ao cart → `/carrinho?services=flight`
- Checkout: hotel → `/pagamento` com os mesmos query params de antes; voo → `/pagamento-aereo` com os mesmos params

#### Figma DS — Calendar Component (2026-04-13)
- Criado no Figma DS: DayCell, Calendar/range-select, Calendar/single-select

### Em andamento
- PR pendente de criação manual (`gh` CLI não instalado) — body em `pr-body.md`

### Pendente / Próximos passos
1. Criar PR no GitHub (manualmente ou instalando `gh` CLI)
2. Teste end-to-end dos fluxos hotel e aéreo no browser
3. Checkout unificado para carrinho misto (hotel + voo) — fase 2 — pendente decisão de produto
4. Integração com API real: AddCardModal, AddTravelerModal, ações editar/apagar cartão
5. Jornada Aluguel de Carro — spec ainda inexistente
6. Implementar telas de pagamento e confirmação revisadas para aéreo

---

## Contexto Acumulado

- O produto **Trib Pass** exige que o usuário esteja sempre logado — nunca há estado "deslogado" na UI
- Cor primária do produto: `#12a594` (teal). O azul `#3e63dd` é cor da plataforma corporativa e **não deve ser usado**
- `UserActions` (avatar + saudação + Tribz + bell + **ShoppingCart**) é o componente de user info reutilizado em todos os headers
- `NavCategory` é exportado de `Header.tsx` para uso externo (HomePage usa para override do estado ativo)
- Animações de reveal usam `maxWidth` + `opacity` via inline `style` — Tailwind não anima `max-width` arbitrário de forma confiável
- Arquivos em `src/imports/` são gerados pelo Figma MCP; auditá-los ao importar novos componentes
- **Figma DS** (`aYVvwo3llX85irnjON7nVt`) é fonte de verdade para componentes
- **Jornadas documentadas** no Figma: `EJ1yZNlnpYPREt76Fypnyz`
- **Async confirmation rule**: pós-checkout o estado é sempre "Em processamento", nunca "Confirmado"
- **CurrencyConfig**: nunca hardcodar label de moeda — sempre via `CurrencyConfig.currencyLabel`
- **Spinner**: usar `<Loader2 className="animate-spin" />` de lucide-react
- **Analytics**: ferramenta de UX é Microsoft Clarity (não Hotjar) — Smart Events nativos, sem surveys nativas
- **Carrinho**: `CartProvider` envolve toda a app em `App.tsx`; `?services=` param na URL é obrigatório para analytics; carrinho misto = fase 2

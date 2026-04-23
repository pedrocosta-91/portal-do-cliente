# Mapa de Eventos — Jornada do Carrinho

**Jornada:** Carrinho  
**Versão:** 1.0  
**Última atualização:** Abril 2026  
**Ferramenta:** Google Analytics 4 (GA4) via `src/lib/analytics.ts`

---

## Convenção de nomenclatura

```
cart_[objeto]_[ação]

Exemplos:
  cart_viewed
  cart_item_removed
  cart_checkout_started
```

---

## Estrutura de rotas para identificação de origem

O parâmetro `services` na URL do carrinho é a fonte primária para identificar a composição do pedido em analytics:

| URL                                  | Composição do carrinho      |
| ------------------------------------ | --------------------------- |
| `/carrinho?services=hotel`           | Apenas hospedagem           |
| `/carrinho?services=flight`          | Apenas aéreo                |
| `/carrinho?services=hotel,flight`    | Hospedagem + passagem       |
| `/carrinho?services=hotel,flight,car`| Hospedagem + passagem + carro |

O parâmetro `services` deve ser incluído em **todos** os eventos do carrinho como propriedade de contexto, permitindo segmentar relatórios por composição de carrinho no GA4.

---

## Eventos por interação

### Entrada na tela

| Evento         | Gatilho                          | Parâmetros obrigatórios                                                              |
| -------------- | -------------------------------- | ------------------------------------------------------------------------------------ |
| `cart_viewed`  | Mount da página `/carrinho`      | `services`, `item_count`, `total_price`, `currency`, `has_hotel`, `has_flight`, `has_car` |

**Parâmetros detalhados de `cart_viewed`:**

```ts
{
  services: "hotel,flight",       // valor do query param
  item_count: 2,                  // total de itens no carrinho
  total_price: 11771.10,          // total final antes do pagamento
  currency: "brl",                // CurrencyConfig.label
  has_hotel: true,
  has_flight: true,
  has_car: false
}
```

---

### Gerenciamento de itens

| Evento              | Gatilho                                  | Parâmetros                                                                        |
| ------------------- | ---------------------------------------- | --------------------------------------------------------------------------------- |
| `cart_item_removed` | Clique no ícone de lixeira em um item    | `service_type`, `item_id`, `item_price`, `currency`, `remaining_items`, `services` |

**Parâmetros detalhados de `cart_item_removed`:**

```ts
{
  service_type: "hotel",          // "hotel" | "flight" | "car"
  item_id: "hotel_abc123",        // ID do item removido
  item_price: 6880,               // preço do item removido
  currency: "brl",
  remaining_items: 1,             // itens que ficaram no carrinho
  services: "flight"              // services atualizado após remoção
}
```

---

### Cross-sell

| Evento                    | Gatilho                                           | Parâmetros                               |
| ------------------------- | ------------------------------------------------- | ---------------------------------------- |
| `cart_upsell_viewed`      | Seção de cross-sell renderizada (em cart_viewed)  | `upsell_services`, `services`            |
| `cart_upsell_clicked`     | Clique em um CTA de cross-sell ("Ver passagens")  | `upsell_service_type`, `services`        |

**Parâmetros de `cart_upsell_clicked`:**

```ts
{
  upsell_service_type: "flight",  // serviço que o usuário clicou para adicionar
  services: "hotel"               // o que estava no carrinho antes do clique
}
```

---

### Conversão: carrinho → pagamento

| Evento                  | Gatilho                                    | Parâmetros                                                                                    |
| ----------------------- | ------------------------------------------ | --------------------------------------------------------------------------------------------- |
| `cart_checkout_started` | Clique em "Finalizar Compra" (ambos CTAs)  | `services`, `item_count`, `total_price`, `currency`, `has_hotel`, `has_flight`, `has_car`    |

**Este é o evento crítico de conversão do funil do carrinho.**

```ts
{
  services: "hotel,flight",
  item_count: 2,
  total_price: 11771.10,
  currency: "brl",
  has_hotel: true,
  has_flight: true,
  has_car: false
}
```

---

### Expiração de oferta

| Evento                   | Gatilho                                           | Parâmetros                                              |
| ------------------------ | ------------------------------------------------- | ------------------------------------------------------- |
| `cart_offer_expired`     | Countdown chega a 00:00 com itens no carrinho     | `services`, `item_count`, `expired_item_id`             |

---

## Funil de conversão do carrinho

```
cart_viewed              → usuário entrou no carrinho
        ↓
cart_checkout_started    → clicou em "Finalizar Compra"
        ↓
[checkout_started do serviço correspondente]  → entrada no pagamento
        ↓
[checkout_completed]     → reserva enviada
        ↓
[booking_confirmation_viewed] → confirmação vista
```

**Taxa de conversão do carrinho:**
```
cart_checkout_started / cart_viewed
```

Meta MVP 1: ≥ 70% de `cart_viewed` → `cart_checkout_started`

---

## Onde taggear no código

| Arquivo                             | Evento                   | Gatilho de código                                          |
| ----------------------------------- | ------------------------ | ---------------------------------------------------------- |
| `src/app/pages/CartPage.tsx`        | `cart_viewed`            | `useEffect` no mount — após carrinho carregado             |
| `src/app/pages/CartPage.tsx`        | `cart_upsell_viewed`     | `useEffect` no mount — após carrinho carregado (mesmo tick)|
| `src/app/pages/CartPage.tsx`        | `cart_item_removed`      | `onClick` do botão `Trash2` por item                       |
| `src/app/pages/CartPage.tsx`        | `cart_upsell_clicked`    | `onClick` dos CTAs da seção de cross-sell                  |
| `src/app/pages/CartPage.tsx`        | `cart_checkout_started`  | `onClick` de qualquer botão "Finalizar Compra" da página   |
| `src/app/pages/CartPage.tsx`        | `cart_offer_expired`     | `onExpire` callback do componente de countdown             |

---

## Dimensionamento por origem de serviço (relatório GA4)

Configurar **Exploration report** no GA4 com:

- **Dimensão primária:** parâmetro `services` do evento `cart_viewed`
- **Métricas:** eventos `cart_checkout_started` / `cart_viewed` (taxa de conversão)
- **Segmentos:**
  - Carrinho apenas hotel
  - Carrinho apenas aéreo
  - Carrinho misto (hotel + aéreo)

Isso responde diretamente à pergunta do coordenador: **"identificar a origem dos serviços e a taxa de conversão do carrinho para o pagamento"**.

---

## Adição ao `src/lib/analytics.ts`

```ts
export const cartAnalytics = {
  viewed: (params: {
    services: string
    item_count: number
    total_price: number
    currency: string
    has_hotel: boolean
    has_flight: boolean
    has_car: boolean
  }) => track("cart_viewed", params),

  itemRemoved: (params: {
    service_type: "hotel" | "flight" | "car"
    item_id: string
    item_price: number
    currency: string
    remaining_items: number
    services: string
  }) => track("cart_item_removed", params),

  upsellViewed: (upsellServices: string, services: string) =>
    track("cart_upsell_viewed", { upsell_services: upsellServices, services }),

  upsellClicked: (upsellServiceType: string, services: string) =>
    track("cart_upsell_clicked", { upsell_service_type: upsellServiceType, services }),

  checkoutStarted: (params: {
    services: string
    item_count: number
    total_price: number
    currency: string
    has_hotel: boolean
    has_flight: boolean
    has_car: boolean
  }) => track("cart_checkout_started", params),

  offerExpired: (services: string, itemCount: number, expiredItemId: string) =>
    track("cart_offer_expired", { services, item_count: itemCount, expired_item_id: expiredItemId }),
}
```

---

## Notas de implementação

- `services` deve sempre refletir o estado atual do carrinho no momento do evento — não o estado inicial
- `currency` sempre via `CurrencyConfig.label` — nunca hardcodar
- `cart_upsell_viewed` e `cart_viewed` podem ser disparados no mesmo `useEffect` — são eventos distintos e complementares
- `cart_checkout_started` dispara para **ambos** os botões "Finalizar Compra" (coluna esquerda e coluna direita do resumo) — não duplicar com condição, apenas garantir que o handler seja o mesmo
- Nunca disparar `cart_item_removed` antes de confirmar a remoção no estado — o evento deve refletir o novo estado do carrinho

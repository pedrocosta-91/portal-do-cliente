# Componentes — Jornada do Carrinho

**Jornada:** Carrinho  
**Versão:** 1.0  
**Última atualização:** Abril 2026

---

## Componentes novos a criar

### `CartPage.tsx`

**Localização:** `src/app/pages/CartPage.tsx`  
**Responsabilidade:** Página completa do carrinho — orquestra todos os componentes abaixo.

---

### `CartItemCard.tsx`

**Localização:** `src/app/components/CartItemCard.tsx`  
**Responsabilidade:** Card de item do carrinho. Aceita `serviceType: "hotel" | "flight" | "car"` e renderiza o layout correto para cada tipo.

**Props:**

```ts
interface CartItemCardProps {
  serviceType: "hotel" | "flight" | "car"
  item: HotelCartItem | FlightCartItem | CarCartItem
  onRemove: (itemId: string) => void
}
```

**Variantes de conteúdo por `serviceType`:**

| `serviceType` | Conteúdo do card header       | Conteúdo do card body                          |
| ------------- | ----------------------------- | ---------------------------------------------- |
| `hotel`       | Thumbnail 64px + nome + rating | Quarto + datas + hóspedes + preço             |
| `flight`      | Logo cia + rota IATA          | Tarifa + bagagem + horários + preço            |
| `car`         | Foto carro + categoria        | Pick-up/drop-off + datas + preço *(fase 2)*   |

---

### `CartUpsellSection.tsx`

**Localização:** `src/app/components/CartUpsellSection.tsx`  
**Responsabilidade:** Seção de cross-sell. Recebe os serviços presentes no carrinho e renderiza cards apenas para os ausentes.

**Props:**

```ts
interface CartUpsellSectionProps {
  servicesInCart: ("hotel" | "flight" | "car")[]
  onUpsellClick: (serviceType: string) => void
}
```

**Lógica de exibição:**

```ts
const allServices = ["hotel", "flight", "car"]
const upsellServices = allServices.filter(s => !servicesInCart.includes(s))
// Exibe apenas os cards dos serviços que não estão no carrinho
```

**Cada card de upsell:**

- Ícone contextual em círculo `bg-[rgba(0,198,157,0.12)] rounded-full size-[24px]`
- Título e descrição curta
- CTA `bg-primary rounded-full h-[32px] px-3 text-[14px] font-medium`

| Serviço    | Ícone lucide    | Título            | Descrição                                     | CTA                  |
| ---------- | --------------- | ----------------- | --------------------------------------------- | -------------------- |
| `hotel`    | `BedDouble`     | Hospedagem        | Encontre os melhores hotéis para a sua estadia | "Ver hospedagem"    |
| `flight`   | `PlaneTakeoff`  | Passagens         | Encontre os melhores voos disponíveis          | "Ver passagens"     |
| `car`      | `Car`           | Aluguel de Carro  | Faça o seu próprio roteiro alugando um carro   | "Ver passeios"      |

---

### `CartSummary.tsx`

**Localização:** `src/app/components/CartSummary.tsx`  
**Responsabilidade:** Coluna direita — resumo do pagamento com tabela de itens, totais e CTA.

**Props:**

```ts
interface CartSummaryProps {
  items: CartSummaryItem[]       // {label, qty, unitPrice, total}
  subtotal: number
  taxes: number
  taxRate: number                // ex: 0.10 para 10%
  total: number
  currency: string               // CurrencyConfig.label
  cancellationDate?: string      // se presente, exibe callout
  onCheckout: () => void
}
```

---

### `CartCountdownBadge.tsx`

**Localização:** `src/app/components/CartCountdownBadge.tsx`  
**Responsabilidade:** Badge de countdown reutilizável. Recebe `expiresAt: Date` e exibe o tempo restante. Dispara `onExpire` callback quando chega a 00:00.

**Props:**

```ts
interface CartCountdownBadgeProps {
  expiresAt: Date
  onExpire?: () => void
}
```

**Estilo:** `bg-[rgba(243,0,13,0.08)] text-[rgba(196,0,6,0.83)] px-[10px] py-1 rounded-[4px] text-[14px] font-medium` com ícone `Clock` (16px).

---

### `CartEmptyState.tsx`

**Localização:** `src/app/components/CartEmptyState.tsx`  
**Responsabilidade:** Estado vazio do carrinho — exibido quando não há itens.

Layout centralizado com ícone `ShoppingCart` (48px, `text-muted-foreground`), título, subtítulo e dois CTAs de busca.

---

## Componentes existentes reutilizados

| Componente                | Localização                          | Uso no carrinho                             |
| ------------------------- | ------------------------------------ | ------------------------------------------- |
| `Button`                  | `src/app/components/ui/Button.tsx`   | "Finalizar Compra", CTAs de upsell          |
| `Badge`                   | `src/app/components/ui/Badge.tsx`    | Rating, Cancelamento Grátis, amenidades     |
| `Separator`               | `src/app/components/ui/Separator.tsx`| Divisor dentro dos cards                   |
| `UserActions`             | `src/app/components/Header.tsx`      | Header com novo ícone ShoppingCart          |
| `ScrollArea`              | `src/app/components/ui/ScrollArea.tsx`| Coluna esquerda se muitos itens            |

---

## Modificação em componentes existentes

### `UserActions` em `Header.tsx`

Adicionar o ícone de carrinho ao lado do User Info:

```tsx
// Após o bloco de UserInfo existente:
<button
  onClick={() => navigate("/carrinho")}
  className="relative bg-card rounded-full size-[48px] flex items-center justify-center shadow-[...]"
>
  <ShoppingCart size={20} strokeWidth={1.5} className="text-foreground" />
  {cartItemCount > 0 && (
    <span className="absolute -top-1 -right-1 bg-primary text-white rounded-full size-4 flex items-center justify-center text-[10px] font-medium">
      {cartItemCount}
    </span>
  )}
</button>
```

> `cartItemCount` vem de um contexto/store global de carrinho a ser criado.

---

## Estado global do carrinho

Criar `src/lib/cartStore.ts` (ou React Context) com:

```ts
interface CartStore {
  items: CartItem[]              // todos os itens
  servicesInCart: string[]       // ["hotel", "flight"]
  servicesQueryParam: string     // "hotel,flight" — para query string
  totalPrice: number
  addItem: (item: CartItem) => void
  removeItem: (itemId: string) => void
  clearCart: () => void
}
```

> O `servicesQueryParam` sincroniza com `?services=` na URL sempre que itens são adicionados/removidos.

---

## Tipos de dados

```ts
interface HotelCartItem {
  id: string
  serviceType: "hotel"
  hotelId: string
  hotelName: string
  hotelRating: number
  hotelCity: string
  thumbnailUrl: string
  roomName: string
  checkIn: string
  checkOut: string
  guests: number
  rooms: number
  hasFreeCancel: boolean
  cancelBefore?: string
  hasBreakfast: boolean
  price: number
  currency: string
  offerExpiresAt: Date
}

interface FlightCartItem {
  id: string
  serviceType: "flight"
  flightIdIda: string
  flightIdVolta?: string
  airline: string
  origin: string
  destination: string
  departureDate: string
  returnDate?: string
  tarifa: "light" | "classic" | "flex"
  passengers: number
  tripType: "ida_volta" | "somente_ida"
  price: number
  currency: string
  offerExpiresAt: Date
}
```

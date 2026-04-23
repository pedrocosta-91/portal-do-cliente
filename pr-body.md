## Summary

- **Cart feature**: nova tela `/carrinho` implementada como passo obrigatório entre a seleção de serviços e o pagamento, suportando hotel e aéreo individualmente (MVP 1)
- **Analytics layer**: `src/lib/analytics.ts` criado com eventos rastreados para todas as jornadas (`hotel_`, `flight_`, `cart_`, `account_`, `app_`) via `window.dataLayer`
- **Documentation**: estratégia de analytics, spec completa da jornada de carrinho, atualização do PRD e de `decisions.md`

## What changed

### Code
- `src/lib/cartContext.tsx` — React Context com `HotelCartItem` / `FlightCartItem`, persistência via `sessionStorage`
- `src/app/pages/CartPage.tsx` — Página completa: cards de hotel/voo, countdown de oferta (20min), cross-sell, resumo de pagamento e CTA "Finalizar Compra"
- `src/app/App.tsx` — envolvido com `<CartProvider>`
- `src/app/routes.tsx` — rota `/carrinho` registrada
- `src/app/pages/HotelDetails.tsx` — botão "Reservar" (sticky card) agora adiciona ao carrinho e navega para `/carrinho?services=hotel`
- `src/app/components/HotelRoomsDrawer.tsx` — prop `onReserve` adicionada ao botão "Reservar" por quarto
- `src/app/components/HotelResultCard.tsx` — implementa `handleReserve` com `useCart` e passa para o drawer
- `src/app/pages/FlightResults.tsx` — "Continuar para pagamento" adiciona voo ao carrinho e navega para `/carrinho?services=flight`
- `src/app/components/Header.tsx` — ícone `ShoppingCart` com badge de contagem em `UserActions`
- `src/lib/analytics.ts` — layer de analytics completa para todas as jornadas

### Docs
- `docs/analytics/estrategia.md` — estratégia GA4 + Microsoft Clarity, segmentada por jornada
- `docs/jornadas/carrinho/` — visão geral, spec de telas, mapa de eventos, componentes
- `docs/jornadas/aereo/visao-geral.md` e `docs/jornadas/hotel/visao-geral.md` — atualizados com o passo do carrinho
- `docs/memory/decisions.md` — 3 novas decisões arquiteturais registradas (2026-04-23)

## Reviewer notes

- Carrinho misto (hotel + aéreo simultâneos no checkout) está marcado como fase 2 — MVP 1 suporta apenas um serviço por vez por checkout
- O parâmetro `?services=hotel|flight` na URL do carrinho é obrigatório para os dashboards de conversão do GA4
- `HotelResultCard` usa `useCart` diretamente — componente deve estar dentro do `CartProvider` (garantido pelo `App.tsx`)

## Test plan

- [ ] `/resultados` → drawer de quartos → "Reservar" → vai para `/carrinho?services=hotel`
- [ ] `/hotel` → botão sticky "Reservar" → vai para `/carrinho?services=hotel`
- [ ] `/resultados-aereo` → selecionar voo → modal tarifa → "Continuar para pagamento" → vai para `/carrinho?services=flight`
- [ ] No carrinho: card correto exibido (nome, datas, preço)
- [ ] "Finalizar Compra" → navega para `/pagamento` ou `/pagamento-aereo` com query params corretos
- [ ] Remover item do carrinho → estado vazio exibido
- [ ] Header: ícone ShoppingCart com badge após adicionar item; clique navega para `/carrinho`
- [ ] Countdown: atualiza em tempo real; ao expirar exibe badge "Oferta expirada"

🤖 Generated with [Claude Code](https://claude.com/claude-code)

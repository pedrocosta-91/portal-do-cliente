# Visão Geral — Jornada de Hotel

**Produto:** Portal do Cliente  
**Jornada:** Hotel  
**Versão:** 1.0  
**Status:** [x] Aprovado  [ ] Live  
**Última atualização:** Abril 2026  
**Responsável:** Pedro Costa

---

## Objetivo da jornada

Permitir que o usuário busque, compare e reserve hospedagens dentro do Portal do Cliente, utilizando seu saldo na moeda configurada pela instância do produto.

---

## Fluxo completo

```
Home (busca) → Resultados → Drawer de Quartos → PDP do Hotel → Carrinho → Pagamento → Confirmação
```

> **Nota 1:** O Figma introduz um passo intermediário não detalhado no PRD original: o **Drawer de Quartos** abre diretamente a partir do card de resultado, permitindo visualizar quartos disponíveis antes de ir para o PDP completo.

> **Nota 2 (2026-04-23):** O botão "Reservar" no Drawer de Quartos e no PDP agora **adiciona o item ao carrinho** e navega para `/carrinho`, não mais para `/pagamento-hotel` diretamente. O carrinho é o novo passo obrigatório antes do pagamento.


| Passo | Tela                          | Rota                       | Arquivo                                 |
| ----- | ----------------------------- | -------------------------- | --------------------------------------- |
| 1     | Home — Busca de Hotel         | `/`                        | `src/app/pages/HomePage.tsx`            |
| 2     | Resultados de Hotel           | `/resultados-hotel`        | `src/app/pages/SearchResults.tsx`       |
| 2.5   | Drawer de Quartos *(overlay)* | `/resultados-hotel`        | Componente overlay sobre SearchResults  |
| 3     | Detalhe do Hotel (PDP)        | `/hotel`                   | `src/app/pages/HotelDetails.tsx`        |
| 4     | **Carrinho** *(novo)*         | `/carrinho?services=hotel` | `src/app/pages/CartPage.tsx`            |
| 5     | Pagamento                     | `/pagamento-hotel`         | `src/app/pages/Payment.tsx`             |
| 6     | Confirmação                   | `/confirmacao-hotel`       | `src/app/pages/BookingConfirmation.tsx` |


---

## Personas atendidas


| Persona               | Produto   | Moeda      | Pagamento            |
| --------------------- | --------- | ---------- | -------------------- |
| Colaborador Trib Pass | Trib Pass | Tribz      | Apenas Tribz (MVP 1) |
| Viajante Trib         | Trib      | Tribz + R$ | Misto (Fase 2)       |
| Cliente Voalá         | Voalá     | R$         | Apenas R$ (Fase 2)   |


---

## Regras de negócio principais

- **Pagamento assíncrono:** nenhuma reserva é confirmada em tempo real. Estado pós-checkout sempre "Em processamento"
- **Moeda configurável:** rótulo, símbolo e formatação definidos por instância via `CurrencyConfig` — nunca hardcoded
- **Parâmetros na URL:** todos os parâmetros de busca persistem na query string durante toda a jornada
- **Cancelamento:** itens com cancelamento gratuito exibem badge em destaque no resultado, PDP e confirmação
- **Disponibilidade:** badge "Apenas X disponíveis" (warning) ou "Último disponível" (error) quando aplicável

---

## Fora de escopo — MVP 1

- Pagamento misto (Tribz + R$) — apenas Trib, Fase 2
- Mapa integrado (Google Maps) — placeholder visual aceitável
- Experiências e pacotes
- Integração Trib — apenas Trib Pass no lançamento

---

## Alinhamento estratégico

**OKR vinculado:** Objetivo 1 — Lançar Portal do Cliente (Fase 1)  
**Key Result:** Hotel search & booking journey live — até 31/05/2026  
**Produto piloto:** Trib Pass  
**Status:** Concluído (desenvolvimento finalizado)

---

## Links relacionados

- Figma — Listagem: `EJ1yZNlnpYPREt76Fypnyz` node `5:2574`
- Figma — Drawer Quartos: `EJ1yZNlnpYPREt76Fypnyz` node `447:9878`
- PRD completo: `knowledge/specs/prd-jornada-hotel.md`
- Spec de telas: `spec-telas.md`
- Critérios de aceite: `criterios-aceite.md`
- Componentes: `componentes.md`
- Mapa de eventos: `mapa-eventos.md`


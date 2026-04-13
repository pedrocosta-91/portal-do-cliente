# Visão Geral — Jornada de Aéreo

**Jornada:** Aéreo  
**Versão:** 1.0  
**Última atualização:** Abril 2026

---

## Fluxo completo

```
Home (busca) → /resultados-aereo → Modal Detalhes do Voo → Modal Escolha de Tarifa → /pagamento-aereo → /confirmacao-aereo
```

### Passo a passo

| # | Tela / Ação | Rota | Arquivo |
|---|---|---|---|
| 1 | Busca na Home — Tab Aéreo | `/` | `HomePage.tsx` |
| 2 | Listagem de voos (IDA + VOLTA) | `/resultados-aereo` | `FlightResults.tsx` |
| 3 | Modal detalhes do voo | overlay | `FlightDetailsModal.tsx` |
| 4 | Modal escolha de tarifa | overlay | `FlightClassModal.tsx` |
| 5 | Pagamento | `/pagamento-aereo` | `FlightPayment.tsx` |
| 6 | Confirmação | `/confirmacao-aereo` | `FlightBookingConfirmation.tsx` |

---

## Personas atendidas

| Persona | Motivação principal |
|---|---|
| Colaborador Trib Pass | Comprar passagem com saldo corporativo (Tribz) |
| Viajante Trib | Maximizar cashback ou benefícios da tarifa |
| Cliente Voalá | Compra simples de passagem no portal da operadora |

---

## Parâmetros de busca — Tab Aéreo (Home)

| Campo | Tipo | Validação |
|---|---|---|
| Origem | Input com autocomplete (IATA + cidade) | Obrigatório |
| Destino | Input com autocomplete (IATA + cidade) | Obrigatório |
| Data de ida | DatePicker | Obrigatório |
| Data de volta | DatePicker | Mínimo = Data de ida + 1 dia; oculto se "Somente ida" |
| Passageiros | Select (adultos + crianças) | Obrigatório |
| Tipo de viagem | Toggle/Radio: Ida e volta / Somente ida | Default: Ida e volta |

**CTA:** "Buscar" → `/resultados-aereo?origem=X&destino=Y&dataIda=YYYY-MM-DD&dataVolta=YYYY-MM-DD&passageiros=N&tipo=ida_volta`

---

## Figma — Nodes de referência

| Tela | Node ID | URL |
|---|---|---|
| Listagem de voos | `196:26505` | `EJ1yZNlnpYPREt76Fypnyz` |
| Modal Detalhes do Voo (collapsed) | `500:18902` | — |
| Modal Detalhes do Voo (expandido) | `503:11719` | — |
| Modal Escolha de Tarifa | `513:4913` | — |
| Pagamento Dados Pessoais | `319:7238` | — |
| Pagamento Como quer pagar | `319:7554` | — |
| Pagamento Nota Fiscal | `319:8581` | — |

---

## Regras de negócio críticas

1. **Async:** Estado pós-checkout sempre "Em processamento" — nunca "Confirmado" ou "Aprovado"
2. **Moeda configurável:** `CurrencyConfig.label` em todos os valores — nunca hardcodar "Tribz"
3. **Timer de sessão:** Contador regressivo visível no pagamento ("Oferta válida por MM:SS") — ao expirar, retorna para busca
4. **Tarifa selecionada persiste:** A classe escolhida no modal (Light/Classic/Flex) deve ser carregada no checkout e confirmação
5. **Parâmetros na query string:** nunca depender exclusivamente de estado React — dados se perdem no refresh

---

## Divergências PRD × Figma

| Aspecto | PRD diz | Figma mostra | Implementar |
|---|---|---|---|
| Layout da listagem | Tabs "Ida" / "Volta" separados | IDA + VOLTA simultâneos na mesma página | **Figma** |
| CTA do card de voo | "Adicionar voo" | "Selecionar" | **Figma** |
| Expansão de tarifas | Inline dentro do card | Modal separado "Escolha como quer voar" | **Figma** |
| Nomes das tarifas | Econômica Light/Standard/Plus | Light / Classic / Flex | **Figma** |
| Seção 2 do pagamento | Slider de Tribz (igual hotel) | Seleção de método de pagamento (Pix / Boleto / Cartão / Pontos) | **Figma** |
| Filtro Paradas | Radio (Direto / 1 / 2+) | Checkbox (Direta / 1 ou mais paradas) | **Figma** |
| Filtro Bagagem | Toggle | Checkbox | **Figma** |

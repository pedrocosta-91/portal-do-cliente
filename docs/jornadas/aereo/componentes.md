# Componentes — Jornada de Aéreo

**Jornada:** Aéreo  
**Versão:** 1.0  
**Última atualização:** Abril 2026

---

## Componentes criados nesta jornada

### `FlightResultRow`

**Arquivo:** `src/app/components/FlightResultRow.tsx`  
**Reutilizável:** Sim  
**Usado em:** FlightResults (`/resultados-aereo`)

#### Props


| Prop             | Tipo                         | Obrigatório | Descrição                         |
| ---------------- | ---------------------------- | ----------- | --------------------------------- |
| `flight`         | `FlightResult`               | Sim         | Dados do voo                      |
| `currencyConfig` | `CurrencyConfig`             | Sim         | Configuração de moeda             |
| `onSelect`       | `(flightId: string) => void` | Sim         | Callback ao clicar "Selecionar"   |
| `onViewDetails`  | `(flightId: string) => void` | Sim         | Callback ao clicar "Ver detalhes" |


#### Estrutura visual

```
[logo companhia + nome + nº voo]  [rota: origem → duração → destino]  [bagagem badges]  [preço riscado + preço + "Selecionar"]
────────────────────────────────────────────────────────────────────────────────────────────────
[badges: Cancelamento grátis · Pague 12x · Voo mais curto]                        [Ver detalhes]
```

---

### `FlightDetailsModal`

**Arquivo:** `src/app/components/FlightDetailsModal.tsx`  
**Reutilizável:** Sim  
**Usado em:** FlightResults  
**Figma nodes:** `500:18902` (collapsed) · `503:11719` (expandido)

> Identificado na análise do Figma. **Divergência do PRD:** o PRD descrevia expansão inline; o Figma usa um Dialog modal.

#### Props


| Prop            | Tipo           | Obrigatório | Descrição                   |
| --------------- | -------------- | ----------- | --------------------------- |
| `flight`        | `FlightResult` | Sim         | Dados completos do voo      |
| `isOpen`        | `boolean`      | Sim         | Controla visibilidade       |
| `onClose`       | `() => void`   | Sim         | Fecha o modal               |
| `onChooseClass` | `() => void`   | Sim         | Avança para modal de tarifa |


#### Estrutura visual

```
[título "Detalhes do Voo de Ida/Volta"]
[subtítulo "Origem → Destino"]
[Visão Geral: companhia + badge classe]
  ● Origem (IATA) — aeroporto — horário — data
  ✈ companhia
  ● Destino (IATA) — aeroporto — horário — data
[Accordion "Mais detalhes": lista de benefícios ✓]
[⏱ Duração: Xh XX]
[Bagagem: lista de itens inclusos com ícones]
```

---

### `FlightClassModal`

**Arquivo:** `src/app/components/FlightClassModal.tsx`  
**Reutilizável:** Sim  
**Usado em:** FlightResults  
**Figma node:** `513:4913`

> Identificado na análise do Figma. **Divergência do PRD:** o PRD descrevia expansão inline com classes Econômica Light/Standard/Plus. O Figma usa um Dialog modal com tarifas Light/Classic/Flex.

#### Props


| Prop             | Tipo                                             | Obrigatório | Descrição                                    |
| ---------------- | ------------------------------------------------ | ----------- | -------------------------------------------- |
| `flight`         | `FlightResult`                                   | Sim         | Dados do voo com tarifas disponíveis         |
| `isOpen`         | `boolean`                                        | Sim         | Controla visibilidade                        |
| `onClose`        | `() => void`                                     | Sim         | Fecha o modal                                |
| `onAdvance`      | `(tarifa: 'light' | 'classic' | 'flex') => void` | Sim         | Avança para pagamento com tarifa selecionada |
| `currencyConfig` | `CurrencyConfig`                                 | Sim         | Configuração de moeda                        |


#### Estrutura visual

```
[título "Escolha como quer voar"]
[subtítulo "N tarifas disponíveis"]
┌──────────┬──────────┬──────────┐
│  Light   │ Classic  │   Flex   │
│ X Tribz  │ X+R$Y,00 │ X+R$Z,00 │
│por viaj. │por viaj. │por viaj. │
│ ✓ item   │ ✓ item   │ ✓ item   │
│ ✗ item   │ ✓ item   │ ✓ item   │
│ ✗ item   │ ✗ item   │ ✓ item   │
└──────────┴──────────┴──────────┘
[Avançar — full-width primary]
```

#### Badges de tarifa


| Tarifa  | Badge                    | Border quando selecionada |
| ------- | ------------------------ | ------------------------- |
| Light   | Teal (`bg-primary` text) | `border-primary`          |
| Classic | Amarelo/amber            | `border-[#amber]`         |
| Flex    | Cinza                    | `border-border`           |


---

### `DateCarousel`

**Arquivo:** `src/app/components/DateCarousel.tsx`  
**Reutilizável:** Sim  
**Usado em:** FlightResults

#### Props


| Prop             | Tipo                     | Obrigatório | Descrição                          |
| ---------------- | ------------------------ | ----------- | ---------------------------------- |
| `selectedDate`   | `string`                 | Sim         | Data selecionada (ISO 8601)        |
| `prices`         | `Record<string, number>` | Sim         | Mapa data → menor preço disponível |
| `currencyConfig` | `CurrencyConfig`         | Sim         | Configuração de moeda              |
| `onDateChange`   | `(date: string) => void` | Sim         | Callback ao trocar data            |


#### Comportamento

- 7 células: 2 anteriores + atual + 4 próximas
- Célula selecionada: `bg-white shadow-[...] self-stretch`
- Container: `bg-[#fcfcfd] rounded-2xl`
- Setas de navegação: deslocam o range de datas

---

## Componentes reutilizados de outras jornadas / globais


| Componente            | Arquivo                                      | Notas de uso nesta jornada                     |
| --------------------- | -------------------------------------------- | ---------------------------------------------- |
| `Header`              | `src/app/components/Header.tsx`              | Deslogado em resultados; logado na confirmação |
| `Footer`              | `src/app/components/Footer.tsx`              | Padrão em todas as telas                       |
| `SearchResultsHeader` | `src/app/components/SearchResultsHeader.tsx` | Resultados e pagamento                         |
| `Banner Editorial`    | Inline nos arquivos de página                | Resultados, Pagamento, Confirmação             |


---

## Componentes de UI base utilizados


| Componente   | Uso nesta jornada                                                   |
| ------------ | ------------------------------------------------------------------- |
| `Button`     | CTAs: Buscar, Selecionar, Avançar, Próximo, Efetuar Reserva         |
| `Input`      | Campos de dados pessoais e nota fiscal no checkout                  |
| `Select`     | Passageiros, Tipo de viagem, Nacionalidade, Situação Fiscal         |
| `Tabs`       | Tabs Hotel/Aéreo na Home                                            |
| `Accordion`  | "Mais detalhes" no modal de voo; etapas do checkout                 |
| `RadioGroup` | Tipo de viagem (Ida e volta / Somente ida)                          |
| `Checkbox`   | Filtros de paradas, bagagem e companhias                            |
| `Slider`     | Filtros de preço, duração, horário de partida/chegada               |
| `Dialog`     | Modal Detalhes do Voo + Modal Escolha de Tarifa                     |
| `Badge`      | Classe tarifária, bagagem, benefícios (✓/✗), destaques de pagamento |
| `Skeleton`   | Loading states de cards e resultados                                |
| `Separator`  | Divisores no modal de detalhes e no card de resumo                  |


---

## Decisões de componentes


| Decisão             | Escolha                             | Motivo                                                                                                                          |
| ------------------- | ----------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| Expansão de tarifas | Modal separado `FlightClassModal`   | Figma usa Dialog, não expansão inline como descrito no PRD. Separação de responsabilidades: detalhes do voo ≠ seleção de tarifa |
| Detalhes do voo     | Modal separado `FlightDetailsModal` | Figma usa Dialog. Comportamento específico (accordion de benefícios, bagagem)                                                   |
| Carrossel de datas  | Componente novo `DateCarousel`      | Layout customizado com preços por data, navegação por setas, célula selecionada com sombra                                      |
| Card de resultado   | Componente novo `FlightResultRow`   | Layout horizontal específico de voo — não reutilizável com `HotelResultCard`                                                    |



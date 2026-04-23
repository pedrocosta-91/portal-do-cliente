# Spec de Telas — Jornada de Aéreo

**Jornada:** Aéreo  
**Versão:** 1.0  
**Última atualização:** Abril 2026

---

## 1. Home — Busca de Aéreo

**Rota:** `/`  
**Arquivo:** `src/app/pages/HomePage.tsx`  
**Figma:** file `EJ1yZNlnpYPREt76Fypnyz`

> Mesma Home do hotel. O formulário de busca alterna entre tabs Hotel e Aéreo.

### Campos — Tab Aéreo


| Campo          | Tipo                 | Comportamento                                 | Validação            |
| -------------- | -------------------- | --------------------------------------------- | -------------------- |
| Origem         | Input + autocomplete | Placeholder "De onde você vai sair?"          | Obrigatório          |
| Destino        | Input + autocomplete | Placeholder "Para onde você vai?"             | Obrigatório          |
| Data de ida    | DatePicker           | Formato `dd/mm/aaaa`                          | Obrigatório          |
| Data de volta  | DatePicker           | Mínimo = ida + 1 dia; oculto se "Somente ida" | Condicional          |
| Passageiros    | Select               | Adultos + Crianças                            | Obrigatório          |
| Tipo de viagem | Toggle/Select        | Ida e volta / Somente ida                     | Default: Ida e volta |


**CTA:** "Buscar" → `/resultados-aereo?origem=X&destino=Y&dataIda=YYYY-MM-DD&dataVolta=YYYY-MM-DD&passageiros=N&tipo=ida_volta`

---

## 2. Resultados de Voos

**Rota:** `/resultados-aereo`  
**Arquivo:** `src/app/pages/FlightResults.tsx`  
**Figma node:** `196:26505`  
**Dimensões:** 1440px largura

> **Divergência PRD:** O PRD descreve tabs "Ida" / "Volta" alternados. O Figma exibe as seções IDA e VOLTA simultaneamente em scroll vertical. Implementar conforme Figma.

### Layout

```
┌────────────────────────────────────────────────┐
│  Header (SearchResultsHeader)                  │
│  [DateCarousel — datas de ida]                 │
├───────────────┬────────────────────────────────┤
│  Sidebar      │  IDA — DD Mês                  │
│  Filtros      │  [linha de dias c/ preços]     │
│  (240px)      │  FlightResultRow × N           │
│  sticky       │  [Ver mais voos]               │
│               │                                │
│               │  VOLTA — DD Mês                │
│               │  [linha de dias c/ preços]     │
│               │  FlightResultRow × N           │
│               │  [Ver mais voos]               │
└───────────────┴────────────────────────────────┘
```

- Layout: `flex gap-[32px] items-start max-w-[1440px] mx-auto px-[32px]`
- Sidebar: `w-[240px] shrink-0 sticky top-[24px]`

### FlightResultsHeader

Exibe em linha: Origem (IATA) → ícone avião → Destino (IATA) · datas · N passageiros · tipo de viagem  
Ícone lápis → popover de edição inline por campo

### DateCarousel

- 7 células em linha: dia abreviado + "DD Mês" + menor preço na moeda configurada
- Célula selecionada: fundo branco, sombra, altura expandida
- Navegação: setas esquerda/direita
- Container: `bg-[#fcfcfd] rounded-2xl shadow-[...]`
- Trocar data → refaz a busca

### Sidebar de Filtros (240px, sticky)

> **Divergência PRD:** Paradas e Bagagem mudam de tipo. Implementar conforme Figma.


| Filtro             | Tipo Figma   | Opções                                                       |
| ------------------ | ------------ | ------------------------------------------------------------ |
| Paradas            | Checkbox     | Direta / 1 ou mais paradas                                   |
| Bagagem            | Checkbox     | Bagagem de cabine disponível / Bagagem despachada disponível |
| Preço              | Slider range | Min/Max na moeda configurada                                 |
| Companhias         | Checkbox     | Emirates Airlines / Azul / GOL / LATAM / Outros              |
| Outros             | Checkbox     | (variável)                                                   |
| Duração            | Slider       | Horas máximas                                                |
| Horários — Partida | Range slider | 00h–24h                                                      |
| Horários — Chegada | Range slider | 00h–24h                                                      |


### Seções IDA e VOLTA

Cada seção possui:

- Título: "Ida — DD Mês" / "Volta — DD Mês"
- Linha de datas rápidas com dias da semana
- Lista de `FlightResultRow`
- Link "Ver mais voos"

### FlightResultRow

Container: `rounded-2xl`, `flex flex-col`

**Linha superior:**


| Bloco       | Conteúdo                                                                                   |
| ----------- | ------------------------------------------------------------------------------------------ |
| Companhia   | Avatar circular com logo da companhia + nome + número do voo                               |
| Rota        | Horário origem → `PlaneTakeoff` → linha duração/paradas → `PlaneLanding` → horário destino |
| Bagagem     | Badges: `Classe Econômica` (teal) + ícones de bagagem inclusa/não inclusa                  |
| Preço + CTA | Preço riscado "de X Tribz" + preço atual bold + botão **"Selecionar"**                     |


> **Divergência PRD:** botão é "Selecionar" (não "Adicionar voo").

**Linha inferior (tags):**

- Badges pequenos: "Cancelamento grátis" · "Pague em 12x sem juros" · "Voo mais curto"
- Botão/link "Ver detalhes" → abre **Modal Detalhes do Voo**

---

## 2.5 Modal Detalhes do Voo

**Figma nodes:** `500:18902` (collapsed) · `503:11719` (expandido)  
**Dimensões:** ~400px largura, `rounded-2xl`, Dialog  
**Gatilho:** clique em "Ver detalhes" no FlightResultRow

> **Divergência PRD:** O PRD descreve expansão inline do card. O Figma exibe um Dialog modal. Implementar conforme Figma.

### Estrutura

**Header do modal:**

- Título: "Detalhes do Voo de Ida" / "Detalhes do Voo de Volta"
- Subtítulo: "Origem (IATA) → Destino (IATA)"
- Botão X para fechar

**Seção Visão Geral:**

- Label "Visão Geral" + "BSB → MIA" (ou rotas equivalentes)
- Logo da companhia (círculo) + nome + número do voo + badge "Classe: Econômica"
- Origem: ● Cidade (IATA) + nome do aeroporto + horário + data
- Ícone avião + nome da companhia (linha do meio)
- Destino: ● Cidade (IATA) + nome do aeroporto + horário + data

**Accordion "Mais detalhes":**

- Collapsed por padrão (chevron down)
- Ao expandir exibe lista de benefícios com ✓:
  - Cancelamento grátis
  - Alteração de voo a partir de R$ X,XX
  - (outros benefícios da tarifa)

**Rodapé:**

- `⏱ Duração: Xh XX` — em container cinza full-width

**Seção Bagagem:**

- Título "Bagagem"
- Lista de itens inclusos por ícone de bagagem:
  - Ícone mochila: "Inclui uma mochila ou bolsa / Deve caber embaixo do assento dianteiro"
  - Repetido por tipo de bagagem inclusa

---

## 2.6 Modal Escolha de Tarifa

**Figma node:** `513:4913`  
**Dimensões:** ~580px largura, `rounded-2xl`, Dialog  
**Gatilho:** clique em "Selecionar" no FlightResultRow (após ou em vez do modal de detalhes)

### Estrutura

**Header:**

- Título: "Escolha como quer voar"
- Subtítulo: "N tarifas disponíveis"
- Botão X

**Grid de tarifas (3 colunas):**


| Tarifa  | Badge                                            | Preço base       |
| ------- | ------------------------------------------------ | ---------------- |
| Light   | Badge teal (selecionado por padrão — borda teal) | X Tribz          |
| Classic | Badge amarelo/amber                              | X Tribz + R$Y,00 |
| Flex    | Badge cinza                                      | X Tribz + R$Z,00 |


"valores por viajante" abaixo de cada preço.

**Benefícios por tarifa (linhas com ✓ verde ou ✗ vermelho):**


| Benefício                                    | Light | Classic | Flex |
| -------------------------------------------- | ----- | ------- | ---- |
| 1 bolsa/mochila até 10kg (assento dianteiro) | ✓     | ✓       | ✓    |
| 1 Mala Pequena até 12kg                      | ✓     | ✓       | ✓    |
| 1 Bagagem despachada                         | ✗     | ✓       | ✓    |
| Escolha de assento padrão                    | ✗     | ✓       | ✓    |
| Assento + Conforto                           | ✗     | ✗       | ✓    |
| Antecipação de voo (com taxa)                | ✗     | ✗       | ✓    |
| Remarcação antes do voo (com taxa)           | ✗     | ✗       | ✓    |
| Reembolsável                                 | ✗     | ✗       | ✓    |


**CTA:**

- Botão "Avançar" full-width `bg-primary rounded-full` → navega para `/pagamento-aereo`

> **Divergência PRD:** nomes das tarifas são Light/Classic/Flex (não Econômica Light/Standard/Plus). Implementar conforme Figma.

---

## 3. Pagamento

**Rota:** `/pagamento-aereo`  
**Arquivo:** `src/app/pages/FlightPayment.tsx`  
**Figma nodes:** `319:7238` (Dados Pessoais), `319:7554` (Como quer pagar), `319:8581` (Nota Fiscal)

### Layout

- Breadcrumb: "← Voltar para busca"
- Alert bar: countdown — "Oferta válida por MM:SS" (em laranja/warning)
- Duas colunas: accordion esquerda (~~60%) + card sticky direita (~~40%)

### Accordion progressivo (3 etapas)

Regras gerais:

- Apenas a etapa atual está aberta; as seguintes são desabilitadas
- Etapas concluídas exibem ícone ✓ no título
- Botão "Efetuar Reserva" full-width no rodapé esquerdo (desabilitado até etapa 3 completa)


| Etapa | Título no Accordion                    | Campos                                                          | Avanço            |
| ----- | -------------------------------------- | --------------------------------------------------------------- | ----------------- |
| 1     | Dados pessoais                         | Por passageiro: Nome, Sobrenome, Data Nasc., Nacionalidade, CPF | "Próximo"         |
| 2     | Como você quer pagar?                  | Seleção de método de pagamento                                  | "Próximo"         |
| 3     | Em nome de quem emitimos a nota fiscal | Situação Fiscal, Nome completo, CPF                             | "Efetuar Reserva" |


### Etapa 1 — Dados Pessoais (Figma `319:7238`)

Idêntico à jornada de hotel. Para cada passageiro (Adulto 1, Adulto 2...):


| Campo              | Tipo              | Validação   |
| ------------------ | ----------------- | ----------- |
| Nome               | Input             | Obrigatório |
| Sobrenome          | Input             | Obrigatório |
| Data de nascimento | Input             | Obrigatório |
| Nacionalidade      | Select            | Obrigatório |
| CPF                | Input com máscara | Obrigatório |


### Etapa 2 — Como você quer pagar (Figma `319:7554`)

> **Divergência PRD:** O PRD descreve Seção 2 idêntica ao hotel (slider de Tribz + cartão). O Figma mostra uma tela de **seleção de método de pagamento** categorizado. Implementar conforme Figma.

**Destaques** (métodos promovidos com badge):

- **Pix** — badge "Até X% OFF" (laranja)
- **Boleto** — badge "Até X% de cashback" (verde)

**Meios usados** (cartões cadastrados):

- Cartão de Crédito — "Pague em até N× sem juros"
- X cartões de crédito — "Pague em até N× sem juros"

**Pontos** (moeda configurada):

- Tribz
- Tribz + Cartão

> Cada opção é selecionável. O método selecionado pode abrir sub-formulário (ex: ao escolher cartão, exibe campos do cartão; ao escolher Tribz, exibe slider de pontos).

### Etapa 3 — Nota Fiscal (Figma `319:8581`)

Idêntico à jornada de hotel.


| Campo           | Tipo   | Observação                      |
| --------------- | ------ | ------------------------------- |
| Situação Fiscal | Select | Pessoa Física / Pessoa Jurídica |
| Nome completo   | Input  | "Razão Social" se PJ            |
| CPF             | Input  | CNPJ se PJ, máscara dinâmica    |


### Card de resumo sticky (direita)

- Label "← Aéreo" como context indicator
- Título: "Origem (IATA) → Destino (IATA)"
- Subtítulo: "Ida e Volta · N passageiros" (ou "Somente Ida")

**Por voo (IDA e VOLTA):**

- Label: "Ida — Dia, DD Mês" / "Volta — Dia, DD Mês"
- Linha do voo: Companhia · Número · Origem (IATA) hora → Destino (IATA) hora
- Badge: "Classe Econômica"
- Badge: "Bagagem N mala Xkg"

**Tabela de valores:**


| Item                | Qtd | Preço           | Total       |
| ------------------- | --- | --------------- | ----------- |
| Passagem (1 adulto) | N   | X Tribz         | X Tribz     |
| Passagem (1 adulto) | N   | X Tribz         | X Tribz     |
| —                   | —   | Subtotal        | X Tribz     |
| —                   | —   | Taxas           | X Tribz     |
| —                   | —   | **Total Final** | **X Tribz** |


- Badge: "Cancelamento gratuito antes de [data]" — estilo success

---

## 4. Confirmação

**Rota:** `/confirmacao-aereo`  
**Arquivo:** `src/app/pages/FlightBookingConfirmation.tsx`

### Regra crítica — linguagem assíncrona


| Proibido                  | Correto                                                                       |
| ------------------------- | ----------------------------------------------------------------------------- |
| "Confirmado" / "Aprovado" | "Parabéns pela sua reserva!"                                                  |
| "Passagem confirmada"     | "Sua reserva está sendo processada e enviaremos a sua confirmação por email." |


### Layout duas colunas (60% / 40%)

Mesma estrutura da confirmação de hotel.

**Coluna esquerda:**

- Card 1: Informações de pagamento — tabela de itens + método + nota fiscal
- Card 2: Quem vai viajar — lista todos os passageiros (nome + sobrenome + CPF)

**Coluna direita (sticky):**

- Card de status: ícone celebração + "Parabéns pela sua reserva!" + texto de processamento
- Card resumo aéreo:
  - Ícone avião + "Passagem aérea"
  - Voo de ida: companhia + número + rota + horários + data + classe + bagagem
  - Voo de volta (se ida+volta): mesma estrutura
  - Lista de passageiros: nome + sobrenome

---

## Parâmetros de URL


| Rota                | Parâmetros                                                                                 |
| ------------------- | ------------------------------------------------------------------------------------------ |
| `/resultados-aereo` | `?origem=X&destino=Y&dataIda=YYYY-MM-DD&dataVolta=YYYY-MM-DD&passageiros=N&tipo=ida_volta` |
| `/pagamento-aereo`  | Mesmos + `&vooIda=ID&vooVolta=ID&tarifa=light|classic|flex`                                |


> **Regra:** parâmetros críticos na query string em toda a jornada. Nunca depender exclusivamente de estado React. Datas em ISO 8601.


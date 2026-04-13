# Spec de Telas — Jornada de Hotel

**Jornada:** Hotel  
**Versão:** 1.0  
**Última atualização:** Abril 2026

---

## 1. Home Page — Busca de Hotel

**Rota:** `/`  
**Arquivo:** `src/app/pages/HomePage.tsx`  
**Figma:** file `EJ1yZNlnpYPREt76Fypnyz`

### Componente de Busca — Tab Hotel


| Campo       | Tipo                   | Comportamento                     | Validação   |
| ----------- | ---------------------- | --------------------------------- | ----------- |
| Destino     | Input com autocomplete | Placeholder "Para onde você vai?" | Obrigatório |
| Check-in    | DatePicker             | Formato `dd/mm/aaaa`              | Obrigatório |
| Check-out   | DatePicker             | Mínimo = Check-in + 1 dia         | Obrigatório |
| Hóspedes    | Select / Dropdown      | Adultos + Crianças                | Obrigatório |
| Acomodações | Select                 | Número de quartos                 | Obrigatório |


**CTA:** "Buscar" → navega para `/resultados-hotel?destino=X&checkIn=YYYY-MM-DD&checkOut=YYYY-MM-DD&adultos=N&acomodacoes=N`

---

## 2. Resultados de Hotel

**Rota:** `/resultados-hotel`  
**Arquivo:** `src/app/pages/SearchResults.tsx`  
**Figma node:** `5:2574`  
**Dimensões:** 1440px largura

### Layout

```
┌─────────────────────────────────────────────┐
│  Header (1440 × 124px)                      │
├───────────────┬─────────────────────────────┤
│ Filter Section│ Hotel Cards Container        │
│ (240px)       │ (760px)                      │
│ sticky        │                              │
│               │ [context bar + sort]         │
│               │ Card Hotel/Horizontal ×5     │
│               │ [Ver mais button]            │
└───────────────┴─────────────────────────────┘
```

- Conteúdo centralizado: `max-w-[1440px] mx-auto px-[32px]`
- Duas colunas: `flex gap-[32px] items-start`
- Sidebar: `w-[240px] shrink-0 sticky top-[24px]`
- Cards container: `w-[760px]`

### SearchResultsHeader

Exibe parâmetros da busca editáveis inline:

- Destino · intervalo de datas · hóspedes · acomodações · noites
- Ícone lápis por campo → popover de edição inline
- Ao confirmar: re-dispara busca, atualiza query string

### Sidebar de Filtros (240px, sticky)


| Filtro                   | Tipo Figma            | Opções                                             |
| ------------------------ | --------------------- | -------------------------------------------------- |
| Cancelamento gratuito    | Switch                | On/Off                                             |
| Disponibilidade imediata | Switch                | On/Off                                             |
| Outra opção              | Switch                | On/Off                                             |
| Preço                    | Slider range + inputs | Min/Max na moeda configurada                       |
| Avaliação                | Checkbox Group        | 5★ / 4★+ / 3★+ / Qualquer                          |
| Categoria                | Checkbox Group        | Hotel / Pousada / Resort / Flat                    |
| Comodidades              | Checkbox Group        | Wi-Fi / Piscina / Academia / Estacionamento / Café |
| Outros filtros           | Checkbox Group        | (variável)                                         |


> **Divergência PRD × Figma:** O Figma usa `Switch` (toggle) para os primeiros filtros, não Checkbox. Implementar conforme Figma.

### Context Bar (acima dos cards)

- "X hotéis encontrados em [Destino]" — Typography/4, `text-foreground`
- Select ordenação: "Mais relevantes" / "Menor preço" / "Melhor avaliados" / "Mais perto do centro"
- Alert bar informativo: "Preços calculados para N noites, N adultos, N acomodações"

### Card Hotel/Horizontal (760 × 210px)

Layout `flex row`:


| Área        | Conteúdo                                              | Dimensão |
| ----------- | ----------------------------------------------------- | -------- |
| Imagem      | Foto do hotel, `object-cover`, `rounded-2xl` esquerda | ~240px   |
| Conteúdo    | Nome, localização, rating, features                   | flex-1   |
| Preço + CTA | Preço na moeda configurada + botão "Ver quartos"      | ~172px   |


**Conteúdo — bloco central:**

- Badges de destaque: "Oferta por tempo limitado" (verde), "Apenas 2 disponíveis" (vermelho)
- Nome: Typography/5, bold
- Localização: ícone `MapPin` + texto, Typography/2, `text-muted-foreground`
- Rating: badge numérico `bg-primary` + texto ("Muito Bom") + estrelas preenchidas
- Features: ícone check verde + "Cancelamento grátis" / "Pague em 12x sem juros"

**Conteúdo — bloco de preço:**

- Valor + rótulo moeda: Typography/5, bold (ex: "1.000 Tribz")
- Total da estadia: Typography/1, `text-muted-foreground`
- CTA "Ver quartos" → abre **Drawer de Quartos** (overlay)

**Estado vazio:**

- Ilustração + "Nenhum hotel encontrado para os filtros selecionados. Tente ajustar sua busca."

---

## 2.5 Drawer de Quartos *(overlay sobre /resultados-hotel)*

**Figma node:** `447:9878`  
**Dimensões:** 560px largura × 884px altura  
**Posição:** `fixed right-[17px] top-[126px]` — overlay lateral direito  
**Container:** `rounded-2xl`, `bg-card`, shadow padrão

> **Este componente não está descrito no PRD original.** É um passo intermediário identificado no Figma: o usuário vê quartos disponíveis sem sair da listagem, e pode ir direto ao checkout ou acessar o PDP completo.

### Estrutura do Drawer

**Seção 1 — Imagem principal do hotel**

- 240px altura, `rounded-2xl`, `object-cover`

**Seção 2 — Info do hotel**

- Nome: Typography/3/Medium, `text-foreground`
- Review: Badge rating (`bg-primary`, "8.4") + texto ("Muito Bom") + separador + estrelas (4 estrelas)
- Localização: ícone `MapPin` (16px) + texto Typography/1/Light, `text-muted-foreground`

**Seção 3 — Lista de quartos**

- Título "Quartos disponíveis": Typography/2/Regular
- Por quarto (`flex row`, `p-[16px]`, separador entre itens):


| Elemento              | Especificação                                                                                        |
| --------------------- | ---------------------------------------------------------------------------------------------------- |
| Imagem do quarto      | 80×80px, `rounded-lg`, `object-cover`                                                                |
| Título                | Typography/2/Regular, `text-foreground`                                                              |
| Badges de facilidades | `rounded-full`, `bg-[rgba(0,0,51,0.06)]`, ícone 12px + texto 12px                                    |
| Facilidades exibidas  | Vista para a cidade (`building-2`), N pessoas (`users`), wi-fi (`wifi`), tipo de cama (`bed-double`) |
| Preço                 | "1.000 Tribz" — Typography/3/Medium + Regular                                                        |
| Total                 | "Total: 26.207 Tribz" — Typography/1/Light, muted                                                    |
| Botão "Reservar"      | `bg-primary`, `rounded-full`, 24px altura, full-width do container                                   |


**Seção 4 — CTA principal**

- "ver todos os detalhes do hotel" — botão full-width, `bg-primary`, `rounded-full`, 32px altura
- Navega para `/hotel` com todos os parâmetros

---

## 3. Detalhe do Hotel — PDP

**Rota:** `/hotel`  
**Arquivo:** `src/app/pages/HotelDetails.tsx`  
**Figma:** `src/imports/pasted_text/spec-pdp-hotel-figma-make.md`

### Layout

- Duas colunas: conteúdo principal (esquerda, ~848px) + card sticky de reserva (direita, ~320px)

### Galeria de fotos (layout obrigatório)

```
┌─────────────────────┬──────────┐
│                     │  foto 2  │
│      foto 1         ├──────────┤
│    (~60% largura)   │  foto 3  │
├────────┬────────────┴──────────┘
│ foto 4 │  foto 5  │  foto 6
└────────┴──────────┴────────────
```

- Container externo: `rounded-2xl` · Gap entre fotos: `gap-[16px]`
- Botão "Mostrar todas as fotos": ícone `LayoutGrid` + texto branco, `rounded-full`, canto inferior direito da última foto
- Modal fullscreen: `fixed inset-0 z-50`, `bg-black/90`, navegação setas + teclado (Escape fecha)
- `document.body.style.overflow = 'hidden'` enquanto modal aberto

### Seções do conteúdo principal


| Seção           | Componentes principais                                                                    |
| --------------- | ----------------------------------------------------------------------------------------- |
| Identidade      | Nome (Typography/6, semibold), estrelas (fill-[#fbbf24]), localização, check-in/check-out |
| Avaliação       | Quote editorial + nota grande + badge de rating                                           |
| Amenities       | 6 ícones em linha: Wi-Fi, Academia, Piscina, Ar-cond., Wi-Fi 5GHz, Coworking              |
| Descrição       | "Conheça um pouco mais" — texto corrido, Typography/3                                     |
| Importante      | Container borda esquerda warning (4px) — notas do hotel                                   |
| É bom saber     | Bullet points, Typography/2, muted                                                        |
| Tipos de Quarto | Tabs ("Todos" / "2 camas" / "1 cama") + cards de quarto                                   |
| Mapa            | Placeholder retangular + lista "Nas proximidades"                                         |


### Card de Quarto

Layout `flex row`: foto thumbnail (100×70px, `rounded-lg`) + features (col1 + col2) + preço + CTA


| Elemento        | Spec                                                            |
| --------------- | --------------------------------------------------------------- |
| Foto            | 100×70px, `rounded-lg`, `object-cover`                          |
| Nome            | bold, Typography/3                                              |
| Features col1   | Vista · Capacidade · Condição de pagamento                      |
| Features col2   | Metragem · Quartos · Tipo de cama                               |
| Preço           | Moeda configurada (bold) + preço riscado ref. R$                |
| Badge desconto  | "X% OFF" — badge verde, sobre o preço                           |
| Disponibilidade | "Apenas X disponíveis" (warning) ou "Último disponível" (error) |
| CTA "Reservar"  | `bg-primary rounded-full` → `/pagamento-hotel`                  |


### Card Sticky de Reserva (320px)

- `sticky top-[80px]`, `rounded-2xl`, `border border-border`, `bg-white`
- Preço destaque (Typography/6, bold) → Campos (Check-in / Check-out / Hóspedes) → Badge cancelamento → CTA "Reservar" full-width (`bg-primary rounded-full h-[48px]`)

---

## 4. Pagamento

**Rota:** `/pagamento-hotel`  
**Arquivo:** `src/app/pages/Payment.tsx`  
**Figma nodes:** `38:7686` (Dados Pessoais), `80:5628` (Como quer pagar), `82:6979` (Nota Fiscal)

### Layout

- Duas colunas: accordion esquerda (~~60%) + card sticky direita (~~40%)
- Header: `SearchResultsHeader` com parâmetros da busca
- Alert bar: countdown da oferta — "Oferta válida por MM:SS"

### Accordion progressivo (3 etapas)

Regras gerais:

- Apenas a etapa atual está aberta; as seguintes são desabilitadas
- Etapas concluídas exibem ícone de check (✓) no título
- CTA fixo "Efetuar Reserva" no rodapé da coluna esquerda (desabilitado até etapa 3 completar)


| Etapa               | Campos                                                      | Avanço            |
| ------------------- | ----------------------------------------------------------- | ----------------- |
| 1 — Dados Pessoais  | Por adulto: Nome, Sobrenome, Data Nasc., Nacionalidade, CPF | "Próximo"         |
| 2 — Como quer pagar | Slider moeda configurada + (cartão se `allowCreditCard`)    | "Próximo"         |
| 3 — Nota Fiscal     | Situação Fiscal (Select), Nome completo, CPF                | "Efetuar Reserva" |


### Etapa 1 — Dados Pessoais (Figma `38:7686`)

- Título da seção: "Adulto N" para cada hóspede
- Campos por adulto (repetidos para cada hóspede):


| Campo           | Tipo   | Validação                |
| --------------- | ------ | ------------------------ |
| Nome            | Input  | Obrigatório              |
| Sobrenome       | Input  | Obrigatório              |
| Data nascimento | Input  | Obrigatório              |
| Nacionalidade   | Select | Obrigatório              |
| CPF             | Input  | Obrigatório, máscara CPF |


### Etapa 2 — Como você quer pagar (Figma `80:5628`)

**Subseção: Tribz**

- Título: "Resumo do cartão"
- Slider: Min 0 → Max saldo disponível do usuário
- Valor exibido: "[N] tribz | R$ [equivalente]"
- Saldo residual atualizado em tempo real abaixo do slider

**Subseção: Cartão de crédito** *(condicional — exibe apenas se `allowCreditCard: true`)*


| Campo            | Tipo              |
| ---------------- | ----------------- |
| Número do cartão | Input com máscara |
| Nome no cartão   | Input             |
| Validade         | Input (MM/AA)     |
| CVV              | Input             |


**Subseção: Parcelamento** *(condicional — exibe apenas se cartão habilitado)*

- Título: "Com quantas parcelas quer pagar?"
- Componente: `RadioGroup`
- Opções geradas dinamicamente; exemplos do Figma:


| Opção        | Descrição              |
| ------------ | ---------------------- |
| À vista      | sem juros — R$1.490,00 |
| 2× sem juros | R$745,00               |
| 3× sem juros | R$496,67               |
| 4× sem juros | R$372,50               |
| 5× sem juros | R$298,00               |


> Número de parcelas e valores vêm da API/config — não hardcodar.

### Etapa 3 — Nota Fiscal (Figma `82:6979`)


| Campo           | Tipo   | Observação                              |
| --------------- | ------ | --------------------------------------- |
| Situação Fiscal | Select | Opções: Pessoa Física / Pessoa Jurídica |
| Nome completo   | Input  | Razão Social se PJ                      |
| CPF             | Input  | CNPJ se PJ, máscara dinâmica            |


> Ao selecionar Pessoa Jurídica: label "Nome completo" passa a "Razão Social" e campo CPF passa a CNPJ.

### Card de resumo sticky (direita)

- Thumbnail do hotel + nome + localização
- Check-in: data + "A partir das 15h" (horário padrão)
- Check-out: data + "Até as 12h" (horário padrão)
- N noites · N adultos
- Tabela de itens:


| Coluna          | Conteúdo                   |
| --------------- | -------------------------- |
| Tipo de quarto  | Nome do quarto             |
| Qtd             | Número de unidades         |
| Preço/noite     | Valor na moeda configurada |
| Subtotal quarto | Qtd × preço × noites       |


- Linhas adicionais: Subtotal · Taxas · **Total Final** (bold)
- Badge: "Cancelamento gratuito antes de [data]" — estilo success

### CTA

- Botão "Efetuar Reserva" full-width no rodapé da coluna esquerda
- Estado desabilitado (disabled) enquanto etapas 1–3 não estiverem completas
- Ao clicar com tudo preenchido → dispara `hotel_checkout_completed` → redireciona para `/confirmacao-hotel`

---

## 5. Confirmação

**Rota:** `/confirmacao-hotel`  
**Arquivo:** `src/app/pages/BookingConfirmation.tsx`

### Regra crítica — linguagem assíncrona


| Proibido                  | Correto                                                                   |
| ------------------------- | ------------------------------------------------------------------------- |
| "Confirmado" / "Aprovado" | "Parabéns pela sua reserva!"                                              |
| "Reserva confirmada"      | "Sua reserva está sendo processada e enviaremos a confirmação por email." |


### Layout duas colunas (60% / 40%)

**Coluna esquerda:**

- Card 1: Informações de pagamento — tabela de itens + método + nota fiscal
- Card 2: Quem vai viajar — viajante(s) com avatar, nome e CPF

**Coluna direita (sticky):**

- Card de status: ícone celebração + texto processamento
- Card resumo hotel: nome, localização, datas, mini-card, badge cancelamento

---

## Parâmetros de URL


| Rota                | Parâmetros                                                                  |
| ------------------- | --------------------------------------------------------------------------- |
| `/resultados-hotel` | `?destino=X&checkIn=YYYY-MM-DD&checkOut=YYYY-MM-DD&adultos=N&acomodacoes=N` |
| `/hotel`            | Mesmos parâmetros da listagem                                               |
| `/pagamento-hotel`  | Mesmos + `&noites=N`                                                        |


> **Regra:** parâmetros críticos persistem na query string em toda a jornada. Nunca depender exclusivamente de estado React (perde no refresh). Datas em ISO 8601.


# Spec de Telas — Jornada do Carrinho

**Jornada:** Carrinho  
**Versão:** 1.0  
**Última atualização:** Abril 2026  
**Figma:** `EJ1yZNlnpYPREt76Fypnyz`

---

## Rota

**Rota:** `/carrinho`  
**Arquivo:** `src/app/pages/CartPage.tsx` *(a criar)*  
**Query params obrigatórios:** `?services=[hotel|flight|hotel,flight|...]`

---

## Layout geral

```
┌─────────────────────────────────────────────────────────────────┐
│  Header (com ícone ShoppingCart + badge de contagem)            │
├─────────────────────────────────────────────────────────────────┤
│  [← Voltar para busca]          [⏱ Oferta válida por MM:SS]     │
│                                                                  │
│  Carrinho (N)                                                    │
│                                                                  │
├──────────────────────────────────┬──────────────────────────────┤
│  Coluna Esquerda (848px)          │  Coluna Direita (480px)      │
│                                  │                              │
│  ┌──────────────────────────────┐ │  Resumo do pagamento         │
│  │  Booking Detail Card        │ │                              │
│  │  (por item no carrinho)     │ │  ┌──────────────────────────┐│
│  └──────────────────────────────┘ │  │  Itens | Qtd | Preço |  ││
│                                  │  │  Total                  ││
│  ┌──────────────────────────────┐ │  │  ...                    ││
│  │  Cross-sell: "Adicionar      │ │  │  Subtotal               ││
│  │  mais produtos?"             │ │  │  Taxas                  ││
│  └──────────────────────────────┘ │  │  Total Final            ││
│                                  │  │                         ││
│  [Finalizar Compra]  (240px)      │  │  Callout cancelamento   ││
│                                  │  │  [Finalizar Compra]     ││
│                                  │  └──────────────────────────┘│
└──────────────────────────────────┴──────────────────────────────┘
│  Banner cross-sell (passagens ou hospedagem, contextual)        │
└─────────────────────────────────────────────────────────────────┘
│  Footer                                                         │
└─────────────────────────────────────────────────────────────────┘
```

- Padding: `px-[32px] py-[32px]` (espaçamento padrão do produto)
- Layout: `flex gap-[32px] items-start`
- Coluna esquerda: `w-[848px]` / Coluna direita: `w-[480px] pt-[56px]`

---

## Header

Usa o componente de header padrão com parâmetros de busca editáveis inline.

### Nova adição no `UserActions`

O ícone de carrinho (`ShoppingCart`, 20px, `strokeWidth={1.5}`) aparece ao lado do User Info:

- Container: `bg-card rounded-full size-[48px] shadow-[...]`
- Badge de contagem: posicionado `absolute top-0 right-0`, `bg-primary text-white rounded-full text-[10px] size-[16px] flex items-center justify-center`
- Ao clicar → navega para `/carrinho`

---

## Coluna esquerda

### 1. Cabeçalho da página

```
← Voltar para busca          ⏱ Oferta válida por MM:SS
```

- Botão "Voltar para busca": `gap-3 h-[40px] px-4 rounded-md text-muted-foreground` com ícone `ChevronLeft` (18px)
- Badge countdown: `bg-[rgba(243,0,13,0.08)] text-[rgba(196,0,6,0.83)] px-[10px] py-1 rounded-[4px]` com ícone `Clock` (16px)

### 2. Título

`text-[24px] leading-[30px] tracking-[-0.1px] text-foreground`

```
Carrinho (N)
```

N = número dinâmico de itens. Atualiza em tempo real.

### 3. Booking Detail Card (por item)

Container: `bg-card rounded-2xl shadow-[...] p-4 flex flex-col gap-4 w-full`

#### 3a. Card Header (hotel)

```
┌──────────────────────────────────────────────┬──────────┐
│  [Thumb 64×64]  [Nome do hotel]              │  [🗑 32px]│
│                 [Badge rating] [Estrelas]     │          │
│                 [Cidade]                      │          │
└──────────────────────────────────────────────┴──────────┘
```

- Thumbnail: `size-[64px] rounded-lg object-cover`
- Badge rating: `bg-primary text-white text-[12px] px-2 py-1 rounded-[4px]`
- Botão remover: `size-[32px] rounded-full border border-[rgba(0,8,48,0.27)]` com ícone `Trash2` (16px)

#### 3a. Card Header (voo)

```
┌──────────────────────────────────────────────┬──────────┐
│  [Logo CIA] [Nome cia + num]                 │  [🗑 32px]│
│  [IATA Orig] →───── [IATA Dest]              │          │
│  [HH:MM]  paradas  duração  [HH:MM]           │          │
└──────────────────────────────────────────────┴──────────┘
```

#### 3b. Separador horizontal

`<Separator />` ou `border-t border-border w-full`

#### 3c. Detalhes do item

**Hotel:**

```
[Nome do quarto — wrapping text]

[Badge: Cancelamento Grátis]  ·  [Café da manhã]

[📅] DD Mmm AAAA  -  DD Mmm AAAA    ·    [👤] N adulto em N quarto

                                                    [R$ 6.880]
```

- Quarto: `text-[16px] font-medium text-foreground leading-6`
- Badge cancelamento: `bg-[rgba(0,164,51,0.1)] text-[rgba(0,113,63,0.87)] text-[12px] rounded-[3px] px-[6px] py-[2px]`
- Datas e hóspedes: `text-[12px] text-muted-foreground leading-4` com ícones `Calendar` e `User` (16px)
- Preço: `text-[24px] text-foreground leading-[30px] tracking-[-0.1px] text-right w-[101px]`

**Voo:**

```
[Tarifa: Econômica Light]   [Bagagem: 1 mala 23kg]

[✈] BSB → MIA · Ida · 21 Dez 2026    [HH:MM → HH:MM]

[Direto · 9h30]

                                                   [1.200 Tribz]
```

### 4. Seção de Cross-sell

Container: `bg-card rounded-2xl shadow-[...] p-4 flex flex-col gap-4 w-full`

**Título:** `text-[20px] font-medium text-foreground leading-7`
```
Vamos adicionar mais produtos e levar a viagem completa?
```

Abaixo de um `<Separator />`, dois cards lado a lado em `flex gap-4`:

**Card de serviço (reutilizável):**
```
┌──────────────────────────────────────┐
│  [ícone 24px círculo teal-alpha/3]   │
│  [Título do serviço]                 │
│                                      │
│  [Descrição curta]                   │
│                                      │
│  [Ver passagens / Ver hospedagens /  │
│   Ver passeios]  (CTA pill teal)     │
└──────────────────────────────────────┘
```

Container: `border border-border rounded-lg flex flex-col gap-6 p-4 flex-1`

Ícones por serviço:
- Passagens: `PlaneTakeoff` (lucide) — fundo `bg-[rgba(0,198,157,0.12)] rounded-full size-[24px]`
- Hospedagem: `Hotel` ou `BedDouble` (lucide)
- Aluguel de Carro: `Car` (lucide)

CTA: `bg-primary text-white rounded-full h-[32px] px-3 text-[14px] font-medium`

### 5. CTA Principal

`bg-primary text-white rounded-full h-[40px] w-[240px] text-[16px] font-medium`
```
Finalizar Compra
```

Ao clicar → navega para `/pagamento?services=[mix-do-carrinho]`

---

## Coluna direita

### Título

`text-[24px] leading-[30px] text-foreground`
```
Resumo do pagamento
```

### Card de resumo

Container: `bg-[#fcfcfd] rounded-2xl shadow-[...] flex flex-col gap-6 px-4 pt-4 pb-4 w-full`

#### Tabela de itens

Cabeçalho: `Itens | Qtd | Preço | Total` — `text-[14px] text-foreground`

Por linha de item:
- Itens: `text-[14px] font-light text-muted-foreground` (truncado com ellipsis)
- Qtd: `w-[48px]`
- Preço: `w-[90px]`
- Total: `w-[90px] text-right`

Separador entre header e rows: `border-b border-border`

#### Linha de totais

```
Subtotal              R$ XX.XXX,XX
Taxas                 10% (XXXX)
─────────────────────────────────
Total Final           R$ XX.XXX,XX
```

- Total Final: `text-[16px] text-foreground leading-6`

#### Callout de cancelamento

```
ℹ  Cancelamento gratuito antes de [data]
```

Container: `bg-card border border-[rgba(0,0,47,0.15)] rounded-md p-3 flex gap-2 items-start`
Texto: `text-[14px] text-muted-foreground leading-5`
Ícone: `Info` lucide (16px)

#### CTA duplicado

`bg-primary text-white rounded-full h-[40px] w-full text-[16px] font-medium`
```
Finalizar Compra
```

---

## Banner de cross-sell no rodapé

Exibido acima do footer, contextual ao que **não está** no carrinho:

- Se não tem passagens: "Encontre as melhores passagens para sua viagem" + CTA "Pesquisar Passagens"
- Se não tem hotel: "Encontre os melhores hotéis para a sua estadia" + CTA "Pesquisar Hospedagem"
- Se tem tudo: banner omitido

Container: `rounded-2xl border border-border relative overflow-hidden h-[320px] flex flex-col gap-0 items-start justify-center p-8`
Imagem de fundo: asset do Figma (fornecida por instância do produto)

---

## Estado vazio do carrinho

Quando o carrinho não tem nenhum item:

```
    [ícone ShoppingCart 48px text-muted-foreground]

    Seu carrinho está vazio

    Comece adicionando uma hospedagem ou passagem aérea.

    [Buscar Hospedagem]   [Buscar Passagens]
```

---

## Parâmetros de URL

| Parâmetro  | Tipo     | Obrigatório | Valores possíveis                 |
| ---------- | -------- | ----------- | --------------------------------- |
| `services` | `string` | Sim         | `hotel`, `flight`, `hotel,flight`, `hotel,flight,car` |

> O parâmetro `services` é **atualizado automaticamente** conforme itens são adicionados ou removidos. Não requer ação manual do usuário ou developer ao navegar.

---

## Navegação de retorno

O botão "← Voltar para busca" usa `history.back()` — retorna para a última página de resultados ou de seleção de tarifa, conforme a origem. Nunca retorna para a Home.

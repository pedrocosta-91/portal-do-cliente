# Componentes — Portal do Cliente

**Última atualização:** Abril 2026  
**Responsável:** Pedro Costa  
**Fonte de verdade:** Figma DS `aYVvwo3llX85irnjON7nVt`

> Antes de criar qualquer componente novo, verificar se já existe no Figma DS e em `src/app/components/ui/`.

---

## Comparativo De-Para: componentes.md × Figma Design System

> **Metodologia:** Figma DS (`aYVvwo3llX85irnjON7nVt`) é a fonte de verdade. A tabela abaixo mapeia cada componente Figma para o equivalente no projeto e aponta gaps e decisões.

### Standard Components (Radix Themes v3.0)

| Figma DS | shadcn/ui (`src/ui/`) | Status | Ação |
|---|---|---|---|
| Alert Dialog | `AlertDialog` | Existe, não documentado | Adicionar à tabela |
| Aspect Ratio | `AspectRatio` | Existe, sem uso atual | Documentar quando usar |
| Avatar | `Avatar` | Alinhado ✓ | — |
| Badge | `Badge` | Alinhado ✓ | — |
| Button | `Button` | Alinhado ✓ | — |
| Callout | `Alert` (proxy) | Nomes divergem | Usar `Alert` + nota |
| Card | `Card` | Alinhado ✓ | — |
| Checkbox | `Checkbox` | Alinhado ✓ | — |
| Checkbox Group 🆕 | — (implementar com `Checkbox`) | Gap | Documentar padrão |
| Checkbox Cards 🆕 | — (sem equivalente shadcn) | Gap | Documentar padrão |
| Context Menu | `ContextMenu` | Existe, não documentado | Adicionar |
| Data List 🆕 | — (sem equivalente shadcn) | Gap | Documentar padrão |
| Dialog | `Dialog` | Alinhado ✓ | — |
| Dropdown Menu | `DropdownMenu` | Existe, não documentado | Adicionar |
| Hover Card | `HoverCard` | Existe, não documentado | Adicionar |
| Icon Button | variante de `Button` | Coberto por Button | Documentar variant |
| Popover | `Popover` | Existe, não documentado | Adicionar |
| Progress 🆕 | `Progress` | Existe, não documentado | Adicionar |
| Radio 🆕 | item de `RadioGroup` | Coberto por RadioGroup | — |
| Radio Group | `RadioGroup` | Existe, não documentado | Adicionar |
| Radio Cards 🆕 | — (sem equivalente shadcn) | Gap | Documentar padrão |
| Scroll Area | `ScrollArea` | Existe, não documentado | Adicionar |
| Segmented Control 🆕 | `ToggleGroup` (proxy) | Nomes divergem | Usar `ToggleGroup` + nota |
| Select | `Select` | Alinhado ✓ | — |
| Separator | `Separator` | Alinhado ✓ | — |
| Skeleton | `Skeleton` | Alinhado ✓ | — |
| Slider | `Slider` | Alinhado ✓ | — |
| Spinner 🆕 | `Loader2` de lucide-react | Sem primitivo shadcn | Documentar padrão |
| Switch | `Switch` | Existe, não documentado | Adicionar |
| Table | `Table` | Existe, não documentado | Adicionar |
| Tabs | `Tabs` | Alinhado ✓ | — |
| Tab Nav 🆕 | — (custom component) | Gap | Documentar padrão |
| Text Area | `Textarea` | Existe, nome diverge | Alinhar nome |
| Text Field | `Input` | Existe, nome diverge | Alinhar nome |
| Tooltip | `Tooltip` | Alinhado ✓ | — |

### Tourism Components (custom do projeto)

| Figma DS | Doc atual | Status | Ação |
|---|---|---|---|
| Currency | — | Gap crítico — usado em toda compra | Documentar |
| Brands | — | Sem uso direto no código (logo via config) | Documentar |
| Hotel Cards | — | Gap — card de resultado de hotel | Documentar |
| Hero Banner | "Banner Editorial" (parcial) | Nome e spec incompletos | Atualizar |
| Header | Header.tsx ✓ (parcial) | Faltam estados mobile e brand variants | Atualizar |
| Search Bar | — | Gap crítico — ponto de entrada das jornadas | Documentar |

### Componentes shadcn/ui sem equivalente no Figma DS

Esses componentes estão disponíveis em `src/app/components/ui/` mas não possuem página própria no Figma DS. Usar com critério — o Figma não define visual, então o shadcn/ui padrão é o design.

| Componente | Uso no projeto | Observação |
|---|---|---|
| `Accordion` | Checkout em etapas progressivas | Não está no Figma DS — fundamental para jornadas |
| `Calendar` | Datepicker de busca | Não está no Figma DS — usado internamente no Search Bar |
| `Carousel` | Hotéis em destaque na Home | Não está no Figma DS |
| `Drawer` | Painéis laterais mobile | Não está no Figma DS |
| `Label` | Labels de formulário | Coberto por Typography/Text no Figma |
| `Sheet` | Overlay lateral | Semelhante a Drawer — verificar unificação |
| `Breadcrumb` | Navegação hierárquica | Não usado ainda — reservado |
| `Form` | Wrapper react-hook-form | Infraestrutura de formulários |
| `Input` | Campos de texto | Figma chama de "Text Field" — são o mesmo |
| `Textarea` | Campos de texto longo | Figma chama de "Text Area" — são o mesmo |

### Pros e Contras — análise geral

**O que estava bem documentado:**
- Os 10 componentes mais usados (Avatar, Badge, Button, Card, Checkbox, Dialog, Select, Skeleton, Slider, Tabs) estavam corretos e alinhados.
- Padrões de implementação (CVA, `cn()`, modal overlay) eram precisos.
- Anti-padrões cobriam os erros mais comuns de cor e border-radius.

**Gaps identificados:**
- **18 componentes Radix existentes** no Figma não estavam documentados (RadioGroup, Switch, Table, Progress, DropdownMenu, etc.). Todos já existem em `src/ui/` mas faltava orientação de quando usar.
- **6 componentes novos da v3.0** (Checkbox Group, Checkbox Cards, Data List, Radio Cards, Segmented Control, Spinner, Tab Nav) sem nenhuma documentação ou equivalente shadcn mapeado.
- **Tourism Components** todos sem documentação — sendo que `Currency` e `SearchBar` são usados em toda a jornada de compra.
- `Header` documentado mas faltando: estados mobile, trib vs. Voalá vs. sistema, estado com saldo zero.
- Nenhuma menção ao sistema de **Typography** do Figma (Text, Heading, Link, Kbd).

---

## Componentes UI base — Radix Themes (Figma DS)

### Ações e feedback

| Componente | Uso no projeto | Figma node |
|---|---|---|
| `Button` | Todas as ações primárias e secundárias | `5:3199` |
| `Icon Button` | Botão apenas com ícone (fechar modal, expandir) | `612:41405` |
| `Switch` | Toggles binários | `612:41410` |
| `Slider` | Seleção de range (preço, quantidade de Tribz) | `612:41412` |
| `Checkbox` | Seleção múltipla (filtros) | `612:41400` |
| `Checkbox Group` 🆕 | Grupo de checkboxes com label (filtros agrupados) | `1368:9953` |
| `Checkbox Cards` 🆕 | Checkboxes em formato de card (seleção visual) | `1448:84569` |
| `Radio Group` | Seleção exclusiva (parcelamento, classe de voo) | `612:41416` |
| `Radio` 🆕 | Item individual de RadioGroup | `1340:62867` |
| `Radio Cards` 🆕 | Radio em formato card (escolha de tarifa/plano) | `1503:64433` |
| `Segmented Control` 🆕 | Alternância de modo (Ida e Volta / Só ida) | `1511:69361` |
| `Select` | Dropdowns de seleção (nacionalidade, parcelamento) | `612:41414` |

> **Spinner 🆕** (Figma `1345:77918`): Não existe primitivo shadcn. Usar `<Loader2 className="animate-spin" size={16} />` de `lucide-react`.

### Overlays e conteúdo flutuante

| Componente | Uso no projeto | Figma node |
|---|---|---|
| `Dialog` | Modais (galeria fullscreen, detalhes de voo, tarifa) | `612:41402` |
| `Alert Dialog` | Confirmações destrutivas (cancelar reserva) | `612:41397` |
| `Popover` | Dicas de contexto com conteúdo rico | `612:41407` |
| `Hover Card` | Preview de informações ao passar o mouse | `612:41404` |
| `Tooltip` | Dicas contextuais curtas | `612:41419` |
| `Context Menu` | Menu de ação ao clicar com botão direito | `612:41401` |
| `Dropdown Menu` | Menu dropdown (ações de usuário, opções) | `612:41403` |

### Layout e estrutura

| Componente | Uso no projeto | Figma node |
|---|---|---|
| `Card` | Containers de conteúdo com shadow | `612:41399` |
| `Separator` | Divisores horizontais/verticais | `612:41413` |
| `Scroll Area` | Áreas com scroll customizado | `612:41415` |
| `Aspect Ratio` | Imagens com proporção fixa (thumbnails de hotel) | `612:41396` |
| `Tabs` | Alternância de conteúdo (Hotel/Aéreo, quartos) | `612:41422` |
| `Tab Nav` 🆕 | Navegação estilo nav-link (não altera conteúdo inline) | `1391:62620` |
| `Data List` 🆕 | Listas chave-valor (detalhes de reserva) | `1515:73575` |
| `Table` | Tabelas de dados (itens do checkout, histórico) | `612:41411` |
| `Callout` | Alertas informativos inline (`Alert` no shadcn) | `612:41398` |

### Indicadores de estado

| Componente | Uso no projeto | Figma node |
|---|---|---|
| `Badge` | Status, tags, categorias | `612:41393` |
| `Avatar` | Foto/iniciais do usuário | `612:41395` |
| `Skeleton` | Loading states | `1391:67352` |
| `Progress` 🆕 | Barras de progresso (etapas do checkout) | `1523:9097` |

### Entrada de dados

| Componente shadcn | Nome no Figma | Uso no projeto |
|---|---|---|
| `Input` | Text Field | Campos de formulário (nome, CPF, e-mail) |
| `Textarea` | Text Area | Campos de texto longo |

---

## Componentes shadcn/ui sem equivalente no Figma DS

| Componente | Uso no projeto | Observação |
|---|---|---|
| `Accordion` | Checkout em etapas progressivas (Dados / Pagamento / NF) | Fundamental — manter |
| `Calendar` | Datepicker nos campos de busca | Usado internamente pelo Search Bar |
| `Carousel` | Carrosséis horizontais (hotéis em destaque) | Manter |
| `Drawer` | Painéis laterais mobile | Manter para mobile |
| `Sheet` | Overlay lateral desktop | Avaliar unificação com Drawer |
| `Label` | Labels de campos de formulário | Usar `Typography/Text` como referência visual |
| `Form` | Wrapper react-hook-form | Infraestrutura — não é visual |
| `Breadcrumb` | Navegação hierárquica | Reservado para uso futuro |

---

## Sistema de Tipografia (Figma DS)

O Figma DS define componentes tipográficos como primitivos reutilizáveis. No projeto, mapear para HTML semântico + tokens.

| Figma DS | HTML | Tailwind base |
|---|---|---|
| `Text` | `<p>`, `<span>` | `text-[14px] leading-[20px] text-foreground` |
| `Heading` | `<h1>`–`<h6>` | `text-[24px] leading-[30px] font-bold text-foreground` |
| `Link` | `<a>` | `text-primary underline-offset-4 hover:underline` |
| `Blockquote` | `<blockquote>` | `border-l-4 border-border pl-4 italic text-muted-foreground` |
| `Code` | `<code>` | `font-mono text-[13px] bg-[rgba(0,0,51,0.06)] px-1 rounded` |
| `Kbd` | `<kbd>` | `font-mono text-[12px] border border-border rounded px-1` |

> Consultar `tokens.md` para a escala completa de `Typography/Font size/1–9`.

---

## Tourism Components (componentes custom do projeto)

### `Currency`

**Figma:** `5528:9316` | **Arquivo:** componente inline (sem arquivo próprio ainda)

Exibe o preço em dois formatos simultâneos, controlados por `CurrencyConfig`:

```
R$ 1.000
1.000 tribz
```

- Linha 1: valor em BRL (ex: `R$ 1.000`)
- Linha 2: equivalente em moeda do programa (ex: `1.000 tribz`, `1.000 pontos`)
- A label "tribz" vem de `CurrencyConfig.currencyLabel` — **nunca hardcodar**
- Quando `allowDualDisplay = false`, exibir apenas a linha relevante

---

### `Hotel Cards`

**Figma:** `5499:14906` | **Arquivo:** `src/app/components/HotelCard.tsx`

Card de resultado de busca de hotel. Duas variantes:

| Variante | Uso |
|---|---|
| Light (claro) | Listagem padrão `/resultados` |
| Dark (escuro) | Cards em destaque na Home |

**Anatomy:**
- Imagem do hotel (Aspect Ratio 16:9)
- Nome + estrelas (Badge)
- Localização
- Preço: componente `Currency` (R$ + equivalente em moeda do programa)
- CTA "Ver hotel" → `Button` variant outline ou primary dependendo do contexto

---

### `Hero Banner`

**Figma:** `5505:4294` | **Arquivo:** `src/app/components/HeroBanner.tsx`

Banner full-width na Home com imagem de fundo de destino turístico.

- Imagem de fundo cover com overlay gradiente escuro
- Header embutido (transparente sobre a imagem)
- Search Bar centralizado sobre a imagem
- **Não** possui título ou CTA explícito — o Search Bar é o único elemento interativo

> Nota: o que a v1 chamava de "Banner Editorial" era uma versão simplificada. O componente Figma correto é o Hero Banner completo acima.

---

### `Header`

**Figma:** `5505:14965` | **Arquivo:** `src/app/components/Header.tsx`

6 variantes documentadas no Figma:

| Variante | Estado | Conteúdo |
|---|---|---|
| Voalá — deslogado | default | Logo Voalá + nav + "Criar conta / Login" |
| Voalá — logado (1 item no nav) | slim | Logo + 1 item de nav + avatar + saldo |
| Voalá — logado (todos os itens) | full | Logo + nav completo + avatar + "Olá, [Nome]" + saldo |
| Voalá — logado (com saldo destacado) | balance | Logo + nav + avatar + saldo em moeda do programa |
| trib — deslogado | — | Logo trib + nav + CTA laranja |
| trib — mobile | — | Logo + hamburger + saldo |

**Props necessárias:**
- `isLoggedIn: boolean`
- `user?: { name: string; avatarUrl?: string }`
- `balance?: { amount: number; label: string }` — vem de `CurrencyConfig`
- `brandConfig: BrandConfig` — logo, cor primary, nome do produto

> White-label: logo, cor primária e rótulo de saldo são parametrizáveis via `BrandConfig`.

---

### `Search Bar`

**Figma:** `5627:1155` | **Arquivo:** `src/app/components/SearchBar.tsx`

Componente com 3 abas (Tabs):

**Aba Hospedagem:**

| Campo | Tipo | Placeholder |
|---|---|---|
| Destino | `Input` (autocomplete) | "Para onde você quer ir? Digite o destino ou nome do hotel" |
| Check-in | `Calendar` (popover) | "Qui, 26/02" |
| Check-out | `Calendar` (popover) | "Qui, 26/02" |
| Hospedes e acomodações | `Select`/`Popover` | "2 adultos, 1 acomodação" |
| CTA | `Button` primary | "Buscar hotéis" |

**Aba Passagem aérea:**

| Campo | Tipo | Placeholder |
|---|---|---|
| Tipo de viagem | `Segmented Control` | "Ida e Volta" / "Só ida" |
| Adultos | `Select` | "Adultos" |
| Cidade de Partida | `Input` (autocomplete) | "Digite a cidade de partida" |
| Cidade de Destino | `Input` (autocomplete) | "Digite a cidade de destino" |
| Ida | `Calendar` | "Qui, 26/02" |
| Volta | `Calendar` (condicional) | "Qui, 26/02" |
| CTA | `Button` primary | "Buscar voos" |

**Aba Aluguel de carro:** (reservado — sem spec ainda)

---

### `Brands`

**Figma:** `5482:12851` | Uso: interno (configs de white-label)

Painel de logos das marcas suportadas: trib, Clube Bancorbrás, Trib Pass, Voalá. Não é um componente renderizado na aplicação — é referência de identidade visual para configuração via `BrandConfig`.

---

## Padrões de implementação

### Estrutura de componente

```tsx
import { cn } from "./utils";
import { cva, type VariantProps } from "class-variance-authority";

const componentVariants = cva("classes-base", {
  variants: {
    variant: { default: "...", secondary: "..." },
    size: { sm: "...", md: "...", lg: "..." },
  },
  defaultVariants: { variant: "default", size: "md" },
});

function MyComponent({ className, variant, size, ...props }) {
  return (
    <div className={cn(componentVariants({ variant, size }), className)} {...props} />
  );
}
```

### Modal / Overlay

```tsx
<div className="fixed inset-0 z-50 flex items-center justify-center" onClick={onClose}>
  <div className="absolute inset-0 bg-[rgba(0,0,0,0.5)]" />
  <div
    className="relative bg-white rounded-2xl flex flex-col gap-[16px] p-[16px] w-[570px] max-h-[90vh] overflow-y-auto shadow-[0px_4px_16px_0px_rgba(0,0,0,0.1),0px_3px_12px_0px_rgba(0,0,0,0.1),0px_2px_3px_0px_rgba(0,0,51,0.06)]"
    onClick={(e) => e.stopPropagation()}
  >
    {/* conteúdo */}
  </div>
</div>
```

### Spinner (sem primitivo shadcn)

```tsx
import { Loader2 } from "lucide-react";

// Inline spinner
<Loader2 className="animate-spin text-primary" size={16} strokeWidth={1.5} />

// Spinner em botão
<Button disabled>
  <Loader2 className="animate-spin mr-2" size={16} />
  Carregando...
</Button>
```

### Tab Nav (sem equivalente shadcn — componente navegação)

```tsx
// Tab Nav é diferente de Tabs: não troca conteúdo inline, navega entre rotas
<nav className="flex gap-1 border-b border-border">
  {items.map((item) => (
    <NavLink
      key={item.href}
      to={item.href}
      className={({ isActive }) =>
        cn(
          "px-4 py-2 text-[14px] font-medium border-b-2 -mb-px transition-colors",
          isActive
            ? "border-primary text-primary"
            : "border-transparent text-muted-foreground hover:text-foreground"
        )
      }
    >
      {item.label}
    </NavLink>
  ))}
</nav>
```

### Data List (chave-valor — sem equivalente shadcn)

```tsx
// Para itens de resumo de reserva, detalhes de hotel, etc.
<dl className="flex flex-col gap-2">
  <div className="flex justify-between items-baseline">
    <dt className="text-[14px] text-muted-foreground">Subtotal</dt>
    <dd className="text-[14px] font-medium text-foreground">R$ 1.200</dd>
  </div>
</dl>
```

---

## Anti-padrões — nunca fazer

- Hardcodar `#12a594`, `#03867b`, `#1c2024`, `#60646c` onde existe CSS var semântica
- `style={{ borderRadius: 'Xpx' }}` — usar classes Tailwind
- Omitir `rounded-2xl` em containers principais (modais, cards de seção)
- Criar componente novo se existe equivalente em `ui/` ou no Figma DS
- Instalar bibliotecas de ícones além de `lucide-react`
- Usar `<img src={figmaAssetUrl}>` para ícones — substituir por lucide-react
- Hardcodar a label da moeda ("tribz", "pontos") — sempre vir de `CurrencyConfig.currencyLabel`
- Implementar Spinner com biblioteca externa — usar `Loader2` de lucide-react

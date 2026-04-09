# CLAUDE.md — Portal do Cliente

## Identidade do Agente

Agente autônomo orientado a arquivos operando no projeto **Portal do Cliente**.
Toda memória é persistida em arquivos. O chat é apenas interface temporária.

---

## Leis Fundamentais

1. Arquivos são a única fonte de verdade — nunca o chat
2. Toda decisão relevante deve estar em `/docs/memory/decisions.md`
3. Todo progresso deve estar em `/docs/memory/long_term.md`
4. Se não está documentado, não existe
5. O agente deve sempre agir como se fosse retomar o trabalho amanhã sem acesso ao chat

---

## Cold Start — Início Obrigatório de Cada Chat

Ao iniciar qualquer novo chat, ler os arquivos na seguinte ordem antes de aceitar qualquer comando:

1. `CLAUDE.md` ← este arquivo
2. `/docs/memory/long_term.md` — progresso e contexto acumulado
3. `/docs/memory/decisions.md` — decisões arquiteturais tomadas
4. `/docs/sessions/active.md` — estado da última sessão

Após a leitura, apresentar ao usuário um resumo de **3 linhas**:

- O que foi feito na última sessão
- Qual o estado atual do projeto
- Qual o próximo passo recomendado

---

## End of Session — Encerramento Obrigatório

Executar sempre que o usuário disser: `"encerrar"`, `"fechar sessão"`, `"end session"`, `"fim do dia"` — ou quando uma entrega importante for concluída.

**Protocolo:**

1. Atualizar `/docs/sessions/active.md` com:
  - O que foi feito nesta sessão
  - Decisões tomadas
  - Pendências e bloqueios
  - Próximos passos
2. Arquivar a sessão: copiar `active.md` → `/docs/sessions/archive/YYYY-MM-DD_HHMM.md`
3. Recriar `active.md` limpo com o template padrão
4. Atualizar `/docs/memory/long_term.md` com progresso durável
5. Atualizar `/docs/memory/decisions.md` se alguma decisão arquitetural foi tomada

---

## Comandos Operacionais


| Comando                       | Ação                                                     |
| ----------------------------- | -------------------------------------------------------- |
| `"cold start"`                | Executar protocolo de leitura e apresentar resumo        |
| `"encerrar"` / `"fim do dia"` | Executar End of Session completo                         |
| `"status"`                    | Ler `active.md` e `long_term.md` e reportar estado atual |
| `"decisões"`                  | Ler e listar `decisions.md`                              |
| `"próximos passos"`           | Ler `active.md` e listar próximos passos                 |


---

## Estrutura de Memória

```
/docs/
├── memory/
│   ├── long_term.md      # Progresso acumulado, contexto durável
│   └── decisions.md      # Decisões arquiteturais e seus motivos
└── sessions/
    ├── active.md         # Sessão atual (sempre existe, uma por vez)
    └── archive/          # Sessões encerradas (YYYY-MM-DD_HHMM.md)
```

---

---

# Design System Rules — Portal do Cliente

## Stack

- **Framework:** React + TypeScript + Vite
- **Estilo:** Tailwind CSS v4 (`@import 'tailwindcss'` — sem `tailwind.config.js`)
- **Componentes UI:** Radix UI primitives + shadcn/ui pattern com CVA (`class-variance-authority`)
- **Ícones:** `lucide-react` — NUNCA instalar outras bibliotecas de ícones
- **Fonte:** Poppins (carregada via `src/styles/fonts.css`)
- **Figma Design System:** `Design System - Teste [Radix]` — file key `aYVvwo3llX85irnjON7nVt`

---

## Figma MCP — Fluxo Obrigatório

Ao implementar qualquer componente ou tela a partir do Figma, siga **sempre** esta sequência:

1. Chame `get_design_context` com o `nodeId` e `fileKey` do nó a implementar
2. Se a resposta for muito grande, chame `get_metadata` para o mapa de nós e depois `get_design_context` apenas nos nós necessários
3. Use o screenshot retornado como referência visual de paridade 1:1
4. Adapte o código gerado (React + Tailwind) às convenções deste projeto — **nunca copie o código gerado diretamente**
5. Valide visualmente contra o screenshot antes de marcar como concluído

**Extração de IDs a partir de URLs Figma:**
`https://figma.com/design/:fileKey/:name?node-id=196-27608` → `nodeId = "196:27608"`, `fileKey = "EJ1yZNlnpYPREt76Fypnyz"`

---

## Tokens de Design — Mapeamento Figma → Projeto

Os tokens do Figma DS usam a nomenclatura `var(--tokens/...)`, `var(--typography/...)`, `var(--spacing/...)`, `var(--radius/...)`.
Mapeie-os sempre para as CSS variables do projeto (`src/styles/theme.css`) ou classes Tailwind equivalentes.

### Cores — CSS Variables (`src/styles/theme.css`)


| Token Figma                     | CSS Variable do Projeto                        | Valor (light)                                              |
| ------------------------------- | ---------------------------------------------- | ---------------------------------------------------------- |
| `Tokens/Colors/page-background` | `--background` / `bg-background`               | `#ffffff`                                                  |
| `Tokens/Colors/surface`         | —                                              | `rgba(255,255,255,0.9)` → use `bg-[rgba(255,255,255,0.9)]` |
| `Tokens/Colors/card`            | `--card` / `bg-card`                           | `#f9f9fb`                                                  |
| `Tokens/Text/heading`           | `--foreground` / `text-foreground`             | `#1c2024`                                                  |
| `Tokens/Text/body`              | `--muted-foreground` / `text-muted-foreground` | `#60646c`                                                  |
| `Tokens/Border/default`         | `--border` / `border-border`                   | `#d9d9e0`                                                  |
| `Tokens/Border/focus`           | `--ring` / `ring`                              | `#03867b`                                                  |
| `Colors/Accent/9`               | `--primary` / `bg-primary`                     | `#12a594` (dark) / `#03867b` (light)                       |
| `Colors/Accent/accent-contrast` | `--primary-foreground`                         | `#ffffff`                                                  |
| `--secondary`                   | `--secondary`                                  | `rgba(0,0,51,0.06)`                                        |
| `--destructive`                 | `--destructive`                                | `#e5484d`                                                  |


> **IMPORTANTE:** Nunca hardcode hexadecimais de cor que existam como CSS variables. Use sempre as classes Tailwind semânticas (`bg-primary`, `text-foreground`, `border-border`, etc.) ou, quando necessário usar um valor específico do Figma sem equivalente no tema, use o valor literal (`bg-[#12a594]`).

#### Cores Semânticas Literais (sem equivalente em CSS var — usar literais)


| Token Figma                        | Valor                  | Uso                     |
| ---------------------------------- | ---------------------- | ----------------------- |
| `Colors/Neutral/neutral/11`        | `#60646c`              | Texto secundário/corpo  |
| `Colors/Neutral/neutral-alpha/3`   | `rgba(0,0,51,0.06)`    | Fundos sutis            |
| `Colors/Neutral/neutral-alpha/6`   | `rgba(0,0,47,0.15)`    | Bordas suaves           |
| `Colors/Neutral/neutral-alpha/8`   | `rgba(0,8,48,0.27)`    | Bordas de inputs/botões |
| `Colors/Neutral/neutral-alpha/11`  | `rgba(0,7,20,0.62)`    | Texto em callouts       |
| `Colors/Semantic/success-alpha/3`  | `rgba(0,164,51,0.1)`   | Badge verde fundo       |
| `Colors/Semantic/success-alpha/11` | `rgba(0,113,63,0.87)`  | Badge verde texto       |
| `Colors/Semantic/error-alpha/3`    | `rgba(243,0,13,0.08)`  | Badge vermelho fundo    |
| `Colors/Semantic/error-alpha/11`   | `rgba(196,0,6,0.83)`   | Badge vermelho texto    |
| `Colors/Semantic/warning-alpha/3`  | `rgba(255,222,0,0.24)` | Badge amarelo fundo     |
| `Colors/Semantic/warning-alpha/11` | `#ab6400`              | Badge amarelo texto     |
| `Colors/Semantic/info-alpha/3`     | `rgba(0,179,238,0.12)` | Badge azul fundo        |
| `Colors/Semantic/info-alpha/11`    | `#00749e`              | Badge azul texto        |
| `Colors/Accent/accent-alpha/3`     | `rgba(0,71,241,0.07)`  | Badge azul accent fundo |
| `Colors/Accent/accent-alpha/11`    | `rgba(0,43,183,0.77)`  | Badge azul accent texto |


### Tipografia

O Figma DS usa escala numérica de 1–9. Mapeamento:


| Token Figma              | Tamanho | Line-height | Tailwind                     |
| ------------------------ | ------- | ----------- | ---------------------------- |
| `Typography/Font size/1` | 12px    | 16px        | `text-[12px] leading-[16px]` |
| `Typography/Font size/2` | 14px    | 20px        | `text-[14px] leading-[20px]` |
| `Typography/Font size/3` | 16px    | 24px        | `text-base leading-6`        |
| `Typography/Font size/4` | 18px    | 26px        | `text-[18px] leading-[26px]` |
| `Typography/Font size/5` | 20px    | 28px        | `text-[20px] leading-7`      |
| `Typography/Font size/6` | 24px    | 30px        | `text-[24px] leading-[30px]` |
| `Typography/Font size/7` | 28px    | 36px        | `text-[28px] leading-9`      |
| `Typography/Font size/8` | 35px    | 40px        | `text-[35px] leading-10`     |
| `Typography/Font size/9` | 60px    | 60px        | `text-[60px] leading-[60px]` |



| Token Figma                      | Peso | Tailwind      |
| -------------------------------- | ---- | ------------- |
| `Typography/Font weight/light`   | 300  | `font-light`  |
| `Typography/Font weight/regular` | 400  | `font-normal` |
| `Typography/Font weight/medium`  | 500  | `font-medium` |
| `Typography/Font weight/bold`    | 700  | `font-bold`   |



| Token Figma                   | Letter-spacing | Tailwind             |
| ----------------------------- | -------------- | -------------------- |
| `Typography/Letter spacing/1` | 0.04px         | `tracking-[0.04px]`  |
| `Typography/Letter spacing/2` | 0px            | `tracking-[0px]`     |
| `Typography/Letter spacing/4` | -0.04px        | `tracking-[-0.04px]` |
| `Typography/Letter spacing/5` | -0.06px        | `tracking-[-0.06px]` |
| `Typography/Letter spacing/6` | -0.1px         | `tracking-[-0.1px]`  |


### Espaçamento


| Token Figma         | Valor | Tailwind equivalente              |
| ------------------- | ----- | --------------------------------- |
| `Spacing/space-xs`  | 4px   | `gap-1` / `p-1` / `py-1` / `px-1` |
| `Spacing/space-sm`  | 8px   | `gap-2` / `p-2`                   |
| `Spacing/space-md`  | 12px  | `gap-3` / `p-3`                   |
| `Spacing/space-lg`  | 16px  | `gap-4` / `p-4`                   |
| `Spacing/space-xl`  | 24px  | `gap-6` / `p-6`                   |
| `Spacing/space-2xl` | 32px  | `gap-8` / `p-8`                   |
| `Spacing/space-3xl` | 40px  | `gap-10` / `p-10`                 |


> Quando o Figma retornar valores de espaçamento que não mapeiem para uma classe Tailwind limpa, use valores literais: `gap-[16px]`, `p-[12px]`, etc.

### Border Radius


| Token Figma                 | Valor  | CSS Variable      | Tailwind                        |
| --------------------------- | ------ | ----------------- | ------------------------------- |
| `Radius/2` / `Radius/2-max` | 4px    | `--radius-button` | `rounded-[4px]` ou `rounded-sm` |
| `Radius/3` / `Radius/3-max` | 6px    | `--radius`        | `rounded-md`                    |
| `Radius/4`                  | 8px    | `--radius-card`   | `rounded-lg`                    |
| `Radius/5`                  | 12px   | `--radius-large`  | `rounded-xl`                    |
| `Radius/6`                  | 16px   | —                 | `rounded-2xl`                   |
| `Radius/full`               | 9999px | —                 | `rounded-full`                  |


> **REGRA CRÍTICA de border-radius:**
>
> - Containers externos de cards, modais, seções → **sempre `rounded-2xl`** (Radius/6 = 16px)
> - Cards internos, inputs, badges, botões secundários → `**rounded-lg**` (Radius/4 = 8px)
> - Botões de ação primários (pill) → `**rounded-full**` (Radius/full)
> - Badges pequenos, checkboxes → `**rounded-[4px]**` (Radius/2)
> - Nunca omitir border-radius em componentes que o Figma especifica

### Sombras


| Token Figma        | Valor                                                                                       | Tailwind                                                                                                       |
| ------------------ | ------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `Shadows/shadow-3` | `0px 4px 16px rgba(0,0,0,0.1), 0px 3px 12px rgba(0,0,0,0.1), 0px 2px 3px rgba(0,0,51,0.06)` | `shadow-[0px_4px_16px_0px_rgba(0,0,0,0.1),0px_3px_12px_0px_rgba(0,0,0,0.1),0px_2px_3px_0px_rgba(0,0,51,0.06)]` |


---

## Estrutura do Projeto

```
src/
├── app/
│   ├── components/
│   │   ├── ui/           # Componentes base shadcn/ui (Button, Badge, Input, Dialog…)
│   │   ├── figma/        # Componentes gerados/adaptados do Figma
│   │   ├── Header.tsx    # Header global (BrandLogo, etc.)
│   │   └── Footer.tsx    # Footer global
│   ├── pages/            # Páginas (FlightResults, Payment, etc.)
│   └── routes.tsx        # Definição de rotas React Router
├── styles/
│   ├── index.css         # Entry point de estilos
│   ├── tailwind.css      # Configuração Tailwind v4
│   ├── theme.css         # CSS Variables (tokens do projeto)
│   └── fonts.css         # Import de fontes (Poppins)
└── imports/              # Assets/SVGs importados do Figma (não editar manualmente)
```

---

## Regras de Componentes

### Componentes UI (`src/app/components/ui/`)

- **SEMPRE** verifique se o componente já existe em `src/app/components/ui/` antes de criar um novo
- Os componentes seguem o padrão **shadcn/ui**: Radix UI primitive + CVA + `cn()` utility
- Variantes são definidas com `cva()` — nunca com `if/else` inline ou classes condicionais manuais
- Todo componente aceita `className` para composição
- Use `cn()` de `./utils` para mesclar classes

```tsx
// Padrão correto de componente
import { cn } from "./utils";
import { cva, type VariantProps } from "class-variance-authority";

const componentVariants = cva("base-classes", {
  variants: {
    variant: { default: "...", secondary: "..." },
    size: { sm: "...", md: "...", lg: "..." },
  },
  defaultVariants: { variant: "default", size: "md" },
});

function MyComponent({ className, variant, size, ...props }) {
  return <div className={cn(componentVariants({ variant, size }), className)} {...props} />;
}
```

### Componentes disponíveis em `src/app/components/ui/`

`Accordion`, `Alert`, `AlertDialog`, `Avatar`, `Badge`, `Breadcrumb`, `Button`, `Calendar`, `Card`, `Carousel`, `Checkbox`, `Collapsible`, `Command`, `ContextMenu`, `Dialog`, `Drawer`, `DropdownMenu`, `Form`, `HoverCard`, `Input`, `InputOTP`, `Label`, `Menubar`, `NavigationMenu`, `Pagination`, `Popover`, `Progress`, `RadioGroup`, `ResizablePanelGroup`, `ScrollArea`, `Select`, `Separator`, `Sheet`, `Sidebar`, `Skeleton`, `Slider`, `Sonner`, `Switch`, `Table`, `Tabs`, `Textarea`, `Toggle`, `ToggleGroup`, `Tooltip`

---

## Regras de Estilização

1. **IMPORTANTE:** Nunca hardcode cores que existam como CSS variable — use sempre as classes semânticas Tailwind (`bg-primary`, `text-foreground`, `border-border`)
2. **IMPORTANTE:** Para valores que não têm equivalente em CSS var (cores literais do Figma), use classes arbitrárias: `text-[#60646c]`, `bg-[rgba(0,0,51,0.06)]`
3. Use Tailwind utility classes — nunca `style={}` inline, exceto para valores verdadeiramente dinâmicos (ex: cores de companhias aéreas vindas de dados)
4. Sombras compostas → sempre use `shadow-[...]` com o valor literal do Figma
5. **Nunca** adicione border-radius com `style={{borderRadius}}` — use classes Tailwind
6. A fonte `Poppins` é aplicada globalmente via `body { font-family: var(--font-family-poppins) }` — não é necessário declarar em cada componente

---

## Regras de Ícones

- **SEMPRE** use ícones de `lucide-react`
- **NUNCA** instale outras bibliotecas de ícones
- **NUNCA** use os assets de ícone retornados pelo Figma MCP (URLs de imagem) — substitua pelo ícone equivalente do lucide-react
- Tamanhos padrão: `size={16}` (small), `size={18}` (medium), `size={24}` (large)
- `strokeWidth={1.5}` é o padrão do design system — use sempre que não especificado

```tsx
// Correto
import { PlaneTakeoff, ArrowRight, X } from "lucide-react";
<PlaneTakeoff size={16} color="#60646c" strokeWidth={1.5} />

// Errado — nunca fazer
<img src="https://figma.com/api/mcp/asset/..." />
```

---

## Regras de Layout

- **Layout padrão de página:** `min-h-screen flex flex-col bg-[#f9f9fb]`
- **Container de conteúdo:** `w-full max-w-[1440px] mx-auto px-[32px] py-[32px]`
- **Dois colunas (sidebar + conteúdo):** `flex gap-[32px] items-start`
- **Sidebar de filtros:** `w-[240px] shrink-0 sticky top-[24px]`
- Use `flexbox` como padrão — `grid` apenas quando o layout for genuinamente bidimensional
- Nunca use `position: absolute` para layout — apenas para elementos de sobreposição (modais, tooltips, dropdowns)

### Modais / Overlays

```tsx
// Padrão de modal
<div className="fixed inset-0 z-50 flex items-center justify-center" onClick={onClose}>
  <div className="absolute inset-0 bg-[rgba(0,0,0,0.5)]" />  {/* backdrop */}
  <div
    className="relative bg-white rounded-2xl flex flex-col gap-[16px] p-[16px] w-[570px] max-h-[90vh] overflow-y-auto shadow-[...]"
    onClick={(e) => e.stopPropagation()}
  >
    {/* conteúdo */}
  </div>
</div>
```

---

## Convenções de Código

- **Componentes:** PascalCase — `FlightResultRow`, `DateCarousel`
- **Funções utilitárias:** camelCase — `formatDateRange`, `fmt12h`
- **Props de callback:** prefixo `on` — `onClose`, `onSelect`, `onAddFlight`
- **Estados booleanos:** prefixo `is`/`has` — `isSelected`, `hasCabinBag`
- **Interfaces de tipo:** sufixo `State` para estados de formulário/filtro, `Result` para dados — `FilterState`, `FlightResult`
- Componentes internos de uma página (não reutilizáveis) ficam no próprio arquivo da página
- Componentes reutilizáveis entre páginas vão em `src/app/components/`

---

## Regras Específicas do Design System Figma

### Typography/Font family

O Figma DS usa `'Poppins:Medium'`, `'Poppins:Light'`, `'Poppins:Regular'` como font-family nos tokens.
No projeto, a Poppins é global — aplique apenas `font-light`, `font-normal`, `font-medium`, `font-bold`.

### Nomenclatura de tokens no código gerado pelo Figma MCP

O código gerado pelo MCP usa variáveis CSS como `var(--tokens\/colors\/surface)`, `var(--spacing\/space-lg)`, etc.
**Sempre substitua** essas variáveis pelas equivalentes do projeto ou por valores literais Tailwind:


| Código gerado (MCP)                                    | Substituto no projeto                       |
| ------------------------------------------------------ | ------------------------------------------- |
| `var(--tokens\/colors\/page-background,white)`         | `bg-white` ou `bg-background`               |
| `var(--tokens\/colors\/surface,rgba(255,255,255,0.9))` | `bg-[rgba(255,255,255,0.9)]`                |
| `var(--spacing\/space-lg,16px)`                        | `gap-4` / `p-4` / `gap-[16px]`              |
| `var(--spacing\/space-xl,24px)`                        | `gap-6` / `p-6` / `gap-[24px]`              |
| `var(--radius\/6,16px)`                                | `rounded-2xl`                               |
| `var(--radius\/full,9999px)`                           | `rounded-full`                              |
| `var(--colors\/accent\/accent\/9,#12a594)`             | `bg-[#12a594]` ou `bg-primary` (dark)       |
| `var(--tokens\/text\/heading,#1c2024)`                 | `text-foreground` ou `text-[#1c2024]`       |
| `var(--tokens\/text\/body,#60646c)`                    | `text-muted-foreground` ou `text-[#60646c]` |
| `var(--tokens\/border\/default,#d9d9e0)`               | `border-border` ou `border-[#d9d9e0]`       |


---

## Assets e Imagens

- Assets estáticos ficam em `public/`
- SVGs importados do Figma ficam em `src/imports/svg-*.ts` — não editar manualmente
- **IMPORTANTE:** Se o Figma MCP retornar uma URL `https://www.figma.com/api/mcp/asset/...` para um asset de imagem, use essa URL diretamente — ela é válida por 7 dias
- **NUNCA** crie placeholders se o asset estiver disponível
- **NUNCA** instale bibliotecas de ícones adicionais — use `lucide-react`

---

## Anti-Padrões — Nunca Fazer

- ❌ Hardcodar `#12a594`, `#03867b`, `#1c2024`, `#60646c` onde existe CSS var semântica
- ❌ Usar `style={{ borderRadius: 'Xpx' }}` — usar classes Tailwind
- ❌ Omitir `rounded-2xl` em containers principais (modais, cards de seção, carrosséis)
- ❌ Copiar diretamente o código gerado pelo Figma MCP sem adaptar à stack do projeto
- ❌ Usar `position: absolute` para layout de página
- ❌ Instalar novas dependências de ícones ou UI sem necessidade
- ❌ Criar componentes novos se já existe um equivalente em `src/app/components/ui/`
- ❌ Usar `<img src={figmaAssetUrl}>` para ícones — substituir sempre pelo equivalente lucide-react
- ❌ Deixar `useRef` ou outros hooks importados sem uso
- ❌ Adicionar comentários, JSDoc ou docstrings em código que não foi modificado
- ❌ Tomar decisões arquiteturais sem registrar em `/docs/memory/decisions.md`
- ❌ Encerrar sessão sem executar o protocolo End of Session


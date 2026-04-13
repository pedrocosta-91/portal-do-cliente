# Tokens de Design — Portal do Cliente

**Última atualização:** Abril 2026  
**Figma DS:** Design System - Teste [Radix] — file key `aYVvwo3llX85irnjON7nVt`  
**Fonte dos valores:** arquivos JSON exportados do Figma (`/JSON Design System/`)  
**Responsável:** Pedro Costa

---

## Estrutura de tokens

O DS usa 4 camadas de variáveis:

```
Scaling (Mode 1)         → valores numéricos brutos (espaçamento, radius)
Color scheme (Light/Dark) → escala de cores Radix (Slate, Teal, Red, Green, Yellow, Sky...)
Theme ✦ (por instância)  → mapeamento das cores da instância → scale Radix
                            Trib Pass → Teal  |  Sistema → Indigo  |  Voalá → (own)
Tokens                   → tokens semânticos (surface, text, border, icon...)
```

> Os valores abaixo refletem o tema **Trib Pass** (100% scaling). Outros temas sobrescrevem a paleta de `Colors/Primary` — tudo mais é igual.

---

## Cores — Tokens Semânticos

> **Regra:** usar sempre as classes Tailwind semânticas quando há equivalente. Nunca hardcodar hexadecimais que existam como CSS variable.

### Surface & Background


| Token Figma                        | CSS Variable   | Tailwind                     | Valor (Trib Pass)       | Mapeamento interno |
| ---------------------------------- | -------------- | ---------------------------- | ----------------------- | ------------------ |
| `Tokens/Colors/page-background`    | `--background` | `bg-background`              | `#ffffff`               | `white`            |
| `Tokens/Surface/page`              | —              | `bg-[#fcfcfd]`               | `#fcfcfd`               | `Neutral.1`        |
| `Tokens/Surface/card`              | `--card`       | `bg-card`                    | `#f9f9fb`               | `Neutral.2`        |
| `Tokens/Surface/card-Transparancy` | —              | `bg-[rgba(255,255,255,0.8)]` | `rgba(255,255,255,0.8)` | White Alpha 10     |
| `Tokens/Colors/overlay`            | —              | `bg-[rgba(0,8,48,0.27)]`     | `rgba(0,8,48,0.27)`     | Neutral Alpha 8    |
| `Tokens/Colors/accent-surface`     | —              | —                            | `Colors/Accent Alpha/2` | alias              |


### Texto


| Token Figma             | CSS Variable         | Tailwind                | Valor (Trib Pass) | Mapeamento interno |
| ----------------------- | -------------------- | ----------------------- | ----------------- | ------------------ |
| `Tokens/Text/heading`   | `--foreground`       | `text-foreground`       | `#1c2024`         | `Neutral.12`       |
| `Tokens/Text/body`      | `--muted-foreground` | `text-muted-foreground` | `#60646c`         | `Neutral.11`       |
| `Tokens/Text/on-action` | —                    | `text-white`            | `#ffffff`         | `white`            |
| `Tokens/Text/primary`   | —                    | `text-[#008573]`        | `#008573`         | `Primary.11`       |


### Bordas


| Token Figma             | CSS Variable | Tailwind           | Valor (Trib Pass) | Mapeamento interno |
| ----------------------- | ------------ | ------------------ | ----------------- | ------------------ |
| `Tokens/Border/default` | `--border`   | `border-border`    | `#d9d9e0`         | `Neutral.6`        |
| `Tokens/Border/hover`   | —            | `border-[#cdced6]` | `#cdced6`         | `Neutral.7`        |
| `Tokens/Border/focus`   | `--ring`     | `ring`             | `#03867b`         | `Primary.8`        |


### Ação / Primary


| Token Figma                           | CSS Variable           | Tailwind                  | Valor (Trib Pass) | Mapeamento interno |
| ------------------------------------- | ---------------------- | ------------------------- | ----------------- | ------------------ |
| `Tokens/Surface/action-primary`       | `--primary`            | `bg-primary`              | `#12a594`         | `Primary.9`        |
| `Tokens/Surface/action-primary-hover` | —                      | `bg-[#0d9b8a]`            | `#0d9b8a`         | `Primary.10`       |
| `Tokens/Icons/primary`                | —                      | `text-[#008573]`          | `#008573`         | `Primary.11`       |
| `Tokens/Colors/accent-contrast`       | `--primary-foreground` | `text-primary-foreground` | `#ffffff`         | white-contrast     |


### Feedback semântico


| Token Figma                 | CSS Variable    | Tailwind         | Valor (Trib Pass) | Uso                      |
| --------------------------- | --------------- | ---------------- | ----------------- | ------------------------ |
| `Colors/Semantic/Error/9`   | `--destructive` | `bg-destructive` | `#e5484d`         | Erros, estado destrutivo |
| `Colors/Semantic/Success/9` | —               | `bg-[#30a46c]`   | `#30a46c`         | Badge / estado success   |
| `Colors/Semantic/Warning/9` | —               | `bg-[#ffc53d]`   | `#ffc53d`         | Badge / estado warning   |


---

## Cores — Literais (sem CSS variable — usar valor direto)

### Escala Neutral (Slate) — valores completos


| Step         | Hex       | Uso típico                             |
| ------------ | --------- | -------------------------------------- |
| `Neutral.1`  | `#fcfcfd` | Surface page                           |
| `Neutral.2`  | `#f9f9fb` | Card background (`--card`)             |
| `Neutral.3`  | `#f0f0f3` | Hover sutil em fundo claro             |
| `Neutral.4`  | `#e8e8ec` | Background de cards de resultado (voo) |
| `Neutral.5`  | `#e0e1e6` | Bordas internas sutis                  |
| `Neutral.6`  | `#d9d9e0` | Border padrão (`--border`)             |
| `Neutral.7`  | `#cdced6` | Border hover                           |
| `Neutral.8`  | `#b9bbc6` | Border disabled / ícones desabilitados |
| `Neutral.9`  | `#8b8d98` | Texto placeholder                      |
| `Neutral.10` | `#80838d` | Texto placeholder darker               |
| `Neutral.11` | `#60646c` | Texto body (`--muted-foreground`)      |
| `Neutral.12` | `#1c2024` | Texto heading (`--foreground`)         |


### Escala Primary (Teal — Trib Pass) — valores completos


| Step         | Hex       | Uso típico                      |
| ------------ | --------- | ------------------------------- |
| `Primary.1`  | `#f3fbf9` | Background accent sutil         |
| `Primary.2`  | `#e1f7f4` | Hover accent fundo              |
| `Primary.3`  | `#d0f2ec` | Background de chips/tags accent |
| `Primary.7`  | `#3a978b` | Ícone accent médio              |
| `Primary.8`  | `#03867b` | Ring / focus border (`--ring`)  |
| `Primary.9`  | `#12a594` | Botão primário (`--primary`)    |
| `Primary.10` | `#0d9b8a` | Hover do botão primário         |
| `Primary.11` | `#008573` | Texto / ícone primary           |
| `Primary.12` | `#0d3d38` | Texto primary escuro            |


> O Trib Pass usa **Teal** como cor primária. Sistema usa **Indigo** (`#3e63dd`). A troca é automática via variável `Colors/Accent`.

### Neutral Alpha (overlays e fundos sutis)


| Token Figma                       | Valor               | Uso                             |
| --------------------------------- | ------------------- | ------------------------------- |
| `Colors/Neutral/Neutral Alpha/3`  | `rgba(0,0,51,0.06)` | Fundos sutis (badges, chips)    |
| `Colors/Neutral/Neutral Alpha/6`  | `rgba(0,0,47,0.15)` | Bordas suaves                   |
| `Colors/Neutral/Neutral Alpha/8`  | `rgba(0,8,48,0.27)` | Bordas de inputs / overlay leve |
| `Colors/Neutral/Neutral Alpha/11` | `rgba(0,7,20,0.62)` | Texto em callouts escuros       |


### Semantic — Cores sólidas para badges e estados


| Token Figma                  | Hex       | Uso                   |
| ---------------------------- | --------- | --------------------- |
| `Colors/Semantic/Error/3`    | `#feebec` | Badge error fundo     |
| `Colors/Semantic/Error/9`    | `#e5484d` | Ícone / borda error   |
| `Colors/Semantic/Error/11`   | `#ce2c31` | Texto error           |
| `Colors/Semantic/Success/3`  | `#e6f6eb` | Badge success fundo   |
| `Colors/Semantic/Success/9`  | `#30a46c` | Ícone / borda success |
| `Colors/Semantic/Success/11` | `#218358` | Texto success         |
| `Colors/Semantic/Warning/3`  | `#fff7c2` | Badge warning fundo   |
| `Colors/Semantic/Warning/9`  | `#ffc53d` | Ícone / borda warning |
| `Colors/Semantic/Warning/11` | `#ab6400` | Texto warning         |
| `Colors/Semantic/Info/3`     | `#e1f6fd` | Badge info fundo      |
| `Colors/Semantic/Info/9`     | `#7ce2fe` | Ícone / borda info    |
| `Colors/Semantic/Info/11`    | `#00749e` | Texto info            |


### Semantic Alpha (para badges com transparência)

> Usar quando o componente precisa de fundo semi-transparente sobre outras cores.


| Token Figma                        | Valor                  | Uso                              |
| ---------------------------------- | ---------------------- | -------------------------------- |
| `Colors/Semantic/success-alpha/3`  | `rgba(0,164,51,0.1)`   | Badge verde fundo translúcido    |
| `Colors/Semantic/success-alpha/11` | `rgba(0,113,63,0.87)`  | Badge verde texto                |
| `Colors/Semantic/error-alpha/3`    | `rgba(243,0,13,0.08)`  | Badge vermelho fundo translúcido |
| `Colors/Semantic/error-alpha/11`   | `rgba(196,0,6,0.83)`   | Badge vermelho texto             |
| `Colors/Semantic/warning-alpha/3`  | `rgba(255,222,0,0.24)` | Badge amarelo fundo translúcido  |
| `Colors/Semantic/warning-alpha/11` | `#ab6400`              | Badge amarelo texto              |
| `Colors/Semantic/info-alpha/3`     | `rgba(0,179,238,0.12)` | Badge azul fundo translúcido     |
| `Colors/Semantic/info-alpha/11`    | `#00749e`              | Badge azul texto                 |


---

## Tipografia

**Fonte:** Poppins (global via `body { font-family: var(--font-family-poppins) }`)  
**Pesos disponíveis:** 300 (light) · 400 (regular) · 500 (medium) · 700 (bold)

### Escala de tamanhos


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


### Pesos


| Token     | Peso | Tailwind      |
| --------- | ---- | ------------- |
| `light`   | 300  | `font-light`  |
| `regular` | 400  | `font-normal` |
| `medium`  | 500  | `font-medium` |
| `bold`    | 700  | `font-bold`   |


---

## Espaçamento

> Fonte: `Spacing` no JSON do Figma, com scaling `100%`.


| Token Figma   | Valor | Tailwind                  |
| ------------- | ----- | ------------------------- |
| `space-none`  | 0     | `gap-0` / `p-0`           |
| `space-xs`    | 4px   | `gap-1` / `p-1`           |
| `space-sm`    | 8px   | `gap-2` / `p-2`           |
| `space-md`    | 12px  | `gap-3` / `p-3`           |
| `space-md 2`  | 14px  | `gap-[14px]` / `p-[14px]` |
| `space-lg`    | 16px  | `gap-4` / `p-4`           |
| `space-xl`    | 24px  | `gap-6` / `p-6`           |
| `space-2xl`   | 32px  | `gap-8` / `p-8`           |
| `space-3xl`   | 40px  | `gap-10` / `p-10`         |
| `space-4xl`   | 48px  | `gap-12` / `p-12`         |
| `space-4.5xl` | 56px  | `gap-14` / `p-14`         |
| `space-5xl`   | 64px  | `gap-16` / `p-16`         |


### Alturas de componentes (Tokens/Space)


| Token Figma                    | Valor              | Uso                |
| ------------------------------ | ------------------ | ------------------ |
| `Tokens/Space/button-height-1` | 24px (`space-xl`)  | Botão pequeno      |
| `Tokens/Space/button-height-2` | 32px (`space-2xl`) | Botão médio        |
| `Tokens/Space/button-height-3` | 40px (`space-3xl`) | Botão grande       |
| `Tokens/Space/button-height-4` | 48px (`space-4xl`) | Botão extra grande |


---

## Border Radius

> Fonte: `Radius/Mode 1.tokens.json` (grupo **Full**, scaling 100%).


| Contexto                                    | Token Figma         | Valor  | Tailwind        |
| ------------------------------------------- | ------------------- | ------ | --------------- |
| Containers externos (cards, modais, seções) | `Radius/6` (Full.6) | 16px   | `rounded-2xl`   |
| Cards internos, thumbnails                  | `Radius/5` (Full.5) | 12px   | `rounded-xl`    |
| Inputs, imagens internas, chips             | `Radius/4` (Full.4) | 8px    | `rounded-lg`    |
| Botões secundários, tags                    | `Radius/3` (Full.3) | 6px    | `rounded-md`    |
| Badges, checkboxes                          | `Radius/2` (Full.2) | 4px    | `rounded-[4px]` |
| Botões de ação primários (pill)             | `Radius/full` (max) | 9999px | `rounded-full`  |


> **Regra crítica:** nunca omitir border-radius em componentes que o Figma especifica. Nunca usar `style={{ borderRadius }}`.

---

## Sombras


| Token Figma        | Tailwind                                                                                                       |
| ------------------ | -------------------------------------------------------------------------------------------------------------- |
| `Shadows/shadow-3` | `shadow-[0px_4px_16px_0px_rgba(0,0,0,0.1),0px_3px_12px_0px_rgba(0,0,0,0.1),0px_2px_3px_0px_rgba(0,0,51,0.06)]` |


---

## Ícones

**Biblioteca:** `lucide-react` — exclusivamente. Nunca instalar outras libs de ícones.


| Tamanho     | Uso                            | Props               |
| ----------- | ------------------------------ | ------------------- |
| `size={16}` | Small (labels, inline, badges) | `strokeWidth={1.5}` |
| `size={18}` | Medium (botões, campos)        | `strokeWidth={1.5}` |
| `size={24}` | Large (destaques, navegação)   | `strokeWidth={1.5}` |


---

## White-label — Tokens por instância

O DS suporta múltiplos temas via a coleção **Theme ✦**. Os tokens abaixo mudam por instância:


| Instância     | `Colors/Primary` (step 9)   | Base Radix |
| ------------- | --------------------------- | ---------- |
| **Trib Pass** | `#12a594` (Teal)            | Teal       |
| **Sistema**   | `#3e63dd` (Indigo)          | Indigo     |
| **Trib**      | (ver Trib.tokens.json)      | —          |
| **Voalá**     | (ver Voalá.tokens.json)     | —          |
| **Meu Clube** | (ver Meu Clube.tokens.json) | —          |


> Todos os tokens semânticos (`--primary`, `--ring`, `--primary-foreground`) são automaticamente atualizados ao trocar o tema. O código NÃO deve hardcodar `#12a594` — deve usar `bg-primary`.

### Variáveis de string por instância


| Token Figma         | Trib Pass     | Função                     |
| ------------------- | ------------- | -------------------------- |
| `Brand/Brand`       | `"Trib Pass"` | Nome do produto            |
| `Currency/Currency` | `"Tribz"`     | Label da moeda configurada |



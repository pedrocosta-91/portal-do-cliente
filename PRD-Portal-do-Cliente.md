# PRD — Portal do Cliente (White Label)

## Jornada de Hotel, Jornada de Aéreo & Área Logada — MVP 1

**Versão:** 1.0  
**Data:** Abril 2026  
**Autor:** Pedro Costa (Product Designer)  
**Status:** Pronto para desenvolvimento

---

## Índice

1. [Visão Geral do Produto](#1-visão-geral-do-produto)
2. [Stack Técnica](#2-stack-técnica)
3. [Design System & Tokens](#3-design-system--tokens)
4. [Arquitetura de Rotas](#4-arquitetura-de-rotas)
5. [Jornada de Hotel](#5-jornada-de-hotel)
  - 5.1 [Home Page](#51-home-page)
  - 5.2 [Resultados de Busca — Hotel](#52-resultados-de-busca--hotel)
  - 5.3 [Detalhe do Hotel (PDP)](#53-detalhe-do-hotel-pdp)
  - 5.4 [Pagamento — Hotel](#54-pagamento--hotel)
  - 5.5 [Confirmação de Reserva — Hotel](#55-confirmação-de-reserva--hotel)
6. [Jornada de Aéreo](#6-jornada-de-aéreo)
  - 6.1 [Resultados de Busca — Aéreo](#61-resultados-de-busca--aéreo)
  - 6.2 [Pagamento — Aéreo](#62-pagamento--aéreo)
  - 6.3 [Confirmação de Reserva — Aéreo](#63-confirmação-de-reserva--aéreo)
7. [Área Logada do Usuário](#7-área-logada-do-usuário)
  - 7.1 [Layout & Navegação da Área Logada](#71-layout--navegação-da-área-logada)
  - 7.2 [Painel de Perfil (esquerdo)](#72-painel-de-perfil-esquerdo)
  - 7.3 [Tab "Meus Dados"](#73-tab-meus-dados)
    - 7.3.1 [Formas de Pagamento](#731-formas-de-pagamento)
    - 7.3.2 [Faturamento](#732-faturamento)
    - 7.3.3 [Viajantes](#733-viajantes)
  - 7.4 [Tab "Minhas Viagens"](#74-tab-minhas-viagens)
  - 7.5 [Integração com o Fluxo de Checkout](#75-integração-com-o-fluxo-de-checkout)
8. [Componentes Compartilhados](#8-componentes-compartilhados)
9. [Regras de Negócio Globais](#9-regras-de-negócio-globais)
10. [Dados & Contratos de API](#10-dados--contratos-de-api)
11. [Critérios de Aceitação — Jornadas](#11-critérios-de-aceitação--jornadas)
12. [Critérios de Aceitação — Área Logada](#12-critérios-de-aceitação--área-logada)

---

## 1. Visão Geral do Produto

O **Portal do Cliente** é uma plataforma white-label de turismo que permite buscar, selecionar e reservar hospedagens e passagens aéreas. A plataforma é desenhada para ser consumida por diferentes produtos com regras de negócio, personas e modelos de monetização distintos — não existe uma configuração única de moeda ou público.

### Modelo white-label

Cada produto que consome a plataforma define suas próprias regras. Exemplos de instâncias já planejadas:


| Produto       | Modelo                          | Público | Moeda                 |
| ------------- | ------------------------------- | ------- | --------------------- |
| **Trib Pass** | Benefício corporativo           | B2B2C   | Tribz (moeda própria) |
| **Trib**      | SaaS de planejamento de viagens | B2C     | Tribz ou Reais        |
| **Voalá**     | Plataforma de viagens           | B2C     | Reais                 |


A moeda exibida na interface, a nomenclatura dos saldos e os métodos de pagamento disponíveis são todos parametrizáveis por instância do produto.

> O protótipo de referência utiliza **Tribz** como unidade monetária e o produto **Trib Pass** como caso de uso — isso é apenas o exemplo de apresentação do MVP 1. O código e os componentes devem ser implementados de forma a suportar outras configurações de moeda sem refatoração estrutural.

### Personas

As personas variam conforme o produto que estiver consumindo a plataforma. A implementação não deve assumir um perfil único de usuário. Como referência, os dois perfis dos produtos piloto:

- **Trib Pass (B2B2C):** Colaborador de empresa parceira que recebe benefício em Tribz e acessa o portal para resgatar viagens corporativas ou de lazer.
- **Trib (B2C):** Viajante independente que planeja e reserva viagens, podendo pagar em Tribz ou Reais dependendo do saldo disponível.

### Princípios do produto

- **Configurabilidade de moeda:** a unidade monetária primária (pontos, moeda própria, diárias ou Reais) é definida pela instância do produto. A interface deve renderizar o rótulo e o símbolo corretos conforme a configuração recebida — nunca hardcodar "Tribz" ou "R$" diretamente nos componentes.
- **Métodos de pagamento configuráveis:** dependendo do produto, o usuário pode pagar apenas com a moeda configurada, apenas em Reais, ou com uma combinação de ambos.
- **Pagamento assíncrono:** nenhuma reserva é confirmada em tempo real. O estado pós-checkout é sempre "Em processamento". Nunca exibir "Confirmado" ou "Aprovado" imediatamente — independentemente do produto.
- **White-label completo:** logo, cores, nome do produto, nomenclatura de saldo e métodos de pagamento são todos parametrizáveis por instância.

---

## 2. Stack Técnica


| Camada         | Tecnologia                   | Versão       |
| -------------- | ---------------------------- | ------------ |
| Framework      | React + TypeScript           | 18.3.1 / 5.x |
| Roteamento     | React Router                 | 7.13.0       |
| Build          | Vite                         | 6.3.5        |
| Estilo         | Tailwind CSS v4              | 4.1.12       |
| Componentes UI | Radix UI + shadcn/ui pattern | —            |
| Ícones         | lucide-react                 | 0.487.0      |
| Formulários    | React Hook Form              | 7.55.0       |
| Datas          | date-fns                     | 3.6.0        |
| Carrossel      | Embla Carousel               | 8.6.0        |
| Fonte          | Poppins (Google Fonts)       | —            |


### Regras de dependência

- **Ícones:** usar **somente** `lucide-react`. Proibido instalar outras libs de ícones.
- **Componentes UI:** verificar sempre se o componente existe em `src/app/components/ui/` antes de criar um novo. Disponíveis: `Button`, `Badge`, `Input`, `Label`, `Card`, `Tabs`, `Dialog`, `Drawer`, `Sheet`, `Select`, `Separator`, `Accordion`, `Avatar`, `Breadcrumb`, `Carousel`, `Checkbox`, `Calendar`, `Tooltip`, `Skeleton`, `Progress`, `Slider`, entre outros.
- **Cores:** nunca hardcodar hexadecimais que tenham equivalente em CSS variable semântica. Usar sempre classes Tailwind semânticas (`bg-primary`, `text-foreground`, `border-border`).

---

## 3. Design System & Tokens

> **Referência Figma:** Design System - Teste [Radix] — file key `aYVvwo3llX85irnjON7nVt`

### Paleta de cores principais


| Token Figma                     | CSS Variable         | Valor                                | Tailwind                |
| ------------------------------- | -------------------- | ------------------------------------ | ----------------------- |
| `Tokens/Colors/page-background` | `--background`       | `#ffffff`                            | `bg-background`         |
| `Tokens/Colors/card`            | `--card`             | `#f9f9fb`                            | `bg-card`               |
| `Tokens/Text/heading`           | `--foreground`       | `#1c2024`                            | `text-foreground`       |
| `Tokens/Text/body`              | `--muted-foreground` | `#60646c`                            | `text-muted-foreground` |
| `Tokens/Border/default`         | `--border`           | `#d9d9e0`                            | `border-border`         |
| `Colors/Accent/9`               | `--primary`          | `#12a594` (dark) / `#03867b` (light) | `bg-primary`            |


### Escala tipográfica


| Nível | Tamanho     | Line-height                       | Uso sugerido |
| ----- | ----------- | --------------------------------- | ------------ |
| 1     | 12px / 16px | Labels, metadados                 |              |
| 2     | 14px / 20px | Corpo secundário, labels de campo |              |
| 3     | 16px / 24px | Corpo principal                   |              |
| 4     | 18px / 26px | Subtítulos                        |              |
| 5     | 20px / 28px | Títulos de seção                  |              |
| 6     | 24px / 30px | Títulos de card                   |              |
| 7     | 28px / 36px | Títulos de página                 |              |
| 8     | 35px / 40px | Hero headings                     |              |
| 9     | 60px / 60px | Display / Hero principal          |              |


### Espaçamentos


| Token       | Valor | Tailwind         |
| ----------- | ----- | ---------------- |
| `space-xs`  | 4px   | `gap-1`, `p-1`   |
| `space-sm`  | 8px   | `gap-2`, `p-2`   |
| `space-md`  | 12px  | `gap-3`, `p-3`   |
| `space-lg`  | 16px  | `gap-4`, `p-4`   |
| `space-xl`  | 24px  | `gap-6`, `p-6`   |
| `space-2xl` | 32px  | `gap-8`, `p-8`   |
| `space-3xl` | 40px  | `gap-10`, `p-10` |


### Border-radius


| Contexto                     | Token         | Valor  | Tailwind        |
| ---------------------------- | ------------- | ------ | --------------- |
| Containers externos de cards | `Radius/6`    | 16px   | `rounded-2xl`   |
| Cards internos, inputs       | `Radius/4`    | 8px    | `rounded-lg`    |
| Botões primários (pill)      | `Radius/full` | 9999px | `rounded-full`  |
| Badges pequenos              | `Radius/2`    | 4px    | `rounded-[4px]` |


### Sombra padrão de card

```
shadow-[0px_4px_16px_0px_rgba(0,0,0,0.1),0px_3px_12px_0px_rgba(0,0,0,0.1),0px_2px_3px_0px_rgba(0,0,51,0.06)]
```

---

## 4. Arquitetura de Rotas

```
/                        → HomePage (busca + destaques)
/resultados-hotel        → Listagem de hotéis
/hotel                   → Detalhe do hotel (PDP)
/pagamento-hotel         → Checkout de hotel
/confirmacao-hotel       → Confirmação pós-checkout de hotel
/resultados-aereo        → Listagem de voos
/pagamento-aereo         → Checkout de aéreo
/confirmacao-aereo       → Confirmação pós-checkout de aéreo
/minha-conta             → Redirect para /minha-conta/perfil
/minha-conta/perfil      → Perfil do usuário (tabs: Meus Dados | Minhas Viagens)
/minha-conta/viagens/:id → Detalhe de uma viagem específica
```

### Parâmetros de URL por rota

`**/resultados-hotel` e `/hotel**`

```
?destino=Miami&checkIn=2026-03-25&checkOut=2026-03-30&adultos=2&acomodacoes=1
```

`**/pagamento-hotel**`

```
?destino=Miami&checkIn=2026-03-25&checkOut=2026-03-30&adultos=2&acomodacoes=1&noites=5
```

`**/resultados-aereo**`

```
?origem=GRU&destino=BSB&dataIda=2026-12-25&dataVolta=2026-01-03&adultos=2&tipo=idaEVolta
```

---

## 5. Jornada de Hotel

**Fluxo completo:** Home → Resultados → Detalhe (PDP) → Pagamento → Confirmação

---

### 5.1 Home Page

**Rota:** `/`  
**Arquivo:** `src/app/pages/HomePage.tsx`

#### Layout geral

- `min-h-screen flex flex-col bg-[#f9fafb]`
- Estrutura vertical: Header → Hero com Busca → Seção de Hotéis em Destaque → Seção de Promoções → Seção de Voos em Destaque → Banner Editorial → Footer

#### Header (estado deslogado)

- Logo do produto à esquerda
- Navegação central: "Passagens" · "Hospedagens" · "Aluguel de Carros" — ícone + texto
- Direita: "Criar conta" (outline) + "Login" (filled, `bg-primary`)
- Fundo branco com `border-b border-border`

#### Componente de Busca (Search Section)

Componente central da Home. Suporta alternância entre **Hotel** e **Aéreo** via tabs.

**Campos — Hotel:**


| Campo       | Tipo                   | Comportamento                         |
| ----------- | ---------------------- | ------------------------------------- |
| Destino     | Input com autocomplete | Placeholder "Para onde você vai?"     |
| Check-in    | DatePicker             | Seleção de data, formato `dd/mm/aaaa` |
| Check-out   | DatePicker             | Mínimo = Check-in + 1 dia             |
| Hóspedes    | Select / Dropdown      | Adultos + Crianças                    |
| Acomodações | Select                 | Número de quartos                     |


**Ação:** botão "Buscar" → navega para `/resultados-hotel` com todos os parâmetros na query string.

**Campos — Aéreo:**


| Campo          | Tipo                                  |
| -------------- | ------------------------------------- |
| Origem         | Input com autocomplete (IATA)         |
| Destino        | Input com autocomplete (IATA)         |
| Data de ida    | DatePicker                            |
| Data de volta  | DatePicker (condicional: ida e volta) |
| Passageiros    | Select (adultos, crianças, bebês)     |
| Tipo de viagem | Toggle: "Ida e volta" / "Somente ida" |


**Ação:** botão "Buscar" → navega para `/resultados-aereo` com parâmetros.

#### Seção Hotéis em Destaque

- Título "Hotéis em destaque" + CTA "Ver todos >" alinhado à direita
- Carrossel horizontal de `HotelCard` — 4 hotéis visíveis em desktop
- Cada `HotelCard`:
  - Imagem full-width com hover zoom (transform scale)
  - Overlay com informações: nome, localização, distância do centro
  - Badge de categoria
  - Preço exibido conforme a moeda configurada pela instância do produto
  - Rating com estrelas

#### Banner Editorial

- Full-width, altura ~280px
- Imagem de fundo (avião) + overlay gradiente escuro da esquerda para a direita
- Título "Sua próxima aventura começa aqui!" — branco, bold, alinhado à esquerda
- CTA "Reserve já!" — botão `rounded-full` com estilo outline em coral/rosa

---

### 5.2 Resultados de Busca — Hotel

**Rota:** `/resultados-hotel`  
**Arquivo:** `src/app/pages/SearchResults.tsx`

#### Layout

- Header de busca (SearchResultsHeader) com parâmetros da busca editáveis
- Conteúdo: sidebar de filtros (esquerda, 240px, sticky) + lista de resultados (direita, flex-1)

#### Header de busca (SearchResultsHeader)

- Exibe: destino · intervalo de datas · número de hóspedes · número de acomodações · noites
- Botão de edição (ícone lápis) por campo — ao clicar, abre popover inline para edição
- Ao confirmar edição, re-dispara busca (atualiza query string e re-renderiza resultados)

#### Sidebar de filtros

Componente sticky, `top-[24px]`, largura `240px`.


| Filtro       | Tipo         | Opções                                                      |
| ------------ | ------------ | ----------------------------------------------------------- |
| Preço        | Slider range | Min / Max dinâmico — unidade conforme moeda da instância    |
| Avaliação    | Checkbox     | 5★ / 4★+ / 3★+ / Qualquer                                   |
| Categoria    | Checkbox     | Hotel / Pousada / Resort / Flat                             |
| Comodidades  | Checkbox     | Wi-Fi / Piscina / Academia / Estacionamento / Café da manhã |
| Cancelamento | Toggle       | Somente com cancelamento grátis                             |


#### Lista de resultados

**Header da lista:**

- "X hotéis encontrados em [Destino]" — tipografia size-4, `text-foreground`
- Ordenação: Select → "Mais relevantes" / "Menor preço" / "Melhor avaliados" / "Mais perto do centro"
- Alert bar: "Preços calculados para [N] noites, [N] adultos, [N] acomodações" — estilo info-alpha, ícone de sino

**HotelResultCard (por resultado):**

- Layout horizontal: imagem à esquerda (240px) + conteúdo à direita
- **Imagem:** thumbnail com `rounded-2xl`; hover zoom
- **Conteúdo — bloco esquerdo:**
  - Badges de destaque: "Oferta por tempo limitado" (verde), "Apenas 2 disponíveis" (vermelho) — exibidos quando presentes
  - Nome do hotel — tipografia size-5, bold
  - Localização — ícone `MapPin` + texto
  - Distância do centro
  - Rating: badge numérico (ex: `"8.4"`) + texto (ex: `"Muito Bom"`) + estrelas
  - Features: "Cancelamento grátis" · "Pague em 12x sem juros" — ícone check verde + texto
- **Conteúdo — bloco direito (preço):**
  - Preço por noite com rótulo e unidade da moeda configurada — tipografia size-5, bold
  - Total da estadia — tipografia size-2, `text-muted-foreground`
  - CTA "Ver hotel" → navega para `/hotel` com os parâmetros de busca

**Estado vazio:** quando nenhum resultado corresponde aos filtros, exibir ilustração + texto "Nenhum hotel encontrado para os filtros selecionados. Tente ajustar sua busca."

---

### 5.3 Detalhe do Hotel (PDP)

**Rota:** `/hotel`  
**Arquivo:** `src/app/pages/HotelDetails.tsx`  
**Spec Figma:** `src/imports/pasted_text/spec-pdp-hotel-figma-make.md`

Esta é a página mais complexa da jornada. Divide-se em duas colunas: conteúdo principal (esquerda, ~848px) e card sticky de reserva (direita, ~320px).

#### Galeria de fotos

**Layout do grid (obrigatório):**

```
┌─────────────────────┬──────────┐
│                     │  foto 2  │
│      foto 1         ├──────────┤
│    (grande, ~60%)   │  foto 3  │
├────────┬────────────┴──────────┘
│ foto 4 │  foto 5  │  foto 6   
└────────┴──────────┴────────────
```

- Linha de cima: 1 foto grande (~~60% da largura) à esquerda + 2 fotos menores empilhadas verticalmente à direita (~~40%)
- Linha de baixo: 3 fotos em fila horizontal com o mesmo tamanho
- `border-radius` apenas no container externo (`rounded-2xl`); fotos internas sem radius próprio — clipping pelo container pai
- Gap entre fotos: `gap-[16px]`
- Botão "Mostrar todas as fotos" no canto inferior direito da última foto da linha de baixo: ícone `LayoutGrid` + texto branco sobre fundo semi-transparente escuro, `rounded-full`

**Galeria fullscreen (Modal):**

- Abre ao clicar em qualquer foto ou no botão
- `fixed inset-0 z-50` com backdrop `bg-black/90`
- Navegação por setas (esquerda/direita) e teclado (ArrowLeft, ArrowRight, Escape para fechar)
- Exibe contador "X / Y"

**Scroll do body:** bloqueado enquanto a galeria fullscreen está aberta (`document.body.style.overflow = 'hidden'`)

#### Bloco de Identidade do Hotel

Ordem vertical obrigatória:

1. **Nome:** tipografia size-6, `font-semibold`, `text-foreground`
2. **Estrelas:** ícones `Star` preenchidos (fill-[#fbbf24]) — quantidade conforme categoria do hotel
3. **Localização:** ícone `MapPin` + "Cidade, País. A X km do centro" — size-2, `text-muted-foreground`
4. **Check-in / Check-out:** em linha horizontal com separador `|`
  - Ícone `Clock` + "Check in: A partir das 16h"
  - Ícone `Clock` + "Check out: Até às 12h"
  - tipografia size-2, `text-muted-foreground`

#### Bloco de Avaliação

Três blocos em `flex row` com alinhamento vertical centralizado:


| Bloco    | Conteúdo                                                                             |
| -------- | ------------------------------------------------------------------------------------ |
| Esquerda | Quote editorial em itálico com aspas decorativas, fundo claro (`bg-card`)            |
| Centro   | Número da nota (ex: `"5"`) em tamanho grande + estrelas abaixo                       |
| Direita  | Badge com nota numérica em destaque + label "Muito Bom" + link "ver 809 comentários" |


#### Seção "A hospedagem oferece" (Amenities)

- Título "A hospedagem oferece" + link "Ver todo >" alinhado à direita (cor `text-primary`)
- 6 ícones em linha horizontal: Wi-Fi gratuito · Academia · Piscina · Ar condicionado · Wi-Fi 5GHz · Coworking/Lounge
- Cada item: ícone `lucide-react` (size 24) + label abaixo, centralizado
- Espaçamento: `gap-[24px]`

#### Seção "Conheça um pouco mais" (Descrição)

- Título size-5, `font-medium`
- Corpo de texto corrido em parágrafos — sem bullet points
- `line-height` e `font-size` conforme tipografia size-3

#### Seção "Importante" (Alerta)

- Container com borda esquerda grossa (4px) na cor `warning-alpha` (amarelo/amber: `rgba(255,222,0,0.24)` fundo, `#ab6400` texto)
- Título "Importante" em destaque — `font-bold`
- Corpo do texto em cor mais escura do token warning

#### Seção "É bom saber"

- Título "É bom saber" + subtítulo "Notas sobre o hotel"
- Itens em bullet points com espaçamento consistente
- tipografia size-2, `text-muted-foreground`

#### Seção "Tipos de Quarto"

**Tabs de filtragem:**

- Opções: "Todos" · "2 camas" · "1 cama"
- Estilo pill/rounded: tab ativa com fundo preenchido (`bg-primary text-white`), inativas com borda outline
- Componente `Tabs` de shadcn/ui

**Card de quarto (por tipo):**

Layout: `flex row` — foto à esquerda (thumbnail ~100×70px, `rounded-lg`) + features no centro + preço + CTA à direita


| Área             | Conteúdo                                                                                                  |
| ---------------- | --------------------------------------------------------------------------------------------------------- |
| Foto             | Imagem do quarto com `rounded-lg`, `object-cover`                                                         |
| Nome             | Título do tipo de quarto — bold, size-3                                                                   |
| Features (col 1) | Vista · Capacidade de pessoas · Condição de pagamento                                                     |
| Features (col 2) | Metragem (m²) · Número de quartos · Tipo de cama                                                          |
| Preço            | Preço na moeda configurada (bold, destaque) + preço de referência riscado (text-decoration: line-through) |
| Badge desconto   | "X% OFF" — badge verde, posicionado sobre o preço                                                         |
| Disponibilidade  | "Apenas X disponíveis" (warning) ou "Último disponível" (error) — badge condicional                       |
| CTA              | Botão "Reservar" — `bg-primary text-white rounded-full` — ao clicar navega para `/pagamento-hotel`        |


**Estados de disponibilidade:**

- `"warning"` → `bg-[rgba(255,222,0,0.24)] text-[#ab6400]`
- `"error"` → `bg-[rgba(243,0,13,0.08)] text-[rgba(196,0,6,0.83)]`

#### Seção Mapa

- Layout: lista "Nas proximidades" à esquerda + mapa à direita
- **Mapa:** placeholder retangular com pin de localização central — integração futura com Google Maps embed
- **Nas proximidades:** bullet points com nome do ponto + distância
- Título + link "Explorar no mapa >" à direita (cor `text-primary`)

#### Card Sticky de Reserva (coluna direita)

- Posição: `sticky top-[80px]` (offset para compensar o header)
- Largura: ~320px, `shrink-0`
- `rounded-2xl`, `border border-border`, `bg-white`
- Sombra: shadow padrão de card

**Conteúdo (top → bottom):**

1. **Preço:** valor na moeda configurada em destaque (size-6, bold) + "por X noites" em size-2 abaixo
2. **Campos do formulário:**
  - "Check-in" e "Check-out": labels acima de cada campo, dispostos em 2 colunas (`grid grid-cols-2 gap-2`)
  - "Hóspedes": abaixo, full-width, Select com dropdown
  - Estilo dos campos: `border border-border rounded-lg`, padding consistente
3. **Badge cancelamento:** ícone `Clock` + "Cancelamento gratuito antes de [data]" — 2 linhas, `rounded-[4px]`, borda fina
4. **CTA "Reservar":** full-width, `bg-primary text-white rounded-full h-[48px]` — ao clicar, navega para `/pagamento-hotel` com todos os parâmetros

**Parâmetros passados ao navegar:**

```
/pagamento-hotel?destino=X&checkIn=YYYY-MM-DD&checkOut=YYYY-MM-DD&adultos=N&acomodacoes=N&noites=N
```

---

### 5.4 Pagamento — Hotel

**Rota:** `/pagamento-hotel`  
**Arquivo:** `src/app/pages/Payment.tsx`

#### Layout

- Header com `SearchResultsHeader` exibindo parâmetros da busca
- Dois colunas: formulário (esquerda, ~60%) + resumo da reserva (direita, ~40%, sticky)

#### Formulário (Accordion progressivo)

O checkout é dividido em 3 seções em Accordion. Cada seção abre sequencialmente: o usuário preenche e clica em "Próximo" para avançar. Seções concluídas exibem ícone de check.

**Seção 1 — Dados Pessoais** (aberta por padrão)

Para o viajante principal + viajantes adicionais (conforme número de hóspedes):


| Campo              | Tipo                    | Validação                           |
| ------------------ | ----------------------- | ----------------------------------- |
| Nome               | Input text              | Obrigatório                         |
| Sobrenome          | Input text              | Obrigatório                         |
| Data de nascimento | Input date / DatePicker | Obrigatório, formato dd/mm/aaaa     |
| Nacionalidade      | Select                  | Obrigatório                         |
| CPF                | Input text              | Obrigatório, formato 000.000.000-00 |


Botão "Próximo" → marca seção 1 como completa, abre seção 2.

**Seção 2 — Método de Pagamento**

Os métodos disponíveis são configuráveis por instância do produto. Os possíveis são:

**Opção A — Pagar com a moeda configurada (ex: pontos, tribz, diárias):**

- Slider para definir a quantidade a usar (min: 0, max: saldo disponível)
- Exibe: valor selecionado + "Seu saldo: X [unidade]" em cinza abaixo
- Saldo restante calculado em tempo real

**Opção B — Cartão de Crédito:**


| Campo              | Tipo                                       |
| ------------------ | ------------------------------------------ |
| Número do cartão   | Input text, máscara `0000 0000 0000 0000`  |
| Nome no cartão     | Input text                                 |
| Validade           | Input text, máscara `MM/AA`                |
| CVV                | Input text, `type="password"`, 3-4 dígitos |
| Número de parcelas | Select                                     |


**Pagamento misto (moeda configurada + cartão):**

- Usuário pode usar parte na moeda configurada e o restante no cartão
- Exibir valor residual em R$ calculado em tempo real
- Disponível apenas nas instâncias do produto que permitem este modelo

Botão "Próximo" → marca seção 2 como completa, abre seção 3.

**Seção 3 — Nota Fiscal**


| Campo               | Tipo                  |
| ------------------- | --------------------- |
| CPF / CNPJ          | Input text com toggle |
| Nome / Razão Social | Input text            |
| E-mail para envio   | Input email           |


Botão "Confirmar reserva" → chama a API de checkout → navega para `/confirmacao-hotel`.

#### Card de Resumo (sticky, coluna direita)

- Thumbnail do hotel + nome + localização
- Datas: Check-in e Check-out
- Número de noites e hóspedes
- **Tabela de valores:**
  - Subtotal por quarto(s)
  - Taxas (% do subtotal)
  - **Total final** com unidade da moeda configurada — bold, destaque visual
- Badge "Cancelamento gratuito antes de [data]"

---

### 5.5 Confirmação de Reserva — Hotel

**Rota:** `/confirmacao-hotel`  
**Arquivo:** `src/app/pages/BookingConfirmation.tsx`  
**Spec Figma:** `src/imports/pasted_text/reserva-confirmacao-pos-checko.md`

> **REGRA CRÍTICA:** Esta tela reflete um estado **assíncrono**. A reserva está sendo processada, não confirmada. Nunca usar linguagem de confirmação definitiva — independentemente do produto ou instância.

#### Header (estado logado)

- Logo do produto à esquerda
- Navegação central: "Passagens" · "Hospedagens" (ativo) · "Aluguel de Carros"
- Direita: Avatar circular + "Olá, [Nome]" + ícone moeda + saldo na unidade configurada + ícone menu + ícone sino
- Fundo branco, `border-b` com sombra inferior sutil

#### Breadcrumb

- "< Voltar para busca" — link com ícone seta esquerda
- `padding-top: 24px`, `padding-bottom: 16px` a partir do header

#### Layout: duas colunas (60% / 40%)

**Coluna esquerda — Conteúdo principal:**

**Card 1 — Informações do pagamento:**

- `rounded-2xl`, borda + padding interno consistente
- Cabeçalho: título "Informações do pagamento" + botão "Imprimir" alinhado à direita (`bg-primary text-white rounded-full`, ícone impressora)
- **Tabela de itens:**
  - Header: "Itens" | "Qtd" | "Preço" | "Total"
  - Linhas dinâmicas com os itens reservados
  - Separador horizontal antes dos totais
  - Subtotal, Taxas (%), **Total Final** em bold + destaque visual
  - Valores exibidos na unidade de moeda configurada pela instância
- **Método de pagamento:**
  - Dois blocos em `flex row`:
    - Bloco esquerdo: rótulo da moeda configurada — valor bold + "Seu saldo: X" em cinza
    - Bloco direito (quando houver complemento em cartão): ícone da bandeira + "Crédito final [4 dígitos]" + valor em R$ bold + parcelamento em cinza
  - Nota fiscal: texto em cinza "Nota fiscal emitida para [Nome] ([email])"

**Card 2 — Quem vai viajar:**

- Dois blocos em `flex row` (50/50):
  - Viajante 1: label cinza + avatar + nome bold + CPF cinza
  - Viajante 2: mesma estrutura
- Separador vertical entre os blocos

**Coluna direita — Cards de resumo (sticky):**

**Card de Status:**

- `flex row`: ícone celebração à esquerda (~60px, círculo com check + decorações) + texto à direita
- Título: **"Parabéns pela sua reserva!"**
- Subtexto: **"Sua reserva está sendo processada e enviaremos a sua confirmação por email."**
- Tipografia: título bold size-5, subtexto size-2 `text-muted-foreground`

**Card de Resumo do Hotel:**

- Ícone hotel + "Hotel" (contexto)
- Nome do hotel — bold
- Localização — ícone `MapPin` + texto
- Separador horizontal
- Datas em `flex row` (50/50 com separador vertical):
  - Check-in: label cinza + data bold + horário cinza
  - Check-out: label cinza + data bold + horário cinza
- Separador horizontal
- Mini-card do hotel: foto thumbnail + nome + rating badge + localização
- Badge cancelamento: ícone `Clock` + "Cancelamento gratuito antes de [data]" — borda fina, `rounded-[4px]`

#### Banner Editorial (full-width, abaixo das colunas)

- Mesmo padrão da Home: imagem avião + overlay + título + CTA "Reserve já!"

#### Footer

- Fundo escuro (quase preto)
- Logo à esquerda + endereço + telefone + e-mail de atendimento
- 3 colunas de links à direita

---

## 6. Jornada de Aéreo

**Fluxo completo:** Home → Resultados de Voos → Pagamento → Confirmação

---

### 6.1 Resultados de Busca — Aéreo

**Rota:** `/resultados-aereo`  
**Arquivo:** `src/app/pages/FlightResults.tsx`

#### Layout

- Header de busca (FlightResultsHeader) com parâmetros editáveis
- Abaixo: Carrossel de datas (DateCarousel)
- Abaixo: Tabs "Ida" / "Volta" + lista de resultados

#### Header de busca (FlightResultsHeader)

Exibe em linha:

- Origem (IATA + cidade) → ícone avião → Destino (IATA + cidade)
- Data de ida + data de volta
- Número de passageiros
- Botão editar (ícone `Pencil`) — abre popover inline para edição dos parâmetros

#### Carrossel de datas (DateCarousel)

- 7 datas exibidas em linha, centralizadas na data selecionada (2 anteriores + atual + 4 próximas)
- Cada célula: dia da semana abreviado + "DD Mês" + menor preço disponível naquela data (na moeda configurada)
- Célula selecionada: fundo branco com sombra, altura expandida (self-stretch)
- Navegação: setas esquerda/direita
- Separadores verticais entre datas não adjacentes à selecionada
- Container: `bg-[#fcfcfd] rounded-2xl shadow-[...]`
- Ao selecionar uma data, refaz a busca e atualiza a lista de resultados

#### Tabs Ida / Volta

- Componente `Tabs` — "Ida" e "Volta"
- Exibe a lista de voos correspondente ao tab ativo
- Badge no tab com quantidade de resultados (ex: "Ida · 8 voos")
- Quando o usuário seleciona um voo de ida, o tab "Volta" fica disponível/ativo

#### FlightResultRow (card de resultado de voo)

Container: `bg-[#e8e8ec] rounded-2xl shadow-[...]`, cursor pointer, `flex col`.

**Linha superior (informações do voo):**


| Bloco               | Conteúdo                                                                                                                                   |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| Seleção + Companhia | Radio button + avatar circular com código IATA (cor da companhia) + nome da companhia + número do voo                                      |
| Rota                | Origem (IATA + horário + data) → ícone `PlaneTakeoff` → linha com duração/paradas → ícone `PlaneLanding` → Destino (IATA + horário + data) |
| Bagagem             | Ícones: `Backpack` (mão) · `Briefcase` (despachada) · `Luggage` (mala grande) — cor cinza se não incluso, cor primary se incluso           |
| Preço + CTA         | Preço na moeda configurada bold + impostos em cinza + botão "Adicionar voo"                                                                |


**Linha inferior (tags e detalhes):**

- Tags do voo: "Voo mais curto" · "Cancelamento grátis" · "Pague em 12x sem juros" — badges small
- Botão "Ver detalhes" → expande a seção de detalhes
- Separador tracejado entre linha superior e inferior

**Seção de detalhes (expandida):**

Exibida ao clicar em "Ver detalhes". Layout por classes de tarifa:


| Classe             | Bagagem inclusa           | Preço       | CTA          |
| ------------------ | ------------------------- | ----------- | ------------ |
| Econômica Light    | Só mão                    | menor preço | "Selecionar" |
| Econômica Standard | Mão + despachada          | preço médio | "Selecionar" |
| Econômica Plus     | Mão + despachada + grande | maior preço | "Selecionar" |


Linha do horário completo: ícone `PlaneTakeoff` + aeroporto origem + horário → ícone `Clock` + duração → ícone `PlaneLanding` + aeroporto destino + horário

#### Estado — Voo Selecionado

Quando o usuário clica em "Adicionar voo":

- O card do voo selecionado fica destacado (radio preenchido, borda `border-primary`)
- Aparece painel inferior com resumo: "Voo de ida selecionado: [origem] → [destino], [horário]"
- Botão "Continuar": se ida+volta, ativa o tab "Volta"; se somente ida, navega para `/pagamento-aereo`

#### Filtros (sidebar)


| Filtro             | Tipo                                        |
| ------------------ | ------------------------------------------- |
| Preço máximo       | Slider — unidade conforme moeda configurada |
| Companhia aérea    | Checkbox múltiplo                           |
| Número de paradas  | Radio: Direto / 1 parada / 2+ paradas       |
| Duração máxima     | Slider (horas)                              |
| Bagagem inclusa    | Toggle: mão / despachada / grande           |
| Horário de partida | Range slider (00h–24h)                      |


---

### 6.2 Pagamento — Aéreo

**Rota:** `/pagamento-aereo`  
**Arquivo:** `src/app/pages/FlightPayment.tsx`

#### Timer de sessão

- Contador regressivo visível no topo (ex: "Sua sessão expira em 14:32")
- Ao expirar, exibe modal de aviso e retorna para a busca
- Implementado com `useEffect` e `setInterval`

#### Layout

- Mesmo padrão do pagamento de hotel: Accordion progressivo (esquerda) + Card de resumo sticky (direita)

#### Formulário (Accordion progressivo)

**Seção 1 — Dados Pessoais:**

Para cada passageiro (conforme quantidade selecionada na busca):


| Campo              | Tipo                   |
| ------------------ | ---------------------- |
| Nome               | Input text             |
| Sobrenome          | Input text             |
| Data de nascimento | Input date             |
| Nacionalidade      | Select                 |
| CPF                | Input text com máscara |


**Seção 2 — Método de Pagamento:**

- Idêntico ao pagamento de hotel: moeda configurada, cartão de crédito e pagamento misto — conforme o que a instância do produto suporta

**Seção 3 — Nota Fiscal:**

- Idêntico ao pagamento de hotel

Botão "Confirmar reserva" → chama a API de checkout → navega para `/confirmacao-aereo`.

#### Card de Resumo do Voo (sticky, coluna direita)

**Voo de ida:**

- Companhia (avatar colorido) + número do voo
- Origem → Destino: horários, data, duração, paradas
- Bagagem inclusa: ícones check/x por tipo

**Voo de volta** (se ida+volta):

- Mesma estrutura

**Tabela de valores:**

- Tarifa base por passageiro × quantidade
- Taxas e tarifas
- **Total final** na moeda configurada (bold, destaque)
- Total em R$ quando houver complemento em cartão

---

### 6.3 Confirmação de Reserva — Aéreo

**Rota:** `/confirmacao-aereo`

> **REGRA CRÍTICA:** Mesmo comportamento assíncrono da confirmação de hotel. O estado é sempre "Em processamento", nunca "Confirmado".

#### Layout e conteúdo

Mesma estrutura de duas colunas da confirmação de hotel, com as seguintes diferenças:

**Card de Resumo (coluna direita) — conteúdo específico de aéreo:**

- Ícone avião + "Passagem aérea" (contexto)
- Voo de ida: companhia + número do voo + rota + horários + data
- Voo de volta (se ida+volta): mesma estrutura
- Classe tarifária selecionada
- Bagagem inclusa por voo (ícones check/x)
- Separador horizontal
- Lista de passageiros: nome + sobrenome por passageiro

**Card de Status (coluna direita — acima do card de resumo):**

- Mesma estrutura da confirmação de hotel:
  - Título: "Parabéns pela sua reserva!"
  - Subtexto: "Sua reserva está sendo processada e enviaremos a sua confirmação por email."

**Coluna esquerda:**

- Card "Informações do pagamento" — idêntico ao de hotel
- Card "Quem vai viajar" — lista todos os passageiros (em vez de 2 viajantes fixos)

---

## 7. Área Logada do Usuário

A área logada agrupa tudo que o usuário precisa gerenciar após autenticar na plataforma: perfil, meios de pagamento, viajantes cadastrados e reservas. É uma área transversal às jornadas de Hotel e Aéreo — independente do produto (instância white-label).

---

### 7.1 Layout & Navegação da Área Logada

**Rotas da área logada:**

```
/minha-conta                    → Redireciona para /minha-conta/perfil
/minha-conta/perfil             → Perfil do usuário (tab padrão: Meus Dados)
/minha-conta/viagens/:id        → Detalhe da viagem
```

> **Nota de design:** diferente do modelo original (sidebar + páginas separadas), o Figma define uma única tela de perfil com layout bicoluna e navegação por segmented control. As seções Dados de Pagamento, Faturamento e Viajantes fazem parte da tab "Meus Dados". "Minhas Viagens" é a tab secundária.

**Layout da tela de perfil:**

```
┌─────────────────────────────────────────────────────┐
│  Header global (estado logado)                      │
├──────────────────────┬──────────────────────────────┤
│                      │  [Meus Dados | Minhas Viagens]│
│  Painel de Perfil    ├──────────────────────────────┤
│  (400px, fixo)       │                              │
│                      │   Conteúdo da tab ativa      │
│  Avatar + Nome       │                              │
│  Sexo / Nasc / CPF   │                              │
│  Telefone / E-mail   │                              │
│                      │                              │
└──────────────────────┴──────────────────────────────┘
│  Footer global                                      │
└─────────────────────────────────────────────────────┘
```

**Segmented Control:**

- Componente `Segmented Control` do Radix UI (disponível em `src/app/components/ui/`)
- Duas tabs: **"Meus dados"** (padrão ativo) | **"Minhas Viagens"**
- Largura: 560px, altura: 40px, `rounded-full`
- Item ativo: fundo branco com borda `rounded-full`, texto `font-medium`
- Item inativo: sem fundo, texto `font-normal`

---

### 7.2 Painel de Perfil (esquerdo)

O painel esquerdo é fixo em todas as tabs. Exibe os dados de identidade do usuário em modo somente leitura — não é um formulário de edição.

**Especificação do painel:**

- Largura: 400px, `shrink-0`, `self-stretch`
- `rounded-2xl`, shadow padrão de card, `bg-[#fcfcfd]`, `p-[16px]`
- `gap-[24px]` entre seções internas

**Cabeçalho do painel:**

- Avatar circular 48px (fundo `bg-primary`, iniciais do nome em branco — size-4, `font-medium`)
- Nome completo — size-6, `font-medium`, `text-foreground`
- Separador horizontal (`border-border`)

**Grade de dados pessoais:**

Layout: `flex flex-wrap gap-[24px]`, cada item ocupa `w-[145px]`


| Campo              | Exibição                                                                                                          |
| ------------------ | ----------------------------------------------------------------------------------------------------------------- |
| Sexo               | Label + valor (ex: "Masculino")                                                                                   |
| Data de Nascimento | Label + valor (ex: "04/09/1991")                                                                                  |
| CPF                | Label + valor mascarado (ex: "043.987.165-50")                                                                    |
| Telefone           | Label + valor (ex: "(61) 99279-6391")                                                                             |
| E-mail             | Label + valor (ex: "[pedro.costa@bancorbras.com.br](mailto:pedro.costa@bancorbras.com.br)") — ocupa largura total |


- Label: size-2, `font-normal`, `text-muted-foreground`
- Valor: size-2, `font-normal`, `text-foreground`

> **Comportamento de edição:** o painel esquerdo é read-only nesta tela. Edição de dados pessoais pode ser endereçada em versão futura (ex: modal de edição acionado por botão no painel).

---

### 7.3 Tab "Meus Dados"

Conteúdo exibido na tab padrão "Meus dados". Organizado em duas seções verticais: **Dados de Pagamento** e **Viajantes**.

#### 7.3.1 Formas de Pagamento

**Contexto white-label:**

O papel do cartão varia por produto:

- **Produtos com moeda própria** (ex: Trib Pass, Trib): o cartão cobre suplementações quando o saldo não é suficiente.
- **Produtos em Reais** (ex: Voalá): o cartão é o método principal de pagamento.

**Layout do card:**

- Card `rounded-2xl`, shadow padrão, `bg-[#fcfcfd]`, `p-[16px]`
- Cabeçalho: título "Formas de Pagamento" + icon button `+` (32px, `rounded-full`) à direita
- Lista compacta: exibe no máximo **2 cartões** visíveis
- Rodapé: link "Ver todos" — text-link em `text-primary`, size-1

**Item de cartão (linha compacta):**

Layout: `flex row`, `rounded-lg`, `bg-card`, shadow padrão, `p-[16px]`


| Elemento          | Conteúdo                                                                                                                            |
| ----------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| Ícone da bandeira | Imagem da bandeira (Mastercard / Visa / Elo / Amex) — 32×32px                                                                       |
| Tipo + número     | Tipo do cartão (ex: "Mastercard Débito") — size-2, `text-muted-foreground`; número mascarado "****XXXX" — size-2, `text-foreground` |
| Menu de ações     | Icon button `⋮` (dots-vertical, 24px) — abre dropdown com ações: "Definir como principal" e "Excluir"                               |


> **Diferença de design vs. versão anterior do PRD:** a visão compacta não exibe validade nem badge "Principal". Esses detalhes ficam disponíveis na tela expandida (via "Ver todos"). O tipo de cartão inclui "Débito" ou "Crédito" junto ao nome da bandeira.

**Modal — Adicionar cartão:**

Disparado pelo icon button `+` no cabeçalho do card.


| Campo                  | Tipo              | Comportamento                                                                        |
| ---------------------- | ----------------- | ------------------------------------------------------------------------------------ |
| Número do cartão       | Input text        | Máscara `0000 0000 0000 0000`. Ícone da bandeira atualiza automaticamente ao digitar |
| Nome no cartão         | Input text        | Conforme impresso no cartão                                                          |
| Validade               | Input text        | Máscara `MM/AA`                                                                      |
| CVV                    | Input text        | `type="password"`, 3 ou 4 dígitos conforme bandeira                                  |
| Definir como principal | Checkbox / Toggle | Se marcado, este passa a ser o cartão padrão                                         |


Botões: "Cancelar" (outline) + "Salvar cartão" (`bg-primary text-white rounded-full`)

**Excluir cartão (via menu ⋮):**

- `AlertDialog`: "Tem certeza que deseja remover este cartão? Esta ação não pode ser desfeita."
- Botões: "Cancelar" (outline) + "Remover" (destructive)
- Se o cartão a ser excluído for o principal e houver outros, exibir aviso: "Defina outro cartão como principal antes de remover este."

---

#### 7.3.2 Faturamento

Card posicionado ao lado de "Formas de Pagamento" (lado direito, mesma linha, mesma altura).

**Objetivo:** registrar o responsável de faturamento — a pessoa em cujo nome as faturas e recibos são emitidos (pode ser diferente do usuário logado em contextos corporativos).

**Layout do card:**

- Card `rounded-2xl`, shadow padrão, `bg-[#fcfcfd]`, `p-[16px]`
- Cabeçalho: título "Faturamento" + icon button `+` (32px, `rounded-full`) à direita

**Item de responsável de faturamento:**

Layout: `flex row`, `rounded-lg`, `bg-card`, shadow padrão, `p-[16px]`


| Elemento      | Conteúdo                                                      |
| ------------- | ------------------------------------------------------------- |
| Avatar        | Círculo 40px (fundo `bg-primary`, iniciais do nome em branco) |
| Nome          | Nome completo — size-2, `text-muted-foreground`               |
| CPF           | "CPF: 000.000.000-00" — size-2, `text-foreground`             |
| Menu de ações | Icon button `⋮` (dots-vertical, 24px)                         |


> **Regra de negócio:** pode haver apenas um responsável de faturamento ativo por vez. O botão `+` só fica habilitado quando não há nenhum cadastrado. Se já houver um, o `+` está desabilitado ou oculto.

---

#### 7.3.3 Viajantes

Seção abaixo dos cards de Dados de Pagamento.

**Objetivo:** permitir que o usuário pré-cadastre dados de pessoas que costumam viajar com ele, para reuso no checkout.

**Layout da seção:**

- Título "Viajantes" — size-4, `font-medium`
- Card container `rounded-2xl`, shadow padrão, `bg-[#fcfcfd]`, `p-[16px]`
- Subtítulo interno: "Quem viaja com você com frequência" — size-3, `font-medium`
- Lista horizontal de cards compactos (`flex row`, `gap-[16px]`)

**Card de adicionar viajante (sempre o primeiro da lista):**

- Largura: 200px, altura: 148px
- Borda dashed: `border border-dashed border-border`, `rounded-lg`, `p-[16px]`
- Icon button `+` (40px, `rounded-md`) no topo
- Label "Cadastrar" — size-2, `text-muted-foreground`
- Label "novo viajante" — size-2, `text-foreground`

**Card de viajante cadastrado:**

- Largura: 200px, `rounded-lg`, `bg-card`, shadow padrão, `p-[16px]`
- Avatar 40px (fundo `bg-primary`, iniciais em branco)
- Nome — size-2, `text-muted-foreground`
- CPF mascarado — size-2, `text-foreground`
- Badge de parentesco: posicionado **fora do card, no topo direito** (`absolute`, `top-[-10px] right-[16px]`), fundo `bg-primary`, texto branco, `rounded-[4px]`

**Parentescos suportados:** Cônjuge / Filho(a) / Pai / Mãe / Amigo(a) / Outro

**Formulário de adicionar / editar viajante:**

Exibido em modal ou página dedicada (a definir). Campos:


| Campo              | Tipo                    | Validação                                                 |
| ------------------ | ----------------------- | --------------------------------------------------------- |
| Nome               | Input text              | Obrigatório                                               |
| Sobrenome          | Input text              | Obrigatório                                               |
| CPF                | Input text              | Obrigatório, máscara `000.000.000-00`                     |
| Data de Nascimento | Input date / DatePicker | Obrigatório, formato dd/mm/aaaa                           |
| Sexo               | Select                  | Masculino / Feminino / Não-binário / Prefiro não informar |
| Telefone           | Input text              | Máscara `(00) 00000-0000`                                 |
| E-mail             | Input email             | Opcional                                                  |
| Parentesco         | Select                  | Cônjuge / Filho(a) / Pai / Mãe / Amigo(a) / Outro         |


---

### 7.4 Tab "Minhas Viagens"

Conteúdo exibido ao clicar na tab "Minhas Viagens" do segmented control.

#### Listagem de viagens

**Tabs de categorização (dentro da tab "Minhas Viagens"):**

- "Ativas" — reservas com check-in futuro ou em andamento
- "Passadas" — reservas com check-out já realizado

**Card de viagem (por reserva):**

Layout: `flex row`, `rounded-2xl`, `border border-border`, `bg-white`, shadow padrão de card


| Área               | Conteúdo                                                                    |
| ------------------ | --------------------------------------------------------------------------- |
| Imagem             | Thumbnail do hotel ou ícone de avião — `rounded-lg`, 100×80px               |
| Conteúdo principal | Nome da viagem / destino + datas + número de serviços incluídos             |
| Status badge       | "Em processamento" (warning) · "Confirmada" (success) · "Cancelada" (error) |
| CTA                | "Ver detalhes" → navega para `/minha-conta/viagens/:id`                     |


**Conteúdo do card:**

- Título: destino principal da viagem (ex: "Miami, Estados Unidos") — bold, size-4
- Período: "DD Mês AAAA → DD Mês AAAA" — size-2, `text-muted-foreground`
- Serviços incluídos: ícones inline — `Hotel` · `Plane` · `Car` — exibidos apenas para os serviços presentes
- Total pago: valor na moeda configurada — size-3, `text-foreground`

**Estado vazio (nenhuma viagem na categoria):**

- Ícone `Plane` em destaque (grande, `text-muted-foreground`)
- Texto "Você ainda não tem viagens [ativas/passadas]"
- CTA "Buscar hotéis" → redireciona para `/`

---

#### Detalhe da viagem

**Rota:** `/minha-conta/viagens/:id`

**Breadcrumb:** "< Minhas Viagens" (link) / "Miami, Estados Unidos"

**Cabeçalho da página:**

- Título: destino principal — bold, size-7
- Período: datas de início e fim da viagem — size-3, `text-muted-foreground`
- Status badge da reserva geral

**Separação por serviços:**

A viagem pode conter um ou mais serviços. Cada serviço é exibido em um card separado:

**Card de serviço — Hotel:**

```
┌──────────────────────────────────────────────────┐
│  [ícone Building2]  Hotel                        │
│                                                  │
│  Kimpton Epic Hotel by IHG                       │
│  📍 Miami, Estados Unidos                         │
│                                                  │
│  Check-in          Check-out                     │
│  Qui, 25 Dez 2025  Ter, 30 Dez 2025              │
│  A partir das 16h  Até às 12h                    │
│                                                  │
│  Quarto, 1 cama King, vista para a cidade        │
│  2 adultos · 5 noites                            │
│                                                  │
│  Total: 3.695 [moeda]             [Status badge] │
└──────────────────────────────────────────────────┘
```

**Card de serviço — Aéreo:**

```
┌──────────────────────────────────────────────────┐
│  [ícone Plane]  Passagem Aérea                   │
│                                                  │
│  ✈ Voo de Ida                                    │
│  EK 204 · Emirates                               │
│  GRU 08:30 ──────────── BSB 10:30                │
│  Qui, 25 Dez 2025 · Direto · 2h                  │
│  Bagagem: mão ✓  despachada ✓  grande ✗          │
│                                                  │
│  ✈ Voo de Volta                                  │
│  G3 1420 · GOL                                   │
│  BSB 07:00 ──────────── GRU 09:00                │
│  Ter, 30 Dez 2025 · Direto · 2h                  │
│                                                  │
│  Total: 38.143 [moeda]            [Status badge] │
└──────────────────────────────────────────────────┘
```

**Card de serviço — Aluguel de Carro** *(planejado para MVP futuro — exibir apenas se presente na reserva)*:

```
┌──────────────────────────────────────────────────┐
│  [ícone Car]  Aluguel de Carro                   │
│                                                  │
│  Toyota Corolla ou similar                       │
│  📍 Miami International Airport                  │
│  Retirada: Qui, 25 Dez 2025 · 16h               │
│  Devolução: Ter, 30 Dez 2025 · 12h              │
│                                                  │
│  Total: 1.200 [moeda]             [Status badge] │
└──────────────────────────────────────────────────┘
```

**Resumo financeiro da viagem (abaixo dos cards de serviço):**

Card separado com totais consolidados:

- Linha por serviço: "Hotel" · "Passagem Aérea" · "Aluguel de Carro" — valor individual
- Separador horizontal
- **Total geral** — bold, destaque
- Método de pagamento utilizado (moeda configurada + cartão, se misto)

---

### 7.5 Integração com o Fluxo de Checkout

A área de viajantes se conecta diretamente ao fluxo de checkout de hotel e aéreo. A **Seção 1 — Dados Pessoais** do Accordion de pagamento deve ser atualizada para suportar seleção de viajantes cadastrados.

#### Comportamento no checkout (Seção 1 — Dados Pessoais)

**Quando o usuário está logado e tem viajantes cadastrados:**

Para cada slot de viajante no checkout (viajante principal + adicionais), exibir:

1. **Seletor de viajante:** dropdown ou lista de cards compactos com os viajantes cadastrados
  - Cada opção: avatar com iniciais + nome completo + parentesco
  - Opção extra: "+ Preencher manualmente" (para não usar um viajante salvo)
2. **Ao selecionar um viajante:** os campos do formulário são preenchidos automaticamente com os dados cadastrados. Os campos ficam habilitados para edição pontual (caso o usuário queira ajustar algo apenas para esta reserva — sem alterar o cadastro permanente).
3. **Ao selecionar "Preencher manualmente":** os campos aparecem vazios para preenchimento livre.

**Quando o usuário não tem viajantes cadastrados ou não está logado:**

- Formulário de campos vazios para preenchimento manual (comportamento atual)

**Fluxo de salvar novo viajante durante o checkout:**

- Ao preencher manualmente, exibir checkbox opcional: "Salvar este viajante para futuras reservas"
- Se marcado, ao confirmar a reserva, o viajante é automaticamente adicionado à lista de `/minha-conta/viajantes`

---

## 8. Componentes Compartilhados

### Header (componente global)

**Arquivo:** `src/app/components/Header.tsx`

Dois estados:

1. **Deslogado:** Logo + Navegação + "Criar conta" + "Login"
2. **Logado:** Logo + Navegação + Avatar + "Olá, [Nome]" + Saldo na moeda configurada + Ícone menu + Ícone sino

O header é white-label: logo, nome do produto e rótulo de saldo são parametrizáveis.

### Footer (componente global)

**Arquivo:** `src/app/components/Footer.tsx`

- Fundo escuro (quase preto)
- Coluna 1: Logo + endereço + telefone + e-mail de atendimento
- Colunas 2-4: links de navegação

### SearchResultsHeader

**Arquivo:** `src/app/components/SearchResultsHeader.tsx`

Props: `destination`, `dateRange`, `guests`, `rooms`, `nights`, `onEdit`

Exibe os parâmetros da busca atual com possibilidade de edição inline por campo.

### Banner Editorial

Reutilizado em: Home, PDP do Hotel, Confirmação.

- Imagem de fundo full-width + overlay gradiente + título + CTA

---

## 9. Regras de Negócio Globais

### Moeda e preços

A plataforma é white-label e a moeda utilizada é definida pela instância do produto. As implementações **não devem assumir** que a moeda é sempre Tribz, R$ ou qualquer outra unidade específica.

**Regras de implementação:**

- O rótulo e o símbolo da moeda (ex: "Tribz", "R$", "pontos", "diárias") devem vir de uma configuração ou contexto fornecido pela instância — nunca hardcoded nos componentes
- A formatação numérica deve respeitar o locale e o separador correto para cada moeda (ex: ponto como separador de milhar para tribz, vírgula para decimais em R$)
- A prioridade de exibição da moeda (primária vs. secundária) também é definida pela instância

**Cenários por produto (referência):**


| Produto   | Moeda primária | Moeda secundária | Pagamento misto |
| --------- | -------------- | ---------------- | --------------- |
| Trib Pass | Tribz          | —                | Não             |
| Trib      | Tribz          | R$               | Sim             |
| Voalá     | R$             | —                | Não             |


### Pagamento assíncrono

Regra global, independente de produto ou instância:

- Nenhuma reserva é confirmada em tempo real
- Após o checkout, o estado é sempre `"Em Processamento"`
- Textos **proibidos** nas telas de confirmação: "Confirmado", "Aprovado", "Reserva confirmada"
- Textos **corretos**: "Sua reserva está sendo processada", "Enviaremos a confirmação por email"

### Disponibilidade de quartos / assentos

- Badge "Apenas X disponíveis" → estilo `warning` (fundo amarelo-âmbar)
- Badge "Último disponível" → estilo `error` (fundo vermelho)
- Sem badge → disponibilidade normal

### Cancelamento

- Itens com cancelamento gratuito exibem o badge em destaque no card de resultado, PDP e confirmação
- Formato: "Cancelamento gratuito antes de [DD de Mês]"

### Parâmetros de URL

- Todos os parâmetros de busca devem persistir na query string durante toda a jornada
- Nenhum dado de sessão crítico deve depender apenas de estado React (perde-se no refresh)
- Datas no formato ISO 8601: `YYYY-MM-DD`

---

## 10. Dados & Contratos de API

> **Nota:** MVP 1 usa dados mockados. Esta seção define os contratos de dados que a API real deverá respeitar.

### Modelo: HotelResult

```typescript
interface HotelResult {
  id: string;
  name: string;
  location: string;           // "Cidade, País"
  distance: string;           // "X km do centro"
  stars: number;              // 1-5
  rating: string;             // "8.4"
  ratingText: string;         // "Muito Bom"
  reviewCount: number;
  image: string;              // URL da imagem principal
  price: number;              // preço por noite (na moeda configurada)
  totalPrice: number;         // preço total (na moeda configurada)
  referencePriceR$?: number;  // preço de referência em R$ para exibição riscada (opcional)
  badges?: Badge[];
  features: string[];         // "Cancelamento grátis", "Pague em 12x"
  cancellationDeadline?: string;
}

interface Badge {
  text: string;
  color: string; // hex
}
```

### Modelo: HotelDetails

```typescript
interface HotelDetails extends HotelResult {
  gallery: string[];          // array de URLs (mín. 5)
  amenities: Amenity[];       // max 6 na seção principal
  rooms: RoomType[];
  description: string;
  importantNote: string;
  goodToKnow: string[];
  checkInTime: string;        // "A partir das 16h"
  checkOutTime: string;       // "Até às 12h"
  nearbyPoints: NearbyPoint[];
  quote: string;
}

interface RoomType {
  id: number;
  name: string;
  image: string;
  amenitiesCol1: RoomFeature[];
  amenitiesCol2: RoomFeature[];
  discount?: string;          // "15% OFF"
  discountStyle?: "green";
  price: string;              // preço por noite na moeda configurada
  totalPrice: string;         // total na moeda configurada
  referencePriceR$?: string;  // preço riscado de referência em R$
  availability?: string;
  availabilityStyle?: "warning" | "error";
}
```

### Modelo: FlightResult

```typescript
interface FlightResult {
  id: string;
  airline: string;
  airlineCode: string;        // "EK", "AD", "LA"
  flightNumber: string;       // "EK 204"
  airlineColor: string;       // hex para avatar
  originCode: string;         // IATA
  originCity: string;
  departureTime: string;      // "08:30"
  destinationCode: string;    // IATA
  destinationCity: string;
  arrivalTime: string;        // "10:30"
  durationHours: number;
  durationMins: number;
  stops: number;
  hasCabinBag: boolean;
  hasCheckedBag: boolean;
  hasLargeBag: boolean;
  totalPrice: number;         // na moeda configurada
  taxes: number;              // na moeda configurada
  departureDate?: string;
  arrivalDate?: string;
  tags?: string[];
}
```

### Configuração de produto (CurrencyConfig)

```typescript
interface CurrencyConfig {
  label: string;              // "Tribz", "pontos", "diárias"
  symbol?: string;            // símbolo, se houver
  locale: string;             // "pt-BR"
  separadorMilhar: string;    // "." ou ","
  separadorDecimal: string;   // "," ou "."
  casasDecimais: number;      // 0 para pontos, 2 para R$
  allowCreditCard: boolean;   // se o produto aceita cartão
  allowMixed: boolean;        // se aceita pagamento misto
}
```

---

## 11. Critérios de Aceitação — Jornadas

### Home Page

- Busca funcional para hotel (navega para `/resultados-hotel`) e aéreo (navega para `/resultados-aereo`)
- Tabs de alternância Hotel / Aéreo funcionam corretamente
- Parâmetros de busca chegam corretamente na query string
- Carrossel de hotéis em destaque funcional
- Banner editorial renderizado corretamente

### Resultados — Hotel (`/resultados-hotel`)

- Lista de HotelResultCards renderizada com todos os campos
- Filtros atualizam a lista em tempo real (client-side para MVP 1)
- Ordenação funcional
- Alert de contexto ("preços para X noites") exibido
- CTA "Ver hotel" navega para `/hotel` com parâmetros corretos

### PDP — Hotel (`/hotel`)

- Galeria de fotos no layout de grid correto (especificação seção 5.3)
- Galeria fullscreen com navegação por setas e teclado (Escape para fechar)
- Scroll do body bloqueado com galeria aberta
- Card sticky posicionado em `top: 80px`, não some com scroll
- Tabs de quarto filtram corretamente
- Badge de disponibilidade exibe estilo correto (warning/error)
- CTA "Reservar" navega para `/pagamento-hotel` com todos os parâmetros
- Seção mapa renderizada (placeholder aceitável para MVP 1)

### Pagamento — Hotel (`/pagamento-hotel`)

- Accordion abre sequencialmente (seção 1 → 2 → 3)
- Seções concluídas exibem ícone de check
- Slider de moeda atualiza valores em tempo real
- Card de resumo sticky exibe total correto
- "Confirmar reserva" navega para `/confirmacao-hotel`

### Confirmação — Hotel (`/confirmacao-hotel`)

- Nenhum texto de "confirmação" definitiva (apenas "processando")
- Valores na tabela de itens na moeda configurada
- Valor em R$ aparece apenas no bloco de método de pagamento em cartão
- Dois cards na coluna direita: status (topo) + resumo hotel (abaixo)
- Header em estado logado (com saldo na moeda configurada)
- Botão "Imprimir" presente no card de informações de pagamento

### Resultados — Aéreo (`/resultados-aereo`)

- DateCarousel funcional com navegação por setas
- Tabs Ida / Volta alternáveis
- FlightResultRow exibe todos os campos corretamente
- Ícones de bagagem refletem o que está incluso (visual check/x)
- Seção de detalhes expande ao clicar "Ver detalhes"
- Seleção de voo destaca o card e exibe painel de resumo
- Navegação para `/pagamento-aereo` com voos selecionados

### Pagamento — Aéreo (`/pagamento-aereo`)

- Timer de sessão visível e funcional
- Formulário de dados para cada passageiro
- Card de resumo exibe ambos os voos (ida + volta quando aplicável)
- Mesmo comportamento de Accordion do pagamento de hotel
- "Confirmar reserva" navega para `/confirmacao-aereo`

### Confirmação — Aéreo (`/confirmacao-aereo`)

- Nenhum texto de "confirmação" definitiva
- Card de resumo exibe ambos os voos com todos os detalhes
- Lista de todos os passageiros no card "Quem vai viajar"
- Header em estado logado

---

*Este PRD foi gerado a partir da análise do protótipo Figma e do código do projeto `project-portal-do-cliente`. Para dúvidas sobre intenção de design, consultar as specs originais em `src/imports/pasted_text/` e o arquivo `CLAUDE.md` para regras do design system.*

---

## 12. Critérios de Aceitação — Área Logada

### Layout & Navegação

- Redirect de `/minha-conta` → `/minha-conta/perfil`
- Header em estado logado (com avatar, nome e saldo)
- Segmented control exibido com tabs "Meus dados" (ativa por padrão) e "Minhas Viagens"
- Alternar entre tabs troca o conteúdo da área direita sem recarregar a página

### Painel de Perfil (esquerdo)

- Painel fixo exibe: avatar com iniciais, nome completo, separador, grade de dados pessoais
- Dados exibidos: Sexo, Data de Nascimento, CPF mascarado, Telefone, E-mail
- Painel permanece visível ao alternar entre tabs

### Tab "Meus Dados" — Formas de Pagamento

- Card exibe no máximo 2 cartões cadastrados
- Cada cartão exibe: ícone de bandeira, tipo (ex: "Mastercard Débito"), número mascarado "****XXXX"
- Menu ⋮ abre dropdown com opções: "Definir como principal" e "Excluir"
- Icon button `+` abre modal de adicionar cartão
- Link "Ver todos" é exibido quando há mais de 2 cartões
- Modal de adicionar cartão contém: número, nome, validade, CVV, toggle "Definir como principal"
- Ícone da bandeira no campo de número atualiza automaticamente ao digitar
- Exclusão de cartão dispara AlertDialog de confirmação
- Bloqueio de exclusão do cartão principal quando há outros cadastrados (com aviso)

### Tab "Meus Dados" — Faturamento

- Card exibe o responsável de faturamento (se cadastrado): avatar com iniciais, nome, CPF
- Icon button `+` está desabilitado ou oculto quando já há um responsável cadastrado
- Menu ⋮ permite editar ou remover o responsável de faturamento

### Tab "Meus Dados" — Viajantes

- Seção exibe título "Viajantes" e container com lista horizontal de cards
- Subtítulo interno: "Quem viaja com você com frequência"
- Primeiro card sempre é o "Cadastrar novo viajante" (borda dashed)
- Cards de viajantes exibem: avatar com iniciais, nome, CPF mascarado, badge de parentesco (posicionado no topo direito do card)
- Clicar em "Cadastrar novo viajante" abre formulário (modal ou página dedicada)
- Formulário de viajante contém todos os campos obrigatórios: Nome, Sobrenome, CPF, Data de Nascimento, Sexo, Telefone, E-mail (opcional), Parentesco
- Campo Parentesco: Cônjuge / Filho(a) / Pai / Mãe / Amigo(a) / Outro

### Tab "Minhas Viagens" — Listagem

- Tabs "Ativas" e "Passadas" alternam a lista corretamente
- Card de viagem exibe: destino, período, ícones de serviços incluídos, total pago e status badge
- Status badge exibe o estilo correto (warning / success / error)
- Estado vazio exibido quando não há viagens na categoria selecionada
- CTA "Ver detalhes" navega para `/minha-conta/viagens/:id`

### Tab "Minhas Viagens" — Detalhe

- Breadcrumb funcional ("< Minhas Viagens")
- Cabeçalho exibe destino, período e status geral
- Card de serviço exibido somente para os serviços presentes na reserva (Hotel / Aéreo / Carro)
- Card de Hotel exibe: nome, localização, datas de check-in e check-out, tipo de quarto, número de hóspedes e total
- Card de Aéreo exibe: voo(s), companhia, rota, horários, data, bagagem inclusa e total
- Resumo financeiro consolidado com total geral e método de pagamento

### Integração com Checkout

- Seletor de viajantes cadastrados aparece na Seção 1 do checkout quando o usuário está logado e tem viajantes salvos
- Selecionar um viajante preenche automaticamente os campos do formulário
- Campos preenchidos automaticamente permanecem editáveis para ajustes pontuais
- Opção "Preencher manualmente" exibe os campos vazios
- Checkbox "Salvar este viajante para futuras reservas" aparece no modo manual
- Viajante salvo via checkout aparece nos cards da seção Viajantes em `/minha-conta/perfil`


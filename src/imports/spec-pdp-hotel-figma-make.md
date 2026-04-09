# Spec — Página de Detalhes do Hotel (PDP)

## Portal do Cliente Bancorbrás · Jornada Hotel · MVP 1

**Produto:** Portal do Cliente (White Label)  
**Plataforma:** Trib Pass  
**Breakpoint:** Desktop 1440px  
**Design System:** Radix UI Semantic Tokens  
**Stack:** Next.js (App Router) + TypeScript + Tailwind CSS  

---

## Visão geral da página

Página de detalhes de um hotel selecionado (PDP — Product Detail Page). O usuário chega aqui após clicar em "Conhecer Hotel" na listagem de resultados. A página exibe todas as informações do hotel, permite escolher tipo de quarto e iniciar a reserva.

**Layout:** Duas colunas — conteúdo principal à esquerda (col-8) e card lateral sticky de reserva à direita (col-4). Abaixo do fold, conteúdo em largura total.

---

## Estrutura de seções (top → bottom)

### 1. Header global

- Logo da marca (canto esquerdo) — componente white-label, muda por tenant
- Barra de busca inline: Destino (ex: "Miami") · Datas ("25 - 30 Dez") · Hóspedes ("2 pessoas") · Noites ("3 noites") · Ícone de edição
- CTA "Criar conta / Login" (estado deslogado) — botão verde com borda arredondada
- Ícone de notificação (sino)
- **Variações:** 3 estados de header (deslogado, logado sem pontos, logado com pontos)
- **Altura:** ~64px
- **Background:** branco (#FFFFFF), borda inferior sutil

---

### 2. Galeria de fotos (mosaico)

**Layout:** Grid mosaico 2 colunas.
- **Coluna esquerda:** 1 foto principal grande (aspect ratio ~16:10), ocupa 50% da largura e 100% da altura do bloco
- **Coluna direita:** Grid 2×2 com 4 miniaturas (cada uma ~50% da largura da coluna direita)
- **Botão "Mostrar todas as fotos":** posicionado no canto inferior direito da última miniatura, fundo semi-transparente escuro, texto branco, ícone de grid/galeria

**Dimensões aproximadas:**
- Bloco total: 100% width do container (max ~1216px), altura ~400px
- Foto principal: ~608px × 400px
- Miniaturas: ~300px × 196px cada (com gap de 8px)
- Border-radius: 12px no bloco externo, 0 nas fotos internas (clip pelo container)

**Variações a criar:**
- 5+ fotos (padrão — como na referência)
- 3 fotos (1 grande + 2 miniaturas)
- 2 fotos (1 grande + 1 miniatura)
- 1 foto (apenas a foto principal, largura total)

---

### 3. Identidade do hotel (abaixo da galeria)

**Layout:** Duas colunas — informações à esquerda, card sticky à direita.

**Coluna esquerda — informações do hotel:**

- **Nome do hotel:** "Kimpton Epic Hotel by IHG"  
  - Tipografia: Heading H1, ~24px, font-weight 600, cor text-primary
  
- **Localização + distância:**  
  - "Miami, Estados Unidos. A 4,16 km do centro"  
  - Tipografia: 14px, cor text-secondary
  
- **Estrelas:** ★★★★★ (5 estrelas amarelas)  
  - Inline com o nome ou logo abaixo

- **Horários check-in/out:**  
  - "Check in: A partir das 16h | Check out: Até às 12h"  
  - Ícones de relógio + texto 13px, cor text-secondary

- **Bloco de avaliação (rating):**  
  - Quote editorial: "um dos hotéis que mais fazem sucesso com os hóspedes" (itálico, fundo cinza claro, aspas decorativas)
  - Nota: "5" em destaque + ★★★★★
  - Badge: "72 — Muito bom" (fundo verde #E1F5EE, texto #0F6E56)
  - Link: "ver 809 comentários" (texto verde, link)
  - **Layout:** Flex row com 3 blocos (quote | nota + estrelas | badge + link)

---

### 4. Card lateral sticky de reserva

**Componente novo — não existe no Trib Pass HML.**  
Padrão inspirado em Booking.com / Airbnb.

**Posição:** `position: sticky; top: 80px` (abaixo do header)  
**Largura:** ~350px (col-4 do grid)  
**Background:** branco, borda 1px solid #E5E7EB, border-radius 12px  
**Padding:** 24px  
**Shadow:** sutil (0 2px 8px rgba(0,0,0,0.08))

**Conteúdo interno (top → bottom):**

1. **Aviso de taxas:** "Os preços incluem todas as taxas"  
   - Texto 12px, cor text-secondary, alinhado à direita, acima do preço

2. **Preço em pontos (destaque principal):**  
   - "3.695 Tribz" — 28px, font-weight 700, cor text-primary
   - "por 3 noites" — 14px, cor text-secondary, inline com o preço
   - **IMPORTANTE:** Usar token neutro "pontos" em contexto white-label genérico. "Tribz" apenas em contexto Trib.

3. **Campos editáveis (mini-form):**
   - **Check-in:** Campo com label "Check-in" acima + valor "dd/mm/aaaa" — borda cinza, border-radius 8px
   - **Check-out:** Campo com label "Check-out" acima + valor "dd/mm/aaaa" — mesmo estilo
   - **Layout:** 2 campos lado a lado (flex row, gap 8px)
   - **Hóspedes:** Campo abaixo: "4 Hóspedes" — largura total, dropdown com ícone seta

4. **Badge cancelamento:**  
   - "Cancelamento gratuito antes de 18 de março"  
   - Ícone relógio + texto 12px
   - Fundo: #E1F5EE (verde claro), texto: #0F6E56, padding 8px 12px, border-radius 8px

5. **CTA "Reservar":**  
   - Botão full-width, background: #1D9E75 (verde trib), texto branco, font-weight 600
   - Height: 48px, border-radius: 8px
   - Hover: background #0F6E56

---

### 5. Seção "A hospedagem oferece" (comodidades)

**Layout:** Título + grid de ícones + link "Ver tudo"

- **Título:** "A hospedagem oferece" — H2, 20px, font-weight 600
- **Link:** "Ver tudo >" — texto verde, alinhado à direita do título
- **Grid de ícones:** 6 itens visíveis em linha (flex row, gap 24px)
  - Cada item: ícone 24px acima + label 12px abaixo, cor text-secondary
  - Itens: Wi-Fi grátis · Academia · Piscina · Ar · Wi-Fi 5GHz · Coworking/Lounge
- **Ícones:** Linha fina (stroke), cor #6B7280 (gray-500)

---

### 6. Seção "Conheça um pouco mais" (descrição)

- **Título:** H2, 20px, font-weight 600
- **Corpo:** Texto corrido com múltiplos parágrafos
  - Tipografia: 14px, line-height 1.6, cor text-primary
  - Texto descritivo do hotel (vem da API)
- **Largura:** Limitada à coluna esquerda (~col-8)

---

### 7. Seção "Importante" (alerta)

- **Container:** Borda esquerda 3px solid #F59E0B (amber), background #FFFBEB, padding 16px
- **Título:** "Importante" — 16px, font-weight 600, cor #92400E
- **Corpo:** Texto 13px, cor #78350F
- **Conteúdo exemplo:** "Imóveis com preços muito baixos, é possível que não se aplique..."

---

### 8. Seção "É bom saber"

- **Título:** "É bom saber" — H2, 20px, font-weight 600
- **Subtítulo:** "Notas sobre o hotel" — 14px, cor text-secondary
- **Corpo:** Lista de bullet points com informações úteis
  - Tipografia: 14px, cor text-primary
  - Estações próximas, serviços, regras do hotel

---

### 9. Seção "Tipos de quarto"

**Componente principal da PDP — seleção de quarto para reserva.**

**Cabeçalho da seção:**
- Título: "Tipos de quarto" — H2, 20px, font-weight 600
- Filtro por tipo de cama: tabs "Todos" · "2 camas" · "1 cama"
  - Tab ativa: background #1D9E75, texto branco, border-radius 20px
  - Tab inativa: borda 1px solid #D1D5DB, texto text-secondary

**Card de quarto (repetível):**
- **Layout:** Flex row — foto à esquerda, info no centro, preço à direita
- **Largura total:** 100% da coluna principal
- **Background:** branco, borda 1px #E5E7EB, border-radius 12px, padding 16px
- **Espaçamento entre cards:** 12px (gap vertical)

**Conteúdo do card:**

| Posição | Campo | Exemplo | Tipografia |
|---------|-------|---------|------------|
| Esquerda | Foto do quarto (miniatura) | Imagem do quarto | 120×90px, border-radius 8px, object-fit cover |
| Centro-topo | Nome + tipo de cama | "Quarto, 1 cama King, vista para a cidade" | 15px, font-weight 500 |
| Centro | Ícones features | Vista · 44 m² · Acomoda 2 · Café · Hóspede feliz | Ícones 14px + label 12px, cor text-secondary |
| Centro | Regime de pagamento | "Pagamento: Entra e pague" | 12px, ícone + texto |
| Direita-topo | Badge desconto | "19% OFF" | Badge vermelho, 11px, font-weight 600 |
| Direita | Preço em R$ | "R$ 1.446" (+ riscado "R$ 1.621") | 20px bold (atual), 14px line-through (anterior) |
| Direita | Preço em pontos | "8.041 tribz" | 12px, cor text-secondary |
| Direita | Taxas | "Inclui impostos e taxas" | 11px, cor text-tertiary |
| Direita | Badge disponibilidade | "Apenas 4 disponíveis" | Badge azul (#E6F1FB text #185FA5), 11px |
| Direita-bottom | CTA | "Reservar" | Botão verde, 36px height, border-radius 6px |

---

### 10. Seção "Conheça a localização do hotel" (Mapa)

**Layout:** Duas colunas — lista de proximidades à esquerda, mapa à direita.

- **Título:** "Conheça a localização do hotel" — H2, 20px
- **Link:** "Explorar no mapa >" — texto verde, à direita
- **Subtítulo:** "Nas proximidades"

**Lista de proximidades (pontos de interesse):**
- Cada item: bullet + nome + distância
  - "Shopping São Conrado - 936 m, distância a pé"
  - "Praia da Barra - 794 m, distância a pé"
  - "Estação X - 800 m, distância a pé"
  - "São Conrado Fitness - 1,2 km"
  - "Aeroporto do Galeão - 18 km"
- Tipografia: 13px, cor text-primary

**Mapa:**
- Componente Google Maps embed
- Largura: ~50% da seção, height: ~300px
- Border-radius: 12px
- Pin vermelho no centro (localização do hotel)
- Controles de zoom (+/-)

---

### 11. Banner editorial (cross-sell)

- **Layout:** Full-width, height ~280px
- **Background:** Imagem de avião/viagem com overlay escuro gradiente
- **Título:** "Sua próxima aventura começa aqui!" — H2, 28px, branco, font-weight 700
- **CTA:** "Reserve já!" — Botão outline rosa/coral (#E24B4A), borda arredondada

---

### 12. Footer

- **Logo Trib** (esquerda)
- **Endereço + contato:** texto 13px, cor text-secondary
- **4 colunas de links:**
  - Dados Pessoais · Histórico de Reservas · Excluir Conta
  - Dúvidas Frequentes · Nossa História · Assessoria de Imprensa
  - Nossos Termos · Aviso de Privacidade · Segurança Online
- **Background:** #1C1C1C (quase preto), texto branco/cinza
- **Height:** ~200px

---

## Tokens de cor utilizados

| Token | Hex | Uso |
|-------|-----|-----|
| brand-primary | #1D9E75 | CTAs, badges positivos, links ativos |
| brand-primary-hover | #0F6E56 | Hover de botões verdes |
| text-primary | #111827 | Títulos, textos principais |
| text-secondary | #6B7280 | Labels, subtítulos, textos auxiliares |
| text-tertiary | #9CA3AF | Hints, textos de menor importância |
| surface-primary | #FFFFFF | Background principal, cards |
| surface-secondary | #F9FAFB | Background alternativo |
| border-default | #E5E7EB | Bordas de cards, inputs, dividers |
| success-light | #E1F5EE | Badge cancelamento, indicadores positivos |
| success-text | #0F6E56 | Texto em badges positivos |
| warning-light | #FFFBEB | Background seção "Importante" |
| warning-border | #F59E0B | Borda esquerda do alerta |
| danger-light | #FEE2E2 | Badges de urgência, desconto |
| info-light | #E6F1FB | Badge "Apenas X disponíveis" |
| info-text | #185FA5 | Texto do badge de disponibilidade |

---

## Regras de negócio críticas

1. **Dual Currency:** Preço em PONTOS é sempre o valor principal/destaque. R$ é sempre complementar/secundário. Nunca inverter.
2. **Token neutro:** Usar "pontos" como nomenclatura genérica. "Tribz" apenas em contexto Trib específico. NUNCA usar "valor".
3. **Pagamento assíncrono:** O status pós-reserva é "Em Processamento", NUNCA "Confirmado".
4. **Card sticky:** Posição fixa durante scroll — acompanha o usuário enquanto navega pela PDP.
5. **Cancelamento com data:** Sempre exibir a data limite específica, nunca genérico "cancelamento grátis" sem data.

---

## Notas para o Figma Make

- Criar como frame desktop 1440×auto (height dinâmico)
- Usar Auto Layout em todos os containers
- Nomear layers com convenção: `section/nome-da-secao`, `card/tipo-quarto`, `badge/cancelamento`
- Componentizar: Header, SearchBar, GalleryMosaic, RatingBadge, StickyReservationCard, RoomCard, AmenityIcon, MapSection, CTABanner, Footer
- O card sticky lateral é o componente mais complexo e estruturalmente novo — priorizar

# Decisões Arquiteturais — Portal do Cliente

> Registrar aqui toda decisão relevante: o quê foi decidido, por quê, e o impacto.

---

## Template de entrada

```
### [YYYY-MM-DD] Título da decisão
**Decisão:** O que foi decidido.
**Motivo:** Por que essa escolha foi feita.
**Impacto:** O que muda / o que fica proibido.
```

---

## Decisões

### [2026-04-09] Adoção do sistema de memória file-based (híbrido)

**Decisão:** Usar CLAUDE.md como system prompt permanente + /docs/memory/ para progresso e decisões + /docs/sessions/ para histórico de sessões. Sem estrutura de Features/US/Tasks — abordagem leve.
**Motivo:** Garantir continuidade entre sessões sem depender do histórico de chat, com overhead mínimo para um projeto focado em UI.
**Impacto:** Todo encerramento de sessão requer execução do protocolo End of Session. Decisões arquiteturais devem ser registradas neste arquivo.

---

### [2026-04-10] Cor primária única para todo o produto Trib Pass

**Decisão:** `#12a594` (teal / `bg-primary`) é a única cor primária do produto. O azul `#3e63dd` foi banido do codebase.
**Motivo:** O azul pertence à plataforma corporativa, não ao produto Trib Pass. O usuário identificou inconsistências em múltiplos componentes.
**Impacto:** Todo novo componente importado do Figma deve ser auditado para substituição de qualquer azul (`#3e63dd`, `#3358d4`, Radix accent blue) por `#12a594`.

---

### [2026-04-10] UserActions como componente exportado e reutilizável

**Decisão:** `UserActions` exportado de `Header.tsx` com props `avatarColor` e `bellColor`. Usado em todos os headers (global, hoteleiro, aéreo). Avatar sempre `#12a594`.
**Motivo:** O produto sempre exige usuário logado — não há estado deslogado. Ter um único componente evita inconsistências.
**Impacto:** Proibido criar outros componentes de "user info" — sempre reutilizar `UserActions`.

---

### [2026-04-10] Sincronização Header ↔ SearchSection via props na HomePage

**Decisão:** O estado de aba ativa do SearchSection é controlado pela HomePage via prop `tab`. O Header recebe `activeCategory` como override opcional, derivado do mesmo estado.
**Motivo:** Header e SearchSection são componentes independentes; precisam de um "dono" comum do estado. HomePage é o lugar natural.
**Impacto:** `NavCategory` deve permanecer exportado de `Header.tsx`. A lógica de "qual aba está ativa" vive na página, não nos componentes.

---

### [2026-04-10] Animações de reveal usam inline style para max-width

**Decisão:** Animações que precisam transicionar `max-width` para valores arbitrários usam `style={{ maxWidth: isOpen ? "72px" : "0px" }}` em vez de classes Tailwind arbitrárias.
**Motivo:** Tailwind v4 não gera classes de transição para valores arbitrários de `max-width` de forma confiável sem configuração adicional.
**Impacto:** Aceitar inline style apenas para animações de reveal com `max-width` dinâmico. Não é exceção para outras propriedades de layout.

---

### [2026-04-13] Figma DS como fonte de verdade para componentes.md

**Decisão:** Todo conteúdo de `docs/design-system/componentes.md` parte do inventário do Figma DS (`aYVvwo3llX85irnjON7nVt`). Quando há divergência entre doc e Figma, o Figma prevalece.
**Motivo:** O DS tem 35+ componentes Radix + Tourism Components que precisam de referência visual autoritativa. A doc anterior tinha apenas 19 componentes e estava desatualizada.
**Impacto:** Antes de documentar ou implementar qualquer componente, verificar se existe página correspondente no Figma DS. Usar `get_screenshot` ou `get_design_context` para inspecionar.

---

### [2026-04-13] Calendar criado no Figma DS como componente custom

**Decisão:** O componente Calendar (shadcn/ui, sem equivalente no Radix Themes) foi criado diretamente no Figma DS na página `❖ Calendar`, frame `5980:370`. DayCell como ComponentSet atômico + dois componentes de calendário (range-select, single-select).
**Motivo:** Calendar é fundamental para as jornadas de hotel e aéreo (campos de data). Designers precisam do componente disponível no DS para usar nos layouts.
**Impacto:** Outros componentes shadcn-only críticos (Accordion, Carousel) deveriam seguir o mesmo padrão — criar página própria no Figma DS antes de implementar no código.

---

### [2026-04-13] Spinner sem primitivo shadcn — padrão lucide-react

**Decisão:** Para estados de loading, usar exclusivamente `<Loader2 className="animate-spin" size={16} strokeWidth={1.5} />` de lucide-react. Não instalar bibliotecas de spinner.
**Motivo:** Radix Themes v3.0 tem um Spinner, mas shadcn/ui não tem primitivo equivalente. O Figma DS tem o componente mas sem equivalente de código. Loader2 é consistente com a política de ícones do projeto.
**Impacto:** Proibido instalar `react-spinners` ou equivalente. Sempre `Loader2` com `animate-spin`.

---

### [2026-04-23] Introdução da tela de Carrinho como passo obrigatório antes do pagamento

**Decisão:** Uma nova tela de carrinho (`/carrinho`) foi adicionada ao produto (Figma nodes `1114:26859`, `1121:35914`, `1121:35239`). O carrinho é agora o **único ponto de entrada para o pagamento** — nenhuma jornada vai direto de seleção para `/pagamento-*`. O botão "Reservar" no PDP do hotel e o botão "Avançar" no modal de tarifa do aéreo passam a adicionar o item ao carrinho e navegar para `/carrinho`, não para o pagamento.
**Motivo:** O produto precisa suportar carrinhos com múltiplos tipos de serviço (hotel + voo + carro) em uma única transação, sem forçar o usuário a fazer jornadas de checkout separadas. Decisão de UX/Produto validada pelo designer responsável em 2026-04-23.
**Impacto:**
- Rotas `/pagamento-hotel` e `/pagamento-aereo` permanecem para MVP 1 (cada serviço ainda tem sua própria tela de pagamento)
- O botão "Finalizar Compra" do carrinho navega para `/pagamento?services=[mix]` — ver decisão pendente sobre checkout unificado abaixo
- `UserActions` no Header ganha ícone `ShoppingCart` com badge de contagem
- Um estado global de carrinho (`CartStore`) precisa ser criado em `src/lib/cartStore.ts`
- Spec completa em `docs/jornadas/carrinho/`

---

### [2026-04-23] Parâmetro `services` na URL do carrinho como identificador de origem para analytics

**Decisão:** A rota `/carrinho` sempre carrega o query param `?services=` com os tipos de serviço presentes (ex: `?services=hotel`, `?services=hotel,flight`). Esse parâmetro é atualizado automaticamente conforme itens são adicionados/removidos.
**Motivo:** O coordenador de produto exigiu que a estrutura de rotas permita identificar a origem dos serviços (Aéreo/Hotel) e a taxa de conversão do carrinho para o pagamento. O parâmetro na URL garante que essa informação esteja disponível no GA4 mesmo sem eventos customizados, e serve de contexto para todos os eventos `cart_*`.
**Impacto:** Toda a camada de analytics do carrinho usa `services` como dimensão de segmentação. Sem o parâmetro, os dashboards de conversão não funcionam corretamente. O `CartStore` é responsável por manter o param sincronizado com o estado do carrinho.

---

### [2026-04-23] Decisão pendente — Checkout unificado para carrinhos mistos (hotel + aéreo)

**Decisão:** ⚠️ **PENDENTE DE ALINHAMENTO.** Para MVP 1, cada serviço ainda tem sua própria página de pagamento (`/pagamento-hotel`, `/pagamento-aereo`). Para carrinhos mistos, a rota de destino do "Finalizar Compra" ainda não está definida.
**Motivo:** O Figma entregue (2026-04-23) mostra o carrinho com múltiplos serviços mas não especifica a tela de pagamento unificada. Criar uma nova rota `/pagamento` unificada requer decisão de escopo e prazo.
**Impacto:** Bloqueia implementação de carrinhos mistos. MVP 1 pode prosseguir com carrinho de serviço único (hotel OU aéreo). Carrinhos mistos são fase 2. Quando decidido, registrar aqui e atualizar `docs/jornadas/carrinho/visao-geral.md`.
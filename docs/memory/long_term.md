# Memória de Longo Prazo — Portal do Cliente

> Atualizado ao final de cada sessão. Fonte de verdade sobre o estado e progresso do projeto.

---

## Estado Atual do Projeto

- **Fase:** Em desenvolvimento ativo
- **Última atualização:** 2026-04-13

---

## Progresso por Área

### Feito

#### Infraestrutura
- Estrutura base configurada: React + TypeScript + Vite + Tailwind v4
- Design System Rules documentadas no CLAUDE.md (tokens, tipografia, espaçamento, sombras, componentes)
- Sistema de memória file-based: Cold Start / End of Session / /docs/memory/ / /docs/sessions/

#### Header (todos os contextos)
- Header global refatorado: sem hamburguer, nav ativa por rota, `UserActions` exportado e reutilizável
- Header hoteleiro (`SearchResultsHeader`) e aéreo (`FlightResultsHeader`) com `UserActions`
- Logo Trib Pass clicável → homepage em todos os headers
- User Info hover com cor sólida `#ebebef` (acessibilidade)
- Bell do lucide-react em todos os headers
- Header da home com sincronização bidirecional com SearchSection: clicar na nav muda o searchbar E atualiza o botão ativo

#### Página de Perfil (`/minha-conta/perfil`)
- ProfilePage completa com tabs: Meus Dados, Histórico, Configurações
- `AddCardModal` implementado e conectado ao botão "+" de Formas de Pagamento
- `AddTravelerModal` implementado (avatar dinâmico, máscara CPF/telefone/data, select parentesco) e conectado
- `PaymentCardItem`: interação de slide ao clicar nos ⋮ — revela botões editar/apagar com animação suave; fecha com click outside

#### Home Page
- SearchSection com tabs: Hospedagem, Passagem aérea, Aluguel de carro
- Sincronização Header ↔ SearchSection: `searchTab` state no HomePage, `NavCategory` prop override no Header
- SectionTitle com filtros de categoria (Todos, Praia, Urbano, Cultural, Econômico)

#### Auditoria de identidade visual (2026-04-10)
- `#3e63dd` (azul plataforma) **eliminado** de todo o codebase — 15 arquivos corrigidos
- `#3358d4` (SearchSection aba ativa) corrigido para `#12a594`
- Radix accent blue nas tags de filtro (SectionTitle) substituído por teal do produto
- Cor primária consolidada: `#12a594` / `bg-primary` em todo o produto

#### Documentação — Design System (2026-04-13)
- `docs/design-system/tokens.md` — reescrita completa a partir dos JSONs exportados do Figma DS
  - 4 camadas: Scaling → Color scheme (Radix) → Theme (por marca) → Tokens (semânticos)
  - Escala Neutral (Slate) e Primary (Teal) completas com hex values
  - Tokens semânticos: Error, Success, Warning, Info
  - Novos tokens de spacing: space-md2 (14px), space-4xl (48px), space-4.5xl (56px), space-5xl (64px)
  - White-label: tabela comparativa dos 5 temas (Trib Pass, Sistema, Trib, Voalá, Meu Clube)
- `docs/design-system/componentes.md` — reescrita completa, Figma DS como fonte de verdade
  - Comparativo de-para: 35 componentes Radix Themes mapeados para shadcn/ui
  - 6 componentes novos v3.0 com padrão de implementação (Spinner, Tab Nav, Data List, etc.)
  - Tourism Components documentados: Currency, Hotel Cards, Hero Banner, Header (6 variantes), Search Bar, Brands
  - Componentes shadcn-only sem equivalente Figma listados com justificativa

#### Documentação — Jornadas (2026-04-11 a 13)
- `docs/jornadas/hotel/` — spec-telas.md, criterios-aceite.md, componentes.md, mapa-eventos.md **completos**
  - Pagamento: 3 etapas (Dados pessoais, Como pagar, Nota Fiscal), sticky card, CTA "Efetuar Reserva"
  - CurrencyConfig: Tribz slider com formato "[N] tribz | R$ [equivalente]"
- `docs/jornadas/aereo/` — visao-geral.md, spec-telas.md, criterios-aceite.md, componentes.md, mapa-eventos.md **completos**
  - 7 divergências PRD vs Figma resolvidas em favor do Figma
  - Pagamento Aéreo tem seletor de método (Pix/Boleto/Card/Tribz) — diferente do hotel

#### Figma DS — Calendar Component (2026-04-13)
- Arquivo: `aYVvwo3llX85irnjON7nVt`, página `❖ Calendar`, frame `5980:370`
- **DayCell** ComponentSet (`5982:435`): 8 variantes — default, today, selected, range-start, range-middle, range-end, disabled, outside
- **Calendar/range-select** (`5986:489`): 308×296px, range 15→20, today=13, Abril 2026
- **Calendar/single-select** (`5984:454`): 308×296px, dia 13 selecionado

### Em andamento
- Nenhum item aberto no momento

### Pendente / Próximos passos
- Integração com API: AddCardModal, AddTravelerModal, ações editar/apagar cartão
- Jornada Aluguel de Carro: sem spec ainda
- Jornadas de Confirmação e Conta do usuário
- Implementar componentes do código baseados nas jornadas documentadas (Hotel e Aéreo)
- Considerar ComponentSet unificado para Calendar (mode=range/single) no Figma DS
- Considerar páginas no Figma DS para componentes shadcn-only (Accordion, Carousel, Drawer)

---

## Contexto Acumulado

- O produto **Trib Pass** exige que o usuário esteja sempre logado — nunca há estado "deslogado" na UI
- Cor primária do produto: `#12a594` (teal). O azul `#3e63dd` é cor da plataforma corporativa e **não deve ser usado** no Trib Pass
- `UserActions` (avatar + saudação + Tribz + bell) é o componente de user info reutilizado em todos os headers
- `NavCategory` é exportado de `Header.tsx` para uso externo (HomePage o usa para override do estado ativo)
- Animações de reveal (ex: slide do card de pagamento) usam `maxWidth` + `opacity` via inline `style` — Tailwind não anima `max-width` arbitrário de forma confiável
- Arquivos em `src/imports/` são gerados pelo Figma MCP; podem conter cores hardcoded que precisam ser auditadas ao importar novos componentes
- **Figma DS** (`aYVvwo3llX85irnjON7nVt`) é fonte de verdade para componentes — sempre consultar antes de implementar
- **Jornadas documentadas** no Figma estão em `EJ1yZNlnpYPREt76Fypnyz` (Portal do Cliente file)
- **Async confirmation rule**: pós-checkout o estado é sempre "Em processamento", nunca "Confirmado"
- **CurrencyConfig**: nunca hardcodar label de moeda ("tribz", "pontos") — sempre via `CurrencyConfig.currencyLabel`
- **Spinner**: usar `<Loader2 className="animate-spin" />` de lucide-react — sem primitivo shadcn

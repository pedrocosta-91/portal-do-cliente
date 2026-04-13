# Memória de Longo Prazo — Portal do Cliente

> Atualizado ao final de cada sessão. Fonte de verdade sobre o estado e progresso do projeto.

---

## Estado Atual do Projeto

- **Fase:** Em desenvolvimento ativo
- **Última atualização:** 2026-04-10

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

### Em andamento
- Nenhum item aberto no momento

### Pendente / Próximos passos
- Integração com API: AddCardModal, AddTravelerModal, ações editar/apagar cartão (TODO nos handlers)
- Definir próxima área de foco com o usuário

---

## Contexto Acumulado

- O produto **Trib Pass** exige que o usuário esteja sempre logado — nunca há estado "deslogado" na UI
- Cor primária do produto: `#12a594` (teal). O azul `#3e63dd` é cor da plataforma corporativa e **não deve ser usado** no Trib Pass
- `UserActions` (avatar + saudação + Tribz + bell) é o componente de user info reutilizado em todos os headers
- `NavCategory` é exportado de `Header.tsx` para uso externo (HomePage o usa para override do estado ativo)
- Animações de reveal (ex: slide do card de pagamento) usam `maxWidth` + `opacity` via inline `style` — Tailwind não anima `max-width` arbitrário de forma confiável
- Arquivos em `src/imports/` são gerados pelo Figma MCP; podem conter cores hardcoded que precisam ser auditadas ao importar novos componentes

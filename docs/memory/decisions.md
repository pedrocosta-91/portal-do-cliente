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
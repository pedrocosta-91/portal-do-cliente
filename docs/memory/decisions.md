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
# Documentação — Portal do Cliente

Guia de navegação da wiki do produto.

## Para quem é cada pasta

| Pasta | Responsável | O que contém |
|---|---|---|
| `produto/` | PM | Visão, personas, OKRs e roadmap |
| `jornadas/` | PM / Designer | Specs de UX por jornada transacional |
| `design-system/` | Designer | Tokens, componentes e guias de estilo |
| `api/` | Engenharia | Contratos e documentação de API |
| `architecture/` | Engenharia | Decisões arquiteturais (ADRs) |
| `transformation/` | Engenharia | Framework de desenvolvimento agentic por feature |
| `historico/` | PM | Artefatos de discovery (lean inception, backlog inicial) |

## Estrutura

```
docs/
├── produto/
│   ├── visao.md
│   ├── personas.md
│   ├── okrs.md
│   └── roadmap.md
├── jornadas/
│   ├── _template/          ← copiar ao criar nova jornada
│   ├── hotel/
│   ├── aereo/
│   └── area-logada/
├── design-system/
│   ├── tokens.md
│   ├── componentes.md
│   └── guias/
├── api/
├── architecture/
├── transformation/
└── historico/
    ├── lean-inception/
    └── backlog/
```

## Regras

- Toda nova jornada deve ser criada a partir do `_template/`
- Não editar pastas de engenharia (`api/`, `architecture/`, `transformation/`)
- Artefatos históricos vão para `historico/` — não excluir, apenas mover

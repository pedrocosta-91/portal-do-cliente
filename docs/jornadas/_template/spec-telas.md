# Spec de Telas — [Nome da Jornada]

**Jornada:** [Nome]  
**Versão:** 1.0  
**Última atualização:** [Mês Ano]

> Referência Figma: [file key] — node `[node-id]`

---

## [Nome da Tela 1]

**Rota:** `/rota`  
**Arquivo:** `src/app/pages/NomeDaTela.tsx`  
**Figma node:** `[node-id]`

### Layout geral

> Descrever a estrutura de layout da tela (ex: duas colunas, sidebar + conteúdo, etc.)

### Componentes

| Componente | Localização | Notas |
|---|---|---|
| [Nome] | `src/app/components/...` | |

### Campos / Elementos interativos

| Elemento | Tipo | Comportamento | Validação |
|---|---|---|---|
| [Campo 1] | Input text | | Obrigatório |
| [Campo 2] | Select | | |
| [Botão CTA] | Button | Navega para `/rota` | |

### Estados da tela

| Estado | Gatilho | Comportamento |
|---|---|---|
| Vazio | Sem dados carregados | Exibir skeleton / placeholder |
| Carregando | Após ação do usuário | Spinner / loading state |
| Erro | Falha na API | Mensagem de erro + ação |
| Sucesso | Dados carregados | Exibir conteúdo |

### Regras específicas desta tela

- [Regra 1]
- [Regra 2]

---

## [Nome da Tela 2]

**Rota:** `/rota-2`  
**Arquivo:** `src/app/pages/NomeDaTela2.tsx`

> Repetir estrutura acima para cada tela da jornada.

---

## Parâmetros de URL

| Rota | Parâmetros | Exemplo |
|---|---|---|
| `/rota` | `?param1=X&param2=Y` | `?destino=Miami&checkIn=2026-05-10` |

> Regra: todos os parâmetros críticos devem persistir na query string durante toda a jornada. Nunca depender exclusivamente de estado React.

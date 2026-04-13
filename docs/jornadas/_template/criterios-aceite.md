# Critérios de Aceite — [Nome da Jornada]

**Jornada:** [Nome]  
**Versão:** 1.0  
**Última atualização:** [Mês Ano]

> Formato: Gherkin (Given / When / Then). Cada critério deve ser testável de forma independente.

---

## [Nome da Tela 1] — `/rota`

### CA-[JRN]-001 — [Descrição curta]

```gherkin
Given [pré-condição]
When [ação do usuário]
Then [resultado esperado]
  And [resultado adicional, se houver]
```

**Prioridade:** Alta / Média / Baixa  
**Tipo:** Funcional / Visual / Performance  

---

### CA-[JRN]-002 — [Descrição curta]

```gherkin
Given [pré-condição]
When [ação do usuário]
Then [resultado esperado]
```

---

## [Nome da Tela 2] — `/rota-2`

### CA-[JRN]-003 — [Descrição curta]

```gherkin
Given [pré-condição]
When [ação do usuário]
Then [resultado esperado]
```

---

## Regras globais da jornada

### CA-[JRN]-G01 — Persistência de parâmetros de URL

```gherkin
Given que o usuário está em qualquer tela da jornada
When ocorre um refresh da página
Then os parâmetros de busca são preservados via query string
  And o estado da tela é restaurado corretamente
```

### CA-[JRN]-G02 — White-label: moeda configurável

```gherkin
Given que a instância do produto define uma CurrencyConfig
When qualquer valor monetário é exibido na jornada
Then o rótulo e símbolo da moeda refletem a configuração da instância
  And nenhum texto hardcoded de "Tribz" ou "R$" é exibido nos componentes
```

---

## Checklist de aceite — QA

> Marcar antes de cada deploy para produção.

### [Tela 1]
- [ ] [Critério 1]
- [ ] [Critério 2]
- [ ] Estado vazio exibido corretamente
- [ ] Estado de erro exibido corretamente
- [ ] Responsivo (mobile + desktop)

### [Tela 2]
- [ ] [Critério 1]
- [ ] [Critério 2]

---

## Notas de QA

> Registrar aqui edge cases descobertos durante testes, comportamentos inesperados e decisões de produto tomadas durante a validação.

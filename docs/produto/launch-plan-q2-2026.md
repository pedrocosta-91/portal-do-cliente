# Launch Plan — Portal do Cliente MVP (Q2 2026)

**Versão:** 1.2  
**Data:** 16/04/2026  
**Owner:** Pedro Costa (PM + Product Designer)  
**Deadline:** 31/05/2026  

---

## 1. Visão Geral do Lançamento

| Campo | Detalhe |
|---|---|
| **O que** | MVP do Portal do Cliente — plataforma white-label de viagens |
| **Por quê** | Substituir o fornecedor atual (Moblix) por solução própria, retomando controle de experiência e escalabilidade |
| **Para quem** | Usuários Trib Pass (B2B2C) — fase de teste interno |
| **Quando** | Go-live até 31/05/2026 |
| **Como** | Substituição direta do Moblix pelo Portal do Cliente no produto Trib Pass (validação interna) |
| **Time** | Pedro Costa (Design/PM) · Eliano Faria (Engenharia) · Fernando Damaso (Front-end) |
| **Dependência crítica** | Broker — motor de busca/reservas desenvolvido em paralelo. Previsão de integração: 15/05/2026 |

---

## 2. Escopo do MVP

### Jornadas incluídas

| Jornada | Escopo | Design/UX | Dev |
|---|---|---|---|
| **Hotel** | Busca → Resultados → Detalhes → Pagamento → Confirmação | ✅ Pronto no Figma | 🔄 A desenvolver |
| **Aéreo** | Busca → Resultados → Seleção de voo → Pagamento → Confirmação | ✅ Pronto no Figma | 🔄 A desenvolver |
| **Área Logada** | Perfil · Histórico de viagens · Viajantes · Formas de pagamento | 🔄 Em andamento | 🔄 A desenvolver |

### Fora do MVP (pós-launch)

- Aluguel de veículos
- Integração Trib (SaaS B2C)
- Mapa integrado (Google Maps)
- Pagamento misto (Tribz + R$)
- Produto Voalá

---

## 3. Dependências e Riscos

### Broker — dependência crítica

O Broker é o motor que alimenta buscas e reservas. O Portal do Cliente funciona como shell de frontend; sem o Broker, não há dados reais.

| Cenário | Probabilidade | Impacto | Mitigação |
|---|---|---|---|
| Broker entregue em 15/05 conforme previsto | Alta | — | Seguir plano normal |
| Broker atrasado (entrega após 22/05) | Média | Janela de integração comprimida para < 7 dias | Priorizar jornada de Hotel para integração primeiro; congelar features novas imediatamente |
| Broker entregue sem contrato de API definido | Baixa | Retrabalho de integração | Alinhar contrato de API (mocks) **até 30/04** mesmo com Broker incompleto |

### Time enxuto (3 pessoas)

Com 3 membros no time, qualquer ausência impacta o prazo.

- **Mitigação:** Priorizar entregas sequenciais (não paralelas) por jornada. Fernando foca no front, Eliano na integração com Broker, Pedro na validação de paridade Figma.

---

## 4. Cronograma — 45 dias

### Visão macro

```
ABR                     MAI                          MAI/JUN
────────────────────────────────────────────────────────────
16/04     30/04   15/05        22/05    28/05   31/05
  │         │       │            │        │       │
  ├─ DEV ───┤       ├─ INTEGR ───┤─ QA ───┤ LIVE ─┤
  Hotel +         Broker +      Homo-    Go-
  Aéreo +         Portal        logação  live
  Área logada
```

> Design e UX das 3 jornadas prontos no Figma. Esta fase inicia o desenvolvimento front-end com dados mockados, em paralelo com o desenvolvimento do Broker.

---

### Fase 1 — Desenvolvimento (16/04 → 14/05) · 4 semanas

**Objetivo:** Implementar as 3 jornadas no front-end com dados mockados, a partir das telas aprovadas no Figma. Mocks de API alinhados com o Broker para integração na fase seguinte.

**Semana 1 (16–22/04)**

| Tarefa | Responsável | Entrega |
|---|---|---|
| Implementação jornada Hotel: resultados de busca + filtros | Fernando | 22/04 |
| Alinhar contrato de API com time Broker (endpoints + payloads das 3 jornadas) | Eliano | 22/04 |
| Spec de telas Área Logada: Histórico + Viajantes (fechar os fluxos pendentes no Figma) | Pedro | 20/04 |

**Semana 2 (23–30/04)**

| Tarefa | Responsável | Entrega |
|---|---|---|
| Implementação jornada Hotel: detalhe do hotel + pagamento + confirmação | Fernando | 30/04 |
| Definir mocks de API para jornada Hotel | Eliano | 28/04 |
| Validar paridade Figma — jornada Hotel completa | Pedro | 30/04 |
| **Checkpoint 1:** contrato de API com Broker assinado e documentado | Eliano + Broker | 30/04 |

**Semana 3 (01–07/05)**

| Tarefa | Responsável | Entrega |
|---|---|---|
| Implementação jornada Aéreo: resultados + seleção de voo + pagamento + confirmação | Fernando | 07/05 |
| Definir mocks de API para jornada Aéreo | Eliano | 05/05 |
| Setup de ambiente de homologação | Eliano | 07/05 |
| Validar paridade Figma — jornada Aéreo completa | Pedro | 07/05 |

**Semana 4 (08–14/05)**

| Tarefa | Responsável | Entrega |
|---|---|---|
| Implementação Área Logada: Histórico de viagens · Viajantes · Formas de pagamento | Fernando | 12/05 |
| Definir mocks de API para Área Logada | Eliano | 10/05 |
| Revisão geral de paridade visual (Figma × código) — todas as jornadas | Pedro | 14/05 |
| Validar white-label: troca de tema Trib Pass funcionando corretamente | Pedro + Fernando | 14/05 |
| **Checkpoint 2:** feature freeze — sem novas features após 14/05 | Todo o time | 14/05 |

---

### Fase 2 — Integração Portal ↔ Broker (15/05 → 22/05) · 1 semana

**Objetivo:** Substituir todos os mocks por chamadas reais ao Broker.

| Tarefa | Responsável | Entrega |
|---|---|---|
| Integração jornada Hotel com Broker | Eliano + Fernando | 18/05 |
| Integração jornada Aéreo com Broker | Eliano + Fernando | 20/05 |
| Integração Área Logada (dados reais de usuário/reservas) | Eliano + Fernando | 22/05 |
| Testes de smoke por jornada após integração | Pedro + Eliano | 22/05 |

> ⚠️ **Gate de integração:** Se o Broker não estiver disponível em 15/05, acionar liderança imediatamente com análise de impacto no prazo.

---

### Fase 3 — Homologação Interna (23/05 → 28/05) · 6 dias

**Objetivo:** Validar o produto com dados reais em ambiente de staging antes do go-live.

**Roteiro de teste (por jornada):**

| Jornada | Fluxo crítico | Responsável por testar |
|---|---|---|
| Hotel | Busca → Reserva completa → Confirmação | Pedro + Eliano |
| Aéreo | Busca → Seleção de voo → Pagamento → Confirmação | Pedro + Fernando |
| Área Logada | Login → Histórico → Adicionar viajante → Editar perfil | Pedro |
| Cross | Sessão expirada · estados vazios · erros de API | Eliano |

**Critérios de go/no-go:**

- [ ] As 3 jornadas completam sem erro crítico no fluxo principal
- [ ] Estado pós-reserva sempre retorna "Em processamento" (nunca "Confirmado")
- [ ] Área logada reflete dados reais do usuário logado
- [ ] Nenhum error 500 ou tela em branco nos fluxos principais
- [ ] Paridade visual com Figma aprovada por Pedro
- [ ] Liderança Bancorbrás briefada e alinhada com o go-live

---

### Fase 4 — Go-Live (29/05 → 31/05)

**Objetivo:** Colocar o Portal do Cliente em produção substituindo o Moblix no Trib Pass.

**Runbook do dia de lançamento:**

| Horário | Ação | Responsável | Gatilho de rollback |
|---|---|---|---|
| T-24h | Validação final em staging — smoke test completo | Eliano | Qualquer falha bloqueia go-live |
| T-4h | Comunicado interno para liderança Bancorbrás | Pedro | — |
| T-0 | Deploy em produção + troca de endpoint Trib Pass → Portal | Eliano | Erro > 5% nas 1ª chamadas |
| T+1h | Monitorar logs e erros nas 3 jornadas | Eliano | Tela em branco ou erro 500 persistente |
| T+2h | Confirmação de estabilidade — go-live validado | Eliano + Pedro | — |

**Plano de rollback:**

Se qualquer jornada apresentar falha crítica em produção, reverter para Moblix e acionar Broker/time de infra. O Portal do Cliente deve estar apagável por feature flag ou troca de routing sem downtime.

---

## 5. Checklist Pré-Launch

### Produto / Design

- [ ] Paridade Figma validada para as 3 jornadas
- [ ] Todos os estados de erro mapeados e com UI (404, API error, sessão expirada)
- [ ] Estados de loading implementados (Skeleton / Spinner)
- [ ] Responsividade validada (Mobile First — telas mobile praticamente prontas via variáveis do DS; validar paridade perfeita no desktop antes do go-live)
- [ ] CurrencyConfig configurado corretamente para Trib Pass (`currencyLabel: "tribz"`)
- [ ] White-label validado: sistema de temas do DS troca cor primária por produto (launch com tema Trib Pass — verde `#12a594`); nenhuma cor hardcoded que impeça a troca de identidade visual
- [ ] Verificar que nenhum `#3e63dd` (azul plataforma) persiste no codebase (auditoria feita em 10/04 — confirmar com build atual)

### Engenharia

- [ ] Contrato de API com Broker documentado e versionado
- [ ] Ambiente de homologação configurado e funcionando
- [ ] Variáveis de ambiente de produção configuradas (não hardcoded)
- [ ] Plano de rollback documentado e testado
- [ ] Logs de erro configurados em produção

### Design System / Front-end

- [ ] Design System lib utilizada corretamente (sem hardcode de tokens)
- [ ] Componentes de `src/app/components/ui/` reutilizados (sem duplicação)
- [ ] Nenhum import não utilizado / hook sem uso no código
- [ ] Build sem warnings críticos

### Comunicação

- [ ] Liderança Bancorbrás alinhada com escopo, prazo e estratégia de rollout
- [ ] Time Broker alinhado sobre data de integração e responsabilidades
- [ ] Documento de launch plan compartilhado com todos os envolvidos

---

## 6. Pós-Launch (Jun 2026)

| Quando | O que fazer | Responsável |
|---|---|---|
| D+1 (01/06) | Review de erros de produção e logs | Eliano |
| D+3 (03/06) | Check das 3 jornadas com dados reais — fluência do fluxo | Pedro |
| D+7 (07/06) | Avaliação qualitativa com usuários internos | Pedro |
| D+14 (15/06) | Decisão sobre expansão (mais empresas Trib Pass ou fase 2) | Pedro + Liderança |
| D+30 | Retro do MVP — o que funcionou, o que não funcionou | Todo o time |

---

## 7. Comunicação com Stakeholders

**Liderança Bancorbrás**

| Quando | Formato | Conteúdo |
|---|---|---|
| 30/04 | Update assíncrono (Notion / email) | Status checkpoint 1: contrato de API assinado, frentes em andamento |
| 14/05 | Update assíncrono | Feature freeze atingido — entrando em integração |
| 23/05 | Apresentação rápida (15 min) | Demo em staging — solicitar aprovação para go-live |
| 29/05 | Comunicado de go-live | Portal do Cliente em produção — substituição do Moblix |

---

## 8. Glossário do Plano

| Termo | Definição |
|---|---|
| **Broker** | Motor de busca e reservas desenvolvido em paralelo ao Portal. Fornece dados reais de hotéis, voos, etc. |
| **Moblix** | Fornecedor atual que o Portal do Cliente irá substituir no Trib Pass |
| **Feature freeze** | Data após a qual nenhuma nova feature entra no escopo — apenas bugs |
| **Smoke test** | Teste rápido dos fluxos principais para verificar que nada está quebrado |
| **Go/no-go** | Decisão binária de avançar para produção ou não, baseada nos critérios de homologação |
| **Trib Pass** | Produto de benefício corporativo de viagens (B2B2C) — cliente do MVP |

---

> **Próxima revisão:** 30/04/2026 — Checkpoint 1  
> **Documento mantido por:** Pedro Costa  

# Mapa de Eventos — [Nome da Jornada]

**Jornada:** [Nome]  
**Versão:** 1.0  
**Última atualização:** [Mês Ano]

> Eventos de analytics e de negócio disparados nesta jornada. Ferramenta: Google Analytics (GA4).

---

## Convenção de nomenclatura

```
[categoria]_[objeto]_[ação]

Exemplos:
  hotel_search_submitted
  hotel_result_card_clicked
  hotel_checkout_completed
```

---

## Eventos por tela

### [Tela 1] — `/rota`

| Evento | Gatilho | Parâmetros | Obrigatório |
|---|---|---|---|
| `[jornada]_search_submitted` | Clique no botão "Buscar" | `destination`, `check_in`, `check_out`, `guests` | Sim |
| `[jornada]_search_field_edited` | Edição de campo após busca inicial | `field_name` | Não |

---

### [Tela 2] — `/rota-2`

| Evento | Gatilho | Parâmetros | Obrigatório |
|---|---|---|---|
| `[jornada]_result_viewed` | Página de resultados carregada | `destination`, `result_count` | Sim |
| `[jornada]_filter_applied` | Aplicação de filtro | `filter_type`, `filter_value` | Não |
| `[jornada]_result_clicked` | Clique em card de resultado | `item_id`, `item_name`, `position` | Sim |

---

### [Tela de Checkout] — `/pagamento`

| Evento | Gatilho | Parâmetros | Obrigatório |
|---|---|---|---|
| `[jornada]_checkout_started` | Entrada na tela de pagamento | `item_id`, `price`, `currency` | Sim |
| `[jornada]_checkout_step_completed` | Conclusão de cada etapa do Accordion | `step` (1, 2 ou 3) | Sim |
| `[jornada]_checkout_completed` | Clique em "Confirmar reserva" | `item_id`, `price`, `currency`, `payment_method` | Sim |

---

### [Tela de Confirmação] — `/confirmacao`

| Evento | Gatilho | Parâmetros | Obrigatório |
|---|---|---|---|
| `[jornada]_booking_confirmation_viewed` | Tela de confirmação carregada | `booking_id`, `item_id` | Sim |

---

## Funil de conversão

```
[jornada]_search_submitted
        ↓
[jornada]_result_clicked
        ↓
[jornada]_checkout_started
        ↓
[jornada]_checkout_completed
        ↓
[jornada]_booking_confirmation_viewed
```

**Meta de conversão MVP:** ≥ 25% de busca → confirmação

---

## Notas de implementação

- Eventos são disparados via `gtag()` ou wrapper de analytics do projeto
- `currency` sempre reflete a moeda configurada pela instância (`CurrencyConfig.label`)
- Nunca hardcodar "Tribz" ou "BRL" — usar o valor vindo da config

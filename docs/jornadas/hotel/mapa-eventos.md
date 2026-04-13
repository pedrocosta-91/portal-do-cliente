# Mapa de Eventos — Jornada de Hotel

**Jornada:** Hotel  
**Versão:** 1.0  
**Última atualização:** Abril 2026  
**Ferramenta:** Google Analytics (GA4)

---

## Convenção de nomenclatura

```
hotel_[objeto]_[ação]

Exemplos:
  hotel_search_submitted
  hotel_result_card_viewed
  hotel_booking_completed
```

---

## Eventos por tela

### Home — Busca


| Evento                   | Gatilho            | Parâmetros                                                |
| ------------------------ | ------------------ | --------------------------------------------------------- |
| `hotel_search_submitted` | Clique em "Buscar" | `destination`, `check_in`, `check_out`, `guests`, `rooms` |


---

### Resultados (`/resultados-hotel`)


| Evento                     | Gatilho                            | Parâmetros                              |
| -------------------------- | ---------------------------------- | --------------------------------------- |
| `hotel_results_viewed`     | Página de resultados carregada     | `destination`, `result_count`, `nights` |
| `hotel_filter_applied`     | Aplicação de qualquer filtro       | `filter_type`, `filter_value`           |
| `hotel_sort_changed`       | Alteração de ordenação             | `sort_by`                               |
| `hotel_search_edited`      | Edição inline de parâmetro         | `field_name`                            |
| `hotel_view_rooms_clicked` | Clique em "Ver quartos" em um card | `hotel_id`, `hotel_name`, `position`    |


---

### Drawer de Quartos


| Evento                         | Gatilho                           | Parâmetros                                 |
| ------------------------------ | --------------------------------- | ------------------------------------------ |
| `hotel_drawer_opened`          | Drawer de quartos aberto          | `hotel_id`, `hotel_name`                   |
| `hotel_drawer_room_selected`   | Clique em "Reservar" no drawer    | `hotel_id`, `room_id`, `price`, `currency` |
| `hotel_drawer_details_clicked` | Clique em "ver todos os detalhes" | `hotel_id`                                 |


---

### PDP (`/hotel`)


| Evento                   | Gatilho                                      | Parâmetros                                 |
| ------------------------ | -------------------------------------------- | ------------------------------------------ |
| `hotel_pdp_viewed`       | PDP carregado                                | `hotel_id`, `hotel_name`, `destination`    |
| `hotel_gallery_opened`   | Modal de galeria aberto                      | `hotel_id`                                 |
| `hotel_room_tab_changed` | Alteração de tab de tipo de quarto           | `tab_name`                                 |
| `hotel_book_clicked`     | Clique em "Reservar" (card sticky ou quarto) | `hotel_id`, `room_id`, `price`, `currency` |


---

### Pagamento (`/pagamento-hotel`)


| Evento                          | Gatilho                         | Parâmetros                                        |
| ------------------------------- | ------------------------------- | ------------------------------------------------- |
| `hotel_checkout_started`        | Entrada na tela de pagamento    | `hotel_id`, `price`, `currency`, `nights`         |
| `hotel_checkout_step_completed` | Conclusão de etapa do Accordion | `step` (1, 2 ou 3)                                |
| `hotel_checkout_completed`      | Clique em "Confirmar reserva"   | `hotel_id`, `price`, `currency`, `payment_method` |


---

### Confirmação (`/confirmacao-hotel`)


| Evento                              | Gatilho                       | Parâmetros                       |
| ----------------------------------- | ----------------------------- | -------------------------------- |
| `hotel_booking_confirmation_viewed` | Tela de confirmação carregada | `hotel_id`, `nights`, `currency` |
| `hotel_booking_print_clicked`       | Clique em "Imprimir"          | `hotel_id`                       |


---

## Funil de conversão

```
hotel_search_submitted          → busca realizada
        ↓
hotel_view_rooms_clicked        → interesse no hotel
        ↓
hotel_drawer_room_selected      → intenção de reserva (drawer)
  ou hotel_book_clicked         → intenção de reserva (PDP)
        ↓
hotel_checkout_started          → início do checkout
        ↓
hotel_checkout_completed        → checkout enviado
        ↓
hotel_booking_confirmation_viewed → confirmação recebida
```

**Meta de conversão MVP 1:** ≥ 25% de `hotel_search_submitted` → `hotel_booking_confirmation_viewed`

---

## Notas de implementação

- `currency` sempre reflete `CurrencyConfig.label` da instância — nunca hardcodar "Tribz" ou "BRL"
- `price` sempre no valor numérico da moeda configurada
- `position` em `hotel_view_rooms_clicked` é o índice do card na lista (0-based)
- Eventos de drawer são adicionais à hierarquia existente — não substituem os eventos do PDP


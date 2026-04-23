# Mapa de Eventos — Jornada de Aéreo

**Jornada:** Aéreo  
**Versão:** 1.0  
**Última atualização:** Abril 2026  
**Ferramenta:** Google Analytics (GA4)

---

## Convenção de nomenclatura

```
flight_[objeto]_[ação]

Exemplos:
  flight_search_submitted
  flight_result_row_viewed
  flight_booking_completed
```

---

## Eventos por tela

### Home — Busca


| Evento                    | Gatilho            | Parâmetros                                                                          |
| ------------------------- | ------------------ | ----------------------------------------------------------------------------------- |
| `flight_search_submitted` | Clique em "Buscar" | `origin`, `destination`, `departure_date`, `return_date`, `passengers`, `trip_type` |


---

### Resultados (`/resultados-aereo`)


| Evento                   | Gatilho                              | Parâmetros                                           |
| ------------------------ | ------------------------------------ | ---------------------------------------------------- |
| `flight_results_viewed`  | Página de resultados carregada       | `origin`, `destination`, `result_count`, `trip_type` |
| `flight_filter_applied`  | Aplicação de qualquer filtro         | `filter_type`, `filter_value`                        |
| `flight_date_changed`    | Troca de data no DateCarousel        | `leg` (`ida` ou `volta`), `new_date`                 |
| `flight_search_edited`   | Edição inline de parâmetro no Header | `field_name`                                         |
| `flight_details_clicked` | Clique em "Ver detalhes"             | `flight_id`, `airline`, `leg`, `position`            |
| `flight_select_clicked`  | Clique em "Selecionar" em um card    | `flight_id`, `airline`, `leg`, `position`            |


---

### Modal Detalhes do Voo


| Evento                        | Gatilho                            | Parâmetros                    |
| ----------------------------- | ---------------------------------- | ----------------------------- |
| `flight_details_modal_opened` | Modal de detalhes aberto           | `flight_id`, `airline`, `leg` |
| `flight_details_expanded`     | Clique em "Mais detalhes" (expand) | `flight_id`                   |


---

### Modal Escolha de Tarifa


| Evento                      | Gatilho                           | Parâmetros                                                              |
| --------------------------- | --------------------------------- | ----------------------------------------------------------------------- |
| `flight_class_modal_opened` | Modal de escolha de tarifa aberto | `flight_id`, `airline`                                                  |
| `flight_class_selected`     | Clique em uma tarifa              | `flight_id`, `tarifa` (`light`, `classic`, `flex`), `price`, `currency` |
| `flight_class_advanced`     | Clique em "Avançar"               | `flight_id`, `tarifa`, `price`, `currency`                              |


---

### Pagamento (`/pagamento-aereo`)


| Evento                           | Gatilho                         | Parâmetros                                                                          |
| -------------------------------- | ------------------------------- | ----------------------------------------------------------------------------------- |
| `flight_checkout_started`        | Entrada na tela de pagamento    | `flight_id_ida`, `flight_id_volta`, `tarifa`, `price`, `currency`, `passengers`     |
| `flight_checkout_step_completed` | Conclusão de etapa do Accordion | `step` (1, 2 ou 3)                                                                  |
| `flight_payment_method_selected` | Seleção de método de pagamento  | `method` (`pix`, `boleto`, `credit_card`, `tribz`, `tribz_card`)                    |
| `flight_checkout_completed`      | Clique em "Efetuar Reserva"     | `flight_id_ida`, `flight_id_volta`, `price`, `currency`, `payment_method`, `tarifa` |


---

### Confirmação (`/confirmacao-aereo`)


| Evento                               | Gatilho                       | Parâmetros                                                   |
| ------------------------------------ | ----------------------------- | ------------------------------------------------------------ |
| `flight_booking_confirmation_viewed` | Tela de confirmação carregada | `flight_id_ida`, `flight_id_volta`, `currency`, `passengers` |
| `flight_booking_print_clicked`       | Clique em "Imprimir"          | `flight_id_ida`                                              |


---

## Funil de conversão

```
flight_search_submitted          → busca realizada
        ↓
flight_select_clicked            → interesse no voo
        ↓
flight_class_advanced            → tarifa escolhida
        ↓
flight_checkout_started          → início do checkout
        ↓
flight_checkout_completed        → checkout enviado
        ↓
flight_booking_confirmation_viewed → confirmação recebida
```

**Meta de conversão MVP 1:** ≥ 20% de `flight_search_submitted` → `flight_booking_confirmation_viewed`

---

## Notas de implementação

- `currency` sempre reflete `CurrencyConfig.label` da instância — nunca hardcodar "Tribz" ou "BRL"
- `price` sempre no valor numérico da moeda configurada
- `position` em `flight_select_clicked` e `flight_details_clicked` é o índice do card na lista (0-based)
- `leg` indica a perna do voo: `"ida"` ou `"volta"`
- `tarifa` deve ser um dos valores fixos: `"light"`, `"classic"` ou `"flex"`
- Para viagens "Somente ida", `flight_id_volta` deve ser `null` nos eventos de checkout e confirmação
- `flight_payment_method_selected` é disparado a cada troca de método — não apenas na confirmação


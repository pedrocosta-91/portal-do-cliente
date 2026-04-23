# Visão Geral — Jornada do Carrinho

**Produto:** Portal do Cliente  
**Jornada:** Carrinho  
**Versão:** 1.0  
**Status:** [ ] Aprovado  [ ] Live  
**Última atualização:** Abril 2026  
**Responsável:** Pedro Costa  
**Figma nodes:** `1114:26859` (Hotel), `1121:35914` (Aéreo), `1121:35239` (Aéreo + Hotel)

---

## Objetivo da jornada

Permitir que o usuário revise, ajuste e combine diferentes serviços de viagem (hospedagem, passagens aéreas e aluguel de carro) em uma única tela antes de prosseguir para o pagamento. O carrinho elimina a necessidade de jornadas separadas de checkout para cada tipo de serviço.

---

## Posição no fluxo geral

O carrinho é o **passo obrigatório entre a seleção de qualquer serviço e o pagamento**. Nenhuma jornada chega diretamente ao pagamento sem passar pelo carrinho.

```
[Seleção Hotel]  ──┐
[Seleção Aéreo]  ──┼──► /carrinho ──► /pagamento ──► /confirmacao
[Seleção Carro]  ──┘
```

---

## Variantes do carrinho (pelo Figma)

| Variante                  | Node Figma    | Conteúdo                                               |
| ------------------------- | ------------- | ------------------------------------------------------ |
| Somente hospedagem        | `1114:26859`  | 1 item de hotel + cross-sell de passagens e carro      |
| Somente aéreo             | `1121:35914`  | 1+ itens de voo + cross-sell de hotel e carro          |
| Hospedagem + aéreo        | `1121:35239`  | Itens de hotel e voo combinados + cross-sell de carro  |

---

## Fluxo por variante

### Jornada de Hotel para o carrinho

```
Home → Resultados → Drawer de Quartos ou PDP → [Reservar] → Carrinho
```

### Jornada de Aéreo para o carrinho

```
Home → Resultados → Modal Escolha de Tarifa → [Avançar] → Carrinho
```

### Jornada combinada (cross-sell via carrinho)

```
Jornada Hotel → Carrinho → [Ver passagens] → Jornada Aéreo → Carrinho (atualizado)
```

---

## Estrutura da tela

### Coluna esquerda (848px)

1. **Breadcrumb:** "← Voltar para busca"
2. **Countdown badge:** "Oferta válida por MM:SS" (vermelho — `error-alpha/3`)
3. **Título:** "Carrinho (N)" — N = número total de itens
4. **Booking detail cards:** um card por item (hotel ou voo), com botão de remover
5. **Seção de cross-sell:** "Vamos adicionar mais produtos e levar a viagem completa?"
   - Exibe cards dos serviços **não presentes** no carrinho
   - Se só tem hotel → mostra cards de Passagens e Aluguel de Carro
   - Se só tem aéreo → mostra cards de Hospedagem e Aluguel de Carro
   - Se tem hotel + aéreo → mostra card de Aluguel de Carro
6. **CTA principal:** "Finalizar Compra" (240px, `bg-primary`, `rounded-full`)

### Coluna direita (480px)

1. **Título:** "Resumo do pagamento"
2. **Card de resumo** com:
   - Tabela: Itens | Qtd | Preço | Total (uma linha por item)
   - Subtotal, Taxas, **Total Final**
   - Callout de cancelamento (se aplicável)
   - CTA duplicado: "Finalizar Compra" (full-width)

---

## Ícone de carrinho no header

O componente `UserActions` exibe um ícone `ShoppingCart` (lucide-react) com badge de contagem de itens. O número reflete o total de itens no carrinho em tempo real.

---

## Regras de negócio

- **Carrinho persistente:** itens salvos em sessão — o usuário pode voltar às buscas e retornar ao carrinho sem perder a seleção
- **Countdown compartilhado:** o timer de oferta do carrinho compartilha a contagem do timer da última seleção — se expirar, o item é marcado como indisponível
- **Remoção de item:** ao clicar na lixeira, o item é removido. Se o carrinho ficar vazio, exibir estado vazio com CTA para buscar
- **Cross-sell contextual:** os cards de upsell exibem apenas serviços não presentes no carrinho — nunca duplicar
- **Moeda unificada:** o resumo usa sempre a moeda configurada via `CurrencyConfig` — nunca misturar moedas no mesmo carrinho

---

## Estrutura de rotas

| Rota        | Query params                                     | Descrição                         |
| ----------- | ------------------------------------------------ | --------------------------------- |
| `/carrinho` | `?services=hotel`                                | Carrinho com apenas hospedagem    |
| `/carrinho` | `?services=flight`                               | Carrinho com apenas aéreo         |
| `/carrinho` | `?services=hotel,flight`                         | Carrinho com hotel e aéreo        |
| `/carrinho` | `?services=hotel,flight,car`                     | Carrinho com hotel, aéreo e carro |

> O parâmetro `services` é atualizado automaticamente conforme itens são adicionados ou removidos. Ele não controla o conteúdo do carrinho — esse é o papel do estado da sessão — mas é obrigatório para rastreamento correto de analytics e origem da conversão.

---

## Decisão em aberto — Pagamento unificado

O botão "Finalizar Compra" do carrinho precisa de uma rota de destino definitiva:

| Opção | Rota de pagamento | Prós | Contras |
| ----- | ----------------- | ---- | ------- |
| A | `/pagamento` (nova, unificada) | Suporta combinação de serviços | Requer refatoração do checkout |
| B | `/pagamento-hotel` ou `/pagamento-aereo` (existentes) | Zero refatoração | Não suporta carrinho misto |
| C | `/pagamento?services=hotel,flight` | Rota única parametrizada | Requer checkout unificado |

**Recomendação:** Opção C — rota única `/pagamento` com parâmetro `services`. O MVP 1 implementa apenas um serviço por vez (hotel OU aéreo). Carrinhos mistos são fase 2.

> Esta decisão deve ser registrada em `docs/memory/decisions.md` após alinhamento com o time.

---

## Fora de escopo — MVP 1

- Carrinho com mais de 2 tipos de serviço simultâneos
- Checkout unificado para hotel + aéreo no mesmo pagamento
- Salvar carrinho entre sessões (cross-device)
- Cupons de desconto aplicados no carrinho

---

## Alinhamento estratégico

**OKR vinculado:** Objetivo 1 — Lançar Portal do Cliente (Fase 1)  
**Key Result:** Carrinho multi-serviço live — até 31/05/2026

---

## Links relacionados

- Figma Hotel: `EJ1yZNlnpYPREt76Fypnyz` node `1114:26859`
- Figma Aéreo: `EJ1yZNlnpYPREt76Fypnyz` node `1121:35914`
- Figma Combinado: `EJ1yZNlnpYPREt76Fypnyz` node `1121:35239`
- Spec de telas: `spec-telas.md`
- Mapa de eventos: `mapa-eventos.md`
- Componentes: `componentes.md`

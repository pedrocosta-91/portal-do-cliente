# Visão do Produto — Portal do Cliente

**Última atualização:** Abril 2026  
**Responsável:** Pedro Costa

---

## O que é o Portal do Cliente

O **Portal do Cliente** é uma plataforma white-label de turismo que permite buscar, selecionar e reservar hospedagens, passagens aéreas e, futuramente, aluguel de carros e experiências.

A plataforma é desenhada para ser consumida por diferentes produtos do Grupo Bancorbrás com regras de negócio, personas e modelos de monetização distintos.

---

## Por que existe

O Grupo Bancorbrás dependia de fornecedores terceiros para a camada transacional de viagens. Isso gerava três problemas críticos:

1. **Falta de controle sobre a experiência** — limitações de UX impostas pelo fornecedor
2. **Impedimento de escalabilidade** — novas features dependiam de roadmap externo
3. **Custo de dependência** — margens e customizações condicionadas a contratos

O Portal do Cliente resolve isso trazendo a camada transacional in-house.

---

## Modelo white-label

Cada produto que consome a plataforma define suas próprias regras:


| Produto       | Modelo                          | Público | Moeda       |
| ------------- | ------------------------------- | ------- | ----------- |
| **Trib Pass** | Benefício corporativo           | B2B2C   | Tribz       |
| **Trib**      | SaaS de planejamento de viagens | B2C     | Tribz ou R$ |
| **Voalá**     | Plataforma de viagens           | B2C     | R$          |


---

## Princípios do produto

- **Configurabilidade de moeda:** rótulo, símbolo e formatação definidos por instância — nunca hardcoded
- **Métodos de pagamento configuráveis:** moeda própria, R$, ou combinação — por instância
- **Pagamento assíncrono:** nenhuma reserva é confirmada em tempo real. Estado pós-checkout é sempre "Em processamento"
- **White-label completo:** logo, cores, nome e nomenclatura de saldo são parametrizáveis

---

## Produtos atendidos

### Fase 1 — MVP (até 31/05/2026)

- Trib Pass: jornada de hotel + aéreo + área logada

### Fase 2

- Trib: jornada de aluguel de veículos

---

## O que não é o Portal do Cliente

- Não é um produto B2C direto — sempre consumido por outros produtos
- Não é um sistema de gestão de viagens corporativas (isso é o Trib)
- Não substitui o backoffice de reservas — é a camada de frontend transacional
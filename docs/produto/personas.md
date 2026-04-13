# Personas — Portal do Cliente

**Última atualização:** Abril 2026  
**Responsável:** Pedro Costa

> As personas variam conforme o produto que consome a plataforma. A implementação não assume um perfil único de usuário.

---

## Persona 1 — Colaborador Trib Pass

**Produto:** Trib Pass  
**Modelo:** B2B2C

### Perfil

- Colaborador de empresa parceira do Grupo Bancorbrás
- Recebe benefício em Tribz como parte do pacote de benefícios corporativos
- Acessa o portal para resgatar viagens corporativas ou de lazer

### Contexto de uso

- Frequência: esporádica (viagens planejadas, não rotineiras)
- Dispositivo: desktop no ambiente corporativo, mobile fora do escritório
- Motivação principal: usar o saldo de Tribz antes de expirar

### Necessidades

- Encontrar hotéis e voos rapidamente pelo destino desejado
- Entender claramente quanto vai gastar em Tribz e se há complemento necessário
- Ter confirmação de que a reserva foi recebida (mesmo que assíncrona)

### Frustrações atuais

- Não saber o saldo disponível durante a busca
- Processo de checkout burocrático ou com muitos campos redundantes
- Falta de clareza sobre cancelamento e políticas da reserva

---

## Persona 2 — Viajante Trib

**Produto:** Trib  
**Modelo:** B2C  
**Status:** Fase 2

### Perfil

- Viajante independente que planeja e reserva viagens com autonomia
- Pode pagar em Tribz (se tiver saldo) ou em R$ — ou combinação de ambos
- Usa o Trib como ferramenta de planejamento de viagens

### Contexto de uso

- Frequência: regular (viaja com frequência, usa como ferramenta habitual)
- Dispositivo: mobile-first
- Motivação principal: centralizar planejamento e reservas em um único lugar

### Necessidades

- Flexibilidade de pagamento (Tribz + R$ quando necessário)
- Histórico de viagens acessível
- Salvar viajantes frequentes para agilizar o checkout

---

## Persona 3 — Cliente Voalá

**Produto:** Voalá  
**Modelo:** B2C  
**Status:** Fase futura

### Perfil

- Cliente da plataforma de viagens Voalá
- Compra viagens no modelo tradicional (R$)
- Familiarizado com OTAs (Booking, Decolar, etc.)

### Necessidades

- Experiência equivalente às OTAs líderes de mercado
- Parcelamento no cartão de crédito
- Preços competitivos e transparência de tarifas

---

## Notas de implementação

- Nenhum componente deve assumir persona fixa — título de saldo, moeda e métodos de pagamento vêm de `CurrencyConfig`
- O checkout deve adaptar os métodos disponíveis conforme a instância do produto
- Para aprofundar personas, executar `/persona-builder`
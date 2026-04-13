# Critérios de Aceite — Jornada de Hotel

**Jornada:** Hotel  
**Versão:** 1.0  
**Última atualização:** Abril 2026

---

## Home — Busca de Hotel

### CA-HTL-001 — Busca navega para resultados com parâmetros corretos

```gherkin
Given que estou na Home do Portal do Cliente
When preencho Destino, Check-in, Check-out, Hóspedes e Acomodações
  And clico em "Buscar"
Then sou redirecionado para /resultados-hotel
  And a query string contém: destino, checkIn, checkOut, adultos, acomodacoes
  And o SearchResultsHeader exibe os mesmos parâmetros preenchidos
```

### CA-HTL-002 — Check-out mínimo é Check-in + 1 dia

```gherkin
Given que preenchi o campo Check-in com uma data
When tento selecionar uma data de Check-out igual ou anterior ao Check-in
Then o DatePicker bloqueia a seleção
  And exibe visualmente as datas inválidas como desabilitadas
```

---

## Resultados de Hotel (`/resultados-hotel`)

### CA-HTL-003 — Lista de resultados renderiza todos os campos

```gherkin
Given que estou em /resultados-hotel com parâmetros válidos
When a página carrega
Then cada HotelResultCard exibe: imagem, nome, localização, rating badge, estrelas, features e preço na moeda configurada
  And o alert bar exibe "Preços calculados para N noites, N adultos, N acomodações"
```

### CA-HTL-004 — Filtros atualizam a lista em tempo real

```gherkin
Given que estou em /resultados-hotel com resultados carregados
When aplico qualquer filtro (Switch, Checkbox ou Slider de preço)
Then a lista de cards é atualizada sem recarregar a página
  And o contador "X hotéis encontrados" reflete o novo total
```

### CA-HTL-005 — Estado vazio dos filtros

```gherkin
Given que apliquei filtros que não correspondem a nenhum resultado
When a lista é re-renderizada
Then é exibida a mensagem "Nenhum hotel encontrado para os filtros selecionados. Tente ajustar sua busca."
  And nenhum HotelResultCard é exibido
```

### CA-HTL-006 — Ordenação funcional

```gherkin
Given que estou em /resultados-hotel com resultados carregados
When seleciono uma opção de ordenação (Menor preço / Melhor avaliados / Mais perto do centro)
Then a lista de cards é reordenada conforme o critério selecionado
```

### CA-HTL-007 — Edição inline de parâmetros re-dispara busca

```gherkin
Given que estou em /resultados-hotel
When clico no ícone de edição de um parâmetro no SearchResultsHeader
Then um popover de edição inline é exibido para aquele campo
When confirmo a edição com novos valores
Then a query string é atualizada com os novos parâmetros
  And a lista de resultados é re-renderizada
```

---

## Drawer de Quartos (overlay)

### CA-HTL-008 — Drawer abre ao clicar em "Ver quartos"

```gherkin
Given que estou em /resultados-hotel com resultados carregados
When clico em "Ver quartos" em um HotelResultCard
Then o Drawer de Quartos é exibido como overlay lateral direito (560px)
  And exibe: imagem do hotel, nome, rating, localização e lista de quartos disponíveis
```

### CA-HTL-009 — Drawer exibe facilidades de cada quarto

```gherkin
Given que o Drawer de Quartos está aberto
When visualizo um quarto na lista
Then são exibidos badges de facilidades: vista, capacidade de pessoas, wi-fi e tipo de cama
  And o preço é exibido na moeda configurada (ex: "1.000 Tribz")
  And o total da estadia é exibido abaixo (ex: "Total: 26.207 Tribz")
```

### CA-HTL-010 — CTA do Drawer navega para PDP

```gherkin
Given que o Drawer de Quartos está aberto
When clico em "ver todos os detalhes do hotel"
Then sou redirecionado para /hotel
  And todos os parâmetros de busca são preservados na query string
```

### CA-HTL-011 — Botão "Reservar" no Drawer navega para Pagamento

```gherkin
Given que o Drawer de Quartos está aberto
When clico em "Reservar" em um quarto específico
Then sou redirecionado para /pagamento-hotel
  And os parâmetros incluem: destino, checkIn, checkOut, adultos, acomodacoes, noites
```

---

## PDP — Detalhe do Hotel (`/hotel`)

### CA-HTL-012 — Galeria de fotos no layout correto

```gherkin
Given que estou em /hotel com dados carregados
When a galeria é renderizada
Then exibe 6 fotos no layout: 1 grande + 2 empilhadas à direita + 3 em linha na segunda fila
  And o container externo tem rounded-2xl
  And as fotos internas não têm border-radius próprio (clipping pelo container)
```

### CA-HTL-013 — Modal fullscreen da galeria

```gherkin
Given que estou no PDP do hotel
When clico em qualquer foto ou no botão "Mostrar todas as fotos"
Then o modal fullscreen abre com backdrop bg-black/90
  And o scroll do body é bloqueado
  And o contador "X / Y" é exibido
  And posso navegar pelas fotos com setas e teclado (ArrowLeft, ArrowRight)
  And ao pressionar Escape o modal fecha e o scroll é restaurado
```

### CA-HTL-014 — Card sticky permanece visível ao rolar

```gherkin
Given que estou no PDP do hotel
When rolo a página para baixo
Then o card de reserva permanece visível (sticky top-80px)
  And não é coberto pelo header
```

### CA-HTL-015 — Tabs de quarto filtram corretamente

```gherkin
Given que estou na seção "Tipos de Quarto" do PDP
When clico na tab "2 camas"
Then apenas os quartos com 2 camas são exibidos
When clico em "Todos"
Then todos os tipos de quarto são exibidos novamente
```

### CA-HTL-016 — Badges de disponibilidade com estilo correto

```gherkin
Given que um quarto tem disponibilidade limitada
When "Apenas X disponíveis" é exibido
Then o badge tem estilo warning: bg-[rgba(255,222,0,0.24)] text-[#ab6400]

When "Último disponível" é exibido
Then o badge tem estilo error: bg-[rgba(243,0,13,0.08)] text-[rgba(196,0,6,0.83)]
```

---

## Pagamento (`/pagamento-hotel`)

### CA-HTL-017 — Accordion abre sequencialmente

```gherkin
Given que estou em /pagamento-hotel
When a página carrega
Then apenas a Seção 1 (Dados Pessoais) está aberta
  And as Seções 2 e 3 estão fechadas e desabilitadas
  And o botão "Efetuar Reserva" está desabilitado

When preencho todos os campos obrigatórios da Seção 1 e clico "Próximo"
Then a Seção 1 exibe ícone de check (✓) no título
  And a Seção 2 (Como você quer pagar?) abre automaticamente

When preencho a Seção 2 e clico "Próximo"
Then a Seção 2 exibe ícone de check (✓) no título
  And a Seção 3 (Nota Fiscal) abre automaticamente

When preencho todos os campos da Seção 3
Then o botão "Efetuar Reserva" fica habilitado
```

### CA-HTL-017b — Campos de dados pessoais por adulto

```gherkin
Given que estou na Seção 1 (Dados Pessoais)
When verifico o formulário
Then existem N grupos de campos (um por adulto) com título "Adulto N"
  And cada grupo contém: Nome, Sobrenome, Data de nascimento, Nacionalidade (select) e CPF
  And todos os campos são obrigatórios para avançar
```

### CA-HTL-018 — Slider de moeda atualiza em tempo real

```gherkin
Given que estou na Seção 2 (Como você quer pagar?)
When movo o slider de Tribz
Then o valor numérico da moeda configurada é atualizado em tempo real
  And o equivalente em R$ é exibido ao lado (ex: "18.622 tribz | R$ 1.750,00")
  And o saldo residual é recalculado abaixo do slider
```

### CA-HTL-018b — Seção de cartão condicional

```gherkin
Given que a instância tem allowCreditCard = true
When estou na Seção 2 do checkout
Then o formulário de cartão de crédito é exibido: número, nome, validade, CVV
  And as opções de parcelamento são exibidas como RadioGroup

Given que a instância tem allowCreditCard = false
When estou na Seção 2 do checkout
Then o formulário de cartão de crédito NÃO é exibido
  And apenas o slider de moeda configurada é exibido
```

### CA-HTL-018c — Nota Fiscal: tipo de pessoa muda campos

```gherkin
Given que estou na Seção 3 (Nota Fiscal)
When seleciono "Pessoa Física" no campo Situação Fiscal
Then os campos exibidos são: Nome completo e CPF

When seleciono "Pessoa Jurídica" no campo Situação Fiscal
Then o campo "Nome completo" passa a exibir label "Razão Social"
  And o campo CPF passa a exibir label "CNPJ" com máscara de CNPJ
```

### CA-HTL-019 — Card de resumo exibe total correto

```gherkin
Given que estou em /pagamento-hotel
When visualizo o card de resumo sticky
Then ele exibe: thumbnail do hotel, nome, localização
  And exibe Check-in com data e "A partir das 15h"
  And exibe Check-out com data e "Até as 12h"
  And exibe N noites e N adultos
  And exibe tabela com: tipo de quarto, qtd, preço/noite, subtotal por quarto
  And exibe linhas de Subtotal, Taxas e Total Final (bold) na moeda configurada
  And exibe badge "Cancelamento gratuito antes de [data]" em estilo success
```

---

## Confirmação (`/confirmacao-hotel`)

### CA-HTL-020 — Nenhum texto de confirmação definitiva

```gherkin
Given que fui redirecionado para /confirmacao-hotel após o checkout
When verifico todos os textos da página
Then nenhum texto contém "Confirmado", "Aprovado" ou "Reserva confirmada"
  And o card de status exibe "Parabéns pela sua reserva!"
  And o subtexto exibe "Sua reserva está sendo processada e enviaremos a sua confirmação por email."
```

### CA-HTL-021 — Valores na moeda configurada

```gherkin
Given que estou em /confirmacao-hotel
When verifico a tabela de itens no card de pagamento
Then todos os valores são exibidos na moeda configurada pela instância (ex: Tribz)
  And o valor em R$ aparece apenas no bloco de método de pagamento por cartão (se aplicável)
```

### CA-HTL-022 — Header em estado logado

```gherkin
Given que estou em /confirmacao-hotel
When verifico o header
Then ele está em estado logado: avatar + "Olá, [Nome]" + saldo na moeda configurada + ícone sino
```

---

## Regras globais da jornada

### CA-HTL-G01 — Persistência de parâmetros no refresh

```gherkin
Given que o usuário está em qualquer tela da jornada de hotel
When ocorre um refresh da página
Then os parâmetros de busca são preservados via query string
  And o estado da tela é restaurado corretamente
```

### CA-HTL-G02 — Moeda configurável em toda a jornada

```gherkin
Given que a instância do produto define CurrencyConfig com label "Tribz"
When qualquer valor monetário é exibido em qualquer tela da jornada
Then o rótulo exibe "Tribz"
  And nenhum componente exibe "R$" ou outra moeda hardcoded
```

---

## Checklist QA — pré-deploy

### Home

- Busca de hotel navega para `/resultados-hotel` com parâmetros corretos
- Check-out mínimo = Check-in + 1 dia enforçado
- Tabs Hotel / Aéreo alternam corretamente

### Resultados

- HotelResultCards com todos os campos
- Alert bar de contexto exibido
- Filtros (Switch + Checkbox + Slider) funcionais em tempo real
- Ordenação funcional
- Estado vazio quando sem resultados

### Drawer de Quartos

- Abre como overlay lateral ao clicar "Ver quartos"
- Exibe imagem, info do hotel e lista de quartos
- Badges de facilidades por quarto corretos
- "Reservar" navega para `/pagamento-hotel`
- "ver todos os detalhes" navega para `/hotel`

### PDP

- Galeria 6 fotos no layout correto
- Modal fullscreen com navegação e Escape
- Scroll do body bloqueado com modal aberto
- Card sticky (top-80px) permanece visível
- Tabs de quarto filtram corretamente
- Badges de disponibilidade com estilos warning/error corretos

### Pagamento

- Accordion sequencial (1 → 2 → 3), seções seguintes desabilitadas até a atual ser concluída
- Seções concluídas exibem ícone ✓ no título
- Botão "Efetuar Reserva" desabilitado até etapa 3 completa
- Formulário de dados pessoais com campos corretos por adulto (Nome, Sobrenome, Data Nasc., Nacionalidade, CPF)
- Slider de moeda atualiza valor e equivalente R$ em tempo real
- Formulário de cartão exibido apenas se `allowCreditCard = true`
- Parcelamento exibido como RadioGroup (opções dinâmicas da API)
- Nota fiscal: Situação Fiscal muda labels Nome/CPF ↔ Razão Social/CNPJ
- Card de resumo sticky com tabela de itens, subtotal, taxas e Total Final
- Badge "Cancelamento gratuito" em estilo success no card de resumo

### Confirmação

- Nenhum texto de confirmação definitiva
- Valores na moeda configurada
- Header em estado logado
- Botão "Imprimir" presente


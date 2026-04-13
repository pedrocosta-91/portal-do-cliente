# Critérios de Aceite — Jornada de Aéreo

**Jornada:** Aéreo  
**Versão:** 1.0  
**Última atualização:** Abril 2026

---

## Home — Busca de Aéreo

### CA-AER-001 — Busca navega para resultados com parâmetros corretos

```gherkin
Given que estou na Home do Portal do Cliente na tab Aéreo
When preencho Origem, Destino, Data de Ida, Data de Volta, Passageiros e Tipo de Viagem
  And clico em "Buscar"
Then sou redirecionado para /resultados-aereo
  And a query string contém: origem, destino, dataIda, dataVolta, passageiros, tipo
  And o FlightResultsHeader exibe os mesmos parâmetros preenchidos
```

### CA-AER-002 — Campo Data de Volta é condicional

```gherkin
Given que estou na tab Aéreo da Home
When seleciono "Somente ida" no tipo de viagem
Then o campo Data de Volta é ocultado ou desabilitado
  And a busca não inclui dataVolta na query string

When seleciono "Ida e volta"
Then o campo Data de Volta é exibido
  And o mínimo aceito é Data de Ida + 1 dia
```

---

## Resultados de Voos (`/resultados-aereo`)

### CA-AER-003 — Listagem exibe IDA e VOLTA simultaneamente

```gherkin
Given que estou em /resultados-aereo com uma busca de ida e volta
When a página carrega
Then a seção "IDA — DD Mês" é exibida com seus voos
  And a seção "VOLTA — DD Mês" é exibida logo abaixo
  And ambas as seções são visíveis sem troca de tab
```

### CA-AER-004 — FlightResultRow exibe todos os campos

```gherkin
Given que estou em /resultados-aereo com resultados carregados
When visualizo um FlightResultRow
Then ele exibe: logo da companhia, nome da companhia, número do voo
  And exibe: horário de partida, IATA origem, horário de chegada, IATA destino, duração
  And exibe: badge de classe tarifária e ícones/badges de bagagem inclusa
  And exibe: preço riscado (de X Tribz) e preço atual na moeda configurada
  And exibe: botão "Selecionar"
```

### CA-AER-005 — Filtros atualizam a lista em tempo real

```gherkin
Given que estou em /resultados-aereo com resultados carregados
When aplico qualquer filtro (Paradas, Bagagem, Preço, Companhia, Duração ou Horário)
Then a lista de voos é atualizada sem recarregar a página
```

### CA-AER-006 — DateCarousel recarrega resultados

```gherkin
Given que estou em /resultados-aereo
When clico em uma data diferente no DateCarousel
Then a busca é refeita com a nova data
  And a lista de voos é atualizada
  And a query string é atualizada com a nova data
```

### CA-AER-007 — Filtro paradas usa checkboxes

```gherkin
Given que estou na sidebar de filtros
When visualizo a seção de paradas
Then os filtros são checkboxes: "Direta" e "1 ou mais paradas"
  And posso marcar ambos simultaneamente
```

---

## Modal Detalhes do Voo

### CA-AER-008 — Modal abre ao clicar em "Ver detalhes"

```gherkin
Given que estou em /resultados-aereo com resultados carregados
When clico em "Ver detalhes" em um FlightResultRow
Then o modal "Detalhes do Voo de Ida" (ou Volta) é aberto
  And exibe: título da rota, companhia, número do voo, badge de classe
  And exibe: aeroporto de origem com horário e data
  And exibe: aeroporto de destino com horário e data
  And exibe: duração do voo
  And exibe: seção Bagagem com itens inclusos
```

### CA-AER-009 — Accordion "Mais detalhes" expande benefícios

```gherkin
Given que o modal de detalhes do voo está aberto
When clico em "Mais detalhes"
Then o accordion expande exibindo lista de benefícios com ✓
  And inclui: Cancelamento grátis, Alteração de voo, e outros benefícios da tarifa

When clico novamente em "Mais detalhes"
Then o accordion colapsa
```

---

## Modal Escolha de Tarifa

### CA-AER-010 — Modal exibe 3 tarifas com benefícios comparados

```gherkin
Given que cliquei em "Selecionar" em um FlightResultRow
When o modal "Escolha como quer voar" abre
Then são exibidas 3 colunas: Light, Classic e Flex
  And cada coluna exibe: nome da tarifa, preço na moeda configurada (+ R$ se aplicável), "valores por viajante"
  And cada coluna exibe lista de benefícios com ✓ (incluso) ou ✗ (não incluso)
  And a tarifa Light está selecionada por padrão (borda teal)
```

### CA-AER-011 — Seleção de tarifa habilita "Avançar"

```gherkin
Given que o modal de escolha de tarifa está aberto
When clico em uma tarifa (Light, Classic ou Flex)
Then a tarifa fica visualmente selecionada (borda destacada)
  And o botão "Avançar" fica habilitado

When clico em "Avançar"
Then sou redirecionado para /pagamento-aereo
  And a tarifa selecionada está nos parâmetros (ex: &tarifa=classic)
```

### CA-AER-012 — Preços das tarifas na moeda configurada

```gherkin
Given que o modal de escolha de tarifa está aberto
When verifico os preços
Then Light exibe apenas o valor em Tribz (sem complemento em R$)
  And Classic exibe "X Tribz + R$Y,00" (complemento configurável)
  And Flex exibe "X Tribz + R$Z,00" (complemento configurável)
  And nenhum preço exibe "Tribz" hardcoded — usa CurrencyConfig.label
```

---

## Pagamento (`/pagamento-aereo`)

### CA-AER-013 — Accordion abre sequencialmente

```gherkin
Given que estou em /pagamento-aereo
When a página carrega
Then apenas "Dados pessoais" está aberto
  And "Como você quer pagar?" e "Em nome de quem emitimos a nota fiscal" estão fechados e desabilitados
  And o botão "Efetuar Reserva" está desabilitado

When preencho todos os campos da Seção 1 e clico "Próximo"
Then "Dados pessoais" exibe ✓ no título
  And "Como você quer pagar?" abre automaticamente

When seleciono um método de pagamento e clico "Próximo"
Then "Como você quer pagar?" exibe ✓ no título
  And "Em nome de quem emitimos a nota fiscal" abre automaticamente

When preencho a Seção 3
Then o botão "Efetuar Reserva" fica habilitado
```

### CA-AER-014 — Dados pessoais por passageiro

```gherkin
Given que estou na Seção 1 (Dados pessoais)
When verifico o formulário
Then existem N grupos de campos (um por passageiro) com título "Adulto N"
  And cada grupo contém: Nome, Sobrenome, Data de nascimento, Nacionalidade (select) e CPF
  And todos os campos são obrigatórios para avançar
```

### CA-AER-015 — Seção 2 exibe opções de método de pagamento

```gherkin
Given que estou na Seção 2 (Como você quer pagar?)
When a seção abre
Then a subseção "Destaques" exibe: Pix (com badge de % OFF) e Boleto (com badge de cashback)
  And a subseção "Meios usados" exibe cartões cadastrados com opções de parcelamento
  And a subseção "Pontos" exibe: Tribz e Tribz + Cartão
  And o usuário pode selecionar apenas um método por vez
```

### CA-AER-016 — Timer de sessão exibido no pagamento

```gherkin
Given que estou em /pagamento-aereo
When a página carrega
Then o alert bar exibe "Oferta válida por MM:SS" com countdown regressivo
  And ao expirar o tempo, o usuário é redirecionado para /resultados-aereo
```

### CA-AER-017 — Card de resumo exibe ambos os voos

```gherkin
Given que estou em /pagamento-aereo com busca de ida e volta
When visualizo o card de resumo sticky
Then exibe voo de IDA: companhia, número, rota, horários, data, classe, bagagem
  And exibe voo de VOLTA: mesma estrutura
  And exibe tabela com: passagem por adulto, subtotal, taxas e Total Final na moeda configurada
  And exibe badge "Cancelamento gratuito antes de [data]" em estilo success
```

### CA-AER-018 — Nota fiscal: tipo de pessoa muda campos

```gherkin
Given que estou na Seção 3 (Nota fiscal)
When seleciono "Pessoa Física"
Then os campos exibidos são: Situação Fiscal, Nome completo, CPF

When seleciono "Pessoa Jurídica"
Then o campo "Nome completo" passa a exibir label "Razão Social"
  And o campo CPF passa a exibir label "CNPJ" com máscara de CNPJ
```

---

## Confirmação (`/confirmacao-aereo`)

### CA-AER-019 — Nenhum texto de confirmação definitiva

```gherkin
Given que fui redirecionado para /confirmacao-aereo após o checkout
When verifico todos os textos da página
Then nenhum texto contém "Confirmado", "Aprovado" ou "Passagem confirmada"
  And o card de status exibe "Parabéns pela sua reserva!"
  And o subtexto exibe "Sua reserva está sendo processada e enviaremos a sua confirmação por email."
```

### CA-AER-020 — Card de resumo exibe ambos os voos com todos os detalhes

```gherkin
Given que estou em /confirmacao-aereo com reserva de ida e volta
When visualizo o card de resumo
Then exibe ícone avião + "Passagem aérea"
  And exibe voo de ida: companhia, número, rota completa, horários, data, classe tarifária, bagagem
  And exibe voo de volta: mesma estrutura
  And exibe lista de passageiros: nome e sobrenome de cada um
```

### CA-AER-021 — Valores na moeda configurada

```gherkin
Given que estou em /confirmacao-aereo
When verifico a tabela de valores no card de pagamento
Then todos os valores são exibidos na moeda configurada pela instância
  And o valor em R$ aparece apenas no bloco de método de pagamento quando há complemento em cartão
```

---

## Regras globais da jornada

### CA-AER-G01 — Persistência de parâmetros no refresh

```gherkin
Given que o usuário está em qualquer tela da jornada de aéreo
When ocorre um refresh da página
Then os parâmetros da busca são preservados via query string
  And o estado da tela é restaurado corretamente
```

### CA-AER-G02 — Moeda configurável em toda a jornada

```gherkin
Given que a instância define CurrencyConfig com label "Tribz"
When qualquer valor monetário é exibido em qualquer tela da jornada
Then o rótulo exibe "Tribz"
  And nenhum componente exibe moeda hardcoded
```

---

## Checklist QA — pré-deploy

### Home

- Busca aéreo navega para `/resultados-aereo` com parâmetros corretos
- Campo "Data de volta" oculto/desabilitado em "Somente ida"
- Data de volta mínima = Data de ida + 1 dia

### Resultados

- IDA e VOLTA exibidas simultaneamente na mesma página
- FlightResultRow com todos os campos (companhia, rota, horários, bagagem, preço)
- Preço riscado + preço atual na moeda configurada
- Filtros funcionais (Paradas, Bagagem, Preço, Companhia, Duração, Horários)
- DateCarousel recarrega resultados ao trocar data

### Modal Detalhes do Voo

- Abre ao clicar "Ver detalhes"
- Exibe rota, companhia, horários, duração, bagagem
- Accordion "Mais detalhes" expande/colapsa benefícios

### Modal Escolha de Tarifa

- 3 tarifas (Light / Classic / Flex) com benefícios comparados
- Light selecionada por padrão
- Preços corretos: Light = só Tribz, Classic/Flex = Tribz + R$
- "Avançar" navega para /pagamento-aereo com tarifa nos parâmetros

### Pagamento

- Alert bar com countdown "Oferta válida por MM:SS"
- Accordion sequencial (1 → 2 → 3)
- Seções concluídas exibem ✓
- Dados pessoais corretos por passageiro
- Seção 2: métodos de pagamento (Pix / Boleto / Cartão / Tribz) — NÃO slider
- Nota fiscal: troca de campos PF/PJ
- Card de resumo com ambos os voos + Total Final

### Confirmação

- Nenhum texto de confirmação definitiva
- Card de resumo com ambos os voos + lista de passageiros
- Valores na moeda configurada


# Prompt Figma Make — Tela de Confirmação de Reserva (Pós-Checkout)

> **Instrução:** Crie esta tela no frame de 1440px de largura usando Auto Layout em todos os containers. Consulte os tokens de cor, tipografia e espaçamento diretamente dos componentes do frame anexado. O layout é duas colunas: conteúdo principal à esquerda (~60%) e cards de resumo à direita (~40%).

---

## ESTRUTURA COMPLETA DA PÁGINA (top → bottom)

### HEADER (estado logado COM pontos)

Este é o header no estado logado com saldo de pontos. Diferente do header das outras telas que mostra "Criar conta / Login".

- **Esquerda:** Logo "trib Pass" com ícone decorativo — mesmo componente de logo usado nas outras telas
- **Centro:** Barra de navegação com 3 itens em linha: ícone + "Passagens" · ícone + "Hospedagens" (estado ativo/destacado com underline ou cor diferenciada) · ícone + "Aluguel de Carros"
- **Direita:** Avatar circular do usuário (fundo verde claro com ícone de pessoa) + "Olá, Pedro Costa" em cima + ícone de moeda + "135.000 tribz" abaixo + ícone menu hambúrguer (☰) + ícone sino de notificação
- Os itens da direita ficam em flex row com gap consistente
- O header todo tem fundo branco e sombra inferior sutil — mesmo padrão dos outros headers do arquivo

### BREADCRUMB

- Texto link: "< Voltar para busca" — alinhado à esquerda, com seta para a esquerda
- Espaçamento: padding top 24px, bottom 16px do header

---

### COLUNA ESQUERDA (conteúdo principal)

#### Card 1 — "Informações do pagamento"

Container com borda e border-radius. Padding interno consistente com os outros cards do arquivo.

**Cabeçalho do card:**
- Título: "Informações do pagamento" — heading com o mesmo peso e tamanho dos títulos dos cards das telas de checkout do arquivo
- Botão "Imprimir": alinhado à direita do título, no mesmo nível. Ícone de download/impressora + texto "Imprimir". Fundo verde (mesmo verde do CTA "Reservar" usado nas outras telas), texto branco, border-radius pill

**Tabela de itens:**
- Header da tabela: "Itens" (alinhado esquerda) · "Qtd" (centro) · "Preço" (centro) · "Total" (direita) — texto em cinza secundário, font-weight medium
- Linha 1: "Apartamento Standard" · "1" · "1,000 tribz" · "3,000 tribz"
- Linha 2: "Apartamento Luxo" · "1" · "1,400 tribz" · "3,200 tribz"
- Separador horizontal fino entre o corpo e o footer da tabela
- **Subtotal:** label alinhado à esquerda do bloco de totais + "6,200 tribz" à direita
- **Taxas:** "Taxas" + "10% (620)" à direita
- **Total Final:** "Total Final" em negrito + "6.880 tribz" em negrito à direita — destaque visual, texto maior que as outras linhas

**IMPORTANTE:** Todos os valores monetários estão em "tribz" (pontos), NÃO em R$. Este é o token neutro do produto.

#### Seção "Método de pagamento"

Abaixo da tabela, ainda dentro do mesmo card ou logo abaixo.

- Título: "Método de pagamento" — mesmo estilo de subtítulo usado no arquivo
- **Dois blocos lado a lado (flex row):**
  - **Bloco esquerdo:** Container com borda fina. Label "Moedas Tribz" em cinza no topo. Valor "6.880 Tribz" em destaque (bold, maior). Subtexto "Seu saldo: 13.500" em cinza claro abaixo
  - **Bloco direito:** Ícone de bandeira do cartão (Mastercard — círculos vermelho/laranja) + "Crédito final 2288" em cinza. Valor "R$ 1.750,59" em destaque. Subtexto "em 2x de R$ 875,59 sem juros" em cinza abaixo

#### Linha de nota fiscal

- Texto em cinza: "Nota fiscal emitida para Jessyca Araujo Leão (email: jessycaaleao@gmail.com)"
- Está abaixo dos blocos de método de pagamento, texto simples sem container

---

#### Card 2 — "Quem vai viajar"

Container separado com borda e border-radius — mesmo estilo visual do card "Informações do pagamento" acima.

- Título: "Quem vai viajar" — mesmo estilo de heading
- **Dois blocos lado a lado (flex row, 50/50):**
  - **Viajante 1:** Label "Viajante 1" em cinza acima. Avatar circular (foto ou iniciais com fundo escuro). Nome "Jessyca Leão" em bold. CPF "CPF: 098.633.237-63" em cinza abaixo
  - **Viajante 2:** Label "Viajante 2" em cinza acima. Avatar circular. Nome "Pedro Costa" em bold. CPF "CPF: 043.987.043-50" em cinza abaixo

---

### COLUNA DIREITA (cards de resumo)

#### Card de status — "Parabéns pela sua reserva!"

**ATENÇÃO — FLUXO ASSÍNCRONO:** Este NÃO é um estado de "Pagamento Confirmado". A reserva está SENDO PROCESSADA. O texto deve refletir isso.

- Container com borda e border-radius, fundo branco
- **Esquerda do card:** Ícone ilustrativo grande — círculo verde com check mark, com decorações/confetes ao redor (estilo celebração mas de processamento)
- **Direita do card:** 
  - Título: "Parabéns pela sua reserva!" — bold, tamanho heading
  - Subtexto: "Sua reserva está sendo processada e enviaremos a sua confirmação por email." — texto em cinza, 2-3 linhas
- Layout: flex row, ícone à esquerda (~60px), texto à direita

#### Card de resumo — "Hotel"

Container com borda e border-radius, mesmo estilo dos outros cards.

**Conteúdo (top → bottom):**

1. **Ícone + tipo:** Ícone de hotel (prédio) + texto "Hotel" — linha de contexto
2. **Nome:** "Quality Paulista São Paulo Jardins" — heading bold
3. **Localização:** Ícone pin + "Centro, São Paulo" — texto cinza
4. **Separador** horizontal fino
5. **Datas (flex row 50/50):**
   - **Check-in:** Label "Check-in" em cinza. Data "Qui, 28 dez 2023" em bold, tamanho médio. Horário "A partir de 15h" em cinza
   - **Check-out:** Label "Check-out" em cinza. Data "Qu, 3 jan 2026" em bold, tamanho médio. Horário "Até as 12h" em cinza
   - Separador vertical entre os dois blocos
6. **Separador** horizontal fino
7. **Mini-card do hotel (dentro deste card):**
   - Layout: flex row — foto do hotel à esquerda (thumbnail ~100x70px, border-radius) + informações à direita
   - Nome: "Kimpton Epic Hotel" — bold
   - Badge nota: "8.4" em badge verde pequeno + "Muito Bom" em texto + ★★★★ estrelas na mesma linha
   - Localização: ícone pin + "Miami, Miami International Airport Area, a 3.4km do centro." — texto cinza, 2 linhas
8. **Badge cancelamento:** Ícone relógio + "Cancelamento gratuito antes de 19 de março" — fundo não preenchido, borda fina, texto com ícone. Mesmo componente de badge usado na PDP e no checkout

---

### BANNER EDITORIAL (full-width, abaixo das duas colunas)

- Mesmo banner usado nas outras telas do arquivo: imagem de avião com overlay gradiente escuro
- Título: "Sua próxima aventura começa aqui!" — branco, bold, alinhado à esquerda
- CTA: "Reserve já!" — botão com borda arredondada, estilo outline na cor coral/rosa do arquivo
- Largura: 100% do container principal
- Altura: ~280px

### FOOTER

Mesmo footer usado nas outras telas do arquivo:
- Fundo escuro (quase preto)
- Logo "trib Pass" à esquerda + endereço ("Av. das Nações, 1234 - Lago Sul, Brasília - DF, 71699-900") + telefone ("0800 725 8282") + email ("atendimento@trib.com.br")
- 3 colunas de links à direita: Dados Pessoais / Histórico de Reservas / Excluir Conta · Dúvidas Frequentes / Nossa História / Assessoria de Imprensa · Nossos Termos / Aviso de Privacidade / Segurança Online

---

## REGRAS CRÍTICAS

1. **Fluxo assíncrono:** O status da reserva é "sendo processada", NUNCA "confirmada". Isso é uma decisão de negócio documentada.
2. **Moeda em tribz:** Todos os valores da tabela de itens usam "tribz" como unidade. O R$ aparece APENAS no método de pagamento (valor cobrado no cartão).
3. **Dois cards na coluna direita:** O card de status (parabéns) fica ACIMA do card de resumo do hotel. Ambos são cards separados com gap entre eles.
4. **Componentes reutilizáveis:** Header, footer, banner editorial e badge de cancelamento já existem no arquivo — reutilize-os diretamente em vez de recriar.
5. Use Auto Layout em todos os containers com o espaçamento consistente do arquivo.
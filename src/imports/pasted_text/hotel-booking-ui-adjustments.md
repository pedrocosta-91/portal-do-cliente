Ajuste o protótipo atual para ficar idêntico ao frame de referência anexado. Faça TODOS os ajustes abaixo em uma única operação:
1. GALERIA DE FOTOS — layout do grid
Problema: O protótipo gerou o grid com layout 1 foto grande na esquerda + 2 fotos médias + 2 fotos pequenas empilhadas em coluna à direita. O design original tem um layout diferente.
Ajuste: Reorganizar para o layout exato do frame de referência:

Linha de cima: 1 foto grande ocupando ~60% da largura à esquerda + 2 fotos menores empilhadas verticalmente à direita (~40%)
Linha de baixo: 3 fotos em fila horizontal, mesmo tamanho, alinhadas abaixo da foto grande
O botão "Mostrar todas as fotos" fica no canto inferior direito da última foto da linha de baixo, com ícone de grid + texto branco sobre fundo semi-transparente escuro
Border-radius apenas no container externo (cantos arredondados), fotos internas sem radius próprio — clipping pelo container
Gap entre fotos: mesmo gap usado no frame de referência

2. BLOCO DE IDENTIDADE — reorganizar posição dos elementos
Problema: No protótipo, o nome do hotel, estrelas, localização e check-in/out estão corretos mas a organização vertical difere do original.
Ajuste:

Nome do hotel "Kimpton Epic Hotel by IHG" como primeiro elemento, alinhado à esquerda — usar a mesma tipografia e peso do frame de referência
Logo abaixo do nome: localização com ícone de pin ("Miami, Estados Unidos. A 4,16 km do centro") na mesma linha
Estrelas (★★★★★) devem ficar na mesma linha do nome ou logo abaixo — consultar posição exata no frame de referência
Check-in e Check-out: "Check in: A partir das 16h" e "Check out: Até às 12h" com ícones de relógio, na mesma linha horizontal, separados por pipe — exatamente como no frame de referência

3. BLOCO DE AVALIAÇÃO — ajustar estrutura e tamanho da nota
Problema: O protótipo mostra "8.4" como nota numérica dentro de um badge. O frame de referência mostra um layout diferente com 3 elementos em linha.
Ajuste: Reorganizar para a estrutura exata do frame de referência:

Esquerda: Quote editorial em itálico dentro de um container com fundo claro e aspas decorativas ("um dos hotéis que mais fazem sucesso com os hóspedes")
Centro: Número "5" em tamanho grande + estrelas ★★★★★ abaixo
Direita: Badge com "72" em destaque + "Muito bom" como label + link "ver 809 comentários" abaixo
O badge da nota usa o mesmo estilo de fundo e cor do frame de referência — puxar tokens diretamente
Os três blocos ficam em flex row com alinhamento vertical centralizado

4. CARD LATERAL STICKY — ajustar campos do formulário
Problema: O protótipo renderizou os campos de check-in/check-out e hóspedes com estilo e layout levemente diferentes.
Ajuste:

Os campos "Check-in" e "Check-out" devem ter labels acima de cada campo (não inline), dispostos lado a lado (2 colunas)
O campo "Hóspedes" fica abaixo, full-width, com dropdown
Os campos devem usar o mesmo estilo de borda, padding e border-radius do frame de referência
O badge de cancelamento gratuito deve ter o texto em 2 linhas ("Cancelamento gratuito antes de 18 de março") — não em 1 linha longa
Manter o preço "3.695 Tribz" e "por 4 noites" exatamente como no frame de referência — consultar tamanho e peso da tipografia

5. SEÇÃO "A HOSPEDAGEM OFERECE" — ajustar ícones
Problema: Os ícones do protótipo estão corretos em conteúdo mas o estilo visual e o layout podem divergir.
Ajuste:

6 ícones em linha horizontal: Wi-Fi gratuito · Academia · Piscina · Ar condicionado · Wi-Fi 5GHz · Coworking/Lounge
Cada ícone com label de texto abaixo — usar o mesmo tamanho de ícone e espaçamento do frame de referência
Link "Ver todo >" alinhado à direita do título — usar mesma cor e estilo do frame

6. SEÇÃO "CONHEÇA UM POUCO MAIS" — ajustar tipografia
Problema: O protótipo renderizou o texto mas a tipografia pode estar diferente.
Ajuste:

O título "Conheça um pouco mais" deve usar o mesmo estilo de heading do frame de referência (itálico/regular — conferir)
O corpo de texto deve manter o mesmo line-height, font-size e cor do frame de referência
O texto é corrido em parágrafos — sem bullet points nesta seção

7. SEÇÃO "IMPORTANTE" — ajustar estilo do container
Problema: O protótipo gerou o alerta com borda esquerda mas o estilo pode diferir.
Ajuste:

Container com borda esquerda grossa na cor de alerta (amarelo/amber) — consultar exatamente o estilo do frame de referência
Título "Importante" em destaque com o peso e cor do frame de referência
Corpo do texto em cor mais escura — puxar do frame

8. SEÇÃO "É BOM SABER" — manter como lista de bullets
Ajuste:

Título "É bom saber" + subtítulo "Notas sobre o hotel"
Itens em bullet points — usar a mesma estrutura do frame de referência
Verificar se o espaçamento entre items está consistente com o frame

9. SEÇÃO "TIPOS DE QUARTO" — ajustar cards
Problema: Os cards de quarto no protótipo podem ter diferenças de layout em relação ao frame original.
Ajuste:

Os tabs "Todas" · "2 camas" · "1 cama" devem usar o estilo pill/rounded do frame de referência — tab ativa com fundo preenchido, inativas com borda outline
Cada card de quarto deve seguir exatamente o layout do frame de referência:

Foto miniatura à esquerda
Nome + ícones de features no centro (vista, m², capacidade, café, hóspede feliz, pagamento)
Preço + badge de desconto + disponibilidade à direita


O badge "19% OFF" deve estar posicionado exatamente como no frame de referência
O preço riscado ("R$ 1.621") deve usar text-decoration line-through
O preço em tribz fica abaixo do preço em R$ — consultar tamanho e peso
O badge "Apenas 4 disponíveis" deve usar o mesmo estilo do frame de referência
O CTA "Reservar" em cada card deve ser idêntico ao do frame

10. SEÇÃO MAPA — ajustar layout
Problema: O protótipo mostra um placeholder genérico de mapa.
Ajuste:

O mapa deve ser um placeholder retangular com pin de localização central e ícone de mapa — consultar tamanho e posição do frame de referência
A lista "Nas proximidades" fica à esquerda do mapa com bullet points e distâncias
Link "Explorar no mapa >" alinhado à direita do título — mesmo estilo de link verde do frame

11. BANNER EDITORIAL — ajustar proporções
Ajuste:

Full-width com imagem de fundo (avião) + overlay gradiente escuro da esquerda para a direita
Título "Sua próxima aventura começa aqui!" alinhado à esquerda
CTA "Reserve já!" como botão com borda arredondada — consultar estilo do frame
Verificar que a proporção altura/largura do banner está idêntica ao frame de referência

12. FOOTER — ajustar para 4 colunas
Problema: O protótipo pode ter gerado o footer com estrutura diferente.
Ajuste:

O footer do protótipo mostra "Portal do Cliente" como título com 4 colunas (Serviços, Suporte, Conecte-se). O frame de referência mostra logo Trib + endereço à esquerda + 3 colunas de links à direita + contatos
Ajustar para a estrutura exata do frame de referência — logo, endereço, telefone e email à esquerda; colunas de links conforme o frame


REGRAS GERAIS

NÃO altere o conteúdo de texto que já está correto — apenas reorganize posição e estilo visual
Use Auto Layout em TODOS os containers
Mantenha a hierarquia de layers organizada: section/nome-secao
O card lateral sticky deve manter position sticky com offset do header
TODOS os tokens de cor, tipografia e espaçamento devem ser puxados diretamente do frame de referência anexado — não use valores hardcoded
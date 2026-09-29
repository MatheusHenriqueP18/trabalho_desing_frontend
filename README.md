Gerador de Ticket - Coding Conf

Trabalho desenvolvido para a disciplina do 2º semestre do curso de Análise e Desenvolvimento de Sistemas, com o objetivo de praticar HTML, CSS e JavaScript na construção de uma página funcional.

Sobre o projeto

O projeto simula a página de inscrição de uma conferência fictícia chamada "Coding Conf". O usuário preenche um formulário com seus dados e, ao enviar, a página gera automaticamente um ticket de participação, como se fosse um ingresso digital.

O que foi desenvolvido

Estrutura da página (HTML) Foi construída uma página com duas telas: a primeira mostra o formulário de inscrição, e a segunda mostra o ticket gerado. As duas telas ficam no mesmo arquivo, mas apenas uma aparece por vez.

Formulário de inscrição O formulário pede nome completo, e-mail, usuário do GitHub e uma foto do participante (com uma área de arrastar e soltar o arquivo).

Visual da página (CSS) Foi criado todo o visual da página: cores, fontes, espaçamentos e o layout dos elementos. O destaque fica por conta do cartão do ticket, que reproduz o formato de um ingresso real, com um recorte circular e uma linha pontilhada na lateral, simulando a parte destacável de um ticket físico.

A página também foi adaptada para funcionar bem em celulares e tablets, ajustando tamanhos de texto e espaçamentos conforme o tamanho da tela.

Funcionamento da página (JavaScript) Com JavaScript, o projeto ficou funcional de verdade:

Ao enviar o formulário, a tela troca automaticamente do formulário para o ticket, sem recarregar a página.
Os dados digitados pelo usuário (nome, e-mail e usuário do GitHub) aparecem de verdade no ticket gerado.
A foto escolhida pelo usuário no upload aparece como avatar dentro do ticket.
Um número de identificação é sorteado automaticamente a cada ticket gerado, para simular um número de inscrição único.
O que eu aprendi

Esse trabalho me ajudou a entender na prática como organizar uma página com HTML, como estilizar elementos com CSS (incluindo layouts mais elaborados, como o formato do ticket), e como usar JavaScript para fazer a página reagir às ações do usuário, capturando o que ele digita e transformando isso em conteúdo real na tela.
// PARTE 1: Lista de perguntas e respostas
perguntas = [
  
  {
    pergunta: "Em qual século Lestat nasceu?", 
    respostas: 
     [
      {opcao: "a) século XVIII", correto: true}, 
      {opcao: "b) século XV", correto: false},
      {opcao: "c) século XIX", correto: false},
      {opcao: "d) século XX", correto: false},
     ]
    },
  
  {
    pergunta: "Quem foi o primeiro amor de Lestat?",
    respostas:
    [
      {opcao: "a) Louis de Pointe du Lac", correto: false},
      {opcao: "b) Nicolas de Lenfert", correto: true},
      {opcao: "c) Gabrielle", correto: false},
      {opcao: "d) Antoinette", correto: false},      
    ]
  },
  
  {
    pergunta: "Quem foi o criador de Lestat?",
    respostas:
   [
     {opcao: "a) Marius", correto: false},
     {opcao: "b) Louis de Pointe du Lac", correto: false},
     {opcao: "c) Magnus", correto: true},
     {opcao: "d) Akasha", correto: false},
   ]
  },
  
  {
    pergunta: "Quando Lestat tomou dimensão do que é a imortalidade?",
    respostas:
   [
     {opcao: "a) Quando seu pai faleceu", correto: false},
     {opcao: "b) Quando conheceu Aqueles Que Devem Ser Conservados", correto: true},
     {opcao: "c) Quando esperou o retorno de Louis", correto: false},
     {opcao: "d) Quando fez sua primeira criação", correto: false},
   ]
  },
  
  {
    pergunta: "Qual era a relação de Lestat com sua mãe?",
    respostas:
   [
     {opcao: "a) Tranquila e saudável", correto: false},
     {opcao: "b) Ele a transformou em vampira", correto: true},
     {opcao: "c) Ele nunca a conheceu", correto: false},
     {opcao: "d) Ela o transformou em vampiro", correto: false},
   ]
  },
  
    {
    pergunta: "Qual foi a primeira expressão artística de Lestat?",
    respostas:
   [
     {opcao: "a) Teatro", correto: true},
     {opcao: "b) Música", correto: false},
     {opcao: "c) Dança", correto: false},
     {opcao: "d) Artes Visuais", correto: false},
   ]
  },
  
      {
    pergunta: "Qual é o maior arrependimento de Lestat?",
    respostas:
   [
     {opcao: "a) Ter saído de Paris", correto: false},
     {opcao: "b) Ter transformado Claudia", correto: true},
     {opcao: "c) Conhecer Armand", correto: false},
     {opcao: "d) Não ter matado Marius", correto: false},
   ]
  },
  
      {
    pergunta: "Qual foi o projeto artístico de Lestat?",
    respostas:
   [
     {opcao: "a) Theatre des Vampires", correto: false},
     {opcao: "b) Banco de sangue", correto: false},
     {opcao: "c) Banda de rock", correto: true},
     {opcao: "d) Ballet", correto: false},
   ]
  },
  
  ]
             

// PARTE 2: Pegando os elementos do HTML
const perguntaElemento = document.querySelector(".pergunta");
const respostasElemento = document.querySelector(".respostas");
const progressoElemento = document.querySelector(".progresso");
const textoFinal = document.querySelector(".fim span");
const conteudo = document.querySelector(".conteudo");
const conteudoFinal = document.querySelector(".fim");

// PARTE 3: Variáveis para controle do jogo
let indiceAtual = 0; // Índice da pergunta atual
let acertos = 0; // Contador de acertos

// PARTE 4: Função para carregar uma nova pergunta
function carregarPergunta() {
  progressoElemento.innerHTML = `${indiceAtual + 1}/${perguntas.length}`; // Atualiza o progresso
  const perguntaAtual = perguntas[indiceAtual]; // Pega a pergunta atual
  perguntaElemento.innerHTML = perguntaAtual.pergunta; // Exibe a pergunta

  respostasElemento.innerHTML = ""; // Limpa as respostas anteriores

  // Percorre todas as respostas da pergunta atual
  for (let i = 0; i < perguntaAtual.respostas.length; i++) {
    // Pega a resposta atual com base no índice 'i'
    const resposta = perguntaAtual.respostas[i];
    // Cria um novo elemento 'button' (botão)
    const botao = document.createElement("button");
    // Adiciona a classe CSS 'botao-resposta' ao botão para estilizar
    botao.classList.add("botao-resposta");
    // Define o texto do botão com a opção de resposta (resposta.opcao)
    botao.innerText = resposta.opcao;
    // Adiciona um evento de clique no botão
    botao.onclick = function () {
      // Se a resposta for correta (resposta.correto === true), incrementa o número de acertos
      if (resposta.correto) {
        acertos = acertos + 1;
        alert("Alternativa correta.")
      } else {
        alert("Alternativa errada!")
      }

      // Avança para a próxima pergunta
      indiceAtual++;

      // Se ainda houver perguntas, carrega a próxima pergunta
      if (indiceAtual < perguntas.length) {
        carregarPergunta(); // Carrega a próxima pergunta
      } else {
        // Se não houver mais perguntas, finaliza o jogo
        finalizarJogo();
      }
    };

    // Adiciona o botão de resposta à tela, dentro do elemento 'respostasElemento'
    respostasElemento.appendChild(botao);
  }
}

// PARTE 5: Função para mostrar a tela final
function finalizarJogo() {
  textoFinal.innerHTML = `Você acertou ${acertos} de ${perguntas.length}`; // Exibe o resultado
  conteudo.style.display = "none"; // Esconde as perguntas
  conteudoFinal.style.display = "flex"; // Mostra a tela final
}

// PARTE 6: Iniciando o jogo pela primeira vez
carregarPergunta();

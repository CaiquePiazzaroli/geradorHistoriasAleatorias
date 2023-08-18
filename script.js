// Lista de histórias
var historias= [
    "Another day when bob was at home trying to learn javascript.",
    "In his cabin in the woods, Bob was looking for oranges he had left in the cupboard.",
    "bob was having lunch when he heard a noise at his window.",
    "On a sunny day, Bob was looking for a nice place to spend the afternoon, so he chose to go to his prana house in Ubatuba.",
]
var historiasPT = [
    "Mais um dia em que bob estava em sua casa tentatndo aprender javascript.",
    "Em sua cabana na floresta, bob procurava por laranjas que havia deixado no armário.",
    "bob estava almoçando, quando ouviu um barulho em sua janela.",
    "Em um dia ensolarado, bob procurava algum lugar legal para passar a tarde, escolheu então ir à sua casa de praia em ubatuba.",
]

var inputNome = document.querySelector(".nome__usuario input");
var paragrafo = document.querySelector(".historia");
var botao = document.querySelector(".botao");
var valorHistorioaAnt;

//variaveis de linguagem
var ingles = document.querySelector("#us");
var portugues = document.querySelector("#pt");

function novaHistoria () {
    //verificando se o usuário escolheu PT ou EN
    if (portugues.checked){
        linguagemHistoria = historiasPT;
    } else {
        linguagemHistoria = historias;
    }

    //Limpando o paragrafo
    paragrafo.innerHTML = "";

    //Função para gerar numero aleatorio entre valores
    function numeroAleatorio (min, max) {
        return Math.round(Number(Math.random() * (max-min) + min));
    }

    //gerando um número aleatorio entre os valores 0 e o maior indice do array historias
    var numeroHistoria = numeroAleatorio(0, Number(linguagemHistoria.length - 1));

    //verificando se o número gerado não é igual ao número gerado anteriormente
    while (numeroHistoria === valorHistorioaAnt) {
        var numeroHistoria = numeroAleatorio(0, Number(linguagemHistoria.length - 1));
    }

    //atrinuindo o valor aleatorio atual com o valor anterior
    valorHistorioaAnt = numeroHistoria;

    //gerando história aleatória
    var historiaAleatoria = linguagemHistoria[numeroHistoria];

    //alterando o nome bob pelo input do usuario
    if(inputNome.value != "") {
        historiaAleatoria = historiaAleatoria.replace("bob", String(inputNome.value));
    }

    //atribuindo a história ao paragrafo
    paragrafo.textContent = historiaAleatoria;
}




botao.addEventListener("click", novaHistoria);

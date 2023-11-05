/* ---------------------------------------------------------------------------------------------- Variaveis ---------------------------------------------------------------------------------------------- */

let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativa = 1;


/* --------------------------------------------------------------------------------------- Codigo de configuração da pagina --------------------------------------------------------------------------------------- */

exibirMensagemInicial();

/* --------------------------------------------------------------------------------------- Codigo de Funções da pagina --------------------------------------------------------------------------------------- */


function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo do Numero Secreto');
    exibirTextoNaTela('p', 'Escolha um Numero entre 1 e 10');
}

function verificarChute() {
    let chute = document.querySelector('input').value;

    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'acertou ' + numeroSecreto);
        let palavratentativa = tentativa > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativa = `Você descobriu o Numero secreto com ${tentativa} ${palavratentativa}`;
        exibirTextoNaTela('p', mensagemTentativa);

        document.getElementById('reiniciar').removeAttribute('disabled');

    }
    else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela('h1', 'Você errou tente de novo');
            exibirTextoNaTela('p', 'O numero secreto menor que ' + chute);
        } else {
            exibirTextoNaTela('h1', 'Você errou tente de novo');
            exibirTextoNaTela('p', 'O numero secreto e Maior que ' + chute);
        }
        tentativa++
        limparCampo();
    }
}

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate: 1.2});
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    if (quantidadeDeElementosNaLista == numeroLimite) {
        listaDeNumerosSorteados = [];
    }
    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = "";
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativa = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);

}


//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let amigos = [];

function adicionarAmigo() {
    let inputAmigos = document.getElementById('amigo').value;
    document.getElementById('listaAmigos').textContent = inputAmigos;

    if (inputAmigos == '') {
        alert('Por favor insira um nome no campo vazio.');
        
    } else {
        amigos.push(inputAmigos);
        document.querySelector('input').value = '';
        atualizarListaDeAmigos();

    }

}

function atualizarListaDeAmigos() {
    let listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML='';
    for (let i = 0; i < amigos.length; i++) {
        let novoNome = document.createElement('li');
        novoNome.textContent = amigos[i];
        listaAmigos.appendChild(novoNome);

    }  
}

function sortearAmigo() {
    let resultado = document.getElementById('resultado');
    if (amigos.length == 0) {
        alert ('Por favor insira um nome');
        return false;
    }
    let nomeSorteado = Math.floor(Math.random() * amigos.length);
    document.getElementById(nomeSorteado);
    
    let amigoSorteado = amigos[nomeSorteado];
    resultado.textContent = `O amigo secreto sorteado foi ${amigoSorteado}!`
}

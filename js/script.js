const imagens = [
    'bobrossparrot.gif',
    'explodyparrot.gif',
    'fiestaparrot.gif',
    'metalparrot.gif',
    'revertitparrot.gif',
    'tripletsparrot.gif',
    'unicornparrot.gif'
];

let qtdCartas;
let baralho;
let baralhoMisturado
let contador = 0;
let contadorTentativas = 0;
let id;
let tempo;




function inicial (){
qtdCartas = prompt("Escolha o número de cartas: (número par entre 4-14)");


if(qtdCartas > 14){
    inicial();
}

else if(qtdCartas < 4){
    inicial();
}

else if(qtdCartas%2 !== 0){
    inicial();
}
else{
    adicionaCartasNoDom()
}

}




inicial ();



function comparador() { 
	return Math.random() - 0.5; 
}




function iniciaCronometro(){
    tempo = document.querySelector('.cronometro span');
    tempo.innerHTML++;
}




function adicionaCartasNoDom(){
    baralho = [];
    baralhoMisturado = [];

    for(let i = 0; i < qtdCartas/2; i++){
        baralho.push(imagens[i],imagens[i]);
    }

    baralhoMisturado = baralho.sort(comparador);

    const espaco = document.querySelector('.space');

    for(let i = 0; i < qtdCartas; i++){

        let carta = `<div onclick="flipCard(this)" id="card" data-parrot='${baralhoMisturado[i]}'>

        <div class="face" id="front"><img src="imagens/front 9.png"></div>

        <div class="face" id="back"><img src="imagens/${baralhoMisturado[i]}"></div>     
    </div>
    `;

    espaco.innerHTML = espaco.innerHTML + carta;
}

id = setInterval(iniciaCronometro, 1000);
}










function compararCartas(){
const primeiroParrot = primeiraCarta.getAttribute('data-parrot');
const segundoParrot = segundaCarta.getAttribute('data-parrot');

if(primeiroParrot === segundoParrot){
    setTimeout(() => {
        primeiraCarta.children[1].children[0].setAttribute('src', 'imagens/certo.png');
        segundaCarta.children[1].children[0].setAttribute('src', 'imagens/certo.png');
    primeiraCarta = "";
    segundaCarta = "";
}, 800);
contador++
contadorTentativas++
}
else{
    setTimeout(() => {
    primeiraCarta.classList.remove('flip');
    segundaCarta.classList.remove('flip');
    primeiraCarta = "";
    segundaCarta = "";
    contadorTentativas++
    }, 1000);
}

if(contador === qtdCartas/2){
    setTimeout(() => {
        clearInterval(id);
        alert(
        `Você ganhou em ${contadorTentativas} jogadas!

Tempo total: ${tempo.innerHTML} segundos`
        )
       jogarNovamente();
    }, 1000);
        
}

}





function jogarNovamente(){
    let recomecar = prompt('Gostaria de jogar novamente? (responda com sim ou não)')
    if (recomecar === "sim"){
        contadorTentativas = 0;
        contador = 0;
        tempo.innerHTML = 0;
        for(let i = 0; i < qtdCartas; i++){
            const espaco = document.querySelectorAll('.space div');
            espaco[0].remove();
        }
      
        inicial ();
    }else if(recomecar === "não"){
        return;
    }else{
        jogarNovamente();
    }
}





let primeiraCarta = "";
let segundaCarta = "";






function flipCard(card){
    if(card.className.includes('flip')){
        return;
    }


    if(primeiraCarta === ""){
        card.classList.add('flip');
        primeiraCarta = card;
    }
    else if(segundaCarta === ""){
        card.classList.add('flip');
        segundaCarta = card;
        compararCartas()
    }
    
    }





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
let baralho = [];
let contador = 0;
let contadorTentativas = 0;



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
}

inicial ();

function comparador() { 
	return Math.random() - 0.5; 
}


function adicionaCartasNoDom(){

    for(let i = 0; i < qtdCartas/2; i++){
        baralho.push(imagens[i],imagens[i]);
    }

    const baralhoMisturado = baralho.sort(comparador);

    const espaco = document.querySelector('.space');

    for(let i = 0; i < qtdCartas; i++){

        let carta = `<div onclick="flipCard(this)" id="card" data-parrot='${baralhoMisturado[i]}'>

        <div class="face" id="front"><img src="imagens/front 9.png"></div>

        <div class="face" id="back"><img src="imagens/${baralhoMisturado[i]}"></div>     
    </div>
    `;

    espaco.innerHTML = espaco.innerHTML + carta;
}
}

adicionaCartasNoDom()




function compararCartas(){
const primeiroParrot = primeiraCarta.getAttribute('data-parrot');
const segundoParrot = segundaCarta.getAttribute('data-parrot');

if(primeiroParrot === segundoParrot){
    primeiraCarta = "";
    segundaCarta = "";
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
        alert(`Você ganhou em ${contadorTentativas} jogadas!`)}, 1000)
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



function desvirarCarta(card){
    card.classList.remove('flip');
}

let qtdCartas;

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



function flipCard(card){
    card.classList.add('flip')
}
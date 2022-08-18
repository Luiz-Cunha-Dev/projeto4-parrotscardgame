
let qtdCartas;
const qtdMaxCartas = 14;

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

let cartasAmenos = qtdMaxCartas - qtdCartas

function cartasTotal(){
    
    for(let i = 0; i < cartasAmenos; i++){
        const cartas = document.querySelectorAll("#card");
        cartas[i].classList.add('hidden')
    }
}

cartasTotal();


function flipCard(card){
    card.classList.add('flip')
}


// Creiamo un array chiedendo all'utente quanti elementi dovrà contenere e generando tanti numeri casuali da 1 a 100 per quanti sono gli elementi da inserire.
// Stampiamo poi gli ultimi 5 elementi dell'Array
// Bonus:
// Chiediamo all'utente quanti elementi dell'array dovremo stampare
// Suggerimenti:
// Probabilmente conviene controllare che il numero di elementi della coda non sia più grande del numero di elementi totali dell'array

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

const input2 = document.getElementById('testo2');
const input = document.getElementById('testo');
const btn = document.querySelector('.btn-success');
const btn2 = document.querySelector('.btn-danger');
const result = document.querySelector('.result');
const result2 = document.querySelector('.result2');
const userNumberList = [];

btn.addEventListener('click', function(){
    
    let rndNumber;

    for(let a = 0; a < parseInt(input.value); a++){
       
        rndNumber = getRndInteger(1, 100);
        userNumberList.push(rndNumber);
    
    }

    const resultArray = [];
    
    for(let b = 0; b < 6; b++){
        
        resultArray.push(userNumberList[(userNumberList.length - b)]);
        result.innerHTML = resultArray;

    }

})

btn2.addEventListener('click', function(){
    
    const resultArray2 = [];
    
    for(let c = 0; c < parseInt(input2.value); c++){
        
        resultArray2.push(userNumberList[c]);
        result2.innerHTML = resultArray2;

    }

})
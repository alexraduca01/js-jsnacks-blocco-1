// Crea due array che hanno un numero di elementi diversi.
// Aggiungi elementi all’array che ha meno elementi fino a quando ne avrà tanti quanti l’altro.

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

const primoArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];
const secondoArray = [1, 2, 3, 4, 5, 6, 7];

const input = document.getElementById('testo');
const btn = document.querySelector('.btn-success');
const result = document.querySelector('.result');
const result2 = document.querySelector('.result2');

btn.addEventListener('click', function(){
    
    let resultArray = primoArray.concat(secondoArray);
    let b = primoArray.length;
    let c = secondoArray.length;
        
    if(primoArray.length > secondoArray.length){
        let d = (primoArray.length - secondoArray.length);
        for(let a = 0; a < d; a++){

            secondoArray.push(getRndInteger(1, 100));

        }

        result.innerHTML = 'primo array: ' + primoArray + ' lunghezza: ' + primoArray.length;
        result2.innerHTML = 'secondo array: ' + secondoArray + ' lunghezza: ' + secondoArray.length;

    } else if (secondoArray.length > primoArray.length){
        let d = (secondoArray.length - primoArray.length);
        for(let a = 0; a < d; a++){

            primoArray.push(getRndInteger(1, 100));
            
        }

        result.innerHTML = 'primo array: ' + primoArray + ' lunghezza: ' + primoArray.length;
        result2.innerHTML = 'secondo array: ' + secondoArray + ' lunghezza: ' + secondoArray.length;

    }


})

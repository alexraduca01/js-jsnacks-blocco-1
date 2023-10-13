// Abbiamo un frigorifero pieno di frutta:
// 'banana', 'mela', 'pera', 'ciliegia', 'arancia', 'mandarino', 'cocomero', 'limone', 'fragola'  
// C'è anche una pesca sul tavolo, la mettiamo nel frigo.
// Stasera dobbiamo fare un cocktail a base di cocomero: ce l'abbiamo o no in frigo?

const input = document.getElementById('testo').value;
const btn = document.querySelector('.btn-success');
const result = document.querySelector('.result');
const frigorifero = ['banana', 'mela', 'pera', 'ciliegia', 'arancia', 'mandarino', 'cocomero', 'limone', 'fragola'];
const tavolo = ['pesca'];

btn.addEventListener('click', function(){
    let spostamento = tavolo.shift();
    frigorifero.push(spostamento);
    let found = false;

    for(let a = 0; a < frigorifero.length; a++){
        if('cocomero' == frigorifero[a]){
            found = true;
        }
    }

    if(found){
        result.innerHTML = "il cocomero c'è!";
    } else {
        result.innerHTML = "il cocomero non c'è!"
    }
})
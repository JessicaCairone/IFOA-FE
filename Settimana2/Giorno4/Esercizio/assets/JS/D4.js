/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function area(l1,l2) {
    let calcolo = l1 * l2;
console.log('L\'area del rettangolo è: ' + calcolo);
document.getElementById('calcolo').innerHTML = 'L\'area del rettangolo è: ' + calcolo;
return calcolo;
}
area (30, 10);

/*soluzione2


/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function crazySum(x,y) {
    let somma = x + y;
    if(x != y) {
        console.log('La somma dei due parametri è: ' + somma);
        return somma;
    } else{
somma2 = somma * 3;
console.log('La somma dei due parametri è: ' + somma2);
return somma2;
    }
}

crazySum(7, 7);

/*soluzione2

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function crazyDiff (a, b) {
    let differenza = Math.abs(a - b);
    if(a < 19){
        console.log('La differenza tra i due valori è: ' + differenza)
        return differenza;
    } else {
        differenza2 = differenza * 3;
        console.log('La differenza tra i due valori è: ' + differenza2);
        return differenza2;
    }
}

crazyDiff(9, 19);

/*soluzione2


/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function boundary(n){
    if ((n >= 20 && n <= 100) || n === 400){
        console.log('Il valore è accettabile');
        return true;
    } else {
        console.log('Il valore non è accettabile');
        return false;
    }
}

boundary(42);

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function epify (stringa){
    let parola = stringa.substring(0, 7); 
    console.log(parola);
    if (parola === 'EPICODE') {
    console.log(stringa);
    return stringa;
} else {
    let frase2 = 'EPICODE' + ' ' + stringa;
    console.log(frase2);
    return frase2;
}
}

epify('è un buon corso');

/*soluzione
 function epify(stringa) {
    if (stringa.startsWith('EPICODE')) {
        return stringa;
    } else {
        return 'EPICODE' + stringa;
    }
 }


/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function check3and7(n) {
let numero = Math.abs(n);
if (numero % 3 === 0) {
console.log('Il numero è multiplo di 3');
    //return true;
} else if (numero % 7 === 0) {
console.log('Il numero è multiplo di 7');
//return true;
} else{
    console.log('Il numero non è divisibile per 3 né per 7');
}
}

check3and7(49);


/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function reverseString (stringa){
        let reversedString = stringa.split('').reverse().join('');
       console.log(reversedString);
        return reversedString;
}

reverseString('sunflower');

/*soluzione
function reverseString (stringa){
        let arrayString = stringa.split('');
        let arrayReversed = arrayString.reverse();
        let stringaCapovolta = arrayReversed.join('');
}

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let frase = 'I cornetti sono patrimonio dell\'umanità';

function upperFirst (stringa) {
let arrayFrase = stringa.split(' '); 
let risultato = [];
for (let i = 0; i < arrayFrase.length; i++) {
    let prima = arrayFrase[i].charAt(0);
    let parolaTagliata = arrayFrase[i].slice(1);
    let parolaFinale = prima.toUpperCase() + parolaTagliata;
    risultato.push(parolaFinale);
}
return risultato.join (' ');
}
console.log(upperFirst(frase));

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function cutString (stringa) {
   return stringa.slice(1, stringa.length - 1);
}

cutString('ciao')
   

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
 function giveMeRandom(n) {
    let arrayNumeri = [];
    for (let i = 0; i < 0; i++) {
        arrayNumeri.push(Math.floor(Math.random() * 11)); 
    }
    return arrayNumeri;
 }
  console.log(giveMeRandom(5));
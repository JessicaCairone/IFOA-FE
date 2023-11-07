// Esercizi aggiuntivi (facoltativi) per D4

/* EXTRA 1
 Scrivi una funzione chiamata "checkArray" che riceve un array di numeri casuali (creati con la funzione "giveMeRandom") e per ogni elemento stampa in console
 se il suo valore è maggiore di 5 o no.
 La funzione deve inoltre ritornare la somma di tutti i valori maggiori di 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function giveMeRandom(n) {
    let arrayNumeri = [];
    for (let i = 0; i < n; i++) {
        arrayNumeri.push(Math.floor(Math.random() * 11));

    }
    return arrayNumeri;
 }

let Numeri = [];
Numeri = giveMeRandom(12);
console.log(Numeri);

function checkArray (nuovoArray) {
    let somma = 0;

for (let i = 0; i < nuovoArray.length; i++) {
    if (nuovoArray[i] > 5) {
        console.log(nuovoArray[i] + ' è maggiore di 5');
        somma = somma + nuovoArray[i];  
    } else {
        console.log( nuovoArray[i] + ' minore di 5');
    }
} 
return somma; 
}

console.log('La somma è: ' + checkArray(Numeri));



/* EXTRA 2
 Nel tuo eCommerce disponi di un array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "shoppingCartTotal" che calcola il totale dovuto al negozio (tenendo conto delle quantità di ogni oggetto).
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let shoppingCart = [{
    price : 10,
    name : 'libro', 
    id: 1,
    quantity: 2, 
   },
{
    price : 15,
    name : 'padella', 
    id: 2,
    quantity: 1,
},
{
    price : 2,
    name : 'matite', 
    id: 3,
    quantity: 100,
}
];

function shoppingCartTotal (elencoProdotti) {
let prezzoTotale = 0;
    for (let i = 0; i < elencoProdotti.length; i++) {
let prezzoSingoloProdotto = elencoProdotti[i].price * elencoProdotti[i].quantity;
console.log(prezzoSingoloProdotto);
prezzoTotale = prezzoTotale + prezzoSingoloProdotto;
console.log('Totale parziale: ' + prezzoTotale);
}
console.log('Totale definitivo: ' + prezzoTotale);
return prezzoTotale;
}

shoppingCartTotal(shoppingCart);


/* EXTRA 3
 Nel tuo eCommerce disponi di un array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "addToShoppingCart" che riceve un nuovo oggetto dello stesso tipo, lo aggiunge a "shoppingCart" e ritorna il nuovo numero totale degli elementi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

nuovoOggetto = {
    price : 50,
    name : 'borsa', 
    id: 4,
    quantity: 1,
}


function addToShoppingCart (nuovoArticolo) {
shoppingCart.push(nuovoArticolo);
return shoppingCart.length;
}

let numeroTotaleArticoli = addToShoppingCart(nuovoOggetto);
console.log('Il numero di articoli nel carrello è: ' + numeroTotaleArticoli); 

/* EXTRA 4
 Nel tuo eCommerce disponi di un array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "maxShoppingCart" che riceve l'array "shoppingCart" e ritorna l'oggetto più costoso in esso contenuto.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function maxShoppingCart (carrelloShopping) {
    let oggettoCostoso = carrelloShopping[0];     
    for (let i = 0; i < carrelloShopping.length; i++) {
            if (carrelloShopping[i].price > oggettoCostoso.price) {
            oggettoCostoso = carrelloShopping[i]; }
            }
            console.log('L\'oggetto più costoso è: ' + oggettoCostoso.name);
            return oggettoCostoso;

    }

let expensiveItem = maxShoppingCart(shoppingCart); 
console.log(expensiveItem); 


/* EXTRA 5
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "latestShoppingCart" che riceve l'array "shoppingCart" e ritorna l'ultimo elemento.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function latestShoppingCart (carrello1) {
let ultimoElemento = carrello1[carrello1.length - 1]; 
return ultimoElemento;
}

let lastItem = latestShoppingCart(shoppingCart);
console.log('L\'ultimo elemento della lista è: ' + lastItem.name);


/* EXTRA 6
 Crea una funzione chiamata "loopUntil" che riceve un numero intero come parametro con valore tra 0 e 9.
 La funzione è composta da un ciclo che stampa un numero casuale tra 0 e 9 finchè il numero casuale non è maggiore di x per tre volte di fila.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function loopUntil (x) {

    if (x < 0 || x > 9) {
        console.log('Variabile utente stupido');
        return false;
    }
let y = 0;
let frequenza = 0;
    while(frequenza < 3) { 
        y = Math.floor(Math.random() * 10); 
        console.log('y: ' + y);
    if (y >= x) {
        frequenza = frequenza + 1; //frequenza++
        console.log('fraquenza: ' + frequenza);
    }
    }
}

loopUntil(6);


/* EXTRA 7
Crea una funzione chiamata "average" che riceve un array come parametro e ne ritorna la media aritmetica. La funzione salta automaticamente i valori non numerici nell'array.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let array = [5, 'Paperino', 'Minnie', 17, 14, 'SailorMoon', 10.6, 7]; 
function average (arrayInput) { 
    let media = 0;
    let somma = 0;
    let nElementiValidi = 0;
    for (let i = 0; i < arrayInput.length; i++) 
    {
        if (typeof arrayInput[i] === 'number') {
        console.log(typeof arrayInput[i]);
        somma = somma + arrayInput[i];   
        nElementiValidi++;
    }
    }
    if (nElementiValidi === 0) {
    return 0;
   // nElementiValidi = 1; 
    }
    media = somma / nElementiValidi;
    console.log('La media dei numeri dell\'array è: ' + media);
    return media; 
}

average(array);

/* EXTRA 8
 Crea una funzione chiamata "longest" che trova la stringa più lunga all'interno di un array di stringhe fornito come parametro.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let arrayParole = ['mela', 'cornetto', 'pizza', 'pasta', 'verdura', 'crostata', 'minestrone', 'uovo'];

function longest (abecedario) {
let parolaLunga = abecedario[0];
for (let i = 0; i < abecedario.length; i++)
{
    if (abecedario[i].length > parolaLunga.length){
parolaLunga = abecedario[i]; 
    }
    console.log(abecedario[i] + ' contiene ' + abecedario[i].length + ' lettere ');
}
return parolaLunga;
}

let longestWord = longest(arrayParole);
console.log('La parola più lunga è: ' + longestWord);


/* EXTRA 9
 Crea una funzione per creare un filtro anti-spam per la tua casella email. La funzione riceve un parametro stringa chiamato "emailContent", e torna un valore booleano.
 La funzione deve ritornare true se "emailContent" non contiene le parole "SPAM" o "SCAM".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function filtro (emailContent) {
    emailContent = emailContent.toUpperCase(); 
    let arrayParole = emailContent.split(' '); 
    for (let i = 0; i < arrayParole.length; i++)
    {
    if (arrayParole[i] === 'SPAM' || arrayParole[i] === 'SCAM') {
    return false; 
    } 
    } 
    return true; 
}
let risultatoFiltro = filtro('Nel mezzo del cammin spam di nostra vita mi ritrovai per una selva oscura'); 
console.log(risultatoFiltro);


/* EXTRA 10
 Scrivi una funzione che riceve una data come parametro, e calcola il numero di giorni passati da quella data.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function calendario (nuovaData) {
let dataOdierna = Date.now();
const diffTime = Math.abs(dataOdierna - nuovaData);
const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
console.log(diffTime + " milliseconds");
console.log(diffDays + " days");
return diffDays;

}

calendario(new Date (1995, 7, 7));


/* EXTRA 11
 Scrivi una funzione chiamata "matrixGenerator" che riceve come parametri due numeri interi, "x" e "y".
 Il risultato deve essere una matrice di "x" volte "y", e i valori devono rispecchiare gli indici della posizione all'interno della matrice.
 Es.: x = 3, y = 2
 ["00","01","02"
 "10","11","12"]
*/

/* SCRIVI QUI LA TUA RISPOSTA */



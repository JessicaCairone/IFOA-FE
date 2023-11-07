/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let number1 = 10;
let number2 = 23; 

if(number1 > number2){
console.log ('Il numero più grande è:' + number1);
}
else if (number1 == number2){
  console.log('I numeri sono uguali');
}
else {
  console.log('Il numero più grande è:' + number2);
}

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let intero = 7;

if (intero !== 5){
  console.log('not equal');
}
//const equal = (intero !== 5) ? console.log ('not equal') : '';  con operatore ternario

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let numero = 25;
let resto = 0;
resto = numero % 5;
if (resto === 0){
  console.log('divisibile per 5');
}

/* soluzione alternativa 
if (numero % 5 === 0){
...
}*/

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let primo = 8;
let secondo = 0;

if (primo === 8 || secondo === 8){
  console.log('true');
}
else if (primo + secondo === 8 || primo - secondo === 0){
  console.log('true');
}
else{
  console.log('false');
}


/* soluzione alternativa
if (primo === 8 || secondo === 8 || primo + secondo === 8 || secondo + primo === 8 || primo - secondo === 8 || secondo - primo === 8){
  console.log('verificato');
}
else{
  console.log('non verificato');
}
*/

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
/*let totalShoppingCart = 62;
let checkout = totalShoppingCart + 10;

if (totalShoppingCart <= 50){
console.log(checkout);
}
else {
  console.log(totalShoppingCart);
}*/

let totalShoppingCart = 62;
let spedizione = 10;
let checkout = totalShoppingCart;

if (totalShoppingCart < 50){
  checkout += spedizione
}
console.log('Il costo totale è: ' , checkout + spedizione);

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let totalShoppingCart2 = 62;
totalShoppingCart2 = totalShoppingCart * 0.8;
let spedizione2 = 10;
let checkout2 = totalShoppingCart;

if (totalShoppingCart2 < 50){
  checkout2 += spedizione2
}
console.log('Il costo totale è: ' , checkout2 + spedizione2);


/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let x = 4;
let y = 7;
let z = 12;

if (x >= y) {
  if (z >= x) {
		console.log(z, x, y);
	} else {
		if (z >= y) {
			console.log(x, z, y);
		} else {
			console.log(x1, x2, x3);
		}
	}
} else {
	if (z >= y) {
		console.log(z, y, x);
	} else {
		if (z >= x) {
			console.log(y, z, x);
		} else {
			console.log(y, x, z);
		}
	}
}


/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let a = 7;
if (typeof a === 'number'){
  console.log(a + 'è un numero');
}
else{
  console.log(a + 'non è un numero');
}


/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let c = 20;
let risultato = 0;
risultato = c % 2;
if (risultato === 0){
  console.log('Il numero è pari');
}
else{
  console.log('Il numero è dispari');
}

//soluzione alternativa
/*if (risultato % 2 === 0){
console.log('Il numero è pari');
}
else{
  console.log('Il numero è dispari');
}
*/



/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.*/
  
  let val = 7
  if (val < 5) {
      console.log("Meno di 5");
    } else if (val >= 10) {
      console.log("Uguale a 10 o maggiore");
    } else {
      console.log("Minore di 10");
    }


/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}

/* SCRIVI QUI LA TUA RISPOSTA */
me.city='Toronto';
document.getElementById('city').innerHTML = '' + me.city;


/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
delete me.lastName;
console.log(me);


/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/
delete me.skills[2];
console.log(me);

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let myArray = [];
myArray[0] = 1;
myArray[1] = 2;
myArray[2] = 3;
myArray[3] = 4;
myArray[4] = 5;
myArray[5] = 6;
myArray[6] = 7;
myArray[7] = 8;
myArray[8] = 9;
myArray[9] = 10;

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
myArray[9] = 100;
console.log(myArray);

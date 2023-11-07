/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
/*
String: sequenza di caratteri
number: numero intero o decimale
Boolean: valore vero o falso
null: valore intenzionalmente vuoto
undefined: valore non (ancora) presente
data: data in ogni suo formato
TIPI COMPLESSI o DERIVATI
array
oggetto
*/

/* ESERCIZIO 2
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let myName = "Jessica";
console.log(myName);
document.getElementById("myName").innerHTML += myName;

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
//soluzione1
let numero1 = 12;
let numero2 = 20;
console.log(12 + 20);
//soluzione2
console.log(numero1 + numero2);
//soluzione3
let somma = 12 + 20;
console.log(somma);
document.getElementById("somma").innerHTML += somma;
//soluzione4
let nuovaSomma = numero1 + numero2;
console.log(nuovaSomma);

/*document.getElementById("somma").innerHTML = numero1+numero2;*/

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let x = 12;
console.log(x);

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "name" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
myName = "Cairone";
console.log(myName);

const persona = "myName";
persona = "Jessica Cairone"; //questa istruzione genererà un errore di riassegnazione di valore ad una costante

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
//soluzione1
console.log(4 - x);
//soluzione2
let y = 4;
console.log(y - x);
//soluzione3
let sottrazione = y - x;
console.log(sottrazione);
//soluzione4
let nuovaSottrazione = y - x;
console.log(nuovaSottrazione);

let sottrazione = 4 - x;
console.log(sottrazione);
document.getElementById("sottrazione").innerHTML += sottrazione;

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let name1 = "john";
let name2 = "John";
//soluzione1
let verifica = "I due nomi sono uguali?" + (name1 === name2);
let verifica = ("I due nomi sono uguali?", name1 === name2);
console.log(verifica);
//soluzione2
let verifica = name1 === name2;
console.log("I due nomi sono uguali?", verifica);
let scrivi = verifica ? "Sì" : "No";
document.getElementById("verifica").innerHTML += scrivi;

//soluzione1
let altraVerifica = name1.toLowerCase() === name2.toLowerCase();
console.log("I due nomi sono uguali?", altraVerifica);
//soluzione2
console.log(
  "I due nomi sono uguali?",
  name1.toLowerCase() === name2.toLowerCase()
);
scrivi = altraVerifica ? "Sì" : "No";
document.getElementById("altraVerifica").innerHTML += scrivi;

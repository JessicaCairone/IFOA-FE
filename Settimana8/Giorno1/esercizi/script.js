//ESERCIZIO 1

/* class myClass {
    constructor (array = []){
        this.array = array; 
    }
    aggiungiNumero(numero) {
        this.array.push(numero);
      }
    
      stampaNumeri() {
        console.log(this.array);
      }
      for (let i = 0; i < array.length; i++) {
        let numInt = numero;
        let numString = numero.toString();
        if (numero % 3 === 0) {
            console.log('Pippo');
        } else if ( numero % 5 === 0) {
            console.log('Pluto');
        } else if (numero % 3 === 0 && numero % 5 === 0){
            console.log('Paperino');
        } else {
            console.log(numString);
        }

      }
}

const arrayNumeri = new myClass ([3, 7, 25, 43, 19, 27]); */

class myClass {
    constructor (array = null) {
        if (array !== null) {  
            this.numbers = array
        }
    }

    checkArray () {
        this.numbers.forEach(number =>{
            if (number % 3 === 0 && number % 5 === 0){
                console.log('Paperino');
            }
            else if (number % 3 === 0) {
                console.log('Pippo');
            } else if ( number % 5 === 0){
                console.log('Pluto'); 
            } else {
                console.log(number.toString()); 
            }
        });
    }
}

// creo una nuova classe
const test = new myClass ([3, 7, 15, 25, 43, 19, 27]); //CLONE DI MYCLASS

// controlla se la classe ha quella proprietà

if (test.hasOwnProperty('numbers')) {
    test.checkArray();
} else {
    console.log('Non ho i numeri');
}


//ESERCIZIO 2

let main = document.getElementById('main');
let uno = document.getElementById('uno');
let due = document.getElementById('due');
let tre = document.getElementById('tre');

main.addEventListener('click', function(event){
    main.style.backgroundColor = 'pink'; 
});

uno.addEventListener('click', function(event){
   // uno.style.backgroundColor = 'pink'; 
   uno.stopPropagation();
   uno.style.backgroundColor = 'blue'; 
});

due.addEventListener('click', function(event){
    due.style.backgroundColor = 'blue'; 
});

tre.addEventListener('click', function(event){
    tre.style.backgroundColor = 'blue'; 
});
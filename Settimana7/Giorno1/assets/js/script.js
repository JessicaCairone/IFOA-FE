//ESERCIZIO 1

class User {
    constructor (firstName, lastName, age, location) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.location = location;
    }

    confronto (x, y) {
    if (x.age > y.age) {
        console.log(x.firstName + ' è più grande di ' + y.firstName);
    } else if (x.age < y.age) {
        console.log(y.firstName + ' è più grande di ' + x.firstName);
    } else {
        console.log(x.firstName + ' ha la stessa età di ' + y.firstName);
    }
    }
}

const x = new User ('Calliope', 'Dore', 20, 'Roma');
const y = new User ('Flaminia', 'Lande', 25, 'Roma');

x.confronto(x,y); 

//SECONDO ESERCIZIO

class Pet {
    constructor (petName, ownerName, species, breed){
        this.petName = petName;
        this.ownerName = ownerName;
        this.species = species;
        this.breed = breed;
    }

    confrontoPadroni (animale1, animale2) {
        if (animale1.ownerName === animale2.ownerName) {
            console.log(true);
            return true; 
        } else{
            console.log(false);
            return false;
        }
    }
} 

arrayPet = []; 
const animale1 = new Pet ('Romeo', 'Jessica', 'cane', 'maremmano');
const animale2 = new Pet ('Nutella', 'Jessica', 'cane', 'lupetta');

animale1.confrontoPadroni (animale1, animale2); 

function aggiungiPet () {
let nome = document.getElementById('petName').value; 
let proprietario = document.getElementById('petOwner').value; 
let specie = document.getElementById('species').value; 
let razza = document.getElementById('breed').value; 

let animale3 = new Pet (nome, proprietario, specie, razza); 
arrayPet.push(animale3); 
console.log(arrayPet.length); 

let tabellaAnimali = document.getElementById('petTable');
nuovaRiga.innerText = ''; 

for (let i = 0; i < arrayPet.length; i++) {
    let nuovaRiga = document.createElement('tr');
    let nuovaCella = document.createElement('td');
    let nuovaCella1 = document.createElement('td');
    let nuovaCella2 = document.createElement('td');
    let nuovaCella3 = document.createElement('td');
  
   nuovaCella.innerText = arrayPet[i].petName;
   nuovaCella1.innerText = arrayPet[i].ownerName;
   nuovaCella2.innerText = arrayPet[i].species;
   nuovaCella3.innerText = arrayPet[i].breed;

   nuovaRiga.appendChild(nuovaCella);
   nuovaRiga.appendChild(nuovaCella1);
   nuovaRiga.appendChild(nuovaCella2);
   nuovaRiga.appendChild(nuovaCella3); 

   tabellaAnimali.appendChild(nuovaRiga);

}

}
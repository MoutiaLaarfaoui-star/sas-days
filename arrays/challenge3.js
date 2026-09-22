const prompt = require('prompt-sync')();

let n = parseInt(prompt("Entrez le nombre d'éléments :"));

const numbers = []

let somme = 0;

for (let i = 0; i < n; i++) {
    let valeur = Number(prompt(`Entrez nombre n°${i + 1} :`));
   
    numbers.push(valeur);
    somme += valeur;
    
}

 console.log(somme)
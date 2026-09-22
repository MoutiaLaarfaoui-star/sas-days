const prompt = require('prompt-sync')();

let n = parseInt(prompt("Entrez le nombre d'éléments :"));

const numbers = []

let max;

for (let i = 0; i < n; i++) {
   let valeur = Number(prompt(`Entrez nombre n°${i + 1} :`));

    numbers.push(valeur)
    max = numbers[0]
    if (numbers[i] > max) {
        
       max = numbers[i]
    }
    
} console.log(max)
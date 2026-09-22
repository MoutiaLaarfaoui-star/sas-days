const prompt = require('prompt-sync')();

let n = parseInt(prompt("Entrez le nombre d'éléments :"));
let X = Number(prompt(`Entrez nombre X éléments :`));

const numbers = []


for (let i = 0; i < n; i++) {
    let valeur = Number(prompt(`Entrez nombre n°${i + 1} :`));
   
    numbers.push(valeur * X);
}


 console.log(numbers)
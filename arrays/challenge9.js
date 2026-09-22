const prompt = require('prompt-sync')();

let n = parseInt(prompt("Entrez le nombre d'éléments :"));


const numbers = []

for (let i = 0; i < n; i++) {
    let X = Number(prompt(`Entrez nombre n°${i + 1} :`));
    numbers.push(X)
    
} 
let a=n-1;
let t=0;
for (let j = 0; j < n/2; j++) {
     
           t = numbers[j];
            numbers[j] = numbers[a];
            numbers[a] = t;
            a--;
 }
 console.log(numbers)
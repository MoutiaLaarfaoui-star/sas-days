const prompt = require('prompt-sync')();

let n = parseInt(prompt("Entrez le nombre d'éléments :"));


const numbers = []

for (let i = 0; i < n; i++) {
    let X = Number(prompt(`Entrez nombre n°${i + 1} :`));
    numbers.push(X)
    
} 
let t = 0;

for (let j = 0; j < numbers.length; j++) {
      for (let g = 0; g < (numbers.length - j - 1); g++) {
        if (numbers[g] > numbers[g + 1]) {
            t = numbers[g]
            numbers[g] = numbers[g + 1]
            numbers[g + 1] = t
        }
      }
} console.log(numbers)
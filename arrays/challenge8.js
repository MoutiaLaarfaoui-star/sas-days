const prompt = require('prompt-sync')();

let n = parseInt(prompt("Entrez le nombre d'éléments :"));


const numbers = []

for (let i = 0; i < n; i++) {
    let X = Number(prompt(`Entrez nombre n°${i + 1} :`));
    numbers.push(X)
    
} 

const num = [];
for (let j = 0; j < n; j++) {
   num[j] = numbers[j] 
    
}
console.log(numbers)
console.log(num)

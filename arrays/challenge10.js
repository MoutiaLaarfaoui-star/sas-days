const prompt = require('prompt-sync')();

let n = parseInt(prompt("Entrez le nombre d'éléments :"));


const numbers = []

for (let i = 0; i < n; i++) {
    let X = Number(prompt(`Entrez nombre n°${i + 1} :`));
    numbers.push(X)
    
} 
let f = Number(prompt(`Entrez nombre de rechercher :`));
for (let j = 0; j < numbers.length; j++) {

    if (numbers[j] === f) {
        console.log("présent")
    } else {
        console.log("non")
    }
}
const prompt = require('prompt-sync')();


let n = parseInt(prompt("Entrez un nombre entier :"));
let inverse = 0;

while (n !== 0 ) {
    inverse = inverse*10+(n%10)
    n=Math.floor(n/10)

}
console.log(inverse);
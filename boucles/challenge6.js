const prompt = require('prompt-sync')();


let n = parseInt(prompt("Entrez un nombre entier :"));


let i = 2
while ( i <= n*2) {
   
    console.log(i)
    i+=2;
}


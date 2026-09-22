const prompt = require('prompt-sync')();

let n = prompt("entre le nom :")

let compteur = 0;


for (let i = 0; i < n.length; i++) {
    compteur++;
}

let invers = "";
for (let j = 0; j < n.length; j++) {
    invers += n[compteur-1]
    compteur--;
    
}


console.log(invers)
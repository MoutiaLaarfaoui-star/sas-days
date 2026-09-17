const prompt = require('prompt-sync')();

let FirstNumber = Number(prompt("Entrez la first number :"));
let SacendNumber = Number(prompt("Entrez la seconde number :"));
let LastNumber = Number(prompt("Entrez la last number :"));

console.log(((FirstNumber*2)+(SacendNumber*3)+(LastNumber*5))/(2+3+5))
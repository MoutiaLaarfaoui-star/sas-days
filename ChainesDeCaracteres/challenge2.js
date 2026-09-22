const prompt = require('prompt-sync')();

let texte = prompt("Entrez une chaîne :");
let compteur = 0;


for (let i = 0; i < texte.length; i++) {
    compteur++;
}

console.log(`La longueur de "${texte}" est de ${compteur} caractères.`);
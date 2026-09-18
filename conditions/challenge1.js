const prompt = require('prompt-sync')();

let nombre = parseInt(prompt("Entrez un nombre entier :"));
 
if (nombre % 2 === 0) {
    console.log(`Le nombre ${nombre} est pair.`);
} else {
    console.log(`Le nombre ${nombre} est impair.`);
}
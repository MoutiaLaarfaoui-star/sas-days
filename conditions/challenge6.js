const prompt = require('prompt-sync')();

let nombre = Number(prompt("Entrez un nombre :"));

if (nombre > 0) {
    console.log("positif")
}
else if (nombre < 0) {
    console.log("negatif")
}
else {
    console.log("nul")
}
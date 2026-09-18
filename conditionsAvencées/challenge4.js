const prompt = require('prompt-sync')();
  

let score = parseInt(prompt("Score de performance (de 0 à 100) :"));
let Ancienneté = parseInt(prompt("Ancienneté (en années) :"));
let Statut = parseInt(prompt("Récompenses reçues (0 pour aucune, 1 pour une  récompense, 2 pour deux ou plus) :"));


if (score >= 90 && Ancienneté >= 5 ) {
    console.log("Excellente")
} else if (score >= 75 && Ancienneté >= 3) {
    console.log("Bonne")
} else if (score >= 50 && Ancienneté < 3) {
    console.log("Satisfaisante")
} else if (score < 50 ) {
    console.log("Insuffisante")
} 







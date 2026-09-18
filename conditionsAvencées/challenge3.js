const prompt = require('prompt-sync')();
  
let JoursRestants = 0;
let congésAccordés = parseInt(prompt("Nombre total de jours de congés accordés :"));
let congésUtilisés = parseInt(prompt("Nombre de jours de congés utilisés :"));
let Statut = parseInt(prompt("Statut de l'employé (0 pour temps partiel, 1 pour temps plein) :"));


if (Statut === 1) {
    JoursRestants = congésAccordés - congésUtilisés;
} else if (Statut === 1) {
    JoursRestants = (congésAccordés/2) - congésUtilisés;
} 



console.log(` Jours restants = ${JoursRestants} jour `);
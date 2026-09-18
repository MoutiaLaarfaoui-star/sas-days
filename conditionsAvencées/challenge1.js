const prompt = require('prompt-sync')();


let revenu = parseFloat(prompt("Quel est votre revenu annuel ?"));
let score = parseInt(prompt("Quel est votre score de crédit (sur 1000) ?"));
let duree = parseInt(prompt("Quelle est la durée du prêt (en années) ?"));
 

if (revenu >= 30000 && score >= 700 && duree <= 10) {
    console.log("Statut : Éligible");
} 
else if (revenu >= 30000 && score >= 650 && duree <= 15) {
    console.log("Statut : Éligible avec conditions");
} 
else {
    console.log("Statut : Non éligible");
}
const prompt = require('prompt-sync')();

let number = Number(prompt("Entrez la année :"));
let choix = Number(prompt("Entrez le choix (1 pour Mois , 2 pour Jours, 3 pour Heures , 4 pour Minutes, 5 pour Secondes) :"));

switch (choix) {
    case 1:
        console.log(" Conversion d'Année par Mois: " + (number * 12));
        break;
    case 2:
        console.log(" Conversion d'Année par Jours: " + (number * 365));
        break;
    case 3:
        console.log(" Conversion d'Année par Heures: " + (number * 8760));
        break;
    case 4:
        console.log(" Conversion d'Année par Minutes: " + (number * 525600));
        break;
    case 5:
        console.log(" Conversion d'Année par Secondes: " + (number * 31536000));
        break;

    default:
        console.log("erore 404");
        break;
}
const prompt = require('prompt-sync')();

// 1. Saisie des informations
let nom = prompt("Quel est votre nom ?");
let prenom = prompt("Quel est votre prénom ?");
let age = prompt("Quel est votre âge ?");
let sexe = prompt("Quel est votre sexe (M/F) ?");
let email = prompt("Quelle est votre adresse e-mail ?");

// 2. Affichage du résultat
console.log(`Voici vos informations :
- Nom : ${nom}
- Prénom : ${prenom}
- Âge : ${age} ans
- Sexe : ${sexe}
- E-mail : ${email}`);

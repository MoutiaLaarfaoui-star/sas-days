const prompt = require('prompt-sync')();

let firstnombre = parseInt(prompt("Entrez un nombre 1 entier :"));
let lastnombre = parseInt(prompt("Entrez un nombre 2 entier :"));
 
resulte1 = (firstnombre+lastnombre)*3;
resulte2 = firstnombre+lastnombre;
if (firstnombre === lastnombre) {
    console.log(` Somme de Deux Valeurs = ${resulte1}`);
} else {
    console.log(` Somme de Deux Valeurs = ${resulte2}`);
}
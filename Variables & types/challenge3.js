const prompt = require('prompt-sync')();

let kilomètres = parseFloat(prompt("Entrez la distance en kilomètres :"));


let distance = kilomètres * 1093.61;


console.log(` yards Formule : ${distance}`)
const prompt = require('prompt-sync')();

let kilomètres = parseFloat(prompt("Entrez la distance en kilomètres :"));


let metireParSecond = kilomètres * 0.27778 ;


console.log(` km/h : ${metireParSecond} m/s`)
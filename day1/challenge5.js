const prompt = require('prompt-sync')();

let tempCelsius = Number(prompt("Entrez la température en Celsius :"));

    

if (tempCelsius < 0) {
    console.log("solid");
 } 
 if ( 0 <= tempCelsius && tempCelsius < 100) {
    console.log("Liquide");
 }
  
 else  {
    console.log("Gas");
 }
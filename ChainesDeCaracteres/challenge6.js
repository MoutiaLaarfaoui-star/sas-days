const prompt = require('prompt-sync')();

let n = prompt("entre le nom :")

let compteur = 0;


for (let i = 0; i < n.length; i++) {
 if (n[i] == "a") {
  compteur++;
 }
} console.log(compteur)
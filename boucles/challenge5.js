const prompt = require('prompt-sync')();


let n = parseInt(prompt(" entre nombre :"));
let x = parseInt(prompt("  élevé à un exposant :"));

let r = 1;

for (let i = 1; i <= x; i++) {
  
     r = r*n
    
} console.log(r)

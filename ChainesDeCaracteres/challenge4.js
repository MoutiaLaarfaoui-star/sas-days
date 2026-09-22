const prompt = require('prompt-sync')();

let mod1 = prompt("entre le 1 mode passe :");
let mod2 = prompt("entre le 2 mode passe :");

if (mod1 == mod2) {
    console.log("mode passe correct")
} else {
    console.log("mode passe incorrect")
}


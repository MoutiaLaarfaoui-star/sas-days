const prompt = require('prompt-sync')();

let n = prompt("entre le nom :")

let m = "";

for (let i = 0; i < n.length; i++) {
    if (n[i] !== " ") {
        m += n[i]
    }
    
} console.log(m)
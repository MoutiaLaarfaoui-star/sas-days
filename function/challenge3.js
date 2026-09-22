const prompt = require('prompt-sync')();
function multiplier(x, y) {
    if (x > y) {
        return x;
    } if (y > x) {
        return y;
    } else {
        return "equal";
    }
}

let x = Number(prompt("entre nombre 1 :"))
let y = Number(prompt("entre nombre 2 :"))
 
console.log("le maxmun nombre :" +multiplier(x, y))
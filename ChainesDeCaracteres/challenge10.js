const prompt = require('prompt-sync')();

let n = prompt("entre le nom :")
let r = prompt("entre le nom recherche :")
let trouve = false;


for (let i = 0; i < n.length; i++) {
  for (let j = 0; j < r.length; j++) {
    if (n[i] == r[j]) {
        trouve = true
    }
    break
  }
} 

if (trouve == true) {
console.log("found");
} else {
console.log("not found");
}

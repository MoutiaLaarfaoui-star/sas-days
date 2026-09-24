let n = "nom";
let l = "mot";

let coumptoure = 0;

for(let i = 0; i < n.length; i++) {
    for(let j = 0; j < l.length; j++) {
        if(n[i] === l[j]) {
            coumptoure++;
        }
        
    }
} 
console.log(coumptoure);

if (coumptoure === n.length) {
    console.log("oui");
} else {
    console.log("non");
}
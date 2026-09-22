const arr = ["youcode", "javascript", "arrays", "carracter"]

const elemo = "a";
const arr1 = [];
let cont = 0;

for(j = 0; arr[j] !== undefined; j++){
let chain = arr[j];
let conteur = 0;
for(let i=0; chain[i] !== undefined; i++){
    if(chain[i] === elemo){
        for (let caractere of chain) {
            conteur++;
        }
        arr1[cont] = conteur ;
         cont++;
        break;
    }
}}
console.log(arr1);
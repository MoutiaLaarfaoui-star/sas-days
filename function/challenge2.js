function multiplier(x, y) {
    return x * y;
}


const multiplierModerne = (x, y) => x * y;


let a = 4;
let b = 5;

console.log(`Le produit de ${a} par ${b} donne : ${multiplier(a, b)}`);
console.log(`Avec la fonction fléchée : ${multiplierModerne(a, b)}`);
const prompt = require('prompt-sync')();

let age = parseInt(prompt("your age :"));
let wekend = prompt("today wekend (yes or no) :");

if (age < 16) {
    if (wekend == "yes") {
        console.log("40DH")
    } else if (wekend == "no") {
        console.log("30DH")
    }
} else if (age >= 16 && age < 24 ) {
    if (wekend == "yes") {
        console.log("80DH")
    } else if (wekend == "no") {
        console.log("70DH")
    }
} else if (age >= 24 && age < 64 ) {
    if (wekend == "yes") {
        console.log("60DH")
    } else if (wekend == "no") {
        console.log("50DH")
    }
} else {
    console.log("20DH")
}
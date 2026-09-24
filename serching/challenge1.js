const arr = [1, 4, 5, 8, 99, 123, 555, 789, 911, 913, 1000, 1500]
let elm = 555

let trouve = false

for (let i = 0; i < arr.length; i++) {
    if (arr[i] === elm) {
        trouve = true
        break;
    } 
    
} 
if (trouve === true) {
    console.log("found");
} else {
    console.log("not found");
}
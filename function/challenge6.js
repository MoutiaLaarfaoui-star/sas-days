function num(x) {
    let n = 0
    let f = 1

    for (let i = 0; i < x; i++) {
     let g = n+f;
     n = f;
     f = g
    } 
    return n;
    
}
console.log(num(8))

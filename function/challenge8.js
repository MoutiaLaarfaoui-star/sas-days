function num(x, y) {
    if (x % 2 === 0) {
        console.log(`le nombre ${x} : pair`);
    } else {
        console.log(`le nombre ${x} : impair`);
    }
    if (y % 2 === 0) {
        console.log(`le nombre ${y} : pair`);
    } else {
        console.log(`le nombre ${y} : impair`);
    }
    return true;
} 
num(4, 5)
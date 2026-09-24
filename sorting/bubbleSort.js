const arr = [12, 22, 65, 2, 3, 9, 87, 45]

for (i = 0; i < arr.length; i++) {
  for (j = 0; j < arr.length - i; j++) {
    let x = 0;
    if (arr[j] > arr[j + 1]) {
       x = arr[j]
        arr[j] = arr[j + 1]
       arr[j + 1] = x
        
    }
  }
} 
console.log(arr)
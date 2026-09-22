const arr = ["youcode", "javascript", "arrays", "carracter"]


for (let  j = 0 ; j < arr.length; j++){
   let revers = ""
   let ar = arr[j]
  for (let i = ar.length-1 ; i >= 0 ; i--) {
    revers += ar[i];
  }
  arr[j] = revers;
} console.log(arr)


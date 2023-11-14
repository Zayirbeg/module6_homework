function arrCount (){
    let arr = [0, 3, 4, 6, 0, 12, 'zero'];
    let zero = 0
    let even = 0
    let odd = 0
    for (let i = 0; i < arr.length; i += 1){
    if (typeof arr[i] === 'number' && !isNaN (arr[i])){
      if (arr[i] === 0) {
        zero += 1
      } else if (arr[i] % 2 === 0){
        even += 1
      } else {
        odd += 1
      }
    }
  }
    console.log ('В массиве: ' + zero + ' - нулей, ' + even + ' - четных, ' + odd + ' - нечетных')
  }
  arrCount ()
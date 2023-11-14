function isPrime(num){
  if (num < 1000 && num >=2){
  for (let i = 2;i < num; i++) {
    if (num % i === 0 || num === 1 || num === 0){
    return console.log(num + ' не является простым числом')
  }}
  return console.log(num  + ' является простым числом') }
  else {console.log ('Данные не верны')}}

isPrime (2)

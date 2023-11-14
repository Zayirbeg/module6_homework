function betweenNumbers (numberFirst, numberSecond) {
    let value = numberFirst;
    let timer = setInterval (function (){
      console.log (value);
      value ++;
      if ( value === numberSecond + 1) {
        clearInterval (timer);
      }
    }, 1000)
}
betweenNumbers (2, 10)
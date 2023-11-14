function sumNumbers (numberFirst) {
    return function (numberSecond) {
        return numberFirst + numberSecond
    }
}
const sum = sumNumbers (2)(3);
sumNumbers ();
console.log (sum)

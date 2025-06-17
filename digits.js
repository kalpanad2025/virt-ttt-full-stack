"use strict";
function countDigit(str) {
    const digits = str.match(/\d/g); // \d=>to identify the digit 0–9,g  for global search
    return digits ? digits.length : 0; //ternary operator expression if digit=null return 0 ,not retrun =length of the digit
}
console.log(countDigit("kalpana12345")); 
console.log(countDigit("India")); 
console.log(countDigit("shy341ni8")); 
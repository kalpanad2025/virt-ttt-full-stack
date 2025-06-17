"use strict";
//How do you find the average of numbers in a list?
function Average(numbers) {
    if (numbers.length === 0)
        return undefined; // Avoid division by zero
    const sum = numbers.reduce((total, num) => total + num, 0);
    return sum / numbers.length;
}
// Test
console.log(Average([15, 40, 35])); 
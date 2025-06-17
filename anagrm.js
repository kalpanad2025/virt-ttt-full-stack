"use strict";
//How do you find out if the two given strings are anagrams?
//procedure
//Normalize both strings:
//Convert to lowercase (to ignore case)
//Remove non-alphabetic characters (optional, based on use case)
//Sort the characters in each string.
//Compare the sorted strings.
function checkAnagrams(str1, str2) {
    const normalize = (str) => str
        .toLowerCase()
        .replace(/[^a-z0-9]/g, '') // remove non-alphanumerics (optional)
        .split('')
        .sort()
        .join('');
    return normalize(str1) === normalize(str2);
}
console.log(checkAnagrams("lemon", "melon")); // true
console.log(checkAnagrams("Act", "cat")); // true
console.log(checkAnagrams("orange", "eogn")); // false
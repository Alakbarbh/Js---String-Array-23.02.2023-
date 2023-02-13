"use strict"


//2) Parametr olaraq gelen stringi tersine ceviren method yazin.


function reverseString(str) {
    var newString = "";
    for (var i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}

console.log(reverseString("Alakbar"));




function reverseString(str){
    return str.split("").reverse().join("");
}

console.log(reverseString("Hasanov"));


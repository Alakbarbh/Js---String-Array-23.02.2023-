"use strict"

 let address = "Ehmedli";

// for (let i = 0; i < array.length; i++) {
//     console.log(address[i]);

// }

// console.log(address.length);


// console.log(address[0]);


 console.log(address.charAt(0));


// console.log(address.charCodeAt(1));


// console.log(address.toUpperCase());


// console.log(address.toLowerCase());


// console.log(address.split(""));


// console.log(address.trimEnd());


// console.log(address.slice(2));





// let text = "soideenfdsnncjkdnsjewdisljmcelwdsmkl"

// if(text.length > 10){
//     console.log(text.substring(1,10) + "...");
// }






// console.log(address.substr(1,3));

// let text1 = "Hello";
// let text2 ="World";

// let res = text1.concat(text2);
// console.log(res);





// const strToUpper = str => {
    // return str.charAt(0).toUpperCase() +str.slice(1)
    // return str.charAt(0).toUpperCase() + str.slice(1)
// }

// console.log(strToUpper("hello"));






// let text = "salam";

// let result = text[0].toUpperCase();

// let res = text.replace(text.charAt(0),result)
// console.log(res);





// console.log(students[students.length - 1]);

// let result = students.join();

// console.log(students);





// students.pop();

// students.push("Elekber")

// students.shift();

// students.unshift("Hacker")

// console.log(students);




// let students = ["Cavid","Jale","Roya","Konul","Cinare","Anar"];

// let text = "R";

// function filter(arr,text){
//     let result = [];
//     for (const item of arr) {
//         if(item.tolowerCase().startWith(text.tolowerCase())){
//             result.push(item)
//         }
//     }

//     return result;
// }

// console.log(filter(students,text));






// console.log(students.lastIndexOf("Jale"));

// let result = students.find(m=>m == "Jale");

// students.sort();




// console.log(students);

// students.reverse();

// console.log([3,8,-10,23,19,-4,14,27].sort((a,b)=>b-a));

// students.fill("Eli",0,2);

// console.log(students)

// let arr = [1,2,3,4,5,6,7];

// console.log(students.every(m=>m=="Cinare"));





// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// const f = fruits.entries();

// for (const iterator of f) {
//     console.log(iterator);
// }




// let arr = [10,20,30,40,5,6,7];

// console.log(arr.findIndex(m=>m > 20));

// console.log(arr.includes(100));

// console.log(Array.isArray.from(text));






// let text = "ABCDEFG"
// const myArr = Array.from(text);
// console.log(myArr);

// console.log(arr.slice(2,5));






// const fruits = ["Banana", "Orange", "Apple", "Mango"];

// fruits.splice(2,0,"Lemon","Kiwi");

// console.log(fruits);

// console.log(arr.toString());

// let age = "55";
// let age2 = "33";

// console.log(typeof age.toString());

// console.log(typeof (age) + Number(age2));

// console.log(typeof parseInt(age));




// function getNums(num1,...arr){
//     console.log(arr);
// }

// getNums(1,2,3,4,5,6)






// let test = (...arr)=>{
//     console.log(arr);
// }

// test(1,2,3)





// let arr1 = [1,2,3,4,5];

// let copyArr = [...arr1];

// console.log(copyArr);


// arr[0] = 10;

// console.log(arr1);







let user1 = {
    name: "Shaiq",
    address:"Ehmedli"
}


console.log(user1);

let copyUser1 = {...user1};

console.log(copyUser1);
// Create an object with just name and age. Try to append a height to the object and show the object created.
// Create an array that has three elements, try to use the POP(), the PUSH(), the UNSHIFT() methods in array.
// Given a string find the reversed form of that string. E.g given “book” your answer should be “koob”

// let j=20;
// let check= (j%2==0) ? "it is even": "it is odd bro"
// console.log(check)

1. // Create an object with just name and age. Try to append a height to the object and show the object created.

let ran={
    name:"James",
    age:32

}
ran.height="3.2m"
console.log(ran)



// Create an array that has three elements, try to use the POP(), the PUSH(), the UNSHIFT() methods in array.

const fruit=["orange", "pineaple", 'mango']
fruit.pop("mango")
console.log(fruit)


fruit.push("carrot")
console.log(fruit)

fruit.unshift("Cucumber")
console.log(fruit)

// Given a string find the reversed form of that string. E.g given “book” your answer should be “koob”
let string = "Hello World!";
let reversedString = string.split("").reverse().join("");
console.log(reversedString);  // outputs "!dlroW olleH"

let p="JAMES";
let revP=p.split("").reverse().join("");
console.log(revP)
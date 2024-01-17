//! Primitive

//? Pass by value

// 7 Types : String, Number, Boolean, null, undefined, Symbol, BigInt

//! Javascript is Dynamically Typed Language

const score = 100; 
const scoreValue = 100.3 // float is also treated as number in js
const isLoggedIn = true;
const outsideTemp = null;
let userEmail;

const id = Symbol('123');
const anotherId = Symbol('123');
// console.log(id);
// console.log(anotherId);
// console.log(id == anotherId); // symbols with same is different

// const Number = 31451252756174571645761475614561765; 
const bigNumber = 31451252756174571645761475614561765n;

// console.log(bigNumber); // print float because it convert 2^53 number to float


//! Refrence (Non primitive)

//? Pass by refrence

// Array, Objects, Functions


const heros = ["ironMan", "sipderMan", "falcon"];

let myObj = {
    name: "Azhar",
    age: 20,
};

const myFunction = function(){
    console.log("Hello World!");
}

// console.log(myFunction());
console.log(typeof BigInt);

// https://262.ecma-international.org/5.1/#sec-11.4.3


// +++++++++++++++++++++++ Memory +++++++++++++++++++++++++


// Stack (Primitive), Heap (Non-Primitive)

let myName = "Azhar";
let anotherName = "Azhar";

console.log(anotherName);
anotherName = "Azharu";
// console.log(anotherName);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
};

let userTwo =  userOne;

userTwo.email = "azhar@google.com";

console.log(userOne.email);
console.log(userTwo.email);
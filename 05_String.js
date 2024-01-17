const name = "Azhar";
const repoCount = 50;

// console.log(name + repoCount );

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

// console.log(name[1]);

const gameName = new String("Azhar-az-aa");

// console.log(gameName.__proto__); // calling prototype

// console.log(gameName.length); // finding length
// console.log(gameName.toUpperCase()); // converting to uppercase 
// console.log(gameName.charAt(2)); // finding char at given position in string 
// console.log(gameName.indexOf('a')); // finding index of given char in string 

const newString = gameName.substring(0, 4);
console.log(newString);

const anotherString = gameName.slice(-6, 8);
console.log(anotherString);

const newStringOne = "     Azhar     ";
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://azhar.com/azhar%20photo";

console.log(url.replace('%20', '-'));
console.log(url.includes('azhar'));
console.log(url.includes('sd'));


console.log(gameName.split('-'));


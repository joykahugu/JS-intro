// Variables

//console.log('Hello, World! ');
//console.log('Hello, World! ');
//console.log('Hello, World! ');
//console.log('Hello, World! ');
//console.log('Hello, World! ');
//console.log('Hello, World! ');

//to achieve the same without copy pasting six times esp for long messages instead

let message = 'Hello, World!' ;
console.log(message);
console.log(message);
console.log(message); //message is a variable

console.log('The computer says, '+message)
console.log(`The computer says ${message}`);

let num1 = 9;
let num2 = 3;

let sum = num1 + num2;
console.log(sum);

let diff = num1 - num2;
console.log(diff);

let division = num1 / num2;
console.log(division);

let product = num1 * num2;
console.log(product);

let remainder = num1 % num2;
console.log(remainder);

//Data Types

//Strings

let greetings = "Good morning"; // string 
console.log(greetings);
console.log(typeof(greetings));

let num3 =20.6; // floats
console.log(typeof(num3));

let fName = null; // null
console.log(typeof(fName));

let lName; //undefined
console.log(typeof(fName))

let isStudent = true;
console.log(typeof(isStudent));

//list with objects
let fruits = [`mangoes` , `oranges` , `tomatoes`, `lemons`]; //Arrays
console.log(fruits);

// objects 
let myObj = {
  name: "John Doe" ,
  age: 25,
  email: 'johndoe@gmail.com' ,
  isStudent: false
}; 
console.log(myObj);
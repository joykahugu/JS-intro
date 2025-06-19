let str1= 'Hello';
let str2 = "World";
let str3 = `Hello, World!`; 
//strings can be in single, double quotes or backticks


//Template literals 
let fname = 'Joy'
let age = 22;
let message = `Hi, my name is ${fname} and I am ${age} years old.`; // string with variable
console.log(message)

//string concatenation
let message2= "Hi, my name is " + "fName + and I am" + age + "years old." ;
console.log(message2);

//Accessing characters e.g in list(script.js) mangoes is 0. useful to print a specific character in a string
let text= 'JavaScript'; //J is character index 0
console.log(text[1]);
console.log(text.charAt(7)); 

console.log(text.length); //length
console.log(text.indexOf('a')); //gives first occurence of a
console.log(text.lastIndexOf('a'));

let text2= 'banana'
console.log(text2.indexOf('a', 2)) //since it comes after original index2
console.log(text2.indexOf('a' , 4));


//Changing Case
let text3 = 'JavaScript';
console.log(text3. toUpperCase());
console.log(text3. toLowerCase());

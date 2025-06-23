//special variable that can store multiple variables in one ie. list
//let fruits = ['apple', 'banana', 'mango', 'orange'];
//console.log(fruits);

//let arr = new Array(1, 2, 3);
//console.log(arr);

//let arr2 = Array.of("a", "b");
//console.log(arr2);

//let mixedArray = ['apple', 'mango', 2, 4, 5, true, {name:"john"}, [5,6,7]];
//console.log(mixedArray);

//let nestedArray = [
    //[1, 2, 3],
    //[4, 5, 6],
    //[7, 8, 9]
//];
//console.log(nestedArray);

//accessing an array- use the index
//console.log(fruits[4]) - displays tomato
// console.log(fruits.indexOf('mango'))
//in nested array console.log(nestedArray[1][1])- for 5(index nested array, index no of item in nested array)

//let fruits2 = ['apple', 'mango', 'orange', 'banana', 'tomato'];
//fruits2.push('cherry'); //item added to list, to the end
//console.log(fruits2);
//fruits2.unshift('grape'); //item added to list, to the beginning
//console.log(fruits2);
//how to add a specific item to the list at a specific location

//fruits2.splice(2, 0, 'Kiwi');
//console.log (fruits2);


// removing an item 

//fruits2.pop(); //removes last item
//console.log(fruits2); 
//fruits2.shift();
//console.log(fruits2) //removes first item 

// removing a specific item from the list 
//fruits2.splice(1, 2); //index no. of starting index, no of items to remove after that
//console.log(fruits2);

let fruits = ['apple', 'mango', 'orange', 'banana', 'tomato'];
console.log(fruits);
fruits.forEach(function(fruit) {
    console.log(fruit)
}) //forEach functions like for loops

//map works like a funcion for the whole array
let upperFruits = fruits.map(fruit => fruit.toUpperCase())
console.log (upperFruits);

let numbers = [1, 2, 3, 4, 5, 6]
let squares = numbers.map(num => num * num);
console.log(squares);

//Arrays of objects

const students = [
    {
 id: 1,
 firstName: "Seth",
 lastName: "Okeyo",
 address: {
    city: "Nairobi"
    code: "00100"
 },
 gender: "male",
 maritalStatus: "married"
 email: "sokeyo@gmail.com"
}
]

const students = [
    {
 id: 1,
 firstName: "Joy",
 lastName: "Kahugu",
 address: {
    city: "Nairobi",
    code: "00100",
 },
 gender: "female",
 maritalStatus: "not married",
 email: "jkahugu5@gmail.com",
 phoneNumber: "+254795384428",
}
]
//console.table(students)- will give a table


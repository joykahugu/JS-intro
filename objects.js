//can be used to define a user
//can have an array within, an object inside and object e.g. user and their address



let Obj1 = {
    name: "Pulp Fiction",
    year: "1994",
    director: "Quentin T.",
    genre: "Comedy/Action"
}; 
console.log(Obj1);
console.log(Obj1.name);
console.log(Obj1["year"]);

let person = {
    name: "Jane",
    age: 20,
    isStudent: false,
    address: { //object within object
        city: "New York",
        hometown: "Kakamega"
    }
};
person.gender = 'female';
console.log(person); //can add to object this way
console.log(person.address.hometown)

delete person.isStudent;
console.log(person)


let keys = Object.keys(person)
console.log(keys)

let values = Object.values(person);
console.log(values)

let entries = Object.entries(person); //ignores object within 
console.log(entries); // shows them as a list 

let car = {
    make: "Toyota",
    model: "Camry",
    year: 2020,
    isElectric: false,
    features: ["Bluetooth", "backup camera", "sunroof"],
    start: function() {
        console.log("Engine started");
    }
};
console.log(car);

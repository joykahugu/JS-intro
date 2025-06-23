
import promptSync from "prompt-sync";

const prompt = promptSync();

function  sum(num1, num2) {
  return num1 + num2;
}

//arguments (2 for 2 parameters ie. no's)
console.log(sum(2, 3));
console.log(sum(10, 30)); // can reuse function w different argument


const product = function(a, b) {
    return a*b
}
console.log(product(5, 4));

function greeting(name) {
    return `Hello, ${name}! :`
}
   console.log(greeting("John Doe"))

   const greet = function(name) {
    return `Hello, ${name}! :`
   }
   console.log(greet('Jane'))

  // const message = (name) => {
    //return `Hi, my name is ${name}. `;
  // }
  // console.log(message('Bon'))
  // console.log(message('Leah')) 
  //shorthand for above is 

  const message = name => `Hi, my name is $(name),`;
  // console.log(message(`Bob))
  // console.log(message(`Stacy))

  function validateEmail(email) {
    return email.includes("@") && email.endsWith(".com");
  }

  //const userEmail = prompt("Enter your email: ");
 // if (validateEmail(userEmail)) {
     console.log("Valid email,");

  //}
  // else {
   // console.log("Invalid Email.")
   //}

   function calculateTotal(cartItems) {
    let total = 0;
    for (let item of cartItems) {
        total += item.price * item.quantity;
    }
    return total;
   }

   const cart = [
    {name: "T-shirts", price: 1200, quantity: 3},
    {name: "Trousers", price: 1500, quantity: 2},
     ];
 
     console.log("Total: ", calculateTotal(cart))

     function getWinner(player, computer) {
        if (player === computer) return "Draw";

        if (
            (player === "rock" && computer === "scissors") ||
            (player === "scissors" && computer === "paper") ||
            (player === "paper" && computer === "rock") 
        ) 
        
        {
            return "Player wins!"
        }
        return "Computer wins"
     }

    console.log(getWinner("scissors","rock")); 


     
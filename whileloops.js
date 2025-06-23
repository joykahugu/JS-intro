// while (condition) {
// code to be executed ; increment}


import promptSync from "prompt-sync";
const prompt = promptSync();

let i= 1;
while (i<=5) {
    console.log(i);
    i++;
}



let loan = 5000000;
let monthlyDeductions = 20000;
let months = 0; // first month
let annualDeductions = 240000;

while (loan > 0) { 

    loan -= monthlyDeductions; //5million -10k // loan - monthly deductions
    months++;
    
}
console.log(`It will take ${months}` ); // to have just the final sum/answer instead of 1-500

let count= 0;
while (true) {
    console.log(count)
    count++
    if (count > 10) break;
}

//let password = " ";
 //while (password.length < 8) {
   // password= prompt ('Enter a password (min 8 Char.)');
    //if (password)
 //}
 //console.log("Password accepted. ");

 let password = "";
 while (true) {
    password = prompt("Enter a strong password");
    const hasUpper = /[A-Z]/.test(password); 
    const hasLower = /[a-z]/.test(password);
    const hasDigit = /[0-9]/.test(password);
    const hasSpecial = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password);
    const longEnough = password.length >= 8;

    if (hasUpper && hasLower && hasDigit && hasSpecial && longEnough) {
        console.log("Password is strong!");
        break;
    } else {
        console.log("Password is weak. Try again!");
    }  
 }

 
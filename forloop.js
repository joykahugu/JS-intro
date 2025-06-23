//for (initialization; condition; increment) {
    //code to be executed
// }
//increment: goes through the numbers and prints them)
//i is index so 1=0, index 0
for (
 let i= 1; i<= 5; i++    
) {console.log(i)}

// max of i is 5, loop stops at 5(condition)

const colors = ['red', 'yellow', 'blue', 'green', 'black']
console.log(colors)

for (let i=0; i < colors.length; i++) {
   console.log(colors[i]) ;
}

console.log(`Even numbers`)
for (let i = 1; i <= 20; i++){
    if (i % 2 === 0) {
        console.log(i)
    }
    
}

console.log(`Odd numbers`) //'% 2!==' -remainder not strictly 0
for (let i = 1; i <= 20; i++) {
    if (i % 2 !== 0){
        console.log(i)
    }

}
   
   
let sum = 0;
for (let i = 1; i <= 50; i++) {
    //sum = sum + 1; sum= 0+1 sum= 1+2=3 sum(3)= 3+3
    sum = sum + i //same as sum +=i

}

console.log ('Sum:' , sum);

let sum2 = 0;
for ( let i = 1; i <=100; i++) {
    if(i % 2 === 0) {
          sum2 +=i;
        
    }
  
} 
console.log('Sum:', sum2);  //if you want all the sums displayed, include this in loop command   


for (
    let i=1;  i<=5; i++
) {
    console.log('loop');
}

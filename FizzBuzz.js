//Solve a problem where you have and array of numbers. If the integer in the array is divisible by 2 log "Fizz". If the integer is divisible by 3 log "Buzz". If it is divisible by 2 & 3 log "FizzBuzz".

function fizzbuzz(num){
for(let i = 1;i <= num; i++){
if (i % 2 === 0 && i % 3 === 0)
console.log("FizzBuzz");
else if (i % 2 === 0)
console.log("Fizz");
else if (i % 3 === 0)
console.log("Buzz");
else
console.log(i);} }

fizzbuzz(34);

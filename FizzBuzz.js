//Solve a problem where you have and array of numbers. If the integer in the array is divisible by 2 log "Fizz". If the integer is divisible by 3 log "Buzz". If it is divisible by 2 & 3 log "FizzBuzz".

//This function accepts a number as an argument
function fizzbuzz(num) {
  //Loops through every number until it reaches the number and stops
  for (let i = 1; i <= num; i++) {
    //For every number it checks to see if it is divisible by 2 and 3 without a remainder
    if (i % 2 === 0 && i % 3 === 0)
      console.log("FizzBuzz");
    //For every number checks to see if it is divisible by 2 no remainder
    else if (i % 2 === 0)
      console.log("Fizz");
    //For every number checks to see if it is divisible by 3 no remainder
    else if (i % 3 === 0)
      console.log("Buzz");
    else
      console.log(i);
  }
}

fizzbuzz(34);
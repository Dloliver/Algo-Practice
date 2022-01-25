//Write a function that takes all the numbers in an array and sums them.

//1. Set a variable called total

//2. Write a function that works through each number in an array

//3. For each number it adds it to the total and moves to the next number.

//4. Once it loops through the entire array it sums all the numbers and returns the sum

numbers = [1, 2, 3, 4, 5, 6]

const sumArray = (array) => {
  let total = 0
  for (let i = 0; i < array.length, i++) {
    total = total + array[i]
  }
  return total;
}

sumArray(numbers)
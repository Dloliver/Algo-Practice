// Write a function that takes a string and checks if it is a palindrome i.e. it reads the same when reversed.

function isPal(str) {

  //The first interation is good for small words.
  //It takes the str and throws into multiple methods to create the reversed string.
  //The inital method splits the string, second one reverses it and the 3rd joins it.
  let revStr = str.split("").reverse().join("")

  //Once the strings are reversed this part of the function checks to see if the original string and the created string are equal.
  return revStr.toLowerCase() === str.toLowerCase()
}
'console.log(isPal("Den"));


//Pointers

//The second interation is a better over all code but it takes more lines to run.
//This function is great when it comes to checking longer words and it is better when it comes to overall computing time.

function isPal2(str) {

  //This portion uses a method to lowercase the function
  let lcStr = str.toLowerCase()

  //it utilizes pointers one point at the beginning and one at the end
  let left = 0;
  let right = lcStr.length - 1;

  //The beauty of this code is that it checks point to point at the beginning at the end and compares them to each other on each run through.
  //This is better computational because it doesnt have to run through the whole string it checks each letter until it completes if it finds one letter doesnt match it stops and returns false. Verses the intial function runs through every letter regardless if it is a palindrome or not.
  while (left < right) {
    if (lcStr[left] !== lcStr[right]) return false;
    left++
    right--
  }

  //If this runs through the whole whole function it returns true cause that means that every letter matched. 
  return true;
}

console.log(isPal2(Racecar))
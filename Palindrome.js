// Write a function that takes a string and checks if it is a palindrome i.e. it reads the same when reversed.

function isPal(str) {
  let revStr = str.split("").reverse().join("")

  return revStr.toLowerCase() === str.toLowerCase()
}
'console.log(isPal("Den"));


//Pointers
function isPal2(str) {
  let lcStr = str.toLowerCase()

  let left = 0;
  let right = lcStr.length - 1;

  while (left < right) {
    if (lcStr[left] !== lcStr[right]) return false;
    left++
    right--
  }

  return true;
}
// Given a string of characters, return the character that appears the most often.

//Frequency Counter object
function maxChar(str) {
  let freqCounter = {}
  let lcStr = str.toLowerCase()

  for (let char of lcStr) {
    freqCounter[char] = freqCounter[char] + 1 || 1;
  }
  let maxCount = 0;
  let maxChar = null;
  for (let key in freqCounter) {
    if (freqCounter[key] > maxCount) {
      maxCount = freqCounter[key]
      maxChar = key
    }
  }

  return maxChar
}




console.log(maxChar("Dennis"));
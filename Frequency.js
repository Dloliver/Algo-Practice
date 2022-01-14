// Given a string of characters, return the character that appears the most often.

//Frequency Counter object

// The original function takes in a string and sets every letter to lowercase.
//Also creates an object called freqCounter that holds the letters and their frequencies.
function maxChar(str) {
  let freqCounter = {}
  let lcStr = str.toLowerCase()

  //The next part of the function works through the characters (c) of the lowercased string lcStr and counts them
  //the freq counter holds the frequencies of each character and uses a logical or operator || in order to process the data if the item doesnt exist it adds it or it adds 1 to it.

  for (let char of lcStr) {
    freqCounter[char] = freqCounter[char] + 1 || 1;
  }

  //this part counts to see which string appears the most
  //maxcount is set to 0 and it checks hrough the freqCounter to see which letter had the higher frequency couter it then sets it to match the maxCount and sets the maxChar if their is a higher value then it resets the value. 

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
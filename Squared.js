// Write a function called "squared" which takes two arrays. The function should return true if every value in the array has its corresponing value squared in the second array. The frequency of values must be the same.

//Brute Force method (N squared)

function squared(arr1, arr2) {

  //The first part of this function initially checks to see if the 2 arrays are the same length. If not it returns false
  if (arr1.length !== arr2.length) return false;

  //Next the function takes a for loop and checks it against arr2 to see if it equals array 1 squared.
  for (let i = 0; i < arr1.length; i++) {
    let foundIndex = arr2.indexOf(arr1[i] ** 2)

    //
    if (foundIndex === -1) return false;

    arr2.splice(foundIndex, 1)
  }
  return true;
}

// Frequency COunters

function squared2(arr1, arr2) {
  // First part checks to see if the two arrays are the same length.
  if (arr1.length !== arr2.length) return false;

  //After checking we create frequency counters so that we can keep up with the frequency of each occurence in the arrays
  let freqCounter1 = {}
  let freqCounter2 = {}

  //next we check the frequencies and store them for freqCounter1 and freqCounter2
  for (let num of arr1) {
    freqCounter1[num] = freqCounter1[num] + 1 || 1;
  }

  for (let num of arr2) {
    freqCounter2[num] = freqCounter2[num] + 1 || 1;
  }

  //next we check if the key from freqCounter1 squared shows up in freqCounter2
  for (let key in freqCounter1) {
    if (!(key ** 2 in freqCounter2)) return false;

    //next we check if freqCounter1 occurences are the same as freqCounter2 occurences.
    if (freqCounter1[key] !== freqCounter2[key ** 2]) return false;
  }
  return true;
}




console.log(squared([1, 2, 3], [9, 1, 4]));
console.log(squared([1, 2, 3], [1, 4]));
console.log(squared([2, 2, 4], [4, 9, 9]));
console.log(squared2([9, 9, 7], [81, 81, 49]));
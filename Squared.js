// Write a function called "squared" which takes two arrays. The function should return true if every value in the array has its corresponing value squared in the second array. The frequency of values must be the same.

//Brute Force method (N squared)
function squared(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;

  for (let i = 0; i < arr1.length; i++) {
    let foundIndex = arr2.indexOf(arr1[i] ** 2)

    if (foundIndex === -1) return false;

    arr2.splice(foundIndex, 1)
  }
  return true;
}

// Frequency COunters

function squared2(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  let freqCounter1 = {}
  let freqCounter2 = {}

  for (let num of arr1) {
    freqCounter1[num] = freqCounter1[num] + 1 || 1;
  }

  for (let num of arr2) {
    freqCounter2[num] = freqCounter2[num] + 1 || 1;
  }

  for (let key in freqCounter1) {
    if (!(key ** 2 in freqCounter2)) return false;

    if (freqCounter1[key] !== freqCounter2[key ** 2]) return false;
  }
  return true;
}




console.log(squared([1, 2, 3], [9, 1, 4]));
console.log(squared([1, 2, 3], [1, 4]));
console.log(squared([2, 2, 4], [4, 9, 9]));
console.log(squared2([9, 9, 7], [81, 81, 49]));
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

console.log(squared([1, 2, 3], [9, 1, 4]));
console.log(squared([1, 2, 3], [1, 4]));
console.log(squared([2, 2, 4], [4, 9, 9]));
console.log(squared([9, 9, 7], [81, 81, 49]));
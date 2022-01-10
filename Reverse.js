//Reverse a string without using the reverse array method. Describe performance in terms of Big O.

//Brute force - Naive Big O(n)
function revStr(str) {
  let arr = [];
  let charsArr = str.split("")

  for (let i = charsArr.length - 1; i >= 0; i--) {
    arr.push(charsArr[i])
  }
  return arr.join("")
}

console.log(revStr("Dennis"));

//Pointers
function revStr2(str) {
  let arr = new Array(str.length)
  let charsArr = str.split("")
  let left = 0;
  let right = charsArr.length - 1;
  while (left <= right) {
    arr[left] = charsArr[right]
    arr[right] = charsArr[left]
    left++
    right--
  }
  return arr.join("")
}

console.log(revStr2("Dennis"))

//Easiest Way
function revStr3(str) {
  return str.split("").reverse().join("")
}

console.log(revStr3("Dennis"))
const eqArrays = function(arr1, arr2) {
  if (!Array.isArray(arr1) && !Array.isArray(arr2)) {
    return false;
  }
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let char of arr1) {
    if (arr1[char] !== arr2[char]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(arr1, arr2) {
  const eqArray = eqArrays(arr1, arr2);
  if (eqArray) {
    console.log(`✅✅✅ Assertion passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion failed: ${arr1} !== ${arr2}`);
  }
};

const isEven = function(num) {
  return num % 2 === 0 ? true : false;
};

const middle = function(arr) {
  let arrWithMiddleEl = [];
  const middleIndex = Math.floor((arr.length - 1) / 2);
  const middleIndexes = middleIndex + 1;
  if (!arr.length || arr.length === 1 || arr.length === 2) {
    return [];
  }
  if (!isEven(arr.length)) {
    arrWithMiddleEl.push(arr[middleIndex]);
  } else {
    arrWithMiddleEl.push(arr[middleIndex], arr[middleIndexes]);
  }
  return arrWithMiddleEl;
};

// console.log(middle([1])); // => []
// console.log(middle([1, 2])); // => []
// console.log(middle([1, 2, 3])); // => [2]
// console.log(middle([1, 2, 3, 4, 5])); // => [3]
// console.log(middle([1, 2, 3, 4])); // => [2, 3]
// console.log(middle([1, 2, 3, 4, 5, 6])); // => [3, 4]

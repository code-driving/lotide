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

// console.log(assertArraysEqual([1, 2, 3], [1, 2, 3]))
// console.log(assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]))
// console.log(assertArraysEqual([1, 2, 3], [3, 2, 1]))

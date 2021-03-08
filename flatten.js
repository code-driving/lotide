// const eqArray = require("./eqArrays");
// const assertArraysEqual = require("./assertArraysEqual");

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

const assertArraysEqual = function(arr1, arr2 = []) {
  const eqArray = eqArrays(arr1, arr2);
  if (eqArray) {
    console.log(`✅✅✅ Assertion passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion failed: ${arr1} !== ${arr2}`);
  }
};

const flatten = function(arr) {
  let result = [];
  for (let char of arr) {
    if (Array.isArray(char)) {
      result.push(...char);
    } else {
      result.push(char);
    }
  }
  return result;
};

// console.log(flatten([[1, 2], 4, 5]));
// console.log(flatten([[1],2,[3, 4]]))
// console.log(flatten([1, 2, [3, 4], 5, [6]]))

assertArraysEqual(flatten[[1, 2], 3], [1, 2, 3])
// const eqArrays = require("./eqArrays");

const eqArrays = function (arr1, arr2) {
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

const assertArraysEqual = function (arr1, arr2, result) {
  const eqArray = eqArrays(arr1, arr2);
  if (eqArray == result) {
    console.log(`✅✅✅ Assertion passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion failed: ${arr1} !== ${arr2}`);
  }
};

module.exports = { eqArrays, assertArraysEqual };



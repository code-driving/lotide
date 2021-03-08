const assertEqual = require("./assertEqual");

const eqArrays = function (arr1, arr2) {
  if (Array.isArray(arr1) !== Array.isArray(arr2)) {
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

module.exports = { assertEqual, eqArrays };

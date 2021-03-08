const { eqArrays, assertArraysEqual } = require("./assertArraysEqual");

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

module.exports = { isEven, middle };



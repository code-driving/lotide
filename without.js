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

const without = function (source, itemsToRemove) {
  let updatedArr = [...source];
  for (let i = 0; i < updatedArr.length; i++) {
    for (j = 0; j < itemsToRemove.length; j++) {
      if (updatedArr[i] === itemsToRemove[j]) {
        updatedArr.splice(i, 1);
      }
    }
  }
  return updatedArr;
};

// const without = function(source, itemsToRemove) {
//   return source.filter(val => !itemsToRemove.includes(val))
// }

// console.log(without([1, 2, 3], [1])); // => [2, 3]
// console.log(without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"]

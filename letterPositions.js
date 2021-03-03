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

const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    if (!results[sentence[i]] && sentence[i] !== " ") {
      results[sentence[i]] = [];
    }
    if (sentence[i] !== " ") {
      results[sentence[i]].push(i);
    }
  }
  return results;
};

console.log(letterPositions("lighthouse in the house"));



assertArraysEqual(letterPositions("hello").e, [1]);
assertArraysEqual(letterPositions("smile").s, [0]);

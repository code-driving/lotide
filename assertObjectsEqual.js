// const assertEqual = require("./assertEqual");
// const eqArrays = require("./eqArrays");
// const eqObjects = require("./eqObjects");

const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion failed: ${actual} !== ${expected}`);
  }
};
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

const eqObjects = function (object1, object2) {
  const obj1Keys = Object.keys(object1); //returns an array of keys
  const obj2Keys = Object.keys(object2);

  if (obj1Keys.length !== obj2Keys.length) {
    return false;
  }
  for (let key of obj1Keys) {
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      eqArrays(object1[key], object2[key]);
      return true;
    } else if (object1[key] !== object2[key]) {
      return false;
    }
  }
  return true;
};

const assertObjectsEqual = function (actual, expected) {
  const inspect = require("util").inspect;

  const eqObject = eqObjects(actual, expected);
  if (eqObject) {
    console.log(
      `✅✅✅ Assertion passed: ${inspect(actual)} === ${inspect(expected)}`
    );
  } else {
    console.log(
      `🛑🛑🛑 Assertion failed: ${inspect(actual)} !== ${inspect(expected)}`
    );
  }
};

module.exports = { assertObjectsEqual };

// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };
// eqObjects(ab, ba); // => true

// const abc = { a: "1", b: "2", c: "3" };
// eqObjects(ab, abc); // => false

// assertObjectsEqual(eqObjects(ab, ba), true);
// assertObjectsEqual(eqObjects(ab, abc), false);
// console.log(eqObjects(ab, ba));
// console.log(eqObjects(ab, abc));

// const cd = { c: "1", d: ["2", 3] };
// const dc = { d: ["2", 3], c: "1" };
// console.log(eqObjects(cd, dc));
// assertObjectsEqual(eqObjects(cd, dc), true); // => true

// const cd2 = { c: "1", d: ["2", 3, 4] };
// console.log(eqObjects(cd, cd2));
// assertObjectsEqual(eqObjects(cd, cd2), false); // => false

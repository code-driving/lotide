// const assertEqual = require("./assertEqual");

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion failed: ${actual} !== ${expected}`);
  }
};

const head = function(arr) {
  let myArr = [...arr]
  if (myArr.length) {
    if (myArr.length === 1) {
      return myArr.join("");
    } else {
      return myArr.shift();
    }
  } else {
    return undefined;
  }
};

assertEqual(head([5, 6, 7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");


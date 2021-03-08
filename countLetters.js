// const assertEqual = require("./assertEqual");

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion failed: ${actual} !== ${expected}`);
  }
};

//use the replace method for the first time to remove spaces :) just to see how it works
//create an empty object
//loop through the string
//check if the object contains a property which corresponds to the character in the string.
//if not ==> create such property and add one to it as a value (first occurrence)
//if yes ==> increment the value by one
const countLetters = function(sentence) {
  const objOfLetters = {};
  for (let char of sentence.replace(/[^\w]/g, "")) {
    if (!Object.keys(objOfLetters).includes(char)) {
      objOfLetters[char] = 1;
    } else {
      objOfLetters[char]++;
    }
  }
  return objOfLetters;
};
// console.log(countLetters('LHL'));
// console.log(countLetters('Lighthouse Labs is awesome'));
assertEqual(countLetters('LHL'), { L: 2, H: 1 });


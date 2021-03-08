const assertEqual = require("./assertEqual");

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

module.exports = head;

// assertEqual(head([5, 6, 7]), 5);
// assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");


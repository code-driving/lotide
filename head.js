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



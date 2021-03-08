const assertEqual = require("./assertEqual");

const tail = function(arr) {
  if (arr.length) {
    if (arr.length === 1) {
      return arr;
    } else {
      return arr.slice(1);
    }
  } else {
    return [];
  }
};

module.exports = tail;

// const result = tail(["Hello", "Lighthouse", "Labs"]);
// assertEqual(result.length, 2); // ensure we get back the same number (the number of the length of the array and the second argument we passed to the function)
// assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
// assertEqual(result[1], "Labs"); // ensure second element is "Labs"

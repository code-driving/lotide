const flatten = function(arr) {
  let result = [];
  for (let char of arr) {
    if (Array.isArray(char)) {
      result.push(...char);
    } else {
      result.push(char);
    }
  }
  return result;
};


module.exports = flatten;

const takeUntil = function (array, callback) {
  let arr = [];
  for (let el of array) {
    if (callback(el)) {
      return arr;
    } else {
      arr.push(el);
    }
  }
  return arr;
};

module.exports = takeUntil;

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

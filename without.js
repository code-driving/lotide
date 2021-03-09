const without = function(source, itemsToRemove) {
  let updatedArr = [...source];
  for (let i = 0; i < updatedArr.length; i++) {
    for (j = 0; j < itemsToRemove.length; j++) {
      if (updatedArr[i] === itemsToRemove[j]) {
        updatedArr.splice(i, 1);
      }
    }
  }
  return updatedArr;
};

module.exports = without;

// const without = function(source, itemsToRemove) {
//   return source.filter(val => !itemsToRemove.includes(val))
// }

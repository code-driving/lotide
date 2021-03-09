const findKeyByValue = function(obj, val) {
  const entries = Object.entries(obj);
  for (const [key, value] of entries) {
    if (value === val) {
      return key;
    } 
  }
};
const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire",
};
console.log(findKeyByValue(bestTVShowsByGenre, "That '70s Show"));  

module.exports = findKeyByValue;

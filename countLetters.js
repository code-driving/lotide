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

module.exports = countLetters;

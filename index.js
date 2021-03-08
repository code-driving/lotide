const head = require("./head");
const tail = require("./tail");
const { isEven, middle } = require("./middle");
const countLetters = require("./countLetters");
const countOnly = require("./countOnly");
const findKey = require("./findKey");
const findKeyByValue = require("./findKeyByValue");
const flatten = require("./flatten");
const letterPositions = require("./letterPositions");
const map = require("./map");

module.exports = {
  head: head,
  tail: tail,
  middle: middle,
  isEven: isEven,
  countLetters: countLetters,
  countOnly: countOnly,
  findKey: findKey,
  findKeyByValue: findKeyByValue,
  flatten: flatten,
  letterPositions: letterPositions,
  map: map,
};

const assert = require("chai").assert;
const findKeyByValue = require("../findKeyByValue");

describe("#keyByValue", () => {
  it("returns drama for (bestTVShowsByGenre, 'The Wire')", () => {
    const bestTVShowsByGenre = {
      sci_fi: "The Expanse",
      comedy: "Brooklyn Nine-Nine",
      drama: "The Wire",
    };
    assert.deepNestedInclude(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
  });
});



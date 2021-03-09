const assert = require("chai").assert;
const map = require("../map");

describe("#map", () => {
  it("returns ['g', 'c', 't', 'm', 't'] for ['ground', 'control', 'to', 'major', 'tom']", () => {
    const words = ["ground", "control", "to", "major", "tom"];
    assert.deepEqual(
      map(words, (word) => word[0]),
      ["g", "c", "t", "m", "t"]
    );
  });
});

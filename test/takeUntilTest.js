const assert = require("chai").assert;
const takeUntil = require("../takeUntil");

describe("#takeUntil", () => {
  it("returns [1, 2, 5, 7, 2] for [1, 2, 5, 7, 2, -1, 2, 4, 5]", () => {
    const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
    assert.deepEqual(
      takeUntil(data1, (x) => x < 0),
      [1, 2, 5, 7, 2]
    );
  });

  it("returns ['smile'] for ['happy']", () => {
    const data2 = [
      "Ive",
      "been",
      "to",
      "Hollywood",
      ",",
      "I've",
      "been",
      "to",
      "Redwood",
    ];
    assert.deepEqual(
      takeUntil(data2, (x) => x === ","),
      ["Ive", "been", "to", "Hollywood"]
    );
  });
});

const assert = require("chai").assert;
const tail = require("../tail");

describe("#tail", () => {
  it("returns 2 for ['Hello', 'Lighthouse', 'Labs'] length", () => {
    const result = tail(["Hello", "Lighthouse", "Labs"]);
    assert.deepEqual(result.length, 2);
  });

  it("returns 'Lighthouse' for ['Hello', 'Lighthouse', 'Labs']", () => {
    const result = tail(["Hello", "Lighthouse", "Labs"]);
    assert.deepEqual(result[0], "Lighthouse");
  });

  it("returns 'Labs' for ['Hello', 'Lighthouse', 'Labs']", () => {
    const result = tail(["Hello", "Lighthouse", "Labs"]);
    assert.deepEqual(result[1], "Labs");
  });
});

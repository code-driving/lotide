const assert = require("chai").assert;
const { countOnly, result1 } = require("../countOnly");

describe("#countOnly", () => {
  it("returns 2 for result1['Jason'],", () => {
    assert.deepEqual(result1["Fang"], 2);
  });

  it("returns 1 for result1['Fang']", () => {
    assert.deepEqual(result1["Jason"], 1);
  });

  it("returns undefined for result1['Karima']", () => {
    assert.deepEqual(result1["Karima"], undefined);
  });

  it("returns undefined for result1['Agouhanna']", () => {
    assert.deepEqual(result1["Agouhanna"], undefined);
  });
});

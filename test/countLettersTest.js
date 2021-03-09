const assert = require("chai").assert;
const countLetters = require("../countLetters");

describe("#countLetters", () => {
  it("returns { L: 2, H: 1 } for 'LHL'", () => {
    assert.deepEqual(countLetters("LHL"), { L: 2, H: 1 });
  });
  
  it("returns { L: 2, i: 2, g: 1, h: 2, t: 1, o: 2, u: 1, s: 4, e: 3, a: 2, b: 1, w: 1, m: 1} for 'Lighthouse Labs is awesome'" , () => {
    const result = { L: 2, i: 2, g: 1, h: 2, t: 1, o: 2, u: 1, s: 4, e: 3,
a: 2, b: 1, w: 1, m: 1}
    assert.deepEqual(countLetters('Lighthouse Labs is awesome'), result)
  });
});

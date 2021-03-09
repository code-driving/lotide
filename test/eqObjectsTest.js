const assert = require("chai").assert;
const { eqObjects, eqArrays } = require("../eqObjects");

describe("#eqObjects", () => {
  it("returns true for ({ a: '1', b: '2' }, { b: '2', a: '1' })", () => {
    const ab = { a: "1", b: "2" };
    const ba = { b: "2", a: "1" };
    assert.deepEqual(eqObjects(ab, ba), true);
  });
  
  it("returns false for ({ a: '1', b: '2' }, { a: '1', b: '2', c: '3' })", () => {
    const ab = { a: "1", b: "2" };
    const abc = { a: "1", b: "2", c: "3" };
    assert.deepEqual(eqObjects(ab, abc), false)
  });
  
  it("returns true for ({ c: '1', d: ['2', 3] }, { d: ['2', 3], c: '1' }", () => {
    const cd = { c: "1", d: ["2", 3] };
    const dc = { d: ["2", 3], c: "1" };
    assert.deepEqual(eqObjects(cd, dc), true);
  });
  
  it("return true for ({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 })", () => {
    assert.deepEqual(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), true);
  });
  
  it("returns false for ({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }), false)", () => {
    assert.deepEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }), false);
  });
});

const chai = require('chai');
const assert = chai.assert;

const wordSearch = require('../wordsearch.js')

describe("#wordSearch()", function() {
  it("should return false if the FRANK is not present", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
      ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
      ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'FRANK')

    assert.isFalse(result);
  });
  
  it("should return true if the 241SHEEP! is present", function() {
    const result = wordSearch([
      ['2', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['4', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['1', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
      ['H', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
      ['E', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['E', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['P', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['!', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], '241SHEEP!')

    assert.isTrue(result);
  });

  it("should return false if the TANKER is not present", function() {
    const result = wordSearch(
      [], 'TANKER')

    assert.isFalse(result);
  });

  it("should return true if the SEINFELD is present", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
      ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
      ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'SEINFELD')

    assert.isTrue(result);
  });
});

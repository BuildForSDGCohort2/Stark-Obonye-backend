const { assert } = require('chai');

function add() {
  // eslint-disable-next-line prefer-rest-params
  return Array.prototype.slice.call(arguments).reduce((prev, curr) => prev + curr, 0);
}

describe('add()', () => {
  const tests = [
    { args: [1, 2], expected: 3 },
    { args: [1, 2, 3], expected: 6 },
    { args: [1, 2, 3, 4], expected: 10 }
  ];

  tests.forEach((test) => {
    it(`correctly adds ${test.args.length} args`, () => {
      // eslint-disable-next-line prefer-spread
      const res = add.apply(null, test.args);
      assert.equal(res, test.expected);
    });
  });
});

// test/test.js

const assert = require('assert');
const { myFunction } = require('./index');

describe('MyFunction', () => {
  it('should return "Hello, GitHub Actions!"', () => {
    const result = myFunction();
    assert.strictEqual(result, 'Hello, GitHub Actions!');
  });
});

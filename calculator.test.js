const {
  sum,
  subtract,
  multiply,
  divide,
  modulus,
  even,
  odd,
} = require("./calculator");

describe('sum', () => { 
  
  test('can add two small positive numbers', () => {
    expected = 5;
    actual = sum(2, 3);
    expect(actual).toBe(expected);
  });

  test('can add two large positive numbers', () => { 
    actual = sum(123, 500);
    expected = 623;
    expect(actual).toBe(expected);
  });

  test('can add two negative numbers', () => {
    actual = sum(-5, -10);
    expected = -15;
    expect(actual).toBe(expected);
  });

  test('can add zero', () => {
    actual = sum(13, 0);
    expected = 13;
    expect(actual).toBe(expected);
  });

});

describe('subtract', () => {

});

describe('multiply', () => {

});

describe('divide', () => {

});

describe('modulus', () => {

});

describe('even', () => {

});

describe('odd', () => {

});

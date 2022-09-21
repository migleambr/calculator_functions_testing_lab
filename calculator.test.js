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

  test('can substract two negative numbers', () => {
    actual = subtract(-5, -25);
    expected = 20;
    expect(actual).toBe(expected);
  }
  ); 

  test('can subract with one negative number', () => {
    actual = subtract(20, -5);
    expected = 25;
    expect(actual).toBe(expected);
  }
  );

});

describe('multiply', () => {

  test('can multiply zero', () => {
    actual = multiply(3, 0);
    expected = 0;
    expect(actual).toBe(expected);
  }
  );

  test('can multiply with one negative number', () => {
    actual = multiply(-7, 6);
    expected = -42;
    expect(actual).toBe(expected);
  }
  );

});

describe('divide', () => {

});

describe('modulus', () => {

});

describe('even', () => {

});

describe('odd', () => {

});

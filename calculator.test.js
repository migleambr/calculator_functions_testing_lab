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

  test('can divide two negative numbers', () => {
    actual = divide(-24, -6);
    expected = 4;
    expect(actual).toBe(expected);
  }
  );

  test('can divide two non-integers', () => {
    actual = divide(10.08, 2.4);
    expected = 4.2;
    expect(actual).toBe(expected);
  }
  );

});

describe('modulus', () => {

  test('can return modulus 0', () => {
    actual = modulus(10, 5);
    expected = 0;
    expect(actual).toBe(expected);
  }
  );

  test('can return modulus when one number is negative', () => {
    actual = modulus(-7, 2);
    expected = -1;
    expect(actual).toBe(expected);
  }
  );

});

describe('even', () => {

  test('can return true for even number', () => {
    actual = even(16);
    expect(actual).toBeTruthy();
  }
  );

  test('can return false for odd number', () => {
    actual = even(3);
    expect(actual).toBeFalsy();
  });

});

describe('odd', () => {

  test('can return true for odd number', () => {
    actual = odd(7);
    expect(actual).toBeTruthy();
  }
  );

  test('can return false for even number', () => {
    actual = odd(18);
    expect(actual).toBeFalsy();
  }
  );

});

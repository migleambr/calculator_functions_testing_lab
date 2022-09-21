const sum = function(a, b){
    return a + b;
};

const subtract = (a, b) => {
    return a - b;
};

const multiply = (a, b) => {
    return a * b;
};

const divide = (a, b) => {
    return a / b;
};

const modulus = (a, b) => {
    modulusNumber = a % b;
    return modulusNumber;
};

const even = a => {
    modulusNumber = modulus(a, 2);
    if (modulusNumber == 0) {
        return true;
    } else {
        return false;
    }
};

const odd = b => {
    modulusNumber = modulus(b, 2);
    if (modulusNumber != 0) {
        return true;
    } else {
        return false;
    }
};

module.exports = { 
    sum, 
    subtract, 
    multiply, 
    divide, 
    modulus, 
    even, 
    odd 
};

function addNumbers(a, b) {
  return a + b;
}

const addNumber = function (a, b) {
  return a + b;
};
const addNumbers = (a, b) => {
  return a + b;
};

const addNumbers = (a, b) => a + b;

function subtractNumbers(a, b) {
  return a - b;
}

function runCalculation(a, b) {
  const add = addNumbers(a, b);
  const sub = subtractNumbers(a, b);
  return [add, sub];
}

const math = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  multiply: (a, b) => a * b,
  devide: (a, b) => a / b,
};

const output = addNumbers(1, 2);
console.log(output);

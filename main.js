// function addNumbers(numA, numB) {
//   return numA + numB;
// }

// const addNumbers = function (numA, numB) {
//   return numA + numB;
// };

// const addNumbers = (numA, numB) => {
//   return numA + numB;
// };

// const addNumbers = numA => {
//   return numA + 2;
// };

// const addNumbers = (numA, numB) => numA + numB;

// const mathObj = {
//   add: (numA, numB) => numA + numB,
//   subtract: (numA, numB) => numA - numB,
//   multiply: (numA, numB) => numA * numB,
//   divide: (numA, numB) => numA / numB,
// };

// const result = addNumbers(1, 2);
// const resultSum = mathObj.add(1, 2);
// const resultSubtract = mathObj.subtract(1, 2);
// const resultMultiply = mathObj.multiply(1, 2);
// const resultDivide = mathObj.divide(1, 2);

// const randomNumber = Math.ceil(Math.random() * 6);
//
// function rollDie(sides = 6) {
//   return Math.ceil(Math.random() * sides);
// }

// const dieOne = rollDie();
// const dieTwo = rollDie(20);
// console.log(dieOne);
// console.log(dieTwo);

const numA = 1;

const addNumber = () => numA + numB;

const result = addNumber(2);
console.log(result);

console.log(numB); // <-- Zal een error geven aangezien numB buiten de scope valt.

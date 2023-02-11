const unaryOperations = [
  'squareRoot',
  'square',
  'cubeRoot',
  'cube',
  'reciprocal',
  'powerOfTen',
  'factorial',
  'signChange',
  'modulus',
  'result',
];

export default (operationName) => unaryOperations.includes(operationName);

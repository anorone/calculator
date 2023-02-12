const forbiddenResults = [
  NaN,
  Number.POSITIVE_INFINITY,
  Number.NEGATIVE_INFINITY,
];

export default (x, y) => {
  if (x === 0 && y === Number.POSITIVE_INFINITY) {
    throw new Error('Invalid operation');
  }

  const result = x ** y;

  if (forbiddenResults.includes(result)) {
    throw new Error('Invalid operation');
  }

  return result;
};

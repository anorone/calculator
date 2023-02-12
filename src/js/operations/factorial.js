const getFactorial = (x) => {
  if (x < 0) {
    throw new Error('Invalid operation');
  }

  if (x === 0) {
    return 1;
  }

  return x * getFactorial(x - 1);
};

export default getFactorial;

export default (x, y) => {
  if (y === 0) {
    throw new Error('Invalid operation');
  }

  return x / y;
};

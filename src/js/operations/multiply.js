export default (x, y) => {
  const product = x * y;

  if (Object.is(product, -0)) {
    return 0;
  }

  return product;
};

import getModulus from '../../../src/js/operations/modulus';

test('modulus', () => {
  expect(getModulus(-3)).toBe(3);
  expect(getModulus(5)).toBe(5);
  expect(getModulus(0)).toBe(0);
});

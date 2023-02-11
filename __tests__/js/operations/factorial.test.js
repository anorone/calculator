import getFactorial from '../../../src/js/operations/factorial';

test('factorial', () => {
  expect(getFactorial(5)).toBe(120);
  expect(getFactorial(3)).toBe(6);
  expect(getFactorial(1)).toBe(1);
  expect(getFactorial(0)).toBe(1);
  expect(() => getFactorial(-5)).toThrow('Invalid operation');
});

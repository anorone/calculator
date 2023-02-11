import multiply from '../../../src/js/operations/multiply';

test('multiplication', () => {
  expect(multiply(3, 4)).toBe(12);
  expect(multiply(-3, 5)).toBe(-15);
  expect(multiply(8, 0)).toBe(0);
  expect(multiply(-2, 0)).toBe(0);
});

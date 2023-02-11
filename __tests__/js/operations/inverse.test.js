import inverse from '../../../src/js/operations/inverse';

test('sign change', () => {
  expect(inverse(11)).toBe(-11);
  expect(inverse(-5)).toBe(5);
  expect(inverse(0)).toBe(0);
});

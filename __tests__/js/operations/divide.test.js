import divide from '../../../src/js/operations/divide';

test('division', () => {
  expect(divide(10, 2)).toBe(5);
  expect(divide(20, 10)).toBe(2);
  expect(divide(4, 4)).toBe(1);
  expect(divide(0, 3)).toBe(0);
  expect(() => divide(1, 0)).toThrow();
});

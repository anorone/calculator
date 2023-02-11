import calcPercent from '../../../src/js/operations/percent';

test('percentage', () => {
  expect(calcPercent(20, 100)).toBe(20);
  expect(calcPercent(10, 10)).toBe(1);
  expect(calcPercent(100, -5)).toBe(-5);
  expect(calcPercent(0, 100)).toBe(0);
  expect(calcPercent(50, 0)).toBe(0);
});

import add from '../../../src/js/operations/add';

test('addition', () => {
  expect(add(2, 2)).toBe(4);
  expect(add(3, 4)).toBe(7);
  expect(add(-10, 0)).toBe(-10);
  expect(add(0, -0)).toBe(0);
});

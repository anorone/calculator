import subtract from '../../../src/js/operations/subtract';

test('subtraction', () => {
  expect(subtract(5, 3)).toBe(2);
  expect(subtract(1, 6)).toBe(-5);
  expect(subtract(15, 0)).toBe(15);
  expect(subtract(0, 0)).toBe(0);
});

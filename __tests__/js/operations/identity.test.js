import identity from '../../../src/js/operations/identity';

test('idendity', () => {
  expect(identity(5)).toBe(5);
  expect(identity(-70)).toBe(-70);
  expect(identity(0)).toBe(0);
});

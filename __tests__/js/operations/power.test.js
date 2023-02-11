import pow from '../../../src/js/operations/power';

describe('exponentiation', () => {
  test('basic operations', () => {
    expect(pow(2, 8)).toBe(256);
    expect(pow(10, 4)).toBe(10000);
    expect(pow(-5, 2)).toBe(25);
    expect(pow(-4, 3)).toBe(-64);
    expect(pow(10, -2)).toBe(0.01);
    expect(pow(10, 0)).toBe(1);
    expect(pow(0, 3)).toBe(0);
    expect(pow(0, 0)).toBe(1);
  });

  test('root', () => {
    expect(pow(9, (1 / 2))).toBe(3);
    expect(pow(2, (1 / 2))).toBe(Math.SQRT2);
    expect(pow(27, (1 / 3))).toBe(3);
    expect(pow(1024, (1 / 10))).toBe(2);
    expect(pow(8, -(1 / 3))).toBe(0.5);
    expect(() => pow(-4, (1 / 2))).toThrow();
    expect(pow(0, (1 / 3))).toBe(0);
    expect(() => pow(4, (1 / 0))).toThrow();
    expect(() => pow(0, (1 / 0))).toThrow();
  });

  test('reciprocal', () => {
    expect(pow(2, -1)).toBe(0.5);
    expect(pow(10, -1)).toBe(0.1);
    expect(pow(-4, -1)).toBe(-0.25);
    expect(() => pow(0, -1)).toThrow();
  });
});

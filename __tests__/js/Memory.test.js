import Memory from '../../src/js/Memory';

let memory;

beforeEach(() => {
  memory = new Memory();
});

test('usual workflow', () => {
  memory.add(5);
  expect(memory.recall()).toBe(5);
  memory.subtract(7);
  expect(memory.recall()).toBe(-2);
  memory.add(3);
  expect(memory.recall()).toBe(1);
  memory.store(15);
  expect(memory.recall()).toBe(15);
});

test('value availability', () => {
  expect(memory.hasSavedValue()).toBe(false);
  memory.store(42);
  expect(memory.hasSavedValue()).toBe(true);
  memory.clear();
  expect(memory.hasSavedValue()).toBe(false);
  memory.add(0);
  expect(memory.hasSavedValue()).toBe(true);
  memory.add(3);
  memory.subtract(3);
  expect(memory.hasSavedValue()).toBe(true);
});

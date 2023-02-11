export default class Memory {
  #value;

  constructor(initialValue = null) {
    this.#value = initialValue;
  }

  get value() {
    return this.#value;
  }

  set value(newValue) {
    this.#value = newValue;
  }

  clear() {
    this.value = null;
  }

  recall() {
    return this.value;
  }

  store(value) {
    this.value = value;
  }

  add(value) {
    this.value += value;
  }

  subtract(value) {
    this.value -= value;
  }

  hasSavedValue() {
    return this.value !== null;
  }
}

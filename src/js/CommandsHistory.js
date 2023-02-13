export default class CommandsHistory {
  history = [];

  push(command) {
    this.history.push(command);
  }

  pop() {
    return this.history.pop();
  }

  clear() {
    this.history = [];
  }

  isEmpty() {
    return this.history.length === 0;
  }
}

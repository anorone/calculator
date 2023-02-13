import Command from './Command';
import getLast from '../utils/getLast';

const map = {
  storage: (memory, { operands }) => memory.store(getLast(operands)),
  subtraction: (memory, { operands }) => memory.subtract(getLast(operands)),
  addition: (memory, { operands }) => memory.add(getLast(operands)),
  reset: (memory) => memory.clear(),
  recall: (memory, { operands, operation }) => {
    if (!memory.hasSavedValue()) return;
    const indexToUpdate = operation ? 1 : 0;
    operands.splice(indexToUpdate, 1, memory.recall());
  },
};

class MemoizeCommand extends Command {
  execute() {
    const { memory, state } = this.reciever;
    map[this.param](memory, state);
  }
}

export default MemoizeCommand;

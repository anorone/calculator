import Command from './Command';

class InputCommand extends Command {
  execute() {
    if (this.reciever.hasErrors()) {
      return false;
    }

    this.saveBackup();
    const { operation, operands } = this.reciever.state;
    const indexToUpdate = operation ? 1 : 0;
    const value = operands[indexToUpdate] ?? '';
    const digits = String(value).split('');
    const updatedValue = Number(digits.concat(this.param).join(''));
    operands.splice(indexToUpdate, 1, updatedValue);
    return true;
  }
}

export default InputCommand;

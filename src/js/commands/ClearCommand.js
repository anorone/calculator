import Command from './Command';

const map = {
  all: (calculator) => calculator.clearAll(),
  entry: (calculator) => calculator.clearEntry(),
};

class ClearCommand extends Command {
  execute() {
    map[this.param](this.reciever);
  }
}

export default ClearCommand;

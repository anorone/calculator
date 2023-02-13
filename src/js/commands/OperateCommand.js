import Command from './Command';
import isUnaryOperation from '../utils/isUnary';

class OperateCommand extends Command {
  execute() {
    this.saveBackup();

    const calculator = this.reciever;
    const { operands } = calculator.state;

    if (operands.length > 1) {
      calculator.calculate();
    }

    calculator.state.operation = this.param;

    if (isUnaryOperation(this.param)) {
      calculator.calculate();
    }

    return true;
  }
}

export default OperateCommand;

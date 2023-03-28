import Calculator from './Calculator';
import InputCommand from './commands/InputCommand';
import OperateCommand from './commands/OperateCommand';
import MemoizeCommand from './commands/MemoizeCommand';
import ClearCommand from './commands/ClearCommand';
import render from './render';

const commandsByButtonType = {
  operand: InputCommand,
  operation: OperateCommand,
  memory: MemoizeCommand,
  clear: ClearCommand,
};

export default class App {
  calculator = new Calculator();

  scoreboardElement = null;

  render = render;

  handleClick = (e) => {
    const target = e.target.closest('.calculator__button');
    const { type, value } = target.dataset;
    const Command = commandsByButtonType[type];
    const command = new Command(value, this.calculator);
    this.executeCommand(command);
    this.render(this.calculator, this.scoreboardElement);
  };

  init() {
    this.scoreboardElement = document.querySelector('.calculator__scoreboard');
    const calculatorMenu = document.querySelector('.calculator__menu');
    calculatorMenu.addEventListener('click', this.handleClick);
    this.render(this.calculator, this.scoreboardElement);
  }

  executeCommand(command) {
    if (command.execute()) {
      this.calculator.history.push(command);
    }
  }
}

import Calculator from './Calculator';
import InputCommand from './commands/InputCommand';
import OperateCommand from './commands/OperateCommand';
import MemoizeCommand from './commands/MemoizeCommand';
import ClearCommand from './commands/ClearCommand';

const commandsByButtonType = {
  operand: InputCommand,
  operation: OperateCommand,
  memory: MemoizeCommand,
  clear: ClearCommand,
};

export default class App {
  calculator = new Calculator();

  scoreboardElement = null;

  handleClick = (e) => {
    const target = e.target.closest('.calculator__button');
    const { type, value } = target.dataset;
    const Command = commandsByButtonType[type];
    const command = new Command(value, this.calculator);
    this.executeCommand(command);
    this.render();
  };

  init() {
    this.scoreboardElement = document.querySelector('.calculator__scoreboard');
    const calculatorMenu = document.querySelector('.calculator__menu');
    calculatorMenu.addEventListener('click', this.handleClick);
    this.render();
  }

  executeCommand(command) {
    if (command.execute()) {
      this.calculator.history.push(command);
    }
  }

  render() {
    this.scoreboardElement.innerHTML = '';

    const { state } = this.calculator;

    if (state.memory.hasSavedValue()) {
      const memoryElement = document.createElement('span');
      memoryElement.classList.add('calculator__scoreboard-memory');
      this.scoreboardElement.appendChild(memoryElement);
    }

    const scoreElement = document.createElement('p');
    scoreElement.classList.add('calculator__scoreboard-score');

    if (state.errorMessage) {
      scoreElement.textContent = state.errorMessage;
      scoreElement.classList.add('calculator__scoreboard-error');
      this.scoreboardElement.appendChild(scoreElement);
      return;
    }

    const [x = '', y = ''] = state.operands;
    const sign = Calculator.signs[state.operation] || '';
    const score = `${x}${sign}${y}`;

    scoreElement.textContent = score;
    scoreElement.classList.add(
      score.length > 12 ? 'calculator__scoreboard-score_size_small' : null,
    );

    this.scoreboardElement.appendChild(scoreElement);
  }
}

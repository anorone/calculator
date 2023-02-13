import { cloneDeep } from 'lodash';
import Memory from './Memory';
import CommandsHistory from './CommandsHistory';
import operationsByType from './operations';

const initialState = {
  operation: '',
  operands: [0],
  errorMessage: '',
};

export default class Calculator {
  static signs = {
    division: '÷',
    multiplication: '×',
    subtraction: '-',
    addition: '+',
    yRootX: '√',
    xPowerY: '^',
    percentage: '%',
  };

  state = {
    ...cloneDeep(initialState),
    memory: new Memory(),
  };

  history = new CommandsHistory();

  calculate() {
    const { state } = this;
    try {
      const result = operationsByType[state.operation](...state.operands);
      state.operands.splice(0, 2, result);
      state.operation = '';
    } catch (err) {
      state.errorMessage = err.message;
    }
  }

  clearAll() {
    this.state = {
      ...this.state,
      ...cloneDeep(initialState),
    };
  }

  clearEntry() {
    const { operands } = this.state;
    if (operands.length > 1) {
      operands.length = 1;
    } else {
      this.clearAll();
    }
  }

  undo() {
    if (!this.history.isEmpty()) {
      const { backup } = this.history.pop();
      this.state = {
        ...this.state,
        ...backup,
      };
    }
  }
}

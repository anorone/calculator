import { cloneDeep } from 'lodash';

export default class Command {
  backup = null;

  constructor(param, reciever) {
    this.param = param;
    this.reciever = reciever;
  }

  saveBackup() {
    const { memory, ...state } = this.reciever.state;
    this.backup = cloneDeep(state);
  }
}

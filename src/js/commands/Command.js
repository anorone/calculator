import { cloneDeep } from 'lodash';

export default class Command {
  backup = null;

  constructor(param, reciever) {
    this.param = param;
    this.reciever = reciever;
  }

  saveBackup() {
    const { state } = this.reciever;
    this.backup = cloneDeep(state);
  }
}

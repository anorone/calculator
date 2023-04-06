import InputCommand from './InputCommand';
import OperateCommand from './OperateCommand';
import MemoizeCommand from './MemoizeCommand';
import ClearCommand from './ClearCommand';

const commandsByButtonType = {
  operand: InputCommand,
  operation: OperateCommand,
  memory: MemoizeCommand,
  clear: ClearCommand,
};

export default (type) => commandsByButtonType[type];

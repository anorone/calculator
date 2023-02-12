import add from './add';
import subtract from './subtract';
import multiply from './multiply';
import divide from './divide';
import inverse from './inverse';
import getModulus from './modulus';
import pow from './power';
import getFactorial from './factorial';
import calcPercent from './percent';
import identity from './identity';

export default {
  addition: add,
  subtraction: subtract,
  multiplication: multiply,
  division: divide,
  signChange: inverse,
  modulus: getModulus,
  square: (x) => pow(x, 2),
  cube: (x) => pow(x, 3),
  powerOfTen: (x) => pow(10, x),
  xPowerY: (x, y) => pow(x, y),
  squareRoot: (x) => pow(x, (1 / 2)),
  cubeRoot: (x) => pow(x, (1 / 3)),
  yRootX: (x, y) => pow(x, (1 / y)),
  reciprocal: (x) => pow(x, -1),
  factorial: getFactorial,
  percentage: calcPercent,
  result: identity,
};

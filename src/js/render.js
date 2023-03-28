/* eslint-disable no-param-reassign */

const render = (calculator, container) => {
  container.innerHTML = '';

  const { memory, state } = calculator;

  if (memory.hasSavedValue()) {
    const memoryElement = document.createElement('span');
    memoryElement.classList.add('calculator__scoreboard-memory');
    container.appendChild(memoryElement);
  }

  const scoreElement = document.createElement('p');
  scoreElement.classList.add('calculator__scoreboard-score');

  if (calculator.hasErrors()) {
    scoreElement.textContent = state.errorMessage;
    scoreElement.classList.add('calculator__scoreboard-error');
    container.appendChild(scoreElement);
    return;
  }

  const [x = ''] = state.operands;
  let [, y = ''] = state.operands;
  let sign = calculator.constructor.signs[state.operation] || '';

  const { addition, subtraction } = calculator.constructor.signs;

  if (y < 0 && (sign === addition || sign === subtraction)) {
    y = -y;
    sign = (sign === addition ? subtraction : addition);
  }

  const score = `${x}${sign}${y}`;

  scoreElement.textContent = score;
  scoreElement.classList.add(
    score.length > 12 ? 'calculator__scoreboard-score_size_small' : null,
  );

  container.appendChild(scoreElement);
};

export default render;

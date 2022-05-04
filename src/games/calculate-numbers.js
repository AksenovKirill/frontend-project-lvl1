import {getRandomElement, getRandomIntenger} from '../utils.js';
import {MIN_NUMBER, MAX_NUMBER, INTENGER_OPERATIONS, RULE_BRAIN_CALC} from '../const.js';
import {playGame} from '../index.js';

const getDataForGame = () => {
  const firstNumber = getRandomIntenger(MIN_NUMBER, MAX_NUMBER);
  const secondNumber = getRandomIntenger(MIN_NUMBER, MAX_NUMBER);
  const randomOperation = getRandomElement(INTENGER_OPERATIONS);
  const operationName = randomOperation.value;
  const correctAnswer = randomOperation.calculation(firstNumber, secondNumber);
  const question = `Question: ${firstNumber} ${operationName} ${secondNumber}`;
  return [question, correctAnswer];
};

export const playBrainProgression = () => {
  playGame(getDataForGame, RULE_BRAIN_CALC);
};

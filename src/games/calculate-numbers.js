import { getRandomElement, getRandomIntenger } from '../utils.js';
import { MIN_NUMBER, MAX_NUMBER, INTENGER_OPERATIONS } from '../const.js';
import { playGame } from '../index.js';

const RULE_GAME = 'What is the result of the expression?';

const getDataForGame = () => {
  const firstNumber = getRandomIntenger(MIN_NUMBER, MAX_NUMBER);
  const secondNumber = getRandomIntenger(MIN_NUMBER, MAX_NUMBER);
  const randomOperation = getRandomElement(INTENGER_OPERATIONS);
  const operationName = randomOperation.value;
  const correctAnswer = randomOperation.calculation(firstNumber, secondNumber);
  const question = `Question: ${firstNumber} ${operationName} ${secondNumber}`;
  return [question, correctAnswer];
};

export const playBrainCalculateGame = () => {
  playGame(getDataForGame, RULE_GAME);
};

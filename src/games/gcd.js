import {getRandomIntenger, getGcd} from '../utils.js';
import {MIN_NUMBER, MAX_NUMBER, RULE_BRAIN_GCD} from '../const.js';
import {playGame} from '../index.js';

const getDataForGame = () => {
  const firstNumber = getRandomIntenger(MIN_NUMBER, MAX_NUMBER);
  const secondNumber = getRandomIntenger(MIN_NUMBER, MAX_NUMBER);
  const correctAnswer = getGcd(firstNumber, secondNumber);
  const question = `Question: ${firstNumber} ${secondNumber}`;
  return [question, correctAnswer];
};

export const playBrainGcdGame = () => {
  playGame(getDataForGame, RULE_BRAIN_GCD);
};

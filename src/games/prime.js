import {getRandomIntenger, isPrimeNumber} from '../utils.js';
import {MIN_NUMBER, MAX_NUMBER, RULE_BRAIN_PRIME} from '../const.js';
import {playGame} from '../index.js';

const getDataForGame = () => {
  const number = getRandomIntenger(MIN_NUMBER, MAX_NUMBER);
  const correctAnswer = isPrimeNumber(number) ? 'yes' : 'no';
  const question = `Question: ${number}`;
  return [question, correctAnswer];
};

export const playBrainPrime = () => {
  playGame(getDataForGame, RULE_BRAIN_PRIME);
};

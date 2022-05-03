import {getRandomIntenger, isEvenNumber} from '../utils.js';
import {MIN_NUMBER, MAX_NUMBER, RULE_BRAIN_EVEN} from '../const.js';
import { playGame} from '../index.js';

const getDataForGame = () => {
  const randomNumber = getRandomIntenger(MIN_NUMBER, MAX_NUMBER);
  const correctAnswer = isEvenNumber(randomNumber) ? 'yes' : 'no';
  return [randomNumber, correctAnswer];
};

export const playBrainEvenGame = () => {
  playGame(getDataForGame, RULE_BRAIN_EVEN);
};

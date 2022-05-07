import {getRandomIntenger, isEven} from '../utils.js';
import {MIN_NUMBER, MAX_NUMBER} from '../const.js';
import { playGame} from '../index.js';

const RULE_GAME = 'Answer "yes" if the number is even, otherwise answer "no".';

const getDataForGame = () => {
  const randomNumber = getRandomIntenger(MIN_NUMBER, MAX_NUMBER);
  const correctAnswer = isEven(randomNumber) ? 'yes' : 'no';
  return [randomNumber, correctAnswer];
};

export const playBrainEvenGame = () => {
  playGame(getDataForGame, RULE_GAME);
};

import { getRandomIntenger, isEven } from '../utils.js';
import { MIN_NUMBER, MAX_NUMBER } from '../const.js';
import { playGame } from '../index.js';

const RULE_GAME = 'Answer "yes" if the number is even, otherwise answer "no".';

const getDataForGame = () => {
  const number = getRandomIntenger(MIN_NUMBER, MAX_NUMBER);
  const answer = isEven(number) ? 'yes' : 'no';
  const question = `Question: ${number}`;
  return [question, answer];
};

export const playBrainEvenGame = () => {
  playGame(getDataForGame, RULE_GAME);
};

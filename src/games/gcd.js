import { getRandomIntenger, GCD } from '../utils.js';
import { MIN_NUMBER, MAX_NUMBER } from '../const.js';
import playGame from '../index.js';

const RULE_GAME = 'Find the greatest common divisor of given numbers.';

const getDataForGame = () => {
  const firstNumber = getRandomIntenger(MIN_NUMBER, MAX_NUMBER);
  const secondNumber = getRandomIntenger(MIN_NUMBER, MAX_NUMBER);
  const answer = GCD(firstNumber, secondNumber);
  const question = `Question: ${firstNumber} ${secondNumber}`;
  return [question, answer];
};

const playBrainGCDGame = () => {
  playGame(getDataForGame, RULE_GAME);
};

export default playBrainGCDGame;

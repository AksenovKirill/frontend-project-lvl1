import { getRandomIntenger, GCD } from '../utils.js';
import { MIN_NUMBER, MAX_NUMBER } from '../const.js';
import playGame from '../play-game.js';

const RULE_GAME = 'Find the greatest common divisor of given numbers.';

const getDataForGame = () => {
  const firstNumber = getRandomIntenger(MIN_NUMBER, MAX_NUMBER);
  const secondNumber = getRandomIntenger(MIN_NUMBER, MAX_NUMBER);
  const answer = GCD(firstNumber, secondNumber);
  const question = `Question: ${firstNumber} ${secondNumber}`;
  return [question, answer];
};

const playGCD = () => {
  playGame(getDataForGame, RULE_GAME);
};

export default playGCD;

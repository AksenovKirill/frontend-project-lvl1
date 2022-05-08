import { getRandomIntenger, isPrime } from '../utils.js';
import { MIN_NUMBER, MAX_NUMBER } from '../const.js';
import playGame from '../index.js';

const RULE_GAME = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const getDataForGame = () => {
  const number = getRandomIntenger(MIN_NUMBER, MAX_NUMBER);
  const answer = isPrime(number) ? 'yes' : 'no';
  const question = `Question: ${number}`;
  return [question, answer];
};

const playPrime = () => {
  playGame(getDataForGame, RULE_GAME);
};

export default playPrime;

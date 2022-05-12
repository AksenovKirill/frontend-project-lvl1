import { getRandomIntenger, isPrime } from '../utils.js';
import { MIN_NUMBER, MAX_NUMBER, GAME_RULES } from '../const.js';
import playGame from '../play-game.js';

const getDataForGame = () => {
  const number = getRandomIntenger(MIN_NUMBER, MAX_NUMBER);
  const answer = isPrime(number) ? 'yes' : 'no';
  const question = `Question: ${number}`;

  return [question, answer];
};

const playPrime = () => {
  playGame(getDataForGame, GAME_RULES.prime);
};

export default playPrime;

import { getRandomIntenger, GCD } from '../utils.js';
import { MIN_NUMBER, MAX_NUMBER, GAME_RULES } from '../const.js';
import playGame from '../play-game.js';

const getDataForGame = () => {
  const firstNumber = getRandomIntenger(MIN_NUMBER, MAX_NUMBER);
  const secondNumber = getRandomIntenger(MIN_NUMBER, MAX_NUMBER);
  const answer = GCD(firstNumber, secondNumber);
  const question = `Question: ${firstNumber} ${secondNumber}`;
  console.log(answer);
  return [question, answer];
};

const playGCD = () => {
  playGame(getDataForGame, GAME_RULES.gcd);
};

export default playGCD;

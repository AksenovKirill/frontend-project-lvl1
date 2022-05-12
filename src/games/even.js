import { getRandomIntenger, isEven } from '../utils.js';
import { MIN_NUMBER, MAX_NUMBER, GAME_RULES } from '../const.js';
import playGame from '../play-game.js';

const getDataForGame = () => {
  const number = getRandomIntenger(MIN_NUMBER, MAX_NUMBER);
  const answer = isEven(number) ? 'yes' : 'no';
  const question = `Question: ${number}`;

  return [question, answer];
};

const playEven = () => {
  playGame(getDataForGame, GAME_RULES.even);
};

export default playEven;

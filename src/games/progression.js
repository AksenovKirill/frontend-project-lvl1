import { getRandomIntenger } from '../utils.js';
import { MIN_NUMBER, MAX_NUMBER, GAME_RULES } from '../const.js';
import playGame from '../play-game.js';

const MIN_POSITION = 1;
const MAX_POSITION = 9;
const MIN_LENGTH = 5;
const MAX_LENGTH = 10;

const getDataForGame = () => {
  const number = getRandomIntenger(MIN_NUMBER, MAX_NUMBER);
  const step = getRandomIntenger(MIN_NUMBER, MAX_NUMBER);
  const position = getRandomIntenger(MIN_POSITION, MAX_POSITION);
  const progressionLength = getRandomIntenger(MIN_LENGTH, MAX_LENGTH);
  let reducer = number;

  const progression = Array.from({ length: progressionLength }).map(
    (_, index) => {
      if (index !== 0) {
        reducer += step;
      }
      return reducer;
    },
  );

  const answer = progression.splice(getRandomIntenger(0, position), 1, '..');
  const question = `Question: ${progression.join(' ')}`;
  return [question, answer];
};

const playProgression = () => {
  playGame(getDataForGame, GAME_RULES.progression);
};

export default playProgression;

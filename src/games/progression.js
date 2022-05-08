import {getRandomIntenger} from '../utils.js';
import {MIN_NUMBER, MAX_NUMBER} from '../const.js';
import {playGame} from '../index.js';

const MIN_POSITION = 0;
const MAX_POSITION = 9;
const MIN_LENGTH = 5;
const MAX_LENGTH = 10;
const RULE_GAME = 'What number is missing in the progression?';

const getDataForGame = () => {
  const number = getRandomIntenger(MIN_NUMBER, MAX_NUMBER);
  const answer = getRandomIntenger(MIN_NUMBER, MAX_NUMBER);
  const position = getRandomIntenger(MIN_POSITION, MAX_POSITION);
  const progressionLength = getRandomIntenger(MIN_LENGTH, MAX_LENGTH);
  const progression = [number];
  let result = number;

  for (let i = 1; i <= progressionLength; i++) {
    result += answer;
    progression.push(result);
  }

  progression.splice(position, 1, '..');
  const question = `Question: ${progression.join(' ')}`;
  return [question, answer];
};

export const playBrainProgression = () => {
  playGame(getDataForGame, RULE_GAME);
};

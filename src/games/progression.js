import {getRandomIntenger} from '../utils.js';
import {MIN_NUMBER, MAX_NUMBER} from '../const.js';
import {playGame} from '../index.js';

const MIN_POSITION = 1;
const MAX_POSITION = 10;
const MIN_LENGTH = 5;
const MAX_LENGTH = 10;
const RULE_GAME = 'What number is missing in the progression?';

const getDataForGame = () => {
  const answer = getRandomIntenger(MIN_NUMBER, MAX_NUMBER);
  const position = getRandomIntenger(MIN_POSITION, MAX_POSITION);
  const progressionLength = getRandomIntenger(MIN_LENGTH, MAX_LENGTH);
  const progression = Array.from({length: progressionLength}, (param, index) => (index + 1) * answer);
  
  progression.splice(position, 1, '..');
  const question = `Question: ${progression.join(' ')}`;
  return [question, answer];
};

export const playBrainProgression = () => {
  playGame(getDataForGame, RULE_GAME);
};

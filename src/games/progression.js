import {getRandomIntenger} from '../utils.js';
import {MIN_NUMBER, MAX_NUMBER, RULE_BRAIN_PROGRESSION, MAX_POSITION, MIN_LENGTH, MAX_LENGTH} from '../const.js';
import {playGame} from '../index.js';

const getDataForGame = () => {
  const firstNumber = getRandomIntenger(MIN_NUMBER, MAX_NUMBER);
  const secondNumber = getRandomIntenger(MIN_NUMBER, MAX_NUMBER);
  const position = getRandomIntenger(MIN_NUMBER, MAX_POSITION);
  const progressionLength = getRandomIntenger(MIN_LENGTH, MAX_LENGTH);
  const progression = [firstNumber];
  let result = firstNumber;

  for(let i = 1; i <= progressionLength; i++) {
    result += secondNumber;
    progression.push(result);
  }
  progression.splice(position, 1, '..');

  const question = `Question: ${progression.join(' ')}`;
  return [question, secondNumber];
};

export const playBrainProgression = () => {
  playGame(getDataForGame, RULE_BRAIN_PROGRESSION);
};

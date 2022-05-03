import readlineSync from 'readline-sync';
import {getRandomIntenger, isEvenNumber} from '../utils.js';
import {MIN_NUMBER, MAX_NUMBER, RULE_BRAIN_EVEN, ROUNDS_IN_BRAIN_EVEN} from '../const.js';

const startGame = () => {
  const randomNumber = getRandomIntenger(MIN_NUMBER, MAX_NUMBER);
  const correctAnswer = isEvenNumber(randomNumber) ? 'yes' : 'no';
  return [randomNumber, correctAnswer];
};

export const playBrainEven = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(RULE_BRAIN_EVEN);

  for (let i = 1; i <= ROUNDS_IN_BRAIN_EVEN; i++) {
    const [randomNumber, correctAnswer] = startGame();
    console.log(`Question: ${randomNumber}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer !== correctAnswer) {
      console.log(
        `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`,
      );
      console.log(`Let's try again, ${userName}!`);
      break;
    }
    console.log('Correct!');
    if (i === ROUNDS_IN_BRAIN_EVEN) {
      console.log(`Congratulations, ${userName}!`);
    }
  }
};

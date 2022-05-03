import readlineSync from 'readline-sync';
import {ROUNDS} from './const.js';

export const playGame = (game, rule) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(rule)
  for (let i = 1; i <= ROUNDS; i++) {
    const [question, correctAnswer] = game();
   
    console.log(question)
    const userAnswer = readlineSync.question('Your answer: ');
    if (String(userAnswer) !== String(correctAnswer)) {
      console.log(
        `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`,
      );
      console.log(`Let's try again, ${userName}!`);
      break;
    }
    console.log('Correct!');
    if (i === ROUNDS) {
      console.log(`Congratulations, ${userName}!`);
    }
  }
};

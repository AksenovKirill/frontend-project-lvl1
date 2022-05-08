import readlineSync from 'readline-sync';
import { GAME_ROUNDS } from './const.js';

const playGame = (game, rule) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(rule);

  for (let i = 1; i <= GAME_ROUNDS; i + 1) {
    const [question, correctAnswer] = game();

    console.log(question);
    const userAnswer = readlineSync.question('Your answer: ');
    if (String(userAnswer).toUpperCase() !== String(correctAnswer).toUpperCase()) {
      console.log(
        `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`,
      );
      console.log(`Let's try again, ${userName}!`);
      break;
    }
    console.log('Correct!');
    if (i === GAME_ROUNDS) {
      console.log(`Congratulations, ${userName}!`);
    }
  }
};

export default playGame;

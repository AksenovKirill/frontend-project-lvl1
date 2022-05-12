export const MIN_NUMBER = 0;
export const MAX_NUMBER = 100;
export const GAME_ROUNDS = 3;

export const GAME_RULES = {
  even: '"yes" if the number is even, otherwise answer "no"',
  calc: 'What is the result of the expression?',
  gcd: 'Find the greatest common divisor of given numbers.',
  prime: '"yes" if given number is prime. Otherwise answer "no"',
  progression: 'What number is missing in the progression?',
};

export const INTENGER_OPERATIONS = [
  {
    value: '+',
    calculation(a, b) {
      return a + b;
    },
  },
  {
    value: '-',
    calculation(a, b) {
      return a - b;
    },
  },
  {
    value: '*',
    calculation(a, b) {
      return a * b;
    },
  },
];

export const ROUNDS = 3;
export const MIN_NUMBER = 0;
export const MAX_NUMBER = 100;
export const MAX_POSITION = 9;
export const MIN_LENGTH = 5;
export const MAX_LENGTH = 10;
export const RULE_BRAIN_EVEN = 'Answer "yes" if the number is even, otherwise answer "no".';
export const RULE_BRAIN_CALC = 'What is the result of the expression?';
export const RULE_BRAIN_GCD = 'Find the greatest common divisor of given numbers.';
export const RULE_BRAIN_PROGRESSION = 'What number is missing in the progression?';

export const INTENGER_OPERATIONS = [
    {
      value: '+',
      calculation: function (a, b) {
        return a + b;
      },
    },
    {
      value: '-',
      calculation: function (a, b) {
        return a - b;
      },
    },
    {
      value: '*',
      calculation: function (a, b) {
        return a * b;
      },
    },
  ];

export const GAME_ROUNDS = 3;
export const MIN_NUMBER = 0;
export const MAX_NUMBER = 100;

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

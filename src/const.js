export const MIN_NUMBER = 0;
export const MAX_NUMBER = 100;

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

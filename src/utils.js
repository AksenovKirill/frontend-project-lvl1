export const getRandomIntenger = (min, max) =>
  Math.floor(Math.random() * (max - min)) + min + 1;

export const getRandomElement = (array) =>
  array[Math.floor(Math.random() * array.length)];

export const isEvenNumber = (number) => number % 2 === 0;

export const isPrimeNumber = (number) => {
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return number > 1;
};

export const getGcd = (first, second) => {
  if (!second) {
    return first;
  }
  return getGcd(second, first % second);
};

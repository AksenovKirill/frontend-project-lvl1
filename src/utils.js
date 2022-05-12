export const getRandomIntenger = (min, max) => Math.floor(Math.random() * (max - min)) + min + 1;

export const getRandomElement = (array) => array[Math.floor(Math.random() * array.length)];

export const isEven = (number) => number % 2 === 0;

export const isPrime = (number) => {
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return number > 1;
};

export const GCD = (first, second) => {
  if (!second) {
    return first;
  }
  return GCD(second, first % second);
};

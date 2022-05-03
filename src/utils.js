export const getRandomIntenger = (min, max) =>
  Math.floor(Math.random() * (max - min)) + min + 1;

export const getRandomElement = (array) =>
  array[Math.floor(Math.random() * array.length)];

export const isEvenNumber = (number) => number % 2 === 0;

export const getGcd = (first, second) => {
    if (!second) {
        return first;
    }
    return getGcd(second, first % second);
};


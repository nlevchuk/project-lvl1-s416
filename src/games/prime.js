import createNewGame from '..';
import randomNumber from '../utils';

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }
  const lastDivisor = Math.floor(Math.sqrt(number));
  for (let i = 2; i <= lastDivisor; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};
const correctAnswer = number => (isPrime(number) ? 'yes' : 'no');

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const dataGenerator = () => {
  const number = randomNumber(1, 500);
  const question = `${number}`;
  const answer = `${correctAnswer(number)}`;
  return (message) => {
    switch (message) {
      case 'question':
        return question;
      case 'answer':
        return answer;
      default:
        throw new Error('Unknown message');
    }
  };
};

export default createNewGame(description, dataGenerator);

import createNewGame from '..';
import randomNumber from '../utils';

const findGcd = (firstNumber, secondNumber) => {
  const greater = Math.max(firstNumber, secondNumber);
  const lower = Math.min(firstNumber, secondNumber);
  const gcd = (dividend, divider) => {
    if (divider === 0) {
      return dividend;
    }
    return gcd(divider, dividend % divider);
  };
  return gcd(greater, lower);
};

const description = 'Find the greatest common divisor of given numbers.';
const dataGenerator = () => {
  const firstNumber = randomNumber(1, 100);
  const secondNumber = randomNumber(1, 100);
  const question = `${firstNumber} ${secondNumber}`;
  const answer = `${findGcd(firstNumber, secondNumber)}`;
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

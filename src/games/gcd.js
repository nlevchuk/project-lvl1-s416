import createNewGame from '../game';
import { randomNumberFromHundreds } from '../random-numbers';

const orderedNumbers = (first, second) => {
  if (first > second) {
    return [first, second];
  }
  return [second, first];
};

const correctAnswer = ({ firstNumber, secondNumber }) => {
  const [greater, lower] = orderedNumbers(firstNumber, secondNumber);
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
  const firstNumber = randomNumberFromHundreds();
  const secondNumber = randomNumberFromHundreds();
  const question = `${firstNumber} ${secondNumber}`;
  const answer = `${correctAnswer({ firstNumber, secondNumber })}`;
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

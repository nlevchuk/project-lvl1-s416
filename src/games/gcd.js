import createNewGame from '../game';
import randomNumber from '../random-number';

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

const rule = 'Find the greatest common divisor of given numbers.';
const newRound = () => {
  const firstNumber = randomNumber();
  const secondNumber = randomNumber();
  return (message) => {
    switch (message) {
      case 'question':
        return (`${firstNumber} ${secondNumber}`);
      case 'answer':
        return (`${correctAnswer({ firstNumber, secondNumber })}`);
      default:
        throw new Error('Unknown message');
    }
  };
};

export default createNewGame({ rule, newRound });

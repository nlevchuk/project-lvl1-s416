import createNewGame from '../game';
import randomNumber from '../random-number';

const operators = '+-*';
const correctAnswer = ({ firstOperand, secondOperand, operator }) => {
  switch (operator) {
    case '+':
      return firstOperand + secondOperand;
    case '-':
      return firstOperand - secondOperand;
    case '*':
      return firstOperand * secondOperand;
    default:
      throw new Error('Unknown operator');
  }
};

const rule = 'What is the result of the expression?';
const newRound = () => {
  const firstOperand = randomNumber();
  const secondOperand = randomNumber();
  const operator = operators[Math.floor(Math.random() * operators.length)];
  return (message) => {
    switch (message) {
      case 'question':
        return (`${firstOperand} ${operator} ${secondOperand}`);
      case 'answer':
        return (`${correctAnswer({ firstOperand, secondOperand, operator })}`);
      default:
        throw new Error('Unknown message');
    }
  };
};

export default createNewGame({ rule, newRound });

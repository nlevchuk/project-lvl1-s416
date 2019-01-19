import createNewGame from '../game';
import { randomNumberFromHundreds } from '../random-numbers';

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
  const firstOperand = randomNumberFromHundreds();
  const secondOperand = randomNumberFromHundreds();
  const operator = operators[Math.floor(Math.random() * operators.length)];
  const question = `${firstOperand} ${operator} ${secondOperand}`;
  const answer = `${correctAnswer({ firstOperand, secondOperand, operator })}`;
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

export default createNewGame({ rule, newRound });

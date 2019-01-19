import createNewGame from '../game';
import randomNumber from '../utils';

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

const description = 'What is the result of the expression?';
const dataGenerator = () => {
  const firstOperand = randomNumber(1, 100);
  const secondOperand = randomNumber(1, 100);
  const operator = operators[randomNumber(0, operators.length - 1)];
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

export default createNewGame(description, dataGenerator);

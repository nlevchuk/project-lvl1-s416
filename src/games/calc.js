import createNewGame from '../game';
import randomNumber from '../random-number';

const operators = '+-*';
const correctAnswer = ({ firstOperand, lastOperand, operator }) => {
  switch (operator) {
    case '+':
      return firstOperand + lastOperand;
    case '-':
      return firstOperand - lastOperand;
    case '*':
      return firstOperand * lastOperand;
    default:
      throw new Error('Unknown operator');
  }
};

const game = createNewGame;
game.rule = 'What is the result of the expression?';

game.newQuestion = () => ({
  firstOperand: randomNumber(),
  lastOperand: randomNumber(),
  operator: operators[Math.floor(Math.random() * operators.length)],
  toString() {
    return (`${this.firstOperand} ${this.operator} ${this.lastOperand}`);
  },
});

game.getAnswer = question => ({
  isEqual(userAnswer) {
    return this.toString() === userAnswer;
  },
  toString() {
    return (`${correctAnswer(question)}`);
  },
});

export default game;

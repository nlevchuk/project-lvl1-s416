import createNewGame from '../game';
import randomNumber from '../random-number';

const isEven = num => num % 2 === 0;
const correctAnswer = ({ number }) => (isEven(number) ? 'yes' : 'no');

const game = createNewGame;
game.rule = 'Answer "yes" if number even otherwise answer "no".';

game.newQuestion = () => ({
  number: randomNumber(),
  toString() {
    return (`${this.number}`);
  },
});

game.getAnswer = question => ({
  isEqual(userAnswer) {
    return this.toString() === userAnswer;
  },
  toString() {
    return correctAnswer(question);
  },
});

export default game;

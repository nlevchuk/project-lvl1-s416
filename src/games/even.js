import createNewGame from '../game';
import randomNumber from '../random-number';

const isEven = num => num % 2 === 0;
const correctAnswer = question => (isEven(question) ? 'yes' : 'no');

const rule = 'Answer "yes" if number even otherwise answer "no".';
const newRound = () => {
  const question = randomNumber();
  return (message) => {
    switch (message) {
      case 'question':
        return (`${question}`);
      case 'answer':
        return (`${correctAnswer(question)}`);
      default:
        throw new Error('Unknown message');
    }
  };
};

export default createNewGame({ rule, newRound });

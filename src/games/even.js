import createNewGame from '../game';
import randomNumber from '../utils';

const isEven = num => num % 2 === 0;
const correctAnswer = number => (isEven(number) ? 'yes' : 'no');

const description = 'Answer "yes" if number even otherwise answer "no".';
const dataGenerator = () => {
  const number = randomNumber(1, 100);
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

import { createNewGame } from '..';
import randomNumber from '../utils';

const progressionLength = 10;
const progressionCalc = (start, diff) => n => start + diff * (n - 1);

const description = 'What number is missing in the progression?';
const dataGenerator = () => {
  const startNumber = randomNumber(1, 100);
  const difference = randomNumber(1, 100);
  const missingIndex = randomNumber(1, 10);
  const progression = progressionCalc(startNumber, difference);
  let question = '';
  for (let i = 1; i <= progressionLength; i += 1) {
    const currentNumber = (i === missingIndex) ? '..' : progression(i);
    question = question.concat(`${currentNumber} `);
  }
  question = question.trim();
  const answer = `${progression(missingIndex)}`;
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

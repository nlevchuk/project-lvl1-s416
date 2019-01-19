import createNewGame from '../game';
import { randomNumberFromHundreds, randomNumberFromTens } from '../random-numbers';

const progressionLength = 10;
const progressionCalc = (start, diff) => n => start + diff * (n - 1);

const rule = 'What number is missing in the progression?';
const newRound = () => {
  const startNumber = randomNumberFromHundreds();
  const difference = randomNumberFromHundreds();
  const missingIndex = randomNumberFromTens();
  const progression = progressionCalc(startNumber, difference);
  let question = '';
  for (let i = 1; i <= progressionLength; i += 1) {
    const currentNumber = (i === missingIndex) ? '..' : progression(i);
    question = question.concat(`${currentNumber} `);
  }
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

export default createNewGame({ rule, newRound });

import readlineSync from 'readline-sync';

const evenGame = () => {
  console.log('\nWelcome to the Brain Games!');
  console.log('Answer "yes" if number even otherwise answer "no".');

  const userName = readlineSync.question('\nMay I have your name? ');
  console.log(`Hello, ${userName}!\n`);

  let questionsCount = 3;

  while (questionsCount > 0) {
    const digit = Math.floor(Math.random() * 100);
    const correctAnswer = (digit % 2 === 0) ? 'yes' : 'no';

    console.log(`Question: ${digit}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer !== correctAnswer) {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".\nLet's try again, ${userName}!`);
      break;
    }

    console.log('Correct!');
    questionsCount -= 1;
  }

  if (questionsCount === 0) console.log(`Congratulations, ${userName}!`);
};

export default evenGame;

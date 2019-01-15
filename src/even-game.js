import readlineSync from 'readline-sync';

const isEven = num => num % 2 === 0;

const getQuestionAndAnswer = () => {
  const question = Math.floor(Math.random() * 100);
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return { question, correctAnswer };
};

const evenGame = () => {
  console.log('\nWelcome to the Brain Games!');
  console.log('Answer "yes" if number even otherwise answer "no".');

  const userName = readlineSync.question('\nMay I have your name? ');
  console.log(`Hello, ${userName}!\n`);

  const questionsCount = 3;

  for (let i = 0; i < questionsCount; i += 1) {
    const { question, correctAnswer } = getQuestionAndAnswer();

    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer !== correctAnswer) {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }

    console.log('Correct!');
  }

  console.log(`Congratulations, ${userName}!`);
};

export default evenGame;

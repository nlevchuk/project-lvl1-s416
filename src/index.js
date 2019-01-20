import readlineSync from 'readline-sync';

const questionsCount = 3;

const getQuestion = round => round('question');
const getAnswer = round => round('answer');

const createNewGame = (description, dataGenerator) => () => {
  console.log('\nWelcome to the Brain Games!');
  console.log(description);

  const userName = readlineSync.question('\nMay I have your name? ');
  console.log(`Hello, ${userName}!\n`);

  for (let i = 0; i < questionsCount; i += 1) {
    const round = dataGenerator();
    const question = getQuestion(round);
    const answer = getAnswer(round);

    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer !== answer) {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${answer}".`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }

  console.log(`Congratulations, ${userName}!`);
};

export default createNewGame;

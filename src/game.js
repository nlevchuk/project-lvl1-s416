import readlineSync from 'readline-sync';

const createNewGame = {
  questionsCount: 3,

  start() {
    console.log('\nWelcome to the Brain Games!');
    console.log(this.rule);

    const userName = readlineSync.question('\nMay I have your name? ');
    console.log(`Hello, ${userName}!\n`);

    for (let i = 0; i < this.questionsCount; i += 1) {
      const question = this.newQuestion();
      const answer = this.getAnswer(question);

      console.log(`Question: ${question.toString()}`);
      const userAnswer = readlineSync.question('Your answer: ');

      if (!answer.isEqual(userAnswer)) {
        console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${answer.toString()}".`);
        console.log(`Let's try again, ${userName}!`);
        return;
      }
      console.log('Correct!');
    }

    console.log(`Congratulations, ${userName}!`);
  },
};

export default createNewGame;

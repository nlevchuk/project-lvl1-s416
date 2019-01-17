import readlineSync from 'readline-sync';

const Game = {
  questionsCount: 3,

  start() {
    console.log('\nWelcome to the Brain Games!');
    console.log(this.rule);

    const userName = readlineSync.question('\nMay I have your name? ');
    console.log(`Hello, ${userName}!\n`);

    for (let i = 0; i < this.questionsCount; i += 1) {
      const question = this.getQuestion();
      const correctAnswer = this.getAnswer(question);

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
  },
};

export default Game;

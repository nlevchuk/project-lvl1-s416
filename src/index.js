import readlineSync from 'readline-sync';

const start = () => {
  console.log('Welcome to the Brain Games!');

  const userName = readlineSync.question('\nMay I have your name? ');
  console.log(`Hello, ${userName}!`);
};

export default start;

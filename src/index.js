import readlineSync from 'readline-sync';

const outputMessage = (message) => {
  console.log(message);
};

const start = () => {
  outputMessage('Welcome to the Brain Games!');

  const userName = readlineSync.question('\nMay I have your name? ');
  outputMessage(`Hello, ${userName}!`);
};

export default start;

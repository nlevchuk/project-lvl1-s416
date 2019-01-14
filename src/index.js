import readlineSync from 'readline-sync';

/* eslint-disable no-console */
const outputMessage = (message) => {
  console.log(message);
};
/* eslint-enable no-console */

const start = () => {
  outputMessage('Welcome to the Brain Games!');

  const userName = readlineSync.question('\nMay I have your name? ');
  outputMessage(`Hello, ${userName}!`);
};

export default start;

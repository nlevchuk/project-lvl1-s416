import Game from '../game';

const isEven = num => num % 2 === 0;

const EvenGame = Game;
EvenGame.rule = 'Answer "yes" if number even otherwise answer "no".';
EvenGame.getQuestion = () => Math.floor(Math.random() * 100);
EvenGame.getAnswer = question => (isEven(question) ? 'yes' : 'no');

export default EvenGame;

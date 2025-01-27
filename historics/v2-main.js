import "./style.css"
import { Questions } from "../questions";

const app = document.querySelector('#app');

const startButton =  document.querySelector('#start');
let i = 0;

startButton.addEventListener('click', () => {

  const question = document.querySelector("#question") ?? document.createElement('p');
  question.id = "question";
  app.className = "adding"
  question.innerText = Questions[i % Questions.length].question;
  app.insertBefore(question, startButton);

  i++;
});

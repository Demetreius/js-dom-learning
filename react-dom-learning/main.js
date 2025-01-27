import "./style.css"
import { Questions } from "../questions";

const app = document.querySelector('#app');

const startButton =  document.querySelector('#start');

startButton.addEventListener('click', startQuizz);

const TIMEOUT = 4000;

function startQuizz(event){

  let currentQuestion = 0;
  let score = 0;

  displayQuestion(currentQuestion);

  function clean(){
    while(app.firstElementChild){
      app.firstElementChild.remove();
    }
    const progress = getProgressBar(Questions.length, currentQuestion);
    app.appendChild(progress);
  }

  function displayQuestion(index){

    clean();
    const toBeDisplayedQuestion = Questions[index];
  
    if(!toBeDisplayedQuestion){
       // Quizz finished...
       displayFinishMessage();
       return;
    }
  
    const title = getTitleElement(toBeDisplayedQuestion.question);
    app.appendChild(title);
    const answersDiv = createAnswers(toBeDisplayedQuestion.answers);
    app.appendChild(answersDiv);
    const submitBtn = getSubmitBtn();
    submitBtn.addEventListener('click', submit);
    app.appendChild(submitBtn);
  }

  function displayNextQuestionButton(callback){

    let remainingTimeout = TIMEOUT;

    app.querySelector("button").remove();

    const getBtnText = () => {
      return `Next (${remainingTimeout / 1000}s)`;
    }

    const nextBtn = document.createElement("button");
    nextBtn.innerText = getBtnText();

    app.appendChild(nextBtn);

    const interval = setInterval(() => {      
      remainingTimeout -= 1000;
      nextBtn.innerText = getBtnText();
    }, 1000);

    const timeout = setTimeout(() => {
      handleNextQuestion();
    }, TIMEOUT);

    const handleNextQuestion =  () => {
      currentQuestion++;
      clearInterval(interval);
      clearTimeout(timeout);
      callback();
    }


    nextBtn.addEventListener('click', () => {
      handleNextQuestion();
    })
  }

  function createAnswers(answers){
      const answersDiv = document.createElement('div');
      answersDiv.classList.add("answers");

      for(const answer of answers){
        const label = getAnswerElement(answer);
        answersDiv.appendChild(label);
      }
      return answersDiv;
  }

  function displayFinishMessage(){
    const h1 = document.createElement("h1");
    h1.innerText = "Bravo, tu as terminé le quizz !";
    const p = document.createElement("h2");
    p.innerText = `tu as eu ${score} sur ${Questions.length} point${score > 1 ? 's' : ''}`;

    app.appendChild(h1);
    app.appendChild(p);
  }

  function submit(){

    const selectedAnswer = app.querySelector('input[name="answer"]:checked');
    
    disableAllAnswers();
   
    const value = selectedAnswer.value;
    const question = Questions[currentQuestion];
    const isCorrect = question.correct === value;

    if(isCorrect){
      score ++;
    }
    console.log(score);
    showFeedBack(isCorrect, question.correct, value);

    displayNextQuestionButton( () => {
      displayQuestion(currentQuestion);
    });

    const feedback = getFeedbackMessage(isCorrect, question.correct);
    app.appendChild(feedback);

    return isCorrect;
  }
}


function getTitleElement(text){
  const title = document.createElement("h3");
  title.innerText = text;

  return title;
}

function formatId(text){
  return text.replaceAll(" ", "-").toLowerCase();
}

function getAnswerElement(text){
  const label = document.createElement('label');
  label.innerText = text;
  const input = document.createElement('input');
  const id = formatId(text);
  input.id = id;
  label.htmlFor = id;
  input.setAttribute("type", "radio");
  input.setAttribute("name", "answer");
  input.setAttribute("value", text);
  label.appendChild(input);

  return label;
}

function getSubmitBtn(){
  const submitBtn = document.createElement("button");
  submitBtn.innerText = "Submit";
  return submitBtn;
}

function showFeedBack(isCorrect, correct, answer){
  const correctAnswerId = formatId(correct);
  const correctElement = document.querySelector(`label[for='${correctAnswerId}']`);
 
  const selectedAnswerId = formatId(answer);
  const selectedElement = document.querySelector(`label[for='${selectedAnswerId}']`);
  console.log('selected element : ', selectedElement)

  correctElement.classList.add("correct");
  selectedElement.classList.add(isCorrect ? "correct" : "incorrect");

} 

function getFeedbackMessage(isCorrect, correct){
  const paragraph = document.createElement("p");
  paragraph.innerText = isCorrect 
  ? "Bravo, tu as eu la bonne réponse"
  : `désolé, la bonne réponse était ${correct}`;

  return paragraph;

}

function getProgressBar(max, index){
  const progress = document.createElement("progress");
  progress.setAttribute("max", max);
  progress.setAttribute("value", index);
  return progress;
}

function disableAllAnswers(){

  const radioInputs =  document.querySelectorAll('input[type="radio"]');

  for(const radio of radioInputs){
    radio.disabled = true;
  }
}
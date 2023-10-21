let container = document.querySelector('.container');
// let okButton = document.createElement('button');
// let cancelButton = document.createElement('button');
// let question = document.createElement('h1');
// let quizDescription = document.createElement('p');
// let choiceList = document.createElement('select');
// let choices = document.createElement('option');
// let result = document.createElement('h2');
// let formInput = document.createElement('form');

let questionList = [];
let timeLeft = document.getElementById("timer");

startQuiz();

function startQuiz() {
  // let quizConsent = confirm('Start Quiz');
  let quizTitle = document.createElement('h1');
  let quizDescription = document.createElement('p');
  quizTitle.textContent = "Coding Quiz";
  quizDescription.textContent = "Quiz description";

  container.appendChild(quizTitle);
  container.appendChild(quizDescription);
  
  // let btnLine = document.createElement('span');  ///////////////////// Only need one button to start the quiz.
  // let okButton = document.createElement('button');
  // let cancelButton = document.createElement('button');
  // okButton.textContent = "OK";
  // cancelButton.textContent = "Cancel";

  let startButton = document.createElement('button');
  startButton.textContent = "Start Quiz";
  startButton.setAttribute('button', 'start');
  container.appendChild(startButton);

  // container.appendChild(btnLine);
  // btnLine.appendChild(okButton);
  // okButton.setAttribute('style', 'margin-right: 1rem')
  // btnLine.appendChild(cancelButton);

  // Clears the container content, then adds a random question in its place.
  startButton.addEventListener('click', function () {
    // console.log(startButton); ///////////////////// Button test
    container.innerHTML = "";
    addQuestions(questionList);
    generateQuestion(questionList);
    startTimer();
  });
}

function quizIntro() {

}

function addQuestions(list) {
/*   let question1 = [];  ///////////////// Can just initialize questions in the array.
  let question2 = [];
  let question3 = [];
  let question4 = [];
  let question5 = [];
  let makeQuestionList = []; */
  let makeQuestionList = [question1 = [], question2 = [], question3 = [], question4 = [], question5 = []];

  question1.push("What is the default behavior of justify-content in flexbox?");
  question1.push("end");
  question1.push("center");
  question1.push("flex-start");
  question1.push("space-between");
  // makeQuestionList.push(question1);

  question2.push("What attribute must be included in an img tag to make the image show?");
  question2.push("style");
  question2.push("src");
  question2.push("alt");
  question2.push("href");
  // makeQuestionList.push(question2);

  question3.push("How many alphabetical key codes are included in the ASCII chart");
  question3.push("26");
  question3.push("24");
  question3.push("48");
  question3.push("52");
  // makeQuestionList.push(question3);

  question4.push("How do you stop a page from refreshing after submitting a form?");
  question4.push("event.preventDefault");
  question4.push("event.stopPropagation");
  question4.push("event.cancelBubble");
  question4.push("event.preventRefresh");
  // makeQuestionList.push(question4);

  // Based on W3 Schools reference page: https://www.w3schools.com/jsref/dom_obj_event.asp
  question5.push("Which of the following is NOT a JavaScript event listener?");
  question5.push("touchmove");
  question5.push("scroll");
  question5.push("valid");
  question5.push("click");
  // makeQuestionList.push(question5);

  for (let i = 0; i < makeQuestionList.length; i++) {  ////////////////// Test
    console.log(makeQuestionList[i]);
  }

  return makeQuestionList;
}

// Takes an array of questions as an argument and returns a random question (array) from that list.
function generateQuestion(list) {
  let randomQuestion = Math.floor(Math.random() * list.length);
  let questionText = list[randomQuestion];
  // console.log(questionText);  ////////////////// Test

  return questionText;
}

function startTimer() {
  let timeCt = 5;
  timeLeft.textContent = timeCt;

  let timerInterval = setInterval(function () {
    // timeLeft.textContent--;
    timeCt--;
    timeLeft.textContent = timeCt;

    if (timeCt === 0) {
      clearInterval(timerInterval);
    }
  }, 1000);
}
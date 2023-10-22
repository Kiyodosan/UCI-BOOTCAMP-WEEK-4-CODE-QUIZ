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
let currentQuestion = [];
let timeLeft = document.getElementById("timer");

startQuiz();

function startQuiz() {
  // let quizConsent = confirm('Start Quiz');
  let quizTitle = document.createElement('h1');
  quizTitle.textContent = "Coding Quiz";
  quizTitle.setAttribute('style', 'align-self: center');
  container.appendChild(quizTitle);

  let quizDescription = document.createElement('p');
  quizDescription.textContent = "Quiz description";
  quizDescription.setAttribute('style', 'align-self: center');
  container.appendChild(quizDescription);
  
  // let btnLine = document.createElement('span');  ///////////////////// Only need one button to start the quiz. This creates two buttons instead.
  // let okButton = document.createElement('button');
  // let cancelButton = document.createElement('button');
  // okButton.textContent = "OK";
  // cancelButton.textContent = "Cancel";

  let startButton = document.createElement('button');
  startButton.textContent = "Start Quiz";
  startButton.setAttribute('button', 'start');
  startButton.setAttribute('style', 'align-self: center');
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
    currentQuestion = chooseQuestion(questionList);
    generateQuestion(currentQuestion);
    startTimer();
  });
}

// Creates the question list.
function addQuestions(list) {
  list.push(question1 = [], question2 = [], question3 = [], question4 = [], question5 = []);

  question1.push("What is the default behavior of justify-content in flexbox?");
  question1.push("end");
  question1.push("center");
  question1.push("flex-start");
  question1.push("space-between");

  question2.push("What attribute must be included in an img tag to make the image show?");
  question2.push("style");
  question2.push("src");
  question2.push("alt");
  question2.push("href");

  question3.push("How many alphabetical key codes are included in the ASCII chart");
  question3.push("26");
  question3.push("24");
  question3.push("48");
  question3.push("52");

  question4.push("How do you stop a page from refreshing after submitting a form?");
  question4.push("event.preventDefault");
  question4.push("event.stopPropagation");
  question4.push("event.cancelBubble");
  question4.push("event.preventRefresh");

  // Based on W3 Schools reference page: https://www.w3schools.com/jsref/dom_obj_event.asp
  question5.push("Which of the following is NOT a JavaScript event listener?");
  question5.push("touchmove");
  question5.push("scroll");
  question5.push("valid");
  question5.push("click");

  for (let i = 0; i < list.length; i++) {  ////////////////// Test
    console.log(list[i]);
  }
}

// Takes an array of questions as an argument and returns a random question (array) from that list.
function chooseQuestion(list) {
  let randomQuestion = Math.floor(Math.random() * list.length);
  let questionArray = list[randomQuestion];
  list.splice(randomQuestion, 1);
  // console.log(questionArray);  ////////////////// Test
  console.log(list.length); ////////////////// Test

  return questionArray;
}

// Starts a timer that counts down every second.
function startTimer() {
  let timeCt = 75;
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

function generateQuestion(question) {
  let questionText = document.createElement("h1");
  let multipleChoice1 = document.createElement("button");
  let multipleChoice2 = document.createElement("button");
  let multipleChoice3 = document.createElement("button");
  let multipleChoice4 = document.createElement("button");

  questionText.textContent = question[0];
  container.appendChild(questionText);

  multipleChoice1.textContent = question[1];
  container.appendChild(multipleChoice1);

  multipleChoice2.textContent = question[2];
  container.appendChild(multipleChoice2);

  multipleChoice3.textContent = question[3];
  container.appendChild(multipleChoice3);

  multipleChoice4.textContent = question[4];
  container.appendChild(multipleChoice4);

/*   for (let i = 1; i < question.length - 1; i++) {
    multipleChoice.textContent = question[i];
    container.appendChild(multipleChoice);
  } */
}
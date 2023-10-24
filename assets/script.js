let container = document.querySelector('.container');
let questionList = [];
let currentQuestion = [];
let result = document.createElement('h3');
let timeLeft = document.getElementById("timer");
let highScores = [];  //////////////////// Might replace this with local storage.

startQuiz();

function startQuiz() {
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

  // container.appendChild(btnLine);    ///////////////////// Only need one button to start the quiz. This creates two buttons instead.
  // btnLine.appendChild(okButton);
  // okButton.setAttribute('style', 'margin-right: 1rem')
  // btnLine.appendChild(cancelButton);

  // Clears the container content, then adds a random question in its place.
  startButton.addEventListener('click', function () {
    // console.log(startButton); ///////////////////// Button test
    addQuestions();
    nextPage();
    startTimer();
  });
}

// Creates the question list.
function addQuestions() {
  questionList.push(question1 = [], question2 = [], question3 = [], question4 = [], question5 = []);

  question1.push("What is the default behavior of justify-content in flexbox?");
  question1.push("end");
  question1.push("center");
  question1.push("flex-start");
  question1.push("space-between");
  question1.push(3);

  question2.push("What attribute must be included in an img tag to make the image show?");
  question2.push("style");
  question2.push("src");
  question2.push("alt");
  question2.push("href");
  question2.push(2);

  question3.push("How many alphabetical key codes are included in the ASCII chart");
  question3.push("26");
  question3.push("24");
  question3.push("48");
  question3.push("52");
  question3.push(4);

  question4.push("How do you stop a page from refreshing after submitting a form?");
  question4.push("event.preventDefault");
  question4.push("event.stopPropagation");
  question4.push("event.cancelBubble");
  question4.push("event.preventRefresh");
  question4.push(1);

  // Based on W3 Schools reference page: https://www.w3schools.com/jsref/dom_obj_event.asp
  question5.push("Which of the following is NOT a JavaScript event listener?");
  question5.push("touchmove");
  question5.push("scroll");
  question5.push("valid");
  question5.push("click");
  question5.push(3);

  for (let i = 0; i < questionList.length; i++) {  ////////////////// Test
    console.log(questionList[i]);
  }
}

function nextPage() {
  container.innerHTML = "";
  if (questionList.length > 0) {
    currentQuestion = chooseQuestion(questionList);
    generateQuestion(currentQuestion);
    container.appendChild(result);
  } else {
    quizComplete();
  }
}

// Takes an array of questions as an argument and returns a random question (array) from that list.
function chooseQuestion() {
  let randomQuestion = Math.floor(Math.random() * questionList.length);
  let questionArray = questionList[randomQuestion];
  questionList.splice(randomQuestion, 1);
  // console.log(questionArray[0]);  ////////////////// Test
  console.log(questionList.length + " question(s) left"); ////////////////// Test

  return questionArray;
}

// Starts a timer that counts down every second.
function startTimer() {
  timeLeft.value = 75;
  timeLeft.textContent = timeLeft.value;

  let timerInterval = setInterval(function () {
    timeLeft.value--;
    timeLeft.textContent = timeLeft.value;

    if (timeLeft.value <= 0) {
      clearInterval(timerInterval);
      timeLeft.value = 0;
      timeLeft.textContent = timeLeft.value;
    }
  }, 1000);
}

// Adds questions to the container. Assigns buttons to each answer. If the user guesses wrong, then time is reduced.
function generateQuestion(question) {
  let questionText = document.createElement("h2");
  let multipleChoice1 = document.createElement("button");
  let multipleChoice2 = document.createElement("button");
  let multipleChoice3 = document.createElement("button");
  let multipleChoice4 = document.createElement("button");
  let multipleChoiceButtons = [questionText, multipleChoice1, multipleChoice2, multipleChoice3, multipleChoice4];
  let answer = question[5];

  for (let i = 1; i < multipleChoiceButtons.length; i++) {
    if (i !== answer) {
      multipleChoiceButtons[i].addEventListener('click', function () {
        timeLeft.value -= 10;
        console.log(false);  /////////////////// Test
        result.textContent = "Wrong";
        nextPage();
      })
    } else {
      multipleChoiceButtons[i].addEventListener('click', function () {
        console.log(true);  /////////////////// Test
        result.textContent = "Correct";
        nextPage();
      })
    }
  }

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
}

// Score is recorded and timer is set to 0. User inputs their initials to keep track in local storage.
function quizComplete() {
  let score = timeLeft.value;
  timeLeft.value = 0;

  let completionTitle = document.createElement('h1');
  completionTitle.textContent = "Quiz Complete";
  completionTitle.setAttribute('style', 'align-self: center');
  container.appendChild(completionTitle);
  
  let completionText = document.createElement('h2');
  completionText.textContent = "Your score: " + score;
  container.appendChild(completionText);

  let completionForm = document.createElement('form');

  completionForm.textContent = "Enter your initials: ";

  let initialsInput = document.createElement('input');
  initialsInput.setAttribute('type', 'text');
  initialsInput.setAttribute('name', 'initials');
  initialsInput.setAttribute('placeholder', 'Input 2 or 3 characters');
  completionForm.appendChild(initialsInput);

  let lineBreak = document.createElement('br');
  completionForm.appendChild(lineBreak);

  let submitButton = document.createElement('input');
  submitButton.setAttribute('type', 'submit');
  submitButton.setAttribute('value', 'Submit');
  submitButton.setAttribute('style', 'margin-top: 1rem');
  submitButton.addEventListener('click', function (event) {
    event.preventDefault();
    // highScores.push(score);    //////////////// Save score to local storage here (push to an array)
    let userInitials = initialsInput.value;
    console.log(userInitials);  /////////////////// Test
    checkForm(userInitials);
  });
  completionForm.appendChild(submitButton);

  container.appendChild(completionForm);
}

// Form validation info from https://www.w3schools.com/js/js_validation.asp
function checkForm(initials) {
  if (initials.length > 3) {
    let initialsOver = document.createElement('h3');
    initialsOver.textContent = "Please use a maximum of 3 characters";
    container.appendChild(initialsOver);
  } else if (initials.length === 0) {
    initialsZero = document.createElement('h3');
    initialsZero.textContent = "Please enter your initials";
    container.appendChild(initialsZero);
  } else if (initials.length === 1) {
    initialsOne = document.createElement('h3');
    initialsOne.textContent = "Please use 2 or 3 characters for your initials";
    container.appendChild(initialsOne);
  } else {
    // highScores[length - 1].push(initials)  /////////////////// Save initials to local storage here (push to same array element as score)
    // showHighScores();
  }
}

function showHighScores() {
  container.innerHTML = "";
  let scoreTitle = document.createElement('h1');
  scoreTitle.textContent = "High Scores";
  container.appendChild(scoreTitle);

  let highScoresList = document.createElement('h2');

}
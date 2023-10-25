let container = document.querySelector('.container');
let questionList = [];
let currentQuestion = [];
let result = document.createElement('h3');
let timeLeft = document.getElementById("timer");
let score = "";
let hasErrorMsg = false;

startQuiz();
viewHighScores();

// Generates a quiz intro page. Requests user consent to start the quiz. 
function startQuiz() {
  let quizTitle = document.createElement('h1');
  quizTitle.textContent = "Coding Quiz";
  quizTitle.setAttribute('style', 'align-self: center');
  container.appendChild(quizTitle);

  let quizDescription = document.createElement('p');
  quizDescription.textContent = "Quiz description";
  quizDescription.setAttribute('style', 'align-self: center');
  container.appendChild(quizDescription);

  let startButton = document.createElement('button');
  startButton.textContent = "Start Quiz";
  startButton.setAttribute('button', 'start');
  startButton.setAttribute('style', 'align-self: center');
  container.appendChild(startButton);

  // Clears the container content, then adds a random question in its place.
  startButton.addEventListener('click', function () {
    // console.log(startButton); ///////////////////// Button test
    addQuestions();
    nextPage();
    startTimer();
  });
}

// The user can click on this 'p' tag at any time before or during the quiz to jump to the high scores page.
function viewHighScores() {
  let highScoresBtn = document.querySelector('#highScoresPage');
  highScoresBtn.setAttribute('type', 'button');
  highScoresBtn.addEventListener('click', function () {
    showHighScores();
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

  question5.push("Which of the following is NOT a JavaScript event listener?");
  question5.push("touchmove");
  question5.push("scroll");
  question5.push("valid");
  question5.push("click");
  question5.push(3);

/*   for (let i = 0; i < questionList.length; i++) {  ////////////////// Test
    console.log(questionList[i]);
  } */
}

// Moves to the next question after the user chooses an answer.
// If there are no more questions, then the "quiz complete" page is generated instead.
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
// Removes the question from the question array so that it can't be selected more than once.
function chooseQuestion() {
  let randomQuestion = Math.floor(Math.random() * questionList.length);
  let questionArray = questionList[randomQuestion];
  questionList.splice(randomQuestion, 1);
  // console.log(questionArray[0]);  ////////////////// Test
  // console.log(questionList.length + " question(s) left"); ////////////////// Test

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
      if (score > 0) {
        timeLeft.value = score;
        timeLeft.textContent = timeLeft.value;
      } else {
        timeLeft.value = 0;
        timeLeft.textContent = timeLeft.value;
      }
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
        // console.log(false);  /////////////////// Test
        result.textContent = "Wrong";
        nextPage();
      })
    } else {
      multipleChoiceButtons[i].addEventListener('click', function () {
        // console.log(true);  /////////////////// Test
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
  if (timeLeft < 0) {
    timeLeft.value = 0;
    score = timeLeft.value;
  } else {
    score = timeLeft.value;
    timeLeft.value = 0;
  }

  if (score < 0) {
    score = 0;
  }

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

  let submitButton = document.createElement('button');
  submitButton.textContent = "Submit";
  submitButton.setAttribute('style', 'margin-top: 1rem');
  submitButton.addEventListener('click', function (event) {
    event.preventDefault();
    let userInitials = initialsInput.value;
    // console.log(userInitials);  /////////////////// Test
    checkForm(userInitials);
  });
  completionForm.appendChild(submitButton);

  container.appendChild(completionForm);
}

// Checks user input to make sure it follows the initials requirements.
// Alerts the user when an incorrect input is given.
function checkForm(initials) {
  // console.log(container.lastChild); ///////////////// Test
  if (hasErrorMsg) {
    container.removeChild(container.lastChild);
  }

  let initialsError = document.createElement('h3');
  container.appendChild(initialsError);

  if (initials.length > 3) {
    hasErrorMsg = true;
    initialsError.textContent = "Please use a maximum of 3 characters";
  } else if (initials.length === 0) {
    hasErrorMsg = true;
    initialsError.textContent = "Please enter your initials";
  } else if (initials.length === 1) {
    hasErrorMsg = true;
    initialsError.textContent = "Please use 2 or 3 characters for your initials";
  } else {
    // Add name and score to nameAndScore array.
    hasErrorMsg = false;
    let nameAndScore = [];
    nameAndScore.push(initials.toUpperCase());
    nameAndScore.push(score);
    // console.log(nameAndScore);  ///////////////// Test

    let rankName = nameGen();

    // Store nameAndScore array in local storage, then clear the array.
    localStorage.setItem(rankName, JSON.stringify(nameAndScore));
    nameAndScore = [];
    showHighScores();
  }
}

function nameGen() {
  let storageKeys = getAllStorage();
  let newName = "scoreData" + (storageKeys.length + 1);
  return newName;
}

// https://stackoverflow.com/questions/17745292/how-to-retrieve-all-localstorage-items-without-knowing-the-keys-in-advance
// Returns all keys from storage.
function getAllStorage() {
  let values = [];
  let keys = Object.keys(localStorage);
  let i = keys.length;

  while (i--) {
    values.push(JSON.parse(localStorage.getItem(keys[i])));
  }

  return values;
}

// Generates a high scores page that lists the top 5 users along with their scores.
// The user can choose to clear the scores from local storage or restart the quiz.
function showHighScores() {
  timeLeft.value = 0;
  container.innerHTML = "";

  let scoreTitle = document.createElement('h1');
  scoreTitle.textContent = "High Scores";
  scoreTitle.setAttribute('style', 'align-self: center');
  container.appendChild(scoreTitle);

  let storageKeys = getAllStorage();
  // console.log(storageKeys); //////////////////// Test

  let keyScoreList = [];
  for (let i = 0; i < storageKeys.length; i++) {
    keyScoreList.push(storageKeys[i][1]);
  }
  sortAndCompare(keyScoreList);
  keyScoreList.reverse();
  // console.log(keyScoreList); ////////////////// Test

  // Matches score to a name from local storage. If the name has been used, then skip the name.
  // Adds to an array in descending order based on score.
  let sortedRankings = [];
  let usedNames = [];
  for (let i = 0; i < storageKeys.length; i++) {
    for (let j = 0; j < storageKeys.length; j++) {
      if (keyScoreList[i] === storageKeys[j][1]) {
        if (usedNames.includes(storageKeys[j][0])) {
          continue;
        } else {
          sortedRankings.push(storageKeys[j][0] + ": " + keyScoreList[i]);
          usedNames.push(storageKeys[j][0]);
        }
      }
    }
  }
  // console.log(sortedRankings); ////////////////// Test

  if (sortedRankings.length < 5) {
    for (let i = 0; i < sortedRankings.length; i++) {
      if (i % 2 === 1) {
        let highScore = document.createElement('h2');
        highScore.textContent = sortedRankings[i];
        highScore.setAttribute('style', 'margin: 0; width: 100%');
        container.appendChild(highScore);
      } else {
        let highScore = document.createElement('h2');
        highScore.textContent = sortedRankings[i];
        highScore.setAttribute('style', 'margin: 0; width: 100%; background-color: rgb(214, 84, 214)');
        container.appendChild(highScore);
      }
    }
  } else {
    for (let i = 0; i < 5; i++) {
      if (i % 2 === 1) {
        let highScore = document.createElement('h2');
        highScore.textContent = sortedRankings[i];
        highScore.setAttribute('style', 'margin: 0; width: 100%');
        container.appendChild(highScore);
      } else {
        let highScore = document.createElement('h2');
        highScore.textContent = sortedRankings[i];
        highScore.setAttribute('style', 'margin: 0; width: 100%; background-color: rgb(214, 84, 214)');
        container.appendChild(highScore);
      }
    }
  }

  let btnSpan = document.createElement('span');
  container.appendChild(btnSpan);

  let clearScores = document.createElement('button');
  clearScores.textContent = "Clear scores";
  clearScores.setAttribute('style', 'margin-top: 1rem; margin-right: 1rem');
  clearScores.addEventListener('click', function () {
    localStorage.clear();
    showHighScores();
  });
  btnSpan.appendChild(clearScores);

  let restartQuiz = document.createElement('button');
  restartQuiz.textContent = "Restart Quiz";
  restartQuiz.setAttribute('style', 'margin-top: 1rem');
  restartQuiz.addEventListener('click', function () {
    container.innerHTML = "";
    startQuiz();
  });
  btnSpan.appendChild(restartQuiz);
}

// https://www.w3schools.com/jsref/jsref_sort.asp
// Sort an array of numbers.
function sortAndCompare(list) {
  list.sort(function (firstNum, lastNum) {
    return firstNum - lastNum;
  });
}
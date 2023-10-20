let textId = document.querySelector('#text');
// let selectionsId = document.querySelector('#selections');
// let resultId = document.querySelector('#result');

// let selection = document.createElement('select');

textId.textContent = "Placeholder";

let question1 = [];
let question2 = [];
let question3 = [];
let question4 = [];
let question5 = [];
let questionList = {question1, question2, question3, question4, question5};
addQuestions();

function addQuestions() {
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
}





/* // Displays the element in block form.
function showSelections() {
  selectionsId.style.display = "block";
}

// Hides the element.
function hideSelections() {
  selectionsId.style.display = "hidden";
}

function toggleSelections() {
  let currentDisplay = selectionsId.style.display;
  if (currentDisplay == "none") {
    selectionsId.style.display = "block";
    console.log(selectionsId.style.display);
  } else {
    selectionsId.style.display = "none";
    console.log(selectionsId.style.display);
  }
}
selectionsId.textContent = "Selections";
toggleSelections(); */

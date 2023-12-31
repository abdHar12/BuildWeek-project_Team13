const questions = [
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "What does CPU stand for?",
    correct_answer: "Central Processing Unit",
    incorrect_answers: [
      "Central Process Unit",
      "Computer Personal Unit",
      "Central Processor Unit"
    ]
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn't get modified?",
    correct_answer: "Final",
    incorrect_answers: ["Static", "Private", "Public"]
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "The logo for Snapchat is a Bell.",
    correct_answer: "False",
    incorrect_answers: ["True"]
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question:
      "Pointers were not used in the original C programming language; they were added later on in C++.",
    correct_answer: "False",
    incorrect_answers: ["True"]
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the most preferred image format used for logos in the Wikimedia database?",
    correct_answer: ".svg",
    incorrect_answers: [".png", ".jpeg", ".gif"]
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "In web design, what does CSS stand for?",
    correct_answer: "Cascading Style Sheet",
    incorrect_answers: [
      "Counter Strike: Source",
      "Corrective Style Sheet",
      "Computer Style Sheet"
    ]
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the code name for the mobile operating system Android 7.0?",
    correct_answer: "Nougat",
    incorrect_answers: ["Ice Cream Sandwich", "Jelly Bean", "Marshmallow"]
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "On Twitter, what is the character limit for a Tweet?",
    correct_answer: "140",
    incorrect_answers: ["120", "160", "100"]
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "Linux was first created as an alternative to Windows XP.",
    correct_answer: "False",
    incorrect_answers: ["True"]
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "Which programming language shares its name with an island in Indonesia?",
    correct_answer: "Java",
    incorrect_answers: ["Python", "C", "Jakarta"]
  }
];

let countCorrectAnswers = 0;
let countWrongAnswers = 0;
let IndexOfquestionsArray = 0;
let timer;
let controlOfTheAnswers = [];

function timeForAnswer() {
  let timeLeft = 20;
  timer = setTimeout(function () {
    countWrongAnswers++;
    console.log("non corrette: " + countWrongAnswers);
    gestionOfButton(false);
  }, timeLeft * 1000);
}

function creationDivFeedback(result) {
  const divForImage = document.getElementById("div-for-feedback");
  divForImage.style.display = "block";
  const img = document.createElement("img");
  const p = document.createElement("p");

  if (result) {
    p.innerText = "CORRECT ANSWER";
    p.style.color = "#419B45";
  } else {
    p.innerText = "WRONG ANSWER";
    p.style.color = "#E81D1E";
  }

  divForImage.appendChild(p);
  divForImage.appendChild(img);
  p.style.display = "inline-block";
  p.style.fontFamily = "Inter";
  p.style.fontWeight = "bold";

  setTimeout(function () {
    p.remove();
    img.remove();
  }, 500);
}

function CorrectOrWrongQuestion(userAnswer, ind) {
  clearTimeout(timer);
  if (
    userAnswer.toLowerCase() === questions[ind].correct_answer.toLowerCase()
  ) {
    countCorrectAnswers++;
    console.log("corrette: ", countCorrectAnswers);
    creationDivFeedback(true);
    const img = document.querySelector("#div-for-feedback>img");
    img.setAttribute("src", "./assets/img/true.png");
  } else {
    countWrongAnswers++;
    console.log("non corrette: ", countWrongAnswers);
    creationDivFeedback(false);
    const img = document.querySelector("#div-for-feedback>img");
    img.setAttribute("src", "./assets/img/false.png");
  }
  localStorage.setItem("countCorrectAnswers", countCorrectAnswers);
}

const creationOfButton = () => {
  const button = document.getElementById("button-confirm-question");
  const mainOfPage = document.getElementById("main-second-page");
  mainOfPage.appendChild(button);
  button.addEventListener("click", gestionOfButton, true);
};

const remotionSelectedAnswer = () => {
  const selectedAnswers = document.querySelectorAll(".selected-answer");
  Array.from(selectedAnswers).forEach((selAns) => {
    selAns.checked = false;
    selAns.classList.remove("selected-answer");
  });
};

function selectOnlyOne() {
  const answers = document.querySelectorAll(".answers");
  const button = document.getElementById("button-confirm-question");
  const arrayInputElements = [];
  button.disabled = arrayInputElements.length !== 1;
  console.log(answers);
  answers.forEach((ans) => {
    ans.addEventListener("click", (e) => {
      remotionSelectedAnswer();
      e.target.classList.add("selected-answer");
      e.target.checked = true;
      arrayInputElements.push(ans);
      button.disabled = false;
    });
  });
}

// function gestionOfTrueFalse() {
//   const falseInput = document.getElementById("false-input");
//   const trueInput = document.getElementById("true-input");
//   const button = document.getElementById("button-confirm-question");
//   const arrayInputElements = [];
//   button.disabled = arrayInputElements.length !== 1;
//   trueInput.addEventListener("click", (e) => {
//     falseInput.checked = false;
//     trueInput.checked = true;
//     arrayInputElements.push(e.target.value);
//     remotionSelectedAnswer();
//     e.target.classList.add("selected-answer");
//     button.disabled = false;
//   });
//   falseInput.addEventListener("click", (e) => {
//     trueInput.checked = false;
//     falseInput.checked = true;
//     remotionSelectedAnswer();
//     e.target.classList.add("selected-answer");
//     arrayInputElements.push(e.target.value);
//     button.disabled = false;
//   });
// }

const gestionOfButton = (verify) => {
  const selectedAnswer = document.querySelector(".selected-answer");
  if (selectedAnswer && verify) {
    CorrectOrWrongQuestion(selectedAnswer.value, IndexOfquestionsArray);
  }
  const timerDiv = document.querySelector(".countdown");
  const header = document.getElementsByTagName("header")[0];
  header.removeChild(timerDiv);
  header.appendChild(timerDiv);
  // console.clear();
  IndexOfquestionsArray++;
  if (IndexOfquestionsArray >= 10) {
    const divForAnyanswer = document.querySelectorAll(".contain-answers");
    Array.from(divForAnyanswer).forEach((div) => {
      div.remove();
    });
    const previousDivs = document.getElementsByClassName(
      "contain-answers-true-false"
    );
    Array.from(previousDivs).forEach((div) => div.remove());
    lastPage();
  } else {
    const ptoRemove = document.querySelector("#footer-second-page > p");
    ptoRemove.remove();
    const footer = document.getElementById("footer-second-page");
    const pOfFooter = document.createElement("p");
    footer.appendChild(pOfFooter);
    pOfFooter.innerText = "QUESTION " + (IndexOfquestionsArray + 1);
    pOfFooter.insertAdjacentHTML("beforeend", "<span> / 10</span>");
    const divForAnyanswer = document.querySelectorAll(".contain-answers");
    Array.from(divForAnyanswer).forEach((div) => {
      div.remove();
    });
    const previousDivs = document.getElementsByClassName(
      "contain-answers-true-false"
    );

    Array.from(previousDivs).forEach((div) => div.remove());
    const h1ForQuestion = document.getElementById("h1-second-page");
    h1ForQuestion.innerText = questions[IndexOfquestionsArray].question;
    if (
      questions[IndexOfquestionsArray].correct_answer.toLowerCase() !==
        "false" &&
      questions[IndexOfquestionsArray].correct_answer.toLowerCase() !== "true"
    ) {
      FourAnswers(IndexOfquestionsArray);
      timeForAnswer();
    } else {
      trueFalseAnswers(IndexOfquestionsArray);
      timeForAnswer();
    }
    const main = document.getElementById("main-second-page");
    const divForImage = document.getElementById("div-for-feedback");
    main.appendChild(divForImage);
  }
};

function FourRandomNumbers() {
  const randomNumbers = [];
  while (randomNumbers.length < 4) {
    let random = Math.floor(Math.random() * 4);
    if (!randomNumbers.includes(random)) {
      randomNumbers.push(random);
    }
  }
  return randomNumbers;
}

const lastPage = () => {
  const timerDiv = document.querySelector(".countdown");
  const header = document.getElementsByTagName("header")[0];
  header.removeChild(timerDiv);
  const h1ForQuestion = document.getElementById("h1-second-page");
  h1ForQuestion.innerText = "COMPLIMENTI HAI TERMINATO IL TEST!";
  const mainOfPage = document.getElementById("main-second-page");
  const p = document.querySelector("#footer-second-page > p");
  p.remove();
  const previousButton = document.getElementById("button-confirm-question");
  mainOfPage.removeChild(previousButton);
  const button = document.createElement("button");
  button.setAttribute("id", "button-last-page");
  mainOfPage.appendChild(button);
  button.innerHTML = "Vai ai risultati!";
  button.addEventListener("click", function () {
    setTimeout(function () {
      window.location.href = "./results.html";
    }, 3000);
  });
};

const trueFalseAnswers = () => {
  let divAnswers, divAnswersTrueFalse;
  const mainOfPage = document.getElementById("main-second-page");
  if (IndexOfquestionsArray > 0) {
    divAnswers = document.getElementsByClassName("div-four-answers");
    divAnswersTrueFalse = document.getElementsByClassName("div-true-false");
    Array.from(divAnswers).forEach((div) => div.remove());
    Array.from(divAnswersTrueFalse).forEach((div) => div.remove());
    divAnswers = document.createElement("div");
  } else {
    divAnswers = document.createElement("div");
  }
  mainOfPage.appendChild(divAnswers);
  divAnswers.classList.add("div-true-false");

  for (let i = 0; i < 2; i++) {
    const divForAnyanswer = document.createElement("div");
    divForAnyanswer.classList.add("contain-answers");
    divAnswers.appendChild(divForAnyanswer);
    const inputButtonForAnyAnswer = document.createElement("input");
    inputButtonForAnyAnswer.classList.add("answers");
    inputButtonForAnyAnswer.type = "button";
    divForAnyanswer.appendChild(inputButtonForAnyAnswer);
  }

  const inputButtonForAnyAnswer = document.getElementsByClassName("answers");
  inputButtonForAnyAnswer[0].value = "True";
  inputButtonForAnyAnswer[1].value = "False";
  creationOfButton();
  selectOnlyOne();
};

const FourAnswers = (ind) => {
  const arrayAnswers = questions[ind].incorrect_answers.concat(
    questions[ind].correct_answer
  );
  let divAnswers, divAnswersTrueFalse;
  // console.log(arrayAnswers);
  const numbersInArray = FourRandomNumbers();
  const mainOfPage = document.getElementById("main-second-page");
  if (IndexOfquestionsArray > 0) {
    divAnswers = document.getElementsByClassName("div-four-answers");
    divAnswersTrueFalse = document.getElementsByClassName("div-true-false");
    Array.from(divAnswers).forEach((div) => div.remove());
    Array.from(divAnswersTrueFalse).forEach((div) => div.remove());
    divAnswers = document.createElement("div");
  } else {
    divAnswers = document.createElement("div");
  }
  mainOfPage.appendChild(divAnswers);
  divAnswers.classList.add("div-four-answers");
  for (let i = 0; i < 4; i++) {
    const divForAnyanswer = document.createElement("div");
    // console.log(divForAnyanswer);
    divForAnyanswer.classList.add("contain-answers");
    divAnswers.appendChild(divForAnyanswer);
    const inputButtonForAnyAnswer = document.createElement("input");
    inputButtonForAnyAnswer.classList.add("answers");
    inputButtonForAnyAnswer.type = "button";
    divForAnyanswer.appendChild(inputButtonForAnyAnswer);
    inputButtonForAnyAnswer.value = arrayAnswers[numbersInArray[i]];
  }
  creationOfButton();
  selectOnlyOne();
};
timeForAnswer();

window.onload = function () {
  // TIPS:
  // SE MOSTRI TUTTE LE RISPOSTE ASSIEME IN FORMATO LISTA:
  // Per ogni domanda, crea un container e incorporale tutte all'interno.
  // Crea poi dei radio button
  // https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/radio
  // con le risposte corrette e incorrette come opzioni
  // (dovrai probabilmente cercare su un motore di ricerca come ottenere un valore da un radio button in JS per ottenere il punteggio finale)
  //
  // SE MOSTRI UNA DOMANDA ALLA VOLTA:
  // Mostra la prima domanda con il testo e i radio button.
  // Quando l'utente seleziona una risposta, passa alla domanda successiva dell'array e sostituisci quella precedentemente visualizzata con quella corrente,
  // salvando le risposte dell'utente in una variabile
  //   timeForAnswer();

  // console.log("atTheStart", IndexOfquestionsArray);

  const h1ForQuestion = document.getElementById("h1-second-page");
  h1ForQuestion.innerText = questions[IndexOfquestionsArray].question;
  if (
    questions[IndexOfquestionsArray].correct_answer.toLowerCase() !== "false" ||
    questions[IndexOfquestionsArray].correct_answer.toLowerCase() !== "true"
  ) {
    FourAnswers(IndexOfquestionsArray);
  } else {
    trueFalseAnswers(IndexOfquestionsArray);
  }
  selectOnlyOne();
  creationOfButton();
};
localStorage.setItem("countCorrectAnswers", countCorrectAnswers);
// Come calcolare il risultato? Hai due strade:
// Se stai mostrando tutte le domande nello stesso momento, controlla semplicemente se i radio button selezionati sono === correct_answer
// Se stai mostrando una domanda alla volta, aggiungi semplicemente un punto alla variabile del punteggio che hai precedentemente creato SE la risposta selezionata è === correct_answer

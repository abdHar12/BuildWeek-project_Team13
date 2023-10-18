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

// function timeForAnswer() {
//   let timeLeft = 20;
//   timer = setTimeout(function () {
//     CorrectOrWrongQuestion();
//   }, timeLeft * 1000);
// }

// function nextQuestion() {
//   if (IndexOfquestionsArray < questions.length - 1) {
//     IndexOfquestionsArray++;
//     FourAnswers();
//   }
// } else {
//   quizCompleted();
// }
// }

// function CorrectOrWrongQuestion(userAnswer) {
//   clearTimeout(timer);
//   let currentQuestion = questions[IndexOfquestionsArray];
//   if (userAnswer === currentQuestion.correct_answer) {
//     countCorrectAnswers++;
//   } else {
//     countWrongAnswers++;
//   }
// }

const creationOfButton = () => {
  const button = document.getElementById("button-confirm-question");
  const mainOfPage = document.getElementById("main-second-page");
  mainOfPage.appendChild(button);
  button.addEventListener("click", gestionOfButton);
};

function selectOnlyOne() {
  const answers = document.querySelectorAll(".answers");
  const button = document.getElementById("button-confirm-question");
  const arrayInputElements = [];

  button.disabled = arrayInputElements.length !== 1;
  // console.log(answers);
  answers.forEach((ans) => {
    ans.addEventListener("click", (e) => {
      const selectedAnswers = document.querySelectorAll(".selected-answer");

      Array.from(selectedAnswers).forEach((selAns) => {
        selAns.checked = false;
        selAns.classList.remove("selected-answer");
      });
      e.target.classList.add("selected-answer");
      e.target.checked = true;
      arrayInputElements.push(ans);
      button.disabled = false;
      console.clear();
      answers.forEach((a) => console.log(a.checked));
    });
  });
}

const gestionOfButton = () => {
  // if (e.target.value === questions[ind].correct_answer) countCorrectAnswers++;
  // else countWrongAnswers++;
  // const allInputs = document.getElementsByClassName(answers);
  // let pressed = [];
  // Array.from(allInputs).forEach((input) => {});
  IndexOfquestionsArray++;
  const divForAnyanswer = document.querySelectorAll(".contain-answers");
  Array.from(divForAnyanswer).forEach((div) => {
    div.remove();
  });
  const h1ForQuestion = document.getElementById("h1-second-page");
  h1ForQuestion.innerText = questions[IndexOfquestionsArray].question;
  if (
    questions[IndexOfquestionsArray].correct_answer.toLowerCase() !== "false" ||
    questions[IndexOfquestionsArray].correct_answer.toLowerCase() !== "true"
  ) {
    FourAnswers(IndexOfquestionsArray);
  }
};

function FourRandomNumbers() {
  const randomNumbers = [];
  // console.log(randomNumbers.length);
  while (randomNumbers.length < 4) {
    let random = Math.floor(Math.random() * 4);
    if (!randomNumbers.includes(random)) {
      randomNumbers.push(random);
    }
  }
  return randomNumbers;
}

const lastPage = () => {
  const h1ForQuestion = document.getElementById("h1-second-page");
  h1ForQuestion.innerText = "COMPLIMENTI HAI TERMINATO IL TEST!";
  const button = document.getElementById("button-confirm-question");
  const mainOfPage = document.getElementById("main-second-page");
  mainOfPage.appendChild(button);
  button.setAttribute("id", "button-last-page");
  button.innerText = "Vai ai risultati!";
};

// const trueFalseAnswers = (ind) => {
//   const arrayAnswers = questions[ind].incorrect_answers.concat(
//     questions[ind].correct_answer
//   );
//   for (let i = 0; i < 2; i++) {}
// };

const FourAnswers = (ind) => {
  const arrayAnswers = questions[ind].incorrect_answers.concat(
    questions[ind].correct_answer
  );
  console.log(arrayAnswers);
  const numbersInArray = FourRandomNumbers();
  for (let i = 0; i < 4; i++) {
    const divForAnyanswer = document.createElement("div");
    const mainOfPage = document.getElementById("main-second-page");
    console.log(divForAnyanswer);
    mainOfPage.appendChild(divForAnyanswer);
    divForAnyanswer.classList.add("contain-answers");
    const mainOfpage = document.getElementById("main-second-page");
    mainOfpage.appendChild(divForAnyanswer);
    const inputButtonForAnyAnswer = document.createElement("input");
    inputButtonForAnyAnswer.classList.add("answers");
    inputButtonForAnyAnswer.type = "button";
    divForAnyanswer.appendChild(inputButtonForAnyAnswer);
    inputButtonForAnyAnswer.value = arrayAnswers[numbersInArray[i]];
    console.dir(inputButtonForAnyAnswer);
    inputButtonForAnyAnswer.addEventListener("click", (e) => {
      // e.target.classList.add("selected-answer");
    });
  }
  creationOfButton();
  selectOnlyOne();
  console.log(IndexOfquestionsArray);
};

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

  console.log("atTheStart", IndexOfquestionsArray);

  const h1ForQuestion = document.getElementById("h1-second-page");
  h1ForQuestion.innerText = questions[IndexOfquestionsArray].question;
  if (
    questions[IndexOfquestionsArray].correct_answer.toLowerCase() !== "false" ||
    questions[IndexOfquestionsArray].correct_answer.toLowerCase() !== "true"
  ) {
    FourAnswers(IndexOfquestionsArray);
  } else if (IndexOfquestionsArray >= 9) {
    lastPage();
  } else {
    // trueFalseAnswers(IndexOfquestionsArray);
  }
  creationOfButton();
  selectOnlyOne();
};

// Come calcolare il risultato? Hai due strade:
// Se stai mostrando tutte le domande nello stesso momento, controlla semplicemente se i radio button selezionati sono === correct_answer
// Se stai mostrando una domanda alla volta, aggiungi semplicemente un punto alla variabile del punteggio che hai precedentemente creato SE la risposta selezionata è === correct_answer

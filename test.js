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
      "Central Processor Unit",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn&#039;t get modified?",
    correct_answer: "Final",
    incorrect_answers: ["Static", "Private", "Public"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "The logo for Snapchat is a Bell.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question:
      "Pointers were not used in the original C programming language; they were added later on in C++.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the most preferred image format used for logos in the Wikimedia database?",
    correct_answer: ".svg",
    incorrect_answers: [".png", ".jpeg", ".gif"],
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
      "Computer Style Sheet",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the code name for the mobile operating system Android 7.0?",
    correct_answer: "Nougat",
    incorrect_answers: ["Ice Cream Sandwich", "Jelly Bean", "Marshmallow"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "On Twitter, what is the character limit for a Tweet?",
    correct_answer: "140",
    incorrect_answers: ["120", "160", "100"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "Linux was first created as an alternative to Windows XP.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "Which programming language shares its name with an island in Indonesia?",
    correct_answer: "Java",
    incorrect_answers: ["Python", "C", "Jakarta"],
  },
];

function myQuestion() {
  if (contQuestion >= questions.length) {
    quizCompleted();
  } else {
    displayQuestion();
  }
}

let wrongAnswer = 0;
let correctAnswer = 0;
let contQuestion = 0;
let timer;

function nextQuestion() {
  if (contQuestion < questions.length - 1) {
    contQuestion++;
    displayQuestion();
  } else {
    quizCompleted();
  }
}

function timeForAnswer() {
  let timeLeft = 20;
  timer = setTimeout(function () {
    CorrectOrWrongQuestion(false);
  }, timeLeft * 1000);
}

function CorrectOrWrongQuestion(userAnswer) {
  clearTimeout(timer);
  let currentQuestion = questions[contQuestion];

  if (userAnswer === currentQuestion.correct_answer) {
    correctAnswer++;
  } else {
    wrongAnswer++;
  }

  nextQuestion();
}

function displayQuestion() {
  let currentQuestion = questions[contQuestion].innertext();

  if (currentQuestion) {
    console.log(currentQuestion.question);
    const userAnswer = "risposta_cliccata";
    if (userAnswer === currentQuestion.correct_answer) {
      CorrectOrWrongQuestion(true);
    } else {
      CorrectOrWrongQuestion(false);
    }
  } else {
    quizCompleted();
  }
}

function showAlert() {
  alert("Questo è un messaggio di avviso!");
}
// Chiamata alla funzione per inizializzare il comportamento
function selectOnlyOne2() {
  const answers = document.querySelectorAll(".answers");
  const button = document.getElementById("button-confirm-question");
  const arr = [];
  answers.forEach((answer) => {
    answer.addEventListener("click", () => {
      arr.push(answer);
      // Rimuovi la classe da tutti gli elementi
      arr.forEach((input) => {
        input.classList.remove("selected-answer-background");
        button.disabled = arr.length !== 1;
      });

      // Aggiungi la classe solo all'elemento selezionato
      answer.classList.add("selected-answer-background");

      // Controlla se c'è esattamente 1 input selezionato
      const checkedAnswers = Array.prototype.filter.call(
        answers,
        (input) => input.checked
      );
    });
  });
}

selectOnlyOne2();

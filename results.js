const answers = localStorage.getItem("score");
console.log(answers);
const correctAnswer = parseInt(answers);
const wrongAnswer = 10 - parseInt(answers);
const allQuestions = 10;
const correctPercentage = document.getElementById("true_question");
const wrongPercentage = document.getElementById("false_question");
const numberOfCorrect = document.getElementById("quantity_true");
const numberOfWrong = document.getElementById("quantity_false");
const textResult = document.getElementById("text_result");
let percentageCorr = 0;
let percentageWron = 0;
let progressBar = document.querySelector(".container");

const resultCalculation = function () {
  percentageCorr = (100 * correctAnswer) / allQuestions;
  percentageWron = (100 * wrongAnswer) / allQuestions;

  const preciseCorrect = percentageCorr.toPrecision(3);
  const preciseWrong = percentageWron.toPrecision(3);

  let progressValue = 0;
  let progressEndValue = parseInt(percentageWron);
  let speed = 5;

  let progress = setInterval(() => {
    progressValue++;
    progressBar.style.background = `conic-gradient(
      purple ${progressValue * 3.6}deg,
      aqua ${progressValue * 3.6}deg
)`;
    if (progressValue === progressEndValue) {
      clearInterval(progress);
    }
  });

  correctPercentage.innerText = preciseCorrect + "%";
  wrongPercentage.innerText = preciseWrong + "%";

  numberOfCorrect.innerText = correctAnswer + "/10 questions";
  numberOfWrong.innerText = wrongAnswer + "/10 questions";

  if (parseInt(percentageCorr) >= 60) {
    textResult.innerHTML = `<div id="text_result">
    Congratulations!
    <br />
    <span id="different_color">You passed the exam.</span>
    <br />
    <span class="lower_text"
      >We'll send you the certificate <br />
      in few minutes.</span
    >
    <span class="lower_text"
      >Check your email (including <br />
      promotions / spam folder)</span
    >
  </div>`;
  } else {
    textResult.innerHTML = `<div id="text_result">Oh no, you failed this one</div>`;
  }
};

window.onload = function () {
  resultCalculation();
};

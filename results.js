let url = window.location.search;
const parametro = new URLSearchParams(url);
const score = parametro.get("result");

window.onload = function () {};

let positiveScore = score;
let totalScore = 10;

document.getElementById("correctAnswerTot").innerHTML = `<p>${positiveScore}/${totalScore} questions</p>`;
let negativeScore = numeroTotale - positiveScore;
document.getElementById("WrongAnswerTot").innerHTML = `<p>${negativeScore}/${totalScore} questions</p>`;

let positivePercentage = (positiveScore / totalScore) * 100;
document.getElementById("positive-rate").innerHTML = positivePercentage + "%";

let negativePercentage = 100 - positivePercentage;
document.getElementById("negative-rate").innerHTML = negativePercentage + "%";

window.onload = function () {};

var data = {
  labels: ["Correct", "Wrong"],
  datasets: [
    {
      data: [negativePercentage, positivePercentage],
      backgroundColor: ["#c2128d", "#00ffff"],
      borderColor: ["#c2128d", "#00ffff"],
      borderWidth: 1,
    },
  ],
};

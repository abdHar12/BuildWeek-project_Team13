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

let data = {
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

let centralTxt = document.getElementById("chartDescr").getContext("2d");
centralTxt.canvas.width = 350;
centralTxt.canvas.height = 350;
centralTxt.canvas.border = 1;

var centralChart = new Chart(ctx, {
  type: "doughnut",
  data: data,
  options: {
    responsive: false,
    cutoutPercentage: 72,
    maintainAspectRatio: false,
    tooltips: {
      callbacks: {
        label: function (tooltipItem, data) {
          var dataset = data.datasets[tooltipItem.datasetIndex];
          var index = tooltipItem.index;
          return data.labels[index] + ": " + dataset.data[index] + "%";
        },
      },
    },
    legend: {
      display: false,
    },
  },
});
window.onload = function () {};

if (positiveScore > 5) {
  document.getElementById("inside-canvas").innerHTML = `<div class="correct-wrong"> <p class="p1">Congratulations!</p>
    <p class="p2correct">You passed the exam.</p>
    <p class="p3">We'll send you the certificate in few minutes. <br> Check your email (including promotions / spam folder)</p> </div>`;
} else {
  document.getElementById("inside-canvas").innerHTML = `<div class="correct-wrong"> <p class="p1">We are sorry!</p>;
      <p class="p2wrong">You didn't passed the exam.</p>`;
}

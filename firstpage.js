const firstPageButton = document.querySelector(".first-button");
const checkbox = document.getElementById("first-checkbox");

firstPageButton.addEventListener("click", function () {
  if (checkbox.checked) {
    setTimeout(function () {
      window.location.href = "feedback.html";
    }, 3000);
  } else {
    alert("Press the checkbox before start test");
  }
});

const rateUsButton = document.getElementById("feedback-button");

rateUsButton.addEventListener("click", function () {
  setTimeout(() => {
    window.location.href = "feedback.html";
  }, 3000);
});

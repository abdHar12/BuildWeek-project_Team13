const starContain = document.getElementById("star-contain");

for (let i = 0; i < 10; i++) {
  let allStar = document.createElement("img");
  allStar.classList.add("all-star");
  allStar.setAttribute("src", "./assets/img/star.svg");
  allStar.setAttribute("alt", "");
  starContain.appendChild(allStar);
}

const stars = document.getElementsByClassName("all-star");

for (let i = 0; i < stars.length; i++) {
  stars[i].addEventListener("click", function () {
    for (let j = 0; j < stars.length; j++) {
      if (j <= i) {
        stars[j].classList.add("feedback-starcolor");
      } else {
        stars[j].classList.remove("feedback-starcolor");
      }
    }
  });
}

button = document.getElementsByClassName("fourth-button");
button[0].addEventListener("click", function (event) {
  event.preventDefault();

  alert("Feedback inviato! Adesso verrà aperta una nuova pagina.");
  window.location.href = "firstpage.html";
  window.open("https://epicode.com/", "_blank");
});

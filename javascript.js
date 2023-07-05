function changeBigImage(imageSrc) {
  const bigImage = document.getElementById("big-image-src");
  bigImage.src = imageSrc;
}

// Navbar Inhalt
const navigationContent = `
<ul>
  <div class="logo">
    <img src="logo.png" width="70" height="70" />
  </div>

  <div class="navtext">
    <li><a href="index.html">Klimaerkundung</a></li>
  </div>

  <div class="navtext">
    <li><a href="missons.html">Missionen</a></li>
  </div>

  <div class="navtext">
    <li><a href="images.html">Kalender</a></li>
  </div>

  <div class="navtext">
    <li><a href="contact.html">Über uns</a></li>
  </div>
</ul>
`;

const navElement = document.querySelector("#myNav");
//navElement.innerHTML = navigationContent;

// Get the button
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

function calculateScore() {
  const answers = {
    q1: "a",
    q2: "b",
    q3: "a",
    q4: "c",
  };
  let score = 0;
  const questions = document.querySelectorAll(".question");
  questions.forEach((question) => {
    const input = question.querySelector("input:checked");
    if (input && input.value === answers[input.name]) {
      score++;
    }
  });
  const result = document.querySelector(".result");
  result.textContent = `Du hast ${score}/1 Antworten richtig! :)`;
}

function handleRadioSelection(radio) {
  const bubble = radio.closest(".bubble");
  const selectedOption = bubble.querySelector(".glow");
  if (selectedOption) {
    selectedOption.classList.remove("glow");
  }
  radio.classList.add("glow");
}

function shakeMe() {
  let imgGlas = document.getElementById("imgGlas");
  imgGlas.className = "shaking";
  setTimeout(function () {
    imgGlas.classList.remove("shaking");
  }, 2000);
  //.style = "animation: shake 2s; animation-iteration-count: 1;";
}

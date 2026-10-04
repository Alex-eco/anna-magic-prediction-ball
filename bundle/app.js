const answers = [
  "YES — definitely",
  "It is certain",
  "Most likely",
  "The signs say YES",
  "Absolutely",
  "Looks promising",
  "Ask again",
  "Try again later",
  "Maybe",
  "The answer is unclear",
  "Not today",
  "Don’t count on it",
  "Very unlikely",
  "NO — not this time",
  "Something unexpected is coming",
  "Trust your instincts",
  "The outlook is positive",
  "Patience will pay off",
  "Better wait and see",
  "You already know the answer"
];

const ball = document.getElementById("ball");
const answer = document.getElementById("answer");
const history = document.getElementById("history");
const askButton = document.getElementById("ask");

function ask() {
  ball.classList.remove("shake");
  void ball.offsetWidth;
  ball.classList.add("shake");
  answer.textContent = "…";

  window.setTimeout(() => {
    const result = answers[Math.floor(Math.random() * answers.length)];
    answer.textContent = result;
    history.textContent = "Last answer: " + result;
  }, 650);
}

ball.addEventListener("click", ask);
ball.addEventListener("keydown", (event) => {
  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();
    ask();
  }
});
askButton.addEventListener("click", ask);

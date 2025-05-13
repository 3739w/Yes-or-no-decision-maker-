function giveAnswer() {
  const answers = ["Yes", "No"];
  const random = Math.floor(Math.random() * answers.length);
  document.getElementById("answer").textContent = "Answer: " + answers[random];
}

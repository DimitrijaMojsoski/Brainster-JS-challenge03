const letters = [
  "q",
  "w",
  "e",
  "r",
  "t",
  "y",
  "u",
  "i",
  "o",
  "p",
  "a",
  "s",
  "d",
  "f",
  "g",
  "h",
  "j",
  "k",
  "l",
  "z",
  "x",
  "c",
  "v",
  "b",
  "n",
  "m",
  " ",
];

const buttons = document.querySelectorAll(".letter");
const spaceButton = document.querySelector(".space");
const parag = document.getElementById("innerText");

buttons.forEach((button, index) => {
  button.addEventListener("click", () => {
    addLetter(letters[index]);
  });
});

spaceButton.addEventListener("click", () => {
  addSpace();
});

function addLetter(letter) {
  document.getElementById("innerText").value += letter;
}

function addSpace() {
  document.getElementById("innerText").value += " ";
}

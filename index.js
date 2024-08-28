const clickedText = document.getElementById("clicked-text");
const clickedButton = document.getElementById("clicked-button");

let count = 0;

clickedButton.addEventListener("click", () => {
  count++;
  clickedText.innerHTML = `Count: ${count}`;
});

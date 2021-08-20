// color change of top player
document.getElementById("top-player").style.color = "tomato";

// color change of top blog

document.getElementById("top-blog").style.color = "tomato";

// background color of top player
const players = document.querySelectorAll(".player");
for (const player of players) {
  player.style.backgroundColor = "rgba(100,5,60,50)";
  player.style.color = "white";
  player.style.borderRadius = "3%";
  player.style.margin = "10px";
  player.style.padding = "20px";
}

// add new item in a list
document.getElementById("add-item").addEventListener("click", function () {
  const newLi = document.createElement("li");
  console.log(newLi);
  newLi.innerText = "New Item";
  document.getElementById("item").appendChild(newLi);
});

// incrase input field value

document.getElementById("inputBtn").addEventListener("click", function () {
  const input = document.getElementById("myInput");
  const inputText = input.value;
  const inputValue = parseInt(inputText);

  // condition
  if (inputValue <= 5) {
    input.value = inputValue + 1;
  }
  if (input.value == 5) {
    document.getElementById("inputBtn").setAttribute("disabled", true);
  }
});

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

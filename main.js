const player1btn = document.querySelector("#player1");
const player2btn = document.querySelector("#player2");
const resetBtn = document.querySelector("#reset");

const player1Score = document.querySelector("#player1Score");

const player2Score = document.querySelector("#player2Score");

const playTo = document.querySelector("#score-amount");

let player1Total = 0;
let player2Total = 0;

function addPlayer1() {
  let win = +playTo.value;
  player1Total++;
  if (player1Total === win) {
    player1Score.innerText = player1Total;
    player1Score.style.color = "green";
    player2Score.style.color = "red";
    player2btn.style.opacity = ".5";
    player1btn.style.opacity = ".5";
    player1btn.disabled = true;
    player2btn.disabled = true;
  } else {
    player1Score.innerText = player1Total;
  }
}

function addPlayer2() {
  let win = +playTo.value;
  player2Total++;
  if (player2Total === win) {
    player2Score.innerText = player2Total;
    player2Score.style.color = "green";
    player1Score.style.color = "red";
    player2btn.style.opacity = ".5";
    player1btn.style.opacity = ".5";
    player2btn.disabled = true;
    player1btn.disabled = true;
  }
  player2Score.innerText = player2Total;
}

function reset() {
  player1Total = 0;
  player2Total = 0;
  player2btn.disabled = false;
  player1btn.disabled = false;
  player1Score.innerText = 0;
  player2Score.innerText = 0;
  player2btn.style.opacity = "1";
  player1btn.style.opacity = "1";
  player2Score.style.color = "black";
  player1Score.style.color = "black";
}

player1btn.addEventListener("click", addPlayer1);

player2btn.addEventListener("click", addPlayer2);

resetBtn.addEventListener("click", reset);

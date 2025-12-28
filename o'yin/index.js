let board = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
let gameOver = false;

const statusText = document.getElementById("status");
const cells = document.querySelectorAll(".cell");

function play(index) {
  if (board[index] !== "" || gameOver) return;

  board[index] = currentPlayer;
  cells[index].innerText = currentPlayer;

  if (checkWin()) {
    statusText.innerText = currentPlayer + " Wins!";
    gameOver = true;
    return;
  }

  if (!board.includes("")) {
    statusText.innerText = "Draw!";
    gameOver = true;
    return;
  }

  currentPlayer = currentPlayer === "X" ? "O" : "X";
  statusText.innerText = "Turn: " + currentPlayer;
}

function checkWin() {
  const wins = [
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [0,4,8],[2,4,6]
  ];

  return wins.some(combo =>
    combo.every(i => board[i] === currentPlayer)
  );
}

function resetGame() {
  board = ["", "", "", "", "", "", "", "", ""];
  cells.forEach(cell => cell.innerText = "");
  currentPlayer = "X";
  gameOver = false;
  statusText.innerText = "Turn: X";
}

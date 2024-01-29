const body = document.querySelector("body");
const { Gameboard } = require("../src/gameBoard");
const { Player } = require("../src/player");

const gameBoardsContainer = document.querySelector(".game-boards-container");

let count = 0;

export function displayBoard(player, color) {
  const gameBoard = document.createElement("div");
  gameBoard.classList.add("game-board");
  gameBoard.style.backgroundColor = color;
  gameBoardsContainer.append(gameBoard);
  player.game.board.forEach((row) => {
    row.forEach((item) => {
      const block = document.createElement("div");
      block.id = count;
      count += 1;
      gameBoard.append(block);
    });
  });
}

document.addEventListener("click", select);

function select() {
  console.log("hello");
}

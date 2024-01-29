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
      block.classList.add("block");
      block.id = count;
      count += 1;
      gameBoard.append(block);
    });
  });
}

document.addEventListener("click", select);

function select(evt) {
  if (evt.target.closest("div") === null) {
    return;
  } else {
    console.log(evt.target.closest("div"));
  }
}

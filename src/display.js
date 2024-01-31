const body = document.querySelector("body");
const { Gameboard } = require("../src/gameBoard");
const { Player } = require("../src/player");

const gameBoardsContainer = document.querySelector(".game-boards-container");

let count = 0;

export function displayBoard(player, color) {
  const gameBoard = document.createElement("div");
  gameBoard.classList.add(`${player.name}-board`);
  gameBoard.style.backgroundColor = color;
  gameBoardsContainer.append(gameBoard);

  player.game.board.forEach((row) => {
    row.forEach((item) => {
      const block = document.createElement("div");
      block.classList.add("block");
      block.id = count;
      count += 1;
      gameBoard.append(block);
      displayShip(item, block);
    });
  });
  count = 0;
}

function displayShip(item, block) {
  if (item.name != undefined) {
    block.style.backgroundColor = "orange";
  }
}

export function switchBoard(playerOne, computer) {
  if (playerOne.turn == false) {
    displayBoard(playerOne, "gray");
    gameBoardsContainer.removeChild(gameBoardsContainer.firstElementChild);
  } else {
    gameBoardsContainer.removeChild(gameBoardsContainer.firstElementChild);
    displayBoard(computer, "blue");
  }
  playerOne.changeTurn();
}

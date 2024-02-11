const body = document.querySelector("body");
const { Gameboard } = require("../src/gameBoard");
const { Player } = require("../src/player");

const gameBoardsContainer = document.querySelector(".game-boards-container");
const turnDisplay = document.querySelector(".turn");

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
      displayMiss(item, block);
      displayHit(item, block);
    });
  });
  count = 0;
}

function displayMiss(item, blockDiv) {
  if (item.missed == true) {
    blockDiv.textContent = "x";
  }
}

export function displayHit(item, blockDiv) {
  if (blockDiv.class == "block hit") {
    console.log(blockDiv);
  }
}

function displayShip(item, block) {
  if (item.name != undefined) {
    block.style.backgroundColor = "orange";
  }
}

export function switchBoard(playerOne, computer) {
  if (playerOne.turn == false) {
    displayBoard(computer, "blue");
    gameBoardsContainer.removeChild(gameBoardsContainer.firstElementChild);
  } else {
    gameBoardsContainer.removeChild(gameBoardsContainer.firstElementChild);
    displayBoard(playerOne, "gray");
  }
  playerOne.changeTurn();
  showTurn(playerOne);
}

export function showTurn(playerOne) {
  playerOne.turn
    ? (turnDisplay.textContent = "Player One make your move")
    : (turnDisplay.textContent = "Player Two make your move");
}

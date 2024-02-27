import { forEach } from "lodash";

const body = document.querySelector("body");
const { Gameboard } = require("./gameBoard");
const { Player } = require("../src/player");

const GamesContainer = document.querySelector(".game-boards-container");
const turnDisplay = document.querySelector(".turn");

let count = 0;
const gameBoard = document.createElement("div");

export function displayBoard(player, color) {
  styleGameBoard(player, color);
  player.game.board.forEach((row) => {
    row.forEach((item) => {
      const block = document.createElement("div");
      block.setAttribute("id", count);
      count += 1;
      gameBoard.append(block);
      displayShip(item, block);
      displayMiss(item, block);
      displayHit(item, block);
    });
  });
  count = 0;
}

function styleGameBoard(player, color) {
  gameBoard.classList.add(`${player.name}-board`);
  gameBoard.style.backgroundColor = color;
  GamesContainer.append(gameBoard);
}

function displayMiss(item, blockDiv) {
  if (item.missed == true) {
    blockDiv.textContent = "x";
  }
}

export function displayHit(item, blockDiv) {
  if (blockDiv.class == "block hit") {
  }
}

function displayShip(item, block) {
  if (item.length >= 0) {
    block.style.backgroundColor = "orange";
  }
}

export function switchBoard(playerOne, computer) {
  if (playerOne.turn == false) {
    displayBoard(computer, "blue");
    GamesContainer.removeChild(GamesContainer.firstElementChild);
  } else {
    GamesContainer.removeChild(GamesContainer.firstElementChild);
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

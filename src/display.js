import { forEach } from "lodash";

const body = document.querySelector("body");
const { Game } = require("./gameBoard");
const { Player } = require("../src/player");

const GamesContainer = document.querySelector(".game-boards-container");
const turnDisplay = document.querySelector(".turn");

let count = 0;

export function displayBoard(player, color) {
  const Game = document.createElement("div");
  Game.classList.add(`${player.name}-board`);
  Game.style.backgroundColor = color;
  GamesContainer.append(Game);

  player.game.board.forEach((row) => {
    row.forEach((item) => {
      const block = document.createElement("div");
      block.classList.add("block");
      if (item.arry != undefined) {
        block.id = item.arry.shift();
      } else {
        block.id = count;
      }
      count += 1;
      Game.append(block);
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

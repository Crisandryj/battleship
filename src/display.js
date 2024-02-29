import { forEach } from "lodash";

const body = document.querySelector("body");
const { Gameboard } = require("./gameBoard");
const { Player } = require("../src/player");

const GamesContainer = document.querySelector(".game-boards-container");
const turnDisplay = document.querySelector(".turn");

let count = 0;

export function displayBoard(player, playerTwo, oneColor, twoColor) {
  const currentPlayerBoard = document.createElement("div");
  const opponentGameboard = document.createElement("div");
  styleGameBoard(currentPlayerBoard, player, oneColor);
  styleGameBoard(opponentGameboard, player, twoColor);

  GamesContainer.append(currentPlayerBoard);
  GamesContainer.append(opponentGameboard);

  loop(player, currentPlayerBoard);
  loop(playerTwo, opponentGameboard);
}

//think of better name
function loop(player, board) {
  player.game.board.forEach((row) => {
    row.forEach((item) => {
      const block = document.createElement("div");
      block.setAttribute("id", count);
      count += 1;
      board.append(block);
      displayAllShip(item, block);
      displayMiss(item, block);
      displayHit(item, block);
    });
  });
  count = 0;
}
function styleGameBoard(gameBoard, player, color) {
  gameBoard.classList.add(`${player.name}-board`);
  gameBoard.style.backgroundColor = color;
}

function displayMiss(item, blockDiv) {
  if (item.missed == true) {
    blockDiv.textContent = "x";
  }
}

function displayHit(item, blockDiv) {
  // recieve div location from recieve attack and mark X
  if (item.id) {
    if (item.id.includes(blockDiv.id)) {
      blockDiv.textContent = "X";
    }
  }
}

//Allow current player to view his ship placement
function displayAllShip(item, block) {
  if (item.length >= 0) {
    block.style.backgroundColor = "orange";
  }
}

export function switchBoard(playerOne, playerTwo) {
  if (playerOne.turn == false) {
    displayBoard(playerTwo, playerOne, "blue", "gray");
    GamesContainer.removeChild(GamesContainer.firstElementChild);
    GamesContainer.removeChild(GamesContainer.firstElementChild);
  } else {
    GamesContainer.removeChild(GamesContainer.firstElementChild);
    GamesContainer.removeChild(GamesContainer.firstElementChild);
    displayBoard(playerOne, playerTwo, "gray", "blue");
  }
  playerOne.changeTurn();
  showTurn(playerOne);
}

export function showTurn(playerOne) {
  playerOne.turn
    ? (turnDisplay.textContent = "Player One make your move")
    : (turnDisplay.textContent = "Player Two make your move");
}

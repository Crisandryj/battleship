import { forEach } from "lodash";

const body = document.querySelector("body");
const { Gameboard } = require("./gameBoard");
const { Player } = require("../src/player");

const GamesContainer = document.querySelector(".game-boards-container");
const turnDisplay = document.querySelector(".turn");
const boardNames = document.querySelector(".boardname");
let count = 0;

export function displayBoard(playerOne, playerTwo, oneColor, twoColor) {
  const playerOneHeader = document.createElement("h2");
  const playerTwoHeader = document.createElement("h2");

  playerOneHeader.textContent = "Current";
  playerTwoHeader.textContent = "Opponent";

  boardNames.append(playerOneHeader);
  boardNames.append(playerTwoHeader);

  const playerOneBoard = document.createElement("div");
  const playerTwoBoard = document.createElement("div");

  styleGameBoard(playerOneBoard, playerOne, oneColor);
  styleGameBoard(playerTwoBoard, playerTwo, twoColor);

  GamesContainer.append(playerOneBoard);
  GamesContainer.append(playerTwoBoard);

  loop(playerOne, playerOneBoard);
  loop(playerTwo, playerTwoBoard);
}

export function displaySetUpBoard(player) {
  const board = document.createElement("div");
  loop(player, board);
  GamesContainer.append(board);
  board.classList.add(`${player.name}-board`);
}

//think of better name
function loop(player, board) {
  player.game.board.forEach((row) => {
    row.forEach((item) => {
      const block = document.createElement("div");
      block.setAttribute("id", count);
      count += 1;
      board.append(block);
      displayCurrentPlayerShips(item, block, player);
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
function displayCurrentPlayerShips(item, block, player) {
  console.log(player.turn);
  if (item.length >= 0 && player.turn == true) {
    block.style.backgroundColor = "orange";
  }
}

export function switchBoard(playerOne, playerTwo) {
  if (playerOne.turn == false) {
    displayBoard(playerTwo, playerOne, "blue", "gray");
    GamesContainer.removeChild(GamesContainer.firstElementChild);
    GamesContainer.removeChild(GamesContainer.firstElementChild);
    boardNames.removeChild(boardNames.firstElementChild);
    boardNames.removeChild(boardNames.firstElementChild);
  } else {
    GamesContainer.removeChild(GamesContainer.firstElementChild);
    GamesContainer.removeChild(GamesContainer.firstElementChild);
    boardNames.removeChild(boardNames.firstElementChild);
    boardNames.removeChild(boardNames.firstElementChild);
    displayBoard(playerOne, playerTwo, "gray", "blue");
  }

  showTurn(playerOne);
}

export function showTurn(playerOne) {
  playerOne.turn
    ? (turnDisplay.textContent = "Player One make your move")
    : (turnDisplay.textContent = "Player Two make your move");
}

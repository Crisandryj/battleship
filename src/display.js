import { forEach } from "lodash";

const body = document.querySelector("body");
const { Gameboard } = require("./gameBoard");
const { Player } = require("../src/player");

const GamesContainer = document.querySelector(".game-boards-container");
const turnDisplay = document.querySelector(".display");
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

  fillBoardloop(playerOne, playerOneBoard);
  fillBoardloop(playerTwo, playerTwoBoard);
}

export function displaySetUpBoard(player) {
  const board = document.createElement("div");
  fillBoardloop(player, board);
  GamesContainer.append(board);
  board.classList.add(`${player.name}-board`);
}

function fillBoardloop(player, board) {
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
  gameOver(playerOne);
}

export function showTurn(playerOne) {
  playerOne.turn
    ? (turnDisplay.textContent = "P1 MAKE YOUR MOVE")
    : (turnDisplay.textContent = "P2 MAKE YOUR MOVE");
}

export function gameOver(player) {
  if (player.game.allShipsSunk()) {
    turnDisplay.textContent = `${player.name} has been defeated`;
  } else {
    showTurn(player);
  }
}
export function clearColors() {
  let div = document.getElementById("0");
  for (let i = 99; i >= 0; i--) {
    let select = document.getElementById(`${parseInt(div.id) + i}`);
    select.style.removeProperty("background-color");
  }
}

// Color the blocks where the ships were placed
export function colorSquares(ship, evt, turn) {
  let start;
  let div = evt.target.closest("div");
  let row = div.id[0];
  let column = div.id[0][0];
  //select veritcal blocks to color
  if (turn == true) {
    //stop from ships overlapping
    for (let i = ship.length - 1; i >= 0; i--) {
      start = i * 10;
      let select = document.getElementById(`${parseInt(div.id) + start}`);
      if (select.style.backgroundColor == "orange") {
        return;
      }
    }
    for (let i = ship.length - 1; i >= 0; i--) {
      start = i * 10;
      let num = parseInt(div.id + start).toString()[0];
      if (parseInt(num[0]) != parseInt(column)) {
        break;
      }
      let select = document.getElementById(`${parseInt(div.id) + start}`);
      select.style.backgroundColor = "orange";
      start -= 10;
    }
  } else if (turn == false) {
    //stop from ships overlapping
    for (let i = ship.length - 1; i >= 0; i--) {
      let select = document.getElementById(`${parseInt(div.id) + i}`);
      if (select.style.backgroundColor == "orange") {
        return;
      }
    }
    for (let i = ship.length - 1; i >= 0; i--) {
      let select = document.getElementById(`${parseInt(div.id) + i}`);

      select.style.backgroundColor = "orange";
    }
  }
}

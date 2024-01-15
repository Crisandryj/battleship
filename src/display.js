const body = document.querySelector("body");
const { Gameboard } = require("../src/gameBoard");
const { Player } = require("../src/player");

function addRow(n, table) {
  for (let i = 0; i < n; i++) {
    let row = table.insertRow(-1);
    for (let i = 0; i < n; i++) {
      row.insertCell(-1);
    }
  }
}

function createTable(classNAme) {
  const table = document.createElement("Table");
  table.classList.add(classNAme);
  body.appendChild(table);
  addRow(10, table);
}

export function renderBoard(board, className) {
  createTable(className);
  let table = document.querySelector(`.${className}`);
  for (let i = 0; i < 10; i++) {
    for (let n = 0; n < 10; n++) {
      let rowCell = table.rows[i].cells[n];
      if (board[i][n].occupied == false) {
        rowCell.textContent = 0;
      } else {
        rowCell.textContent = 1;
      }
    }
  }
}

export function processAttack(player, opp) {
  const oppTbody = document.querySelector(".compBoard");
  const playerTbody = document.querySelector(".p1Board");

  if (player.turn == true) {
    console.log("true active");

    oppTbody.addEventListener("click", function (e) {
      const cell = e.target.closest("td");
      if (!cell) {
        return;
      } // Quit, not clicked on a cell
      const row = cell.parentElement;
      //attack
      opp.game.recieveAttack(row.rowIndex, cell.cellIndex);
    });
  }
  if (player.turn == false) {
    console.log("false active");

    playerTbody.addEventListener("click", function (e) {
      const cell = e.target.closest("td");
      if (!cell) {
        return;
      } // Quit, not clicked on a cell
      const row = cell.parentElement;
      //attack
      player.game.recieveAttack(row.rowIndex, cell.cellIndex);
    });
  }

  return;
}

function renderAttack(player, opp) {
  if (player.turn == true) {
    if (opp.game.board[row.rowIndex][cell.cellIndex].hit == true) {
      oppTbody.rows[row.rowIndex].cells[cell.cellIndex].textContent = "X";
    } else {
      oppTbody.rows[row.rowIndex].cells[cell.cellIndex].textContent = "x";
    }
  } else {
    if (player.game.board[row.rowIndex][cell.cellIndex].hit == true) {
      playerTbody.rows[row.rowIndex].cells[cell.cellIndex].textContent = "X";
    } else {
      playerTbody.rows[row.rowIndex].cells[cell.cellIndex].textContent = "x";
    }
  }
}

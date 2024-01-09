const body = document.querySelector("body");
const { Gameboard } = require("../src/gameBoard");

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
      let row = table.rows[i].cells[n];
      if (board[i][n].occupied == false) {
        row.textContent = 0;
      } else {
        row.textContent = 1;
      }
    }
  }
}

//Work on
//Board not being hit by attach (true is not populating for either missed or hit)
export function renderAttack(player, opp) {
  const tbody = document.querySelector(".compBoard");
  tbody.addEventListener("click", function (e) {
    const cell = e.target.closest("td");
    if (!cell) {
      return;
    } // Quit, not clicked on a cell
    const row = cell.parentElement;
    //place attack (working on this)
    if (player.turn == true) {
      //attack
      opp.game.recieveAttack(row.rowIndex, cell.cellIndex);
      if (opp.game.board[row.rowIndex][cell.cellIndex].hit == true) {
        opp.game.board[row.rowIndex][cell.cellIndex].textContent = "X";
      } else {
        opp.game.board[row.rowIndex][cell.cellIndex].textContent = "x";
      }
    }
  });
}

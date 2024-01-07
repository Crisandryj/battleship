const body = document.querySelector("body");

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
    console.log(i);
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

export function renderAttack() {
  const tbody = document.querySelector(".p1Board");
  tbody.addEventListener("click", function (e) {
    const cell = e.target.closest("td");
    if (!cell) {
      return;
    } // Quit, not clicked on a cell
    const row = cell.parentElement;
    console.log(cell.innerHTML, row.rowIndex, cell.cellIndex);
  });
}
//get coordinates
//use gameboard recieve attach
//render new board

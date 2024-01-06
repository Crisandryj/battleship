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
  console.log(table);
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

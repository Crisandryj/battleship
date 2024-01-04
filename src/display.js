const body = document.querySelector("body");

function addRow(n, table) {
  for (let i = 0; i < n; i++) {
    let row = table.insertRow(-1);
    for (let i = 0; i < n; i++) {
      row.insertCell(-1);
    }
  }
}

function createTable() {
  const table = document.createElement("Table");
  table.classList.add("board");
  body.appendChild(table);
  addRow(10, table);
}

export function renderBoard(board) {
  createTable();
  let table = document.querySelector("table");
  for (let i = 0; i < 10; i++) {
    console.log(i);
    for (let n = 0; n < 10; n++) {
      let row = table.rows[i].cells[n];
      row.textContent = board[i][n];
    }
  }
}

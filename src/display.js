const table = document.createElement("Table");
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
  body.appendChild(table);
  addRow(10, table);
}

export function renderBoard(board) {}

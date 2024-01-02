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

export function renderBoard(board) {
  body.appendChild(table);
  addRow(10, table);
}

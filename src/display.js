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
  board.forEach((row) => {
    row.forEach((cell) => {
      console.log(cell);
    });
  });
  let row1 = table.rows[0].cells;
}

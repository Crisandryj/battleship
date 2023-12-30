const table = document.createElement("Table");
const body = document.querySelector("body");

function addRow(n, table) {
  for (let i = 0; i < n; i++) {
    table.insertRow(-1);
  }
}

export function renderTable() {
  body.appendChild(table);
  addRow(10, table);
}

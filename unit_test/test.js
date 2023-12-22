const { Ship } = require("../src/ships");
const { Gameboard } = require("../src/gameBoard");
const { Cell } = require("../src/cells");

describe("Ships", () => {
  const ship = new Ship(2);

  test("length of ship", () => {
    expect(ship.length).toBe(2);
  });

  test("takes damage", () => {
    expect(ship.hit()).toBe((ship.hits = 1));
  });

  test("Sunk ship", () => {
    expect(ship.isSunk()).toBeFalsy();
  });
});

describe("Gameboard", () => {
  const gameBoard = new Gameboard();

  test("# of rows", () => {
    expect(gameBoard.rows).toBe(10);
  });

  test("# of columns", () => {
    expect(gameBoard.columns).toBe(10);
  });

  test("array created", () => {
    expect(gameBoard.board.isArray).toBeTruthy;
  });

  test("ship created", () => {
    expect(gameBoard.createBoard()).toStrictEqual([
      [
        new Cell(),
        new Cell(),
        new Cell(),
        new Cell(),
        new Cell(),
        new Cell(),
        new Cell(),
        new Cell(),
        new Cell(),
        new Cell(),
      ],
      [
        new Cell(),
        new Cell(),
        new Cell(),
        new Cell(),
        new Cell(),
        new Cell(),
        new Cell(),
        new Cell(),
        new Cell(),
        new Cell(),
      ],
      [
        new Cell(),
        new Cell(),
        new Cell(),
        new Cell(),
        new Cell(),
        new Cell(),
        new Cell(),
        new Cell(),
        new Cell(),
        new Cell(),
      ],
      [
        new Cell(),
        new Cell(),
        new Cell(),
        new Cell(),
        new Cell(),
        new Cell(),
        new Cell(),
        new Cell(),
        new Cell(),
        new Cell(),
      ],
      [
        new Cell(),
        new Cell(),
        new Cell(),
        new Cell(),
        new Cell(),
        new Cell(),
        new Cell(),
        new Cell(),
        new Cell(),
        new Cell(),
      ],
      [
        new Cell(),
        new Cell(),
        new Cell(),
        new Cell(),
        new Cell(),
        new Cell(),
        new Cell(),
        new Cell(),
        new Cell(),
        new Cell(),
      ],
      [
        new Cell(),
        new Cell(),
        new Cell(),
        new Cell(),
        new Cell(),
        new Cell(),
        new Cell(),
        new Cell(),
        new Cell(),
        new Cell(),
      ],
      [
        new Cell(),
        new Cell(),
        new Cell(),
        new Cell(),
        new Cell(),
        new Cell(),
        new Cell(),
        new Cell(),
        new Cell(),
        new Cell(),
      ],
      [
        new Cell(),
        new Cell(),
        new Cell(),
        new Cell(),
        new Cell(),
        new Cell(),
        new Cell(),
        new Cell(),
        new Cell(),
        new Cell(),
      ],
      [
        new Cell(),
        new Cell(),
        new Cell(),
        new Cell(),
        new Cell(),
        new Cell(),
        new Cell(),
        new Cell(),
        new Cell(),
        new Cell(),
      ],
    ]);
  });
});

describe("Cell", () => {
  const cell = new Cell();

  test("cell created", () => {
    expect(cell.hit).toBe(0);
  });
});

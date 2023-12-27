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

  test("board created with cells", () => {
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

describe("board created", () => {
  const gameBoard = new Gameboard();

  beforeEach(() => {
    gameBoard.createBoard();
  });

  test("Ship placed on start", () => {
    gameBoard.placeShip(4, "v", 2, 2);
    expect(gameBoard.board[2][2].occupied).toEqual(true);
  });

  test("Ship placed on end for vertical", () => {
    gameBoard.placeShip(4, "v", 2, 2);
    expect(gameBoard.board[2][5].occupied).toBe(true);
  });

  test("Ship placed on end for horizotal", () => {
    gameBoard.placeShip(4, "h", 2, 2);
    expect(gameBoard.board[5][2].occupied).toBe(true);
  });

  test("Recieve attack from coordinates", () => {
    gameBoard.attack(2, 2);
    expect(gameBoard.board[2][2].hit).toBe(true);
  });
});

describe("Cell", () => {
  const cell = new Cell();

  test("cell created", () => {
    expect(cell.hit).toBeFalsy;
  });
  test("cell not occupied", () => {
    expect(cell.occupied).toBeFalsy;
  });
});

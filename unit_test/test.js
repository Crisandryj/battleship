const { Ship } = require("../src/ships");
const { Gameboard } = require("../src/gameBoard");

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

  test("board created", () => {
    expect(gameBoard.createBoard()).toStrictEqual([
      [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}],
      [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}],
      [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}],
      [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}],
      [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}],
      [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}],
      [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}],
      [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}],
      [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}],
      [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}],
    ]);
  });
});

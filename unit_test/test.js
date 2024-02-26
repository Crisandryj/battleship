const { Ship } = require("../src/ships");
const { Gameboard } = require("../src/gameBoard");

const { Player } = require("../src/player");

describe("Ships", () => {
  const ship = new Ship(2);

  test("length of ship", () => {
    expect(ship.length).toBe(2);
  });

  test("takes damage", () => {
    expect(ship.hit()).toBe(ship.hits);
  });

  test("Sunk ship", () => {
    expect(ship.isSunk()).toBeFalsy();
  });
});

describe("Game", () => {
  const game = new Gameboard();

  test("# of rows", () => {
    expect(game.rows).toBe(10);
  });

  test("# of columns", () => {
    expect(game.columns).toBe(10);
  });

  test("array created", () => {
    expect(game.board.isArray).toBeTruthy;
  });

  test("board created with cells", () => {
    expect(game.createBoard()).toStrictEqual([
      [
        { occupied: false, missed: false },
        { occupied: false, missed: false },
        { occupied: false, missed: false },
        { occupied: false, missed: false },
        { occupied: false, missed: false },
        { occupied: false, missed: false },
        { occupied: false, missed: false },
        { occupied: false, missed: false },
        { occupied: false, missed: false },
        { occupied: false, missed: false },
      ],
      [
        { occupied: false, missed: false },
        { occupied: false, missed: false },
        { occupied: false, missed: false },
        { occupied: false, missed: false },
        { occupied: false, missed: false },
        { occupied: false, missed: false },
        { occupied: false, missed: false },
        { occupied: false, missed: false },
        { occupied: false, missed: false },
        { occupied: false, missed: false },
      ],
      [
        { occupied: false, missed: false },
        { occupied: false, missed: false },
        { occupied: false, missed: false },
        { occupied: false, missed: false },
        { occupied: false, missed: false },
        { occupied: false, missed: false },
        { occupied: false, missed: false },
        { occupied: false, missed: false },
        { occupied: false, missed: false },
        { occupied: false, missed: false },
      ],
      [
        { occupied: false, missed: false },
        { occupied: false, missed: false },
        { occupied: false, missed: false },
        { occupied: false, missed: false },
        { occupied: false, missed: false },
        { occupied: false, missed: false },
        { occupied: false, missed: false },
        { occupied: false, missed: false },
        { occupied: false, missed: false },
        { occupied: false, missed: false },
      ],
      [
        { occupied: false, missed: false },
        { occupied: false, missed: false },
        { occupied: false, missed: false },
        { occupied: false, missed: false },
        { occupied: false, missed: false },
        { occupied: false, missed: false },
        { occupied: false, missed: false },
        { occupied: false, missed: false },
        { occupied: false, missed: false },
        { occupied: false, missed: false },
      ],
      [
        { occupied: false, missed: false },
        { occupied: false, missed: false },
        { occupied: false, missed: false },
        { occupied: false, missed: false },
        { occupied: false, missed: false },
        { occupied: false, missed: false },
        { occupied: false, missed: false },
        { occupied: false, missed: false },
        { occupied: false, missed: false },
        { occupied: false, missed: false },
      ],
      [
        { occupied: false, missed: false },
        { occupied: false, missed: false },
        { occupied: false, missed: false },
        { occupied: false, missed: false },
        { occupied: false, missed: false },
        { occupied: false, missed: false },
        { occupied: false, missed: false },
        { occupied: false, missed: false },
        { occupied: false, missed: false },
        { occupied: false, missed: false },
      ],
      [
        { occupied: false, missed: false },
        { occupied: false, missed: false },
        { occupied: false, missed: false },
        { occupied: false, missed: false },
        { occupied: false, missed: false },
        { occupied: false, missed: false },
        { occupied: false, missed: false },
        { occupied: false, missed: false },
        { occupied: false, missed: false },
        { occupied: false, missed: false },
      ],
      [
        { occupied: false, missed: false },
        { occupied: false, missed: false },
        { occupied: false, missed: false },
        { occupied: false, missed: false },
        { occupied: false, missed: false },
        { occupied: false, missed: false },
        { occupied: false, missed: false },
        { occupied: false, missed: false },
        { occupied: false, missed: false },
        { occupied: false, missed: false },
      ],
      [
        { occupied: false, missed: false },
        { occupied: false, missed: false },
        { occupied: false, missed: false },
        { occupied: false, missed: false },
        { occupied: false, missed: false },
        { occupied: false, missed: false },
        { occupied: false, missed: false },
        { occupied: false, missed: false },
        { occupied: false, missed: false },
        { occupied: false, missed: false },
      ],
    ]);
  });
});

describe("board created", () => {
  const game = new Gameboard();

  beforeEach(() => {
    game.createBoard();
    game.placeShip(5, false, 2, 2);
    game.placeShip(5, true, 2, 2);
  });

  test("Ship object placed on start", () => {
    expect(game.board[2][2]).toEqual({
      hits: 0,
      length: 5,
      sunk: false,
    });
  });

  test("Ship placed on end for vertical", () => {
    expect(game.board[2][5]).toEqual({
      hits: 0,
      length: 5,
      sunk: false,
    });
  });

  test("Ship placed on end for horizontal", () => {
    expect(game.board[5][2]).toEqual({
      hits: 0,
      length: 5,
      sunk: false,
    });
  });

  test("Recieve attack from coordinates that hit", () => {
    game.recieveAttack(2, 2);
    expect(game.board[2][2]).toEqual({
      hits: 1,
      length: 5,
      sunk: false,
    });
  });

  test("Recieve attack from coordinates that missed", () => {
    game.recieveAttack(1, 1);
    expect(game.board[1][1].missed).toBe(true);
  });
});

describe("board with all ships sunk", () => {
  const game = new Gameboard();

  beforeEach(() => {
    game.createBoard();

    game.placeShip(5, true, 2, 2);
    game.placeShip(4, true, 2, 3);
    game.placeShip(3, true, 2, 4);
    game.placeShip(3, true, 2, 5);
    game.placeShip(2, true, 2, 6);

    game.board.forEach((arry) => {
      arry.forEach((cell) => {
        if (cell.length >= 0) {
          cell.hit();
        }
      });
    });
  });

  test("All ships sunk", () => {
    expect(game.allShipsSunk()).toBe(true);
  });
});

describe("Player", () => {
  const player = new Player("James");
  const game = new Gameboard();
  test("player has board", () => {
    expect(player.board).toStrictEqual([
      [
        { occupied: false, missed: false },
        { occupied: false, missed: false },
        { occupied: false, missed: false },
        { occupied: false, missed: false },
        { occupied: false, missed: false },
        { occupied: false, missed: false },
        { occupied: false, missed: false },
        { occupied: false, missed: false },
        { occupied: false, missed: false },
        { occupied: false, missed: false },
      ],
      [
        { occupied: false, missed: false },
        { occupied: false, missed: false },
        { occupied: false, missed: false },
        { occupied: false, missed: false },
        { occupied: false, missed: false },
        { occupied: false, missed: false },
        { occupied: false, missed: false },
        { occupied: false, missed: false },
        { occupied: false, missed: false },
        { occupied: false, missed: false },
      ],
      [
        { occupied: false, missed: false },
        { occupied: false, missed: false },
        { occupied: false, missed: false },
        { occupied: false, missed: false },
        { occupied: false, missed: false },
        { occupied: false, missed: false },
        { occupied: false, missed: false },
        { occupied: false, missed: false },
        { occupied: false, missed: false },
        { occupied: false, missed: false },
      ],
      [
        { occupied: false, missed: false },
        { occupied: false, missed: false },
        { occupied: false, missed: false },
        { occupied: false, missed: false },
        { occupied: false, missed: false },
        { occupied: false, missed: false },
        { occupied: false, missed: false },
        { occupied: false, missed: false },
        { occupied: false, missed: false },
        { occupied: false, missed: false },
      ],
      [
        { occupied: false, missed: false },
        { occupied: false, missed: false },
        { occupied: false, missed: false },
        { occupied: false, missed: false },
        { occupied: false, missed: false },
        { occupied: false, missed: false },
        { occupied: false, missed: false },
        { occupied: false, missed: false },
        { occupied: false, missed: false },
        { occupied: false, missed: false },
      ],
      [
        { occupied: false, missed: false },
        { occupied: false, missed: false },
        { occupied: false, missed: false },
        { occupied: false, missed: false },
        { occupied: false, missed: false },
        { occupied: false, missed: false },
        { occupied: false, missed: false },
        { occupied: false, missed: false },
        { occupied: false, missed: false },
        { occupied: false, missed: false },
      ],
      [
        { occupied: false, missed: false },
        { occupied: false, missed: false },
        { occupied: false, missed: false },
        { occupied: false, missed: false },
        { occupied: false, missed: false },
        { occupied: false, missed: false },
        { occupied: false, missed: false },
        { occupied: false, missed: false },
        { occupied: false, missed: false },
        { occupied: false, missed: false },
      ],
      [
        { occupied: false, missed: false },
        { occupied: false, missed: false },
        { occupied: false, missed: false },
        { occupied: false, missed: false },
        { occupied: false, missed: false },
        { occupied: false, missed: false },
        { occupied: false, missed: false },
        { occupied: false, missed: false },
        { occupied: false, missed: false },
        { occupied: false, missed: false },
      ],
      [
        { occupied: false, missed: false },
        { occupied: false, missed: false },
        { occupied: false, missed: false },
        { occupied: false, missed: false },
        { occupied: false, missed: false },
        { occupied: false, missed: false },
        { occupied: false, missed: false },
        { occupied: false, missed: false },
        { occupied: false, missed: false },
        { occupied: false, missed: false },
      ],
      [
        { occupied: false, missed: false },
        { occupied: false, missed: false },
        { occupied: false, missed: false },
        { occupied: false, missed: false },
        { occupied: false, missed: false },
        { occupied: false, missed: false },
        { occupied: false, missed: false },
        { occupied: false, missed: false },
        { occupied: false, missed: false },
        { occupied: false, missed: false },
      ],
    ]);
  });
  game.createBoard();
  test("player created", () => {
    expect(player.name).toBe("James");
  });

  test("change turn", () => {
    player.changeTurn();
    expect(player.turn).toBe(true);
  });

  test("computer make move", () => {
    player.computerMove(game.board, 2, 2);
    expect(game.board.some((array) => (cell) => cell.missed == true)).toBe(
      true
    );
  });
});

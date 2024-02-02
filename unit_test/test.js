const { Ship } = require("../src/ships");
const { Gameboard } = require("../src/gameBoard");

const { Player } = require("../src/player");

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

describe("board created", () => {
  const gameBoard = new Gameboard();
  const bigShip = new Ship(5);

  beforeEach(() => {
    gameBoard.createBoard();
    gameBoard.placeShip(bigShip, bigShip.length, "v", 2, 2);
    gameBoard.placeShip(bigShip, bigShip.length, "h", 2, 2);
  });

  test("Ship object placed on start", () => {
    expect(gameBoard.board[2][2]).toEqual({
      length: 5,
      hits: 0,
      occupied: true,
    });
  });

  test("Ship placed on end for vertical", () => {
    expect(gameBoard.board[2][5]).toEqual({
      length: 5,
      hits: 0,
      occupied: true,
    });
  });

  test("Ship placed on end for horizontal", () => {
    expect(gameBoard.board[5][2]).toEqual({
      length: 5,
      hits: 0,
      occupied: true,
    });
  });

  test("Recieve attack from coordinates that hit", () => {
    gameBoard.recieveAttack(2, 2);
    expect(gameBoard.board[2][2]).toEqual({
      length: 5,
      hits: 1,
      occupied: true,
    });
  });

  test("Recieve attack from coordinates that missed", () => {
    gameBoard.recieveAttack(1, 1);
    expect(gameBoard.board[1][1].missed).toBe(true);
  });
});

describe("board with all ships sunk", () => {
  const gameBoard = new Gameboard();

  beforeEach(() => {
    gameBoard.createBoard();
  });

  beforeEach(() => {
    const bigOne = new Ship(5);
    const scarey = new Ship(4);
    const middleChild = new Ship(3);
    const sneaky = new Ship(3);
    const littleOne = new Ship(2);

    gameBoard.placeShip(bigOne, bigOne.length, "v", 2, 2);
    gameBoard.placeShip(scarey, scarey.length, "v", 3, 2);
    gameBoard.placeShip(middleChild, middleChild.length, "v", 4, 2);
    gameBoard.placeShip(sneaky, sneaky.length, "v", 5, 2);
    gameBoard.placeShip(littleOne, littleOne.length, "v", 6, 2);

    gameBoard.board.forEach((arry) => {
      arry.forEach((cell) => {
        if (cell.occupied == true) {
          cell.hit = true;
        }
      });
    });
  });

  test("All ships sunk", () => {
    expect(gameBoard.allShipsSunk()).toBe(true);
  });
});

describe("Player", () => {
  const player = new Player("James");
  const gameBoard = new Gameboard();
  test("player has board", () => {
    expect(player.board).toStrictEqual([
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
  gameBoard.createBoard();
  test("player created", () => {
    expect(player.name).toBe("James");
  });

  test("change turn", () => {
    player.changeTurn();
    expect(player.turn).toBe(true);
  });

  test("computer make move", () => {
    player.computerMove(gameBoard.board, 2, 2);
    expect(gameBoard.board.some((array) => (cell) => cell.missed == true)).toBe(
      true
    );
  });
});

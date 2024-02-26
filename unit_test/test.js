const { Ship } = require("../src/ships");
const { Game } = require("../src/gameBoard");

const { Player } = require("../src/player");

describe("Ships", () => {
  const ship = new Ship(2);

  test("length of ship", () => {
    expect(ship.length).toBe(2);
  });

  test("takes damage", () => {
    expect(ship.hit()).toBe(ship.hits == 1);
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
  const bigShip = new Ship(5);

  beforeEach(() => {
    game.createBoard();
    game.placeShip(bigShip, bigShip.length, "v", 2, 2);
    game.placeShip(bigShip, bigShip.length, "h", 2, 2);
  });

  test("Ship object placed on start", () => {
    expect(game.board[2][2]).toEqual({
      arry: [0, 1, 2, 3, 4],
      hits: 0,
      length: 5,
      name: "big",
      occupied: true,
    });
  });

  test("Ship placed on end for vertical", () => {
    expect(game.board[2][5]).toEqual({
      arry: [0, 1, 2, 3, 4],
      hits: 0,
      length: 5,
      name: "big",
      occupied: true,
    });
  });

  test("Ship placed on end for horizontal", () => {
    expect(game.board[5][2]).toEqual({
      arry: [0, 1, 2, 3, 4],
      hits: 0,
      length: 5,
      name: "big",
      occupied: true,
    });
  });

  test("Recieve attack from coordinates that hit", () => {
    game.recieveAttack(2, 2);
    expect(game.board[2][2]).toEqual({
      arry: [0, 1, 2, 3, 4],
      hits: 1,
      length: 5,
      name: "big",
      occupied: true,
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
    const bigOne = new Ship(5);
    const scarey = new Ship(4);
    const middleChild = new Ship(3);
    const sneaky = new Ship(3);
    const littleOne = new Ship(2);

    game.placeShip(bigOne, bigOne.length, "v", 2, 2);
    game.placeShip(scarey, scarey.length, "v", 3, 2);
    game.placeShip(middleChild, middleChild.length, "v", 4, 2);
    game.placeShip(sneaky, sneaky.length, "v", 5, 2);
    game.placeShip(littleOne, littleOne.length, "v", 6, 2);

    game.board.forEach((arry) => {
      arry.forEach((cell) => {
        if (cell.occupied == true) {
          cell.hits += 1;
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

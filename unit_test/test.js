const { Ship } = require("../src/ships");
const { Game } = require("../src/Game");

const { Player } = require("../src/player");

describe("Ships", () => {
  const ship = new Ship("Pro", 2);

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

describe("Game", () => {
  const Game = new Game();

  test("# of rows", () => {
    expect(Game.rows).toBe(10);
  });

  test("# of columns", () => {
    expect(Game.columns).toBe(10);
  });

  test("array created", () => {
    expect(Game.board.isArray).toBeTruthy;
  });

  test("board created with cells", () => {
    expect(Game.createBoard()).toStrictEqual([
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
  const Game = new Game();
  const bigShip = new Ship("big", 5);

  beforeEach(() => {
    Game.createBoard();
    Game.placeShip(bigShip, bigShip.length, "v", 2, 2);
    Game.placeShip(bigShip, bigShip.length, "h", 2, 2);
  });

  test("Ship object placed on start", () => {
    expect(Game.board[2][2]).toEqual({
      arry: [0, 1, 2, 3, 4],
      hits: 0,
      length: 5,
      name: "big",
      occupied: true,
    });
  });

  test("Ship placed on end for vertical", () => {
    expect(Game.board[2][5]).toEqual({
      arry: [0, 1, 2, 3, 4],
      hits: 0,
      length: 5,
      name: "big",
      occupied: true,
    });
  });

  test("Ship placed on end for horizontal", () => {
    expect(Game.board[5][2]).toEqual({
      arry: [0, 1, 2, 3, 4],
      hits: 0,
      length: 5,
      name: "big",
      occupied: true,
    });
  });

  test("Recieve attack from coordinates that hit", () => {
    Game.recieveAttack(2, 2);
    expect(Game.board[2][2]).toEqual({
      arry: [0, 1, 2, 3, 4],
      hits: 1,
      length: 5,
      name: "big",
      occupied: true,
    });
  });

  test("Recieve attack from coordinates that missed", () => {
    Game.recieveAttack(1, 1);
    expect(Game.board[1][1].missed).toBe(true);
  });
});

describe("board with all ships sunk", () => {
  const Game = new Game();

  beforeEach(() => {
    Game.createBoard();
  });

  beforeEach(() => {
    const bigOne = new Ship(5);
    const scarey = new Ship(4);
    const middleChild = new Ship(3);
    const sneaky = new Ship(3);
    const littleOne = new Ship(2);

    Game.placeShip(bigOne, bigOne.length, "v", 2, 2);
    Game.placeShip(scarey, scarey.length, "v", 3, 2);
    Game.placeShip(middleChild, middleChild.length, "v", 4, 2);
    Game.placeShip(sneaky, sneaky.length, "v", 5, 2);
    Game.placeShip(littleOne, littleOne.length, "v", 6, 2);

    Game.board.forEach((arry) => {
      arry.forEach((cell) => {
        if (cell.occupied == true) {
          cell.hit += 1;
        }
      });
    });
  });

  test("All ships sunk", () => {
    expect(Game.allShipsSunk()).toBe(true);
  });
});

describe("Player", () => {
  const player = new Player("James");
  const Game = new Game();
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
  Game.createBoard();
  test("player created", () => {
    expect(player.name).toBe("James");
  });

  test("change turn", () => {
    player.changeTurn();
    expect(player.turn).toBe(true);
  });

  test("computer make move", () => {
    player.computerMove(Game.board, 2, 2);
    expect(Game.board.some((array) => (cell) => cell.missed == true)).toBe(
      true
    );
  });
});

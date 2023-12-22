const { sum, Ship } = require("../src/ships");

//test jest
test("works", () => {});

//test jest
test("example", () => {
  expect(sum(2, 4)).toBe(6);
});

describe("Ships", () => {
  const ship = new Ship(2);

  test("defines setRule()", () => {
    expect(ship.length).toBe(2);
  });
});

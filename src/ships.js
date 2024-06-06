export class Ship {
  constructor(length, name) {
    this.name = name;
    this.length = length;
    this.hits = 0;
    this.sunk = false;
    this.id = [];
  }

  hit() {
    this.hits += 1;
    return this.hits;
  }

  isSunk() {
    return this.length == this.hits;
  }
}

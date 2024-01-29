export class Ship {
  constructor(name, length) {
    this.length = length;
    this.name = name;
    this.hits = 0;
    this.occupied = true;
  }

  hit() {
    this.hits += 1;
    return this.hits;
  }

  isSunk() {
    return this.length == this.hits;
  }
}

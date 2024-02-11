export class Ship {
  constructor(name, len) {
    this.array = [];
    this.length = this.array.length;
    this.name = name;
    this.hits = 0;
    this.occupied = true;
    for (let i = 0; i < len; i++) {
      this.array.push(i);
    }
  }

  shipLength(len) {
    for (let i = 0; i < length; i++) {
      this.array.push(i);
    }
  }
  hit() {
    this.hits += 1;
    return this.hits;
  }

  isSunk() {
    return this.length == this.hits;
  }
}

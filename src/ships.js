export class Ship {
  constructor(name, len) {
    this.arry = [];
    for (let i = 0; i < len; i++) {
      this.arry.push(i);
    }

    this.length = this.arry.length;
    this.name = name;
    this.hits = 0;
    this.occupied = true;
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

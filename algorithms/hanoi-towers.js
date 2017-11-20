export default class Hanoi {

  constructor(discs) {
    this.towerA = discs;
    this.towerB = [];
    this.towerC = [];
    this.trackerSymbol = Symbol();
  }

  assemble()  {
    this.move(this.towerA.length, this.towerA, this.towerB, this.towerC);
  }

  move(quantity, originTower, intermediateTower, targetTower) {
    if (quantity === 0) {
      return;
    }

    this.move(quantity - 1, originTower, targetTower, intermediateTower);

    const disc = originTower.pop();
    targetTower.push(disc);

    this.showState();

    this.move(quantity - 1, intermediateTower, originTower, targetTower);
  }

  showState() {
    this[this.trackerSymbol](this.towerA, this.towerB, this.towerC);
  }

  set tracker(t) {
    this[this.trackerSymbol] = t;
  }
}


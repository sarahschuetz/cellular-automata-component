export const STATE_ALIVE = 1;
export const STATE_DEAD = 0;

class Cell {
  constructor(color) {
    this.color = color;
    this.x = 0;
    this.y = 0;
    this.activeState = STATE_DEAD;
    this.livingNeighbours = 0;
  }

  setX(value) {
    this.x = value;
  }

  setY(value) {
    this.y = value;
  }

  setActiveState(value) {
    this.activeState = value;
  }

  setLivingNeighbours(value) {
    this.livingNeighbours = value;
  }

  getColor() {
    return this.color;
  }

  isOverpopulated() {
    return this.livingNeighbours >= 4;
  }

  isLonely() {
    return this.livingNeighbours <= 1;
  }

  isDead() {
    return this.activeState === STATE_DEAD;
  }

  isAlive() {
    return this.activeState === STATE_ALIVE;
  }

  birth() {
    this.activeState = STATE_ALIVE;
  }

  death() {
    this.activeState = STATE_DEAD;
  }

  liveOrDie() {
    if (this.isDead() && this.livingNeighbours === 3) {
      return STATE_ALIVE;
    }
    if (this.isAlive() && (this.isOverpopulated() || this.isLonely())) {
      return STATE_DEAD;
    }

    return this.activeState;
  }
}

export default Cell;
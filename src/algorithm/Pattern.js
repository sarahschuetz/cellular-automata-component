import CellGrid from './CellGrid';

const defaultConfig = {
  rule: 1,
  rules: null,
};

class Pattern extends CellGrid {
  constructor(customConfig = {}) {
    super({ ...customConfig, useFutureArray: false });

    const config = {
      ...defaultConfig,
      ...customConfig,
    };

    this.rule = config.rule;
    this.rules = config.rules || this.getRules();
  }

  runAnimationAlgorithm() {
    this.shiftPixelsUp();

    this.context.beginPath();
    this.currentPixelArray.forEach((col, colIndex) => {
      col.forEach((cell, rowIndex) => {
        if (this.currentPixelArray[colIndex][rowIndex].isAlive()) {
          this.context.rect(cell.x, cell.y, this.pixelSize, this.pixelSize);
        }
      });
    });
    this.context.fill();
  }

  initPixels() {
    super.initPixels();
    this.currentPixelArray[0].forEach((row, rowIndex) => {
      this.currentPixelArray.forEach((col, colIndex) => {
        if (rowIndex === 0) {
          const random = Math.round(Math.random());
          this.currentPixelArray[colIndex][rowIndex].setActiveState(random);
        } else {
          const activeState = this.applyRules(colIndex, rowIndex);
          this.currentPixelArray[colIndex][rowIndex].setActiveState(activeState);
        }
      });
    });
  }

  shiftPixelsUp() {
    this.currentPixelArray[0].forEach((row, rowIndex) => {
      this.currentPixelArray.forEach((col, colIndex) => {
        if (rowIndex === col.length - 1) {
          const activeState = this.applyRules(colIndex, rowIndex);
          this.currentPixelArray[colIndex][rowIndex].setActiveState(activeState);
        } else {
          this.currentPixelArray[colIndex][rowIndex].setActiveState(this.currentPixelArray[colIndex][rowIndex + 1].activeState);
        }
      });
    });
  }

  applyRules(colIndex, rowIndex) {
    const neighbourhoodString = this.getNeighbourhoodString(colIndex, rowIndex);

    if (this.rules[neighbourhoodString] !== undefined) {
      return this.rules[neighbourhoodString];
    }

    if (this.rules.default !== undefined) {
      return this.rules.default;
    }

    const lastCell = this.getCellRepeated(colIndex, rowIndex - 1);
    return lastCell.activeState;
  }

  getRules() {
    /* eslint-disable quote-props */
    const biniaryString = this.rule.toString(2);
    const biniaryArray = Array.from(biniaryString).reverse();
    return {
      '000': +biniaryArray[0] || 0,
      '001': +biniaryArray[1] || 0,
      '010': +biniaryArray[2] || 0,
      '011': +biniaryArray[3] || 0,
      '100': +biniaryArray[4] || 0,
      '101': +biniaryArray[5] || 0,
      '110': +biniaryArray[6] || 0,
      '111': +biniaryArray[7] || 0,
    };
  }

  getNeighbourhoodString(colIndex, rowIndex) {
    const cell1 = this.getCellRepeated(colIndex - 1, rowIndex - 1);
    const cell2 = this.getCellRepeated(colIndex, rowIndex - 1);
    const cell3 = this.getCellRepeated(colIndex + 1, rowIndex - 1);
    return `${cell1.activeState}${cell2.activeState}${cell3.activeState}`;
  }
}

export default Pattern;
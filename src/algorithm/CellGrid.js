import Cell from './Cell';
import CanvasAnimationScript from './CanvasAnimationScript';
import BaseClassError from '../errors/BaseClassError';

const defaultConfig = {
  pixelSize: 6,
  interval: 0.1,
  useFutureArray: true,
  color: '#000',
};

class CellGrid extends CanvasAnimationScript {
  constructor(customConfig = {}) {
    super(customConfig);

    const config = {
      ...defaultConfig,
      ...customConfig,
    };

    this.pixelSize = config.pixelSize;
    this.interval = Math.max(defaultConfig.interval, config.interval);
    this.useFutureArray = config.useFutureArray;
    this.color = config.color;
  }

  init(canvas, context) {
    super.init(canvas, context);
    this.initGrid();
    this.initPixels();
  }

  update(deltaTime) {
    super.update(deltaTime);
    if (this.cumDeltaTime > this.interval) {
      this.cumDeltaTime = 0;
      this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.runAnimationAlgorithm(deltaTime);

      if (this.useFutureArray) {
        this.switchFuturePixelsToCurrentPixels();
      }
    }
  }

  switchFuturePixelsToCurrentPixels() {
    this.tempPixelArray = this.currentPixelArray;
    this.currentPixelArray = this.futurePixelArray;
    this.futurePixelArray = this.tempPixelArray;
  }

  runAnimationAlgorithm() {
    throw new BaseClassError(this.constructor.name);
  }

  initGrid() {
    this.grid = {};
    this.grid.cols = Math.ceil(this.canvas.width / this.pixelSize);
    this.grid.rows = Math.ceil(this.canvas.height / this.pixelSize);
    this.currentPixelArray = Array.from(new Array(this.grid.cols), () => Array.from(new Array(this.grid.rows), () => new Cell(this.color)));

    if (this.useFutureArray) {
      this.futurePixelArray = Array.from(new Array(this.grid.cols), () => Array.from(new Array(this.grid.rows), () => new Cell(this.color)));
      this.tempPixelArray = null;
    }
  }

  initPixels() {
    this.currentPixelArray[0].forEach((row, rowIndex) => {
      this.currentPixelArray.forEach((col, colIndex) => {
        this.currentPixelArray[colIndex][rowIndex].setX(colIndex * this.pixelSize);
        this.currentPixelArray[colIndex][rowIndex].setY(rowIndex * this.pixelSize);

        if (this.useFutureArray) {
          this.futurePixelArray[colIndex][rowIndex].setX(colIndex * this.pixelSize);
          this.futurePixelArray[colIndex][rowIndex].setY(rowIndex * this.pixelSize);
        }
      });
    });
  }

  drawCell(cell) {
    this.context.fillStyle = cell.getColor();
    this.context.beginPath();
    this.context.rect(cell.x, cell.y, this.pixelSize, this.pixelSize);
    this.context.fill();
  }

  getCellIfExists(colIndex, rowIndex) {
    if (colIndex >= 0 && colIndex < this.currentPixelArray.length
      && rowIndex >= 0 && rowIndex < this.currentPixelArray[0].length) {
      return this.currentPixelArray[colIndex][rowIndex];
    }

    return null;
  }

  getCellRepeated(colIndex, rowIndex) {
    let x = colIndex;
    let y = rowIndex;

    if (colIndex < 0) {
      x += this.currentPixelArray.length;
    }

    if (colIndex >= this.currentPixelArray.length) {
      x -= this.currentPixelArray.length;
    }

    if (rowIndex < 0) {
      y += this.currentPixelArray[0].length;
    }

    if (rowIndex >= this.currentPixelArray[0].length) {
      y -= this.currentPixelArray[0].length;
    }

    return this.currentPixelArray[x][y];
  }
}

export default CellGrid;
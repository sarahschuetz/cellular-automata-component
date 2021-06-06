const defaultConfig = {
    fillStyle: '#000',
  };
  
  class CanvasAnimationScript {
    constructor(customConfig = {}) {
      const config = {
        ...defaultConfig,
        ...customConfig,
      };
  
      this.fillStyle = config.fillStyle;
    }
  
    init(canvas, context) {
      this.canvas = canvas;
      this.context = context;
      this.context.fillStyle = this.fillStyle;
      this.cumDeltaTime = 0;
    }
  
    update(deltaTime) {
      this.cumDeltaTime += deltaTime;
    }
  }
  
  export default CanvasAnimationScript;
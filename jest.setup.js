const { createCanvas } = require("canvas");

HTMLCanvasElement.prototype.getContext = function () {
  return createCanvas(this.width, this.height).getContext("2d");
};

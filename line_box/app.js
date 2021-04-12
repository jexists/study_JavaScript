

import { Point } from './point.js';
class App {
  constructor() {
    this.canvas = document.createElement('canvas');
    this.ctx = this.canvas.getContext('2d');
    document.body.appendChild(this.canvas);

    thispixelRatio = window.devicePixelRatio > 1 ? 2 : 1;

    this.mousePos = new Point();
    this.curItem = null;

    window.addEventListener('resize', this.resize.bind(this), false);
    this.resize();

    window.requestAnimationFrame(this.animate.bind(this));

    document.addEventListener('pointdown', this.onDown.bind(this), false);
    document.addEventListener('pointmove', this.onMove.bind(this), false);
    document.addEventListener('pointup', this.onUp.bind(this), false);
  }

  resize() {
    this.stageWidth = document.body.clientWidth;
    this.stageHeight = document.body.clientHeight;

    this.canvas.width = this.stageWidth * this.pixelRatio;
    this.canvas.height = this.stageHeight * this.pixelRatio;

    this.ctx.scale(this.pixelRatio, this.pixelRatio);

  }

  animate() {
    window.requestAnimationFrame(this.animate.bind(this))
    this.ctx.clearRect(0, 0, this.stageWidth, this.stageHeight);
  }

  onDown(e) {
    this.mousePos.x = e.clientX;
    this.mousePos.y = e.clientY;
  }

  onMove(e) {
    this.mousePos.x = e.clientX;
    this.mousePos.y = e.clientY;
  }

  onUp(e) {

  }


}
window.onload = () => {
  new App();
}
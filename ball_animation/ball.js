export class Ball {
  constructor(
    stageWidth,
    stageHeight,
    radius,
    speed
  ) {
    this.radius = radius;
    this.vx = speed;
    this.vy = speed;

    const diameter = this.radius * 2;
    this.x = diameter * (Math.random() * stageWidth - diameter);
    this.y = diameter * (Math.random() * stageHeight - diameter);
  }


}
const BOUNCE = 0.92;

export class BounceString {
  constructor(pos, color) {
    const middleX = ((pos.x2 - pos.x1) / 2) + pos.x1;
    
    const middleY = ((pos.y2 - pos.y1) / 2) + pos.y1;

    this.points = [
      {
        x: pos.x1,
        y: pos.y1,
        ox: pos.x1,
        oy: pos.y1,
        vx:0,
        vy: 0
      },
      {
        x: middleX,
        y: middleY,
        ox: middleX,
        oy: middleY,
        vx:0,
        vy: 0
      },
      {
        x: pos.x2,
        y: pos.y2,
        ox: pos.x2,
        oy: pos.y2,
        vx:0,
        vy: 0
      },
    ];

    this.detect = 10;

    this.color = color;
  }

  animate(ctx, moveX, moveY) {
    ctx.beginPath();
    ctx.fillStyle = '#ff00ff';
    ctx.arc(moveX, moveY, 60, 0, Math.PI * 2, false);
    ctx.fill();
  }
}
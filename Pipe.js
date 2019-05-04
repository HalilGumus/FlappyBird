class Pipe {
  constructor() {
    this.rand = Math.random() * (+abs(h - 200) - +200) + 200;
    this.x = w;
    this.width = 80;
    this.height1 = Math.round(this.rand);
    this.y1 = 0;

    this.spacing = 160;

    this.y2 = this.height1 + this.spacing;
    this.dead = false;
  }

  show() {
    if (!this.dead) {
      fill(0, 255, 0);
      rect(this.x, this.y1, this.width, this.height1);
      rect(this.x, this.y2, this.width, (h - this.y2));
    } else {
      fill(255, 0, 0);
      rect(this.x, this.y1, this.width, this.height1);
      rect(this.x, this.y2, this.width, (h - this.y2));
    }
  }

  update() {
    this.x -= 1 * 2;
    this.dead = false;
  }

  offscreen() {
    if (this.x + this.width <= 0) {
      return true;
    } else {
      return false;
    }
  }
}

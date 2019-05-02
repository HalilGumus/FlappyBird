class Pipe {
  constructor(w, h) {
    this.x = w;
    this.width = 80;
    this.height = 200;
    this.y = h;
  }

  show() {
    fill(0, 255, 0);
    rect(this.x, this.y, this.width, this.height);
  }

  update() {
    this.x -= 1;
    if (this.x + this.width <= 0) {
      this.x = w;
    }
  }
}

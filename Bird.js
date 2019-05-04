class Bird {
  constructor(x, y) {
    this.x = x / 2 - 150;
    this.y = (y / 2);
    this.gravity = 1 * 0.5;
    this.velocity = 0;
    // this.died = false;
  }

  show() {
    fill(255, 0, 0);
    ellipse(this.x, this.y, 20, 20);
  }

  update() {
    this.velocity += this.gravity;
    this.y += this.velocity;
    if (this.y >= h) {
      // this.dead();
      // this.velocity = 0;
      this.y = h;
    }
    if (this.y <= 0) {
      this.y = 0;
    }
  }

  jump() {
    this.velocity = 0;
    this.velocity -= this.gravity * 20;
  }

  // dead() {
  //   this.died = true;
  //   if (this.died) {
  //     this.y = windowHeight / 4;
  //     this.died = false;
  //   }
  // }
}

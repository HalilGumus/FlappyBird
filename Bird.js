class Bird {
  constructor(x, y) {
    this.x = x / 2;
    this.y = y / 2;
    this.gravity = 10;
    this.died = false;
  }

  show() {
    fill(255, 0, 0);
    ellipse(this.x - 150, this.y, 20, 20);
  }

  update() {
    this.y += this.gravity;
    this.jump();

    if (this.y >= h) {
      this.dead();
    }
  }

  jump() {
    if (keyIsPressed == true) {
      this.y -= this.gravity * 6;

    }
  }

  dead() {
    this.died = true;
    if (this.died) {
      this.y = windowHeight / 2;
      this.died = false;
    }
  }
}

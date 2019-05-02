w = 108 * 4;
h = 192 * 4;

function setup() {
  createCanvas(w, h);
  bird = new Bird(w, h);
  pipe = new Pipe(w, h - h);
  pipe2 = new Pipe(w, h - 300);
}

function draw() {
  background(0, 100, 0);

  bird.show();
  bird.update();
  pipe.show();
  pipe.update();
  pipe2.show();
  pipe2.update();
}

w = 108 * 4;
h = 192 * 4;

var pipes = [];

function setup() {
  createCanvas(w, h);

  // create bird and first pipe
  bird = new Bird(w, h);
  pipes.push(new Pipe());
}

function draw() {
  background(0, 100, 180);

  // when line crossed by pipe a new pipe is created
  strokeWeight(2)
  stroke(0, 20, 0);
  //line(w - 280, 20, w - 280, 40); //new pipe indicator

  // creates new pipe
  if (pipes[pipes.length - 1].x == w - 280) {
    pipes.push(new Pipe());
  }

  //show all pipes and move them
  for (i = pipes.length - 1; i >= 0; i--) {
    pipes[i].show();
    pipes[i].update();
    // deletes first element of pipes array if the first pipe is offscreen
    if (pipes[i].offscreen()) {
      pipes.shift();
    }
  }

  bird.show();
  bird.update();
  //console.log(Math.random() * (+55 - +50) + 50);
}

function keyPressed() {
  if (key == ' ') {
    bird.jump();
  }
}

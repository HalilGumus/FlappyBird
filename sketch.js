w = 108*4;
h = 192*4;

function setup(){
  createCanvas(w, h);
  bird = new Bird(w,h);
}

function draw(){
  background(150);
  fill(20,168.255);
  rect(20,20,20,20);
  bird.show();
}

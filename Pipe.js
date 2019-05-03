class Pipe {
    constructor(){
    let min = 100;
    let max = this.min + this.spacing;
    this.rand = Math.random() * (+abs(h-200) - +200) + 200;
    this.x = w;
    this.width = 80;
    this.height1 = this.rand;
    this.y1 = 0;

    this.spacing = 180;

    this.y2 = this.height1 + this.spacing;
  }
  show() {
    fill(0, 255, 0);
    rect(this.x, this.y1, this.width, this.height1);
    rect(this.x, this.y2, this.width, (h - this.y2));
  }

  update() {
    this.x -= 1*2;
    // if (this.x + this.width <= 0) {
//   this.x = w;
// }
  }

  offscreen(){
    if(this.x + this.width <= 0){
      return true;
    } else{
      return false;
    }
  }
}

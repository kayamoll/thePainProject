class Bubble {
  constructor(locationX, locationY,noiseMax) {
    this.noiseMax = noiseMax;
    this.locationX = locationX;
    this.locationY = locationY;

    push();
    translate(width / 2, height / 2);
    //translate(locationX, locationY);
    blendMode(SOFT_LIGHT);
    stroke(200);
    strokeWeight(3);
    noFill();
    
    beginShape();
    for (let a = 0; a < TWO_PI; a += 0.001) {
      let xoff = map(cos(a), -1, 1, 0, this.noiseMax);
      let yoff = map(sin(a), -1, 1, 0, this.noiseMax);
      let r = map(noise(xoff, yoff), 0, 1, 100, 200);
      let x = r * cos(a);
      let y = r * sin(a);
      vertex(x, y);
       }
    endShape(CLOSE);
    pop();
    
    translate(this.locationX, this.locationY);
  }

  show() {

  }
  
}

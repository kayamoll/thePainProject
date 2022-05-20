let slider;

function setup() {
  createCanvas(400,400);
  slider = createSlider(0, 255, 100, 0.1);
  pixelDensity(1);

}

function draw() {
  background(220);
  
  loadPixels();
  
  for (var y = 0; y < height; y++) {
    for (var x = 0; x < width; x++) {
      var index = (x + y * width)*4;
      pixels[index+0] = slider.value();
      pixels[index+1] = x;
      pixels[index+2] = 255-(slider.value());
      pixels[index+3] = 255;
    }
  }
  updatePixels();
}
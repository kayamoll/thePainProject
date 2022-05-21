let slider;

function setup() {
  createCanvas(windowWidth,windowHeight);
  slider = createSlider(0, 255, 100, 0.1);
  pixelDensity(1);

}

function draw() {
  background(220);
  var temp = slider.value();
  loadPixels();
  
  for (var y = 0; y < height; y++) {
    for (var x = 0; x < width; x++) {
      var index = (x + y * width)*4;
      pixels[index+0] = temp;
      pixels[index+1] = x/3;
      pixels[index+2] = 255-(temp);
      pixels[index+3] = 255;
    }
  }
  updatePixels();
}

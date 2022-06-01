let slider;
let canvas;

function setup() {
  canvas = createCanvas(windowWidth,windowHeight);
  canvas.position(0,0);
  canvas.style("z-index", "-1");
  slider = createSlider(0, 255, 127, 0.1);
  slider.style('width', '200px');
  slider.position(width/2-100, height - 50);
  pixelDensity(1);

}

function draw() {
  background(220);
  var temperature = slider.value();
  loadPixels();
  
  for (var y = 0; y < height; y++) {
    for (var x = 0; x < width; x++) {
      var index = (x + y * width)*4;
      pixels[index+0] = temperature;
      pixels[index+1] = x/3;
      pixels[index+2] = 255-(temperature);
      pixels[index+3] = 255;
    }
  }
  updatePixels();
}

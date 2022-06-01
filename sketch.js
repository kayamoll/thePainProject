const url = window.location.search;
let params = new URLSearchParams(url);

const temperature = params.get("temperature");
console.log("temperature", temperature);

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
  
    // set a default colour
  let startPosition = 127;
  // check the colour parameter looks like a number
  if (!isNaN(temperature)) {
    // set the type to a number (it comes in as a string)
    startPosition = Number(temperature);
  }
   // every time the slider is changed update the parameters in the link
  slider.changed(updateParams);
  // update it at the very start to make sure the url is correct if we dont slide the slider

  updateParams();

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

function updateParams() {
  // get the link element (this is in the html)
  let link = document.getElementById("link");
  // update the link with the slider value
  link.href = "next.html?temperature=" + slider.value();
}

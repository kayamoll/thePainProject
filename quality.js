// get the url parameters
const url = window.location.search;
let params = new URLSearchParams(url);

// find the parameter for colour
const temperature = params.get("temperature");
console.log("temperature", temperature);

let noiseMax = 5;
let canvas;
let slider;

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0,0);
  canvas.style("z-index", "-1");
  slider = createSlider(1, 40, 20, 0.1);
  slider.style('width', '200px');
  slider.position(width/2-100, height - 50);
  pixelDensity(1);
  
   // every time the slider is changed update the parameters in the link
  slider.changed(updateParams);
  // update it at the very start to make sure the url is correct if we dont slide the slider
  updateParams();
  }


function draw() { 
  background(220);
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
  noLoop();
  updatePixels();
  
  loop();
  translate(width/2, height/2);
  stroke(255);
  strokeWeight(3);
  noFill();
  beginShape();
  noiseMax = slider.value();
  for(let a = 0; a < TWO_PI; a+=0.001) {
    let xoff = map(cos(a), -1, 1, 0, noiseMax);
    let yoff = map(sin(a), -1, 1, 0, noiseMax);
    let r = map(noise(xoff, yoff), 0, 1, 100, 200);
    let x = r * cos(a);
    let y = r * sin(a);
    vertex(x, y);
    
  }
  endShape(CLOSE);
  //noLoop;
  //updatePixels();
}

function updateParams() {
  // get the link element (this is in the html)
  let link = document.getElementById("link");
  // update the link with the slider value
  link.href = "quality.html?quality=" + slider.value();
}

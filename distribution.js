p5.disableFriendlyErrors = true;
// get the url parameters
const url = window.location.search;
let params = new URLSearchParams(url);

// find the parameter for colour
const quality = params.get("quality");
//console.log("quality", quality);
const temperature = params.get("temperature");



let slider;
let canvas;
let bubble;
let bubbles = [];
let noiseMax = quality;
let colour = temperature;
let c = 2;

function setup() {
  canvas = createCanvas(windowWidth, windowHeight); 
  canvas.position(0,0);
  canvas.style("z-index","-1");
  slider = createSlider(2, 50, 25, 2);
  slider.style('width', '200px');
  slider.position(width/2-100, height - 50);
  pixelDensity(1);
  
     // every time the slider is changed update the parameters in the link
  slider.changed(updateParams);
  // update it at the very start to make sure the url is correct if we dont slide the slider
  updateParams();
  
  drawBackground();
  
  slider.input(update);
  
      bubble = new Bubble (0,0,noiseMax);

}

function drawBackground() {
  
  //background(220);
  loadPixels();
  for (var y = 0; y < windowHeight; y++) {
    for (var x = 0; x < windowWidth; x++) {
      var index = (x + y * windowWidth)*4;
      pixels[index+0] = colour;
      pixels[index+1] = x/3;
      pixels[index+2] = 255-(colour);
      pixels[index+3] = 255;
    }
  }
  updatePixels();
  
}


function draw() {
  
  //for (let i = 0; i < bubbles.length; i++){
    //    bubbles[i].show();   
      //}
}

function update() { 
  //clear();
  drawBackground();

  c = slider.value();
    for (let i = 0; i < 20; i++){
     let x = 0;
     let y = 0;
     let a = i * 137.5;
     let r = c * sqrt(i);
     x = r * cos(a);
     y = r * sin(a);
      bubbles[i] = new Bubble (x,y,noiseMax);
    }
 
      
}

function updateParams() {
  // get the link element (this is in the html)
  let link = document.getElementById("link");
  // update the link with the slider value
  link.href = "finish.html?distribution=" + slider.value() + "&quality=" + quality + "&temperature=" + temperature;
}

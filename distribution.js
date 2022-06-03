p5.disableFriendlyErrors = true;
// get the url parameters
const url = window.location.search;
let params = new URLSearchParams(url);

// find the parameter for colour
const quality = params.get("quality");
//console.log("quality", quality);



let slider;
let canvas;
let bubble;
let bubbles = [];
let noiseMax = quality;
let c = 2;

function setup() {
  canvas = createCanvas(windowWidth, windowHeight); 
  canvas.position(0,0);
  canvas.style("z-index","-1");
  slider = createSlider(1, 50, 10, 1);
  slider.style('width', '200px');
  slider.position(width/2-100, height - 50);
  
     // every time the slider is changed update the parameters in the link
  slider.changed(updateParams);
  // update it at the very start to make sure the url is correct if we dont slide the slider
  updateParams();
  
  background(220);
  
  slider.input(update);
  
       let x = 0;
       let y = 0;
      bubble = new Bubble (x,y,noiseMax);

}

function draw() {
  
  for (let i = 0; i < bubbles.length; i++){
        bubbles[i].show();
          
      }
}

function update() { 
  clear();
  background(220);
  c = slider.value();
    for (let i = 0; i < 20; i++){
     let a = i * 137.5;
     let r = c * sqrt(i);
     let x = r * cos(a);
     let y = r * sin(a);
      bubbles[i] = new Bubble (x,y,noiseMax);
    }
      
}

function updateParams() {
  // get the link element (this is in the html)
  let link = document.getElementById("link");
  // update the link with the slider value
  link.href = "quality.html?quality=" + slider.value();
}

let slider;
let canvas;
let bubbles = [];
let noiseMax = 5;
let c = 2;

function setup() {
  canvas = createCanvas(windowWidth, windowHeight); 
  canvas.position(0,0);
  canvas.style("z-index","-1");
  slider = createSlider(1, 50, 10, 1);
  slider.style('width', '200px');
  slider.position(width/2-100, height - 50);
  
background(220);
  
  slider.input(update);

    
   for (let i = 0; i < 20; i++){
       let x = 0;
       let y = 0;
      bubbles[i] = new Bubble (x,y,noiseMax);
    }

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

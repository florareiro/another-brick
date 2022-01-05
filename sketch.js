var bgRed = 100;
var bgGreen = 12;
var bgBlue = 100;
var rectWidth = 20;
var rectHeight = 20;


function setup() {
  createCanvas(windowWidth, windowHeight);
   background(139,69,19);
}

function draw() {
 
  fill	(210,105,30);
 // rect(0,0, 100, 100);
  rect(mouseX, mouseY, rectWidth, rectHeight);
  limitaMovimento();
}

function limitaMovimento() {
  if (mouseX && mouseY > 100) {
    rectWidth  =+100
  }
}
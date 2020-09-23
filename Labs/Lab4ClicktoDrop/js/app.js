var XY = []; 
function setup() {
  createCanvas(400, 400);
    }
    function draw() {
     background(37,7,247);
    noStroke();
    rectMode(CENTER);
    fill(255);
    for (var i = 0; i < XY.length; i++) {
    fill(XY[i][2]);
    rect(XY[i][0], XY[i][1], 50, 25);
    XY[i][1] += 1;
     }
    }
function mousePressed()     {
  XY.push([mouseX, mouseY, random(255)]);
}
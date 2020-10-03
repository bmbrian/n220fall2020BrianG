let A, B, C;

function setup() {
  createCanvas(800, 800);
  // Pick colors randomly
  A = random(255);
  B = random(255);
  C = random(255);
}

function draw() {
  background(100);
  // Draw a circle
  strokeWeight(2);
  stroke(A, B, C);
  fill(A, B, C, 127);
  ellipse(360, 200, 200, 200);
}


function mousePressed() {

  let D = dist(mouseX, mouseY, 360, 200);
  if (D < 500) {

    A = random(255);
    B = random(255);
    C = random(255);
  }
}
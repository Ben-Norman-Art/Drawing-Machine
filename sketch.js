function setup() {
  createCanvas(600, 600);
  background(220);

  strokeWeight(15);
}

function draw() {

  if (mouseIsPressed) {
    ellipse(mouseX, mouseY, pmouseX, pmouseY);
  }

}

function setup() {
  createCanvas(600, 600);
  background(220);

  strokeWeight(2);
}

function draw() {

  if (mouseIsPressed) {
  stroke(map(mouseX, 0, 600, 0, 255, true))
  polygon(width - mouseX, height - mouseY, 20, 6);
  polygon(mouseX, mouseY, 20, 6);
  polygon(width - mouseX, height - mouseY, 15, 6);
  polygon(mouseX, mouseY, 15, 6);
  }

}

function polygon(x, y, radius, npoints) {
  let angle = TWO_PI / npoints;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius;
    let sy = y + sin(a) * radius;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}

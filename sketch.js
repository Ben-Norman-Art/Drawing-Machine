function setup() {
 createCanvas(windowWidth, windowHeight);
 background(220);

  strokeWeight(1);
}

function draw() {

  if (mouseIsPressed == true) {
  stroke(0, 10)
  let c = color(map(mouseX, 0, 900, 0, 255, true))
  noFill()
  square1(width - mouseX, height - mouseY, 20, 6);
  square1(mouseX, mouseY, 20, 6);
  square1(width - mouseX, height - mouseY, 15, 6);
  square1(mouseX, mouseY, 15, 6);
  square1(height - mouseX, width - mouseY, 20, 6);
  square1(width + mouseX, height + mouseY, 20, 6);
  square1(height - mouseX, width - mouseY, 15, 6);
  square1(height + mouseX, width + mouseY, 15, 6);

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

function keyTyped(){

  //console.log(`Key s is being Typed`)

  if (key == 's'){
  saveCanvas(`fileName`, `png`);
  }
  if (key == 'c'){
  clear();
  background(220);
} else if (key === 'd'){

  for(let i = 0; i < array.lenght; i++){
    square1(array [i][0], array [i][1],array [i+ 1][0], array [i + 1][1]));
  }
}


  return false;
}

function square1() {
  rect(mouseX, mouseY, 10, 10);
}

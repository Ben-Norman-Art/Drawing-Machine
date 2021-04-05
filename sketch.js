let array = [];

function setup() {
  createCanvas(600, 600);
  background(220);

  strokeWeight(2);
}

function draw() {

  if (mouseIsPressed) {
    stroke(600, map(mouseX, 0, 600, 0, 255, true), 0)
    polygon(width - mouseX, height - mouseY, 20, 6);
    polygon(mouseX, mouseY, 20, 6);
    polygon(width - mouseX, height - mouseY, 15, 6);
    polygon(mouseX, mouseY, 15, 6);
    array.push([mouseX, mouseY]);
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

function keyTyped() {

  //console.log(`Key ${key} is being Typed`)

  if (key == 's') {
    // save this image
    saveCanvas(`fileName`, `png`);
  } else if (key == `d`){
    //display Image
    console.log(array);
  }
  if (key == 'c'){
  clear();
  background(220);
  }


  return false;
}

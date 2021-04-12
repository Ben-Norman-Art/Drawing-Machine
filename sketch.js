let array = [];
let input;
let img;
let canvas;
let imgAdd;
let imgSave;
let imgReset;
let reX;

function setup() {
 createCanvas(400, 400);
 background(220);

  strokeWeight(1);

  input = createFileInput(handleFile);
  input.parent('upload-button');

  imgAdd = createButton('Add Image To Canvas');
  imgAdd.parent('imgAdd-button');
  imgAdd.mousePressed(addImage);


}

function draw() {

  if (mouseIsPressed) {
  stroke(0, 100)
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
  array.push([mouseX, mouseY]);

}

}
function handleFile(file) {
  print(file);
  if (file.type === 'image') {
    img = createImg(file.data, '');
    img.hide();
  } else {
    img = null;
  }
}


//Function for drawing the image onto the canvas.
function addImage() {
  reX = (img.width) / (img.height);
  resizeCanvas(reX*500, 500);
  if (img) {
    image(img, 0, 0, width, height);
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
}



  return false;
}

function square1() {
  rect(mouseX, mouseY, 20, 20);
}

let input;
let img;
let canvas;
let imgAdd;
let imgSave;
let imgReset;
let reX;
let myImage;
let c;
let t = 0;

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

//get() returns color here
function draw() {
  if (t == 1) {
  if (mouseIsPressed) {
    c = img.get(mouseX, mouseY);
    noStroke();
    fill(c);
    rectMode(CENTER);
    rect(mouseX, mouseY, 25, 25);
  }
}
}


//function preload() {
//  myImage = loadImage('Sawada_Tsunayoshi.png');
//}

function keyTyped() {

  //console.log(`Key s is being Typed`)

  if (key == 's') {
    saveCanvas(`fileName`, `png`);
  }
  if (key == 'c') {
    clear();
    background(220);
  }



  return false;
}

function handleFile(file) {
  print(file);
  if (file.type === 'image') {
    img = loadImage(file.data);
    //img.hide();
  } else {
    img = null;
  }
}

function addImage() {
  reX = (img.width) / (img.height);
  resizeCanvas(reX * 500, 500);
  if (img)
  img.resize(width + 2 ,0);
  {
    image(img, 0, 0, width, height);
    t = 1;
  }
}

/*

    50%
increase in global water demand expected by 2030
40%
of Europe's water is used by industry and agriculture
600%
increase in global water demand in the last 100 years

*/

let img;
let i = -1;
let button;
const IMAGE_SIZE = 100;

// Load the image.
function preload() {
  imgGlobe = loadImage("assets/globe-public.png");
}

function setup() {
  createCanvas(380, 600);
  imageMode(CENTER);

  button = createButton("Increase in the past 100 years?");
  button.size(200, 160);
  button.style("font-size", "24px");
  button.style("padding", "20px");
  button.center();

  //button.parent.center();
  button.mousePressed(repaint);
  frameRate(25);
}

function draw() {
  if (i == -1) {
    borderAndHeading();
    image(imgGlobe, 190, 150, IMAGE_SIZE, IMAGE_SIZE);
  } else if (i < 600) {
    i += 10;
    borderAndHeading();


    if (i >= 100) {
      image(imgGlobe, 70, 250, IMAGE_SIZE, IMAGE_SIZE);
    }

    if (i >= 200) {
      image(imgGlobe, 190, 250, IMAGE_SIZE, IMAGE_SIZE);
    }

    if (i >= 300) {
      image(imgGlobe, 310, 250, IMAGE_SIZE, IMAGE_SIZE);
    }

    if (i >= 400) {
      image(imgGlobe, 70, 350, IMAGE_SIZE, IMAGE_SIZE);
    }

    if (i >= 500) {
      image(imgGlobe, 190, 350, IMAGE_SIZE, IMAGE_SIZE);
    }

    if (i >= 600) {
      image(imgGlobe, 310, 350, IMAGE_SIZE, IMAGE_SIZE);
    }

    textSize(22);

    text("Increase over the past 100 years", 30, 540);
    text(i + " %", 160, 480);
  }
}

// Change the background color.
function repaint() {
  i++;
  button.remove();
  draw();
}

function borderAndHeading() {
  background(225, 244, 252);
  stroke(13, 152, 186);
  strokeWeight(8);
  line(15, 15, 15, 585);
  line(15, 15, 365, 15);
  line(15, 585, 365, 585);
  line(365, 15, 365, 585);
  textSize(28);
  strokeWeight(0);
  text("Global Water Demand", 60, 50);
}

// Toggle the background color when the user presses a key.
function mousePressed() {
  // repaint();
}

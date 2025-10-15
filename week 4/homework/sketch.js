let x, y;
let speedX, speedY;
let radius;

let imgBlack, imgWhite

function preload (){
  imgBlack = loadImage(homework/black.png);
  imgWhite = loadImage(homework/white.png);
}
function setup() {
  createCanvas(800, 800);

  radius = 50
  x = width / 2;
  y = height / 2;
 

  noStroke()
}

function draw() {
  background(220);

  circle (x, y, radius*2);
  image(imgBlack, x, y)

  speedX = random(-6, 6);
  speedY = random(-6, 6);

  speedX = constrain(speedX, -6, 6);
  speedY = constrain(speedY, -6, 6);

  x += speedX;
  y += speedY;

  if (x < radius) {
    x = radius;
    speedX *= -1;
  } else if (x > width - radius) {
    x = width - radius;
    speedX *= -1;
  }

  if (y < radius) {
    y = radius;
    speedY *= -1;
  } else if (y > height - radius) {
    y = height - radius;
    speedY *= -1;
  }

}

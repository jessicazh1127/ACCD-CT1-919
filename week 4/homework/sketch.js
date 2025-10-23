let posX, posY;
let radius;

let imgBlack, imgWhite

let currentImg

let countDown = 0
let tx = 0
let ty = 1000

function preload (){
  imgBlack = loadImage("black.png");
  imgWhite = loadImage("white.png");

}

function setup() {
  createCanvas(800, 800);
  imageMode(CENTER)
  currentImg = imgBlack


  radius = 50
  posX = width / 2;
  posY = height / 2;
 

  noStroke()
}

function draw() {
  background(220);

  circle (posX, posY, radius*2);
  currentImg = imgBlack
  image(currentImg, posX, posY, radius*2,radius*2)


  let velX = map(noise(tx),0,1,-3,3)
  let velY = map(noise(ty),0,1,-3,3)

  tx += 0.01
  ty += 0.01

  posX +=velX
  posY +=velY

  if (posX + radius >=width || posX - radius <=0){
    velX = velX*-1
    currentImg=imgWhite
    countDown = 16
  }
  if (posY + radius >=height || posY - radius <=0){
    velY = velY*-1
    currentImg=imgWhite
    countDown = 16
  }

  if (countDown > 0){
    countDown --
  }
  else{
    currentImg = imgBlack
  }
  

  
  posX = constrain(posX, radius,width-radius)
  posY = constrain(posY, radius,width-radius)


}

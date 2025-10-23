let posX
let posY

let velX
let velY

let radius = 20

let imgBlack
let imgWhite


function setup() {
  createCanvas(500, 500);
  
  posX = random (radius, height - radius)
  posY = random (radius, height - radius)

  velX = random (-6, 6)
  velY = random (-6, 6)
  
}

function draw() {
  background(230);

  posX = velX + posX 
  posY = velY + posY

  if (posX + radius>=width || posX - radius<=0){
    velX = -velX 
  }

  if (posY + radius>=height || posY - radius<=0){
    velY = -velY
  }


  noStroke()

  circle(posX, posY, radius*2)
  
}

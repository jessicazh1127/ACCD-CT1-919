let numRings = 10
let strWeight = 20

function setup() {
  createCanvas(800, 800);
  colorMode(HSB,TWO_PI, 1, 1 )

  radius = width*0.1
  
}

function draw(){
  background(0);
  noFill()
  strokeWeight(strWeight)
  for(let i = 0; i < numRings; i++){
  
    stroke(color(i*TWO_PI/numRings, 0.9, 0.9))
    push()
    translate(width/2,height/2)
    rotate(sin(millis()*0.001*(i*0.3+1)))
    arc(0, 0, radius*2+strWeight*i*2, radius*2+strWeight*i*2, QUARTER_PI+HALF_PI, TWO_PI+QUARTER_PI)
    pop()
  }

}
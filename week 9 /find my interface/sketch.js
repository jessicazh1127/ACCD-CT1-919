let particles = [] 
let isFist = false

function setup() {
  createCanvas(640, 480);
  for(let i = 0; i<500; i++){
    let p = new Particle(random(width), random(height))
    particles.push(p)
  }
}

function draw() {
  background(255, 40);
  for (let i = 0; i < particles.length; i++) {
    let p = particles[i]
    p.update() 
    p.display() 
  }
}

function mousePressed(){
  isFist = true;
}

function mouseReleased(){
  isFist = false;
}

class Particle{
  constructor(x,y){ 
    this.p = createVector(x,y) 
    this.v = createVector(random(-1,1), random(-1,1)) 
    this.a = createVector(0,0) 
    this.radius = 10 
    
    let color1 = color(80, 140, 255, 200);   
    let color2 = color(20, 60, 200, 200);     

    this.col = lerpColor(color1, color2, random(0,1));
  }

    
  update(){ 
    this.p.add(this.v) 
    this.v.add(this.a) 
    this.v.limit(3) 
    
    if(this.p.x + this.radius > width){ 
      this.v.x *= -1 
      this.p.x = width - this.radius 
    } 
    
    if (this.p.x - this.radius < 0){
      this.v.x *= -1 
      this.p.x = this.radius 
    } 
    if(this.p.y + this.radius > height){ 
      this.v.y *= -1 
      this.p.y = height - this.radius 
    } 
    if (this.p.y - this.radius < 0){ 
      this.v.y *= -1 
      this.p.y = this.radius 
    } 
    
    let center = createVector(width/2, height/2)
    if(isFist){
      let diff = p5.Vector.sub(center, this.p)
      this.a = diff.div(500)
      this.a.limit(1)
    }else{
      this.a.x = 0
      this.a.y = 0
    }
}

    
  
  display(){ 
    noStroke()
    fill(this.col) 
    
    ellipse(this.p.x, this.p.y, this.radius*2, this.radius*2)  
   }  
}
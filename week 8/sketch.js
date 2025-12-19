let pets = []; 
let staffs = []; 
let adopters = []; 
let shelter;     

function setup() {
  createCanvas(800, 600);
  colorMode(HSB, 360, 1, 1);
  shelter = new Shelter(width / 2, height / 2);

  for (let i = 0; i < 20; i++) pets.push(new Pet(random(width), random(height)));
  for (let i = 0; i < 5; i++) staffs.push(new Staff(random(width), random(height)));
  for (let i = 0; i < 15; i++) adopters.push(new Adopter(random(width), random(height)));
}

function draw() {
  background(0, 0, 1);
  shelter.display();

  pets.forEach(p => p.update());

  staffs.forEach(s => s.update(pets));

  adopters.forEach(a => {
    a.update();
    a.tryConnect(pets);
  });

  shelter.update(pets.length);
}


class Pet {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.vel = p5.Vector.random2D().mult(random(0.5, 2));
    this.state = "black"; 
    this.connected = false; 
  }

  update() {
    this.pos.add(this.vel);
    this.bounce();

    if (this.state === "black") fill(0, 0, 0); 
    else fill(60, 1, 1);                         
    noStroke();
    circle(this.pos.x, this.pos.y, 12);
  }

  bounce() {
    if (this.pos.x < 0 || this.pos.x > width) this.vel.x *= -1;
    if (this.pos.y < 0 || this.pos.y > height) this.vel.y *= -1;
  }
}

class Staff {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.vel = p5.Vector.random2D().mult(random(0.8, 1.8));
  }

  update(pets) {
    this.pos.add(this.vel);
    this.bounce();

    fill(0, 1, 1); 
    noStroke();
    circle(this.pos.x, this.pos.y, 14);

    
    pets.forEach(p => {
      let d = dist(this.pos.x, this.pos.y, p.pos.x, p.pos.y);
      if (d < 100 && p.state === "black") {
        stroke(0, 0, 0); 
        line(this.pos.x, this.pos.y, p.pos.x, p.pos.y);
        p.state = "yellow"; 
      }
    });
  }

  bounce() {
    if (this.pos.x < 0 || this.pos.x > width) this.vel.x *= -1;
    if (this.pos.y < 0 || this.pos.y > height) this.vel.y *= -1;
  }
}

class Adopter {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.vel = p5.Vector.random2D().mult(random(0.5, 1.5));
    this.connectedPets = []; 
  }

  update() {
    this.pos.add(this.vel);
    this.bounce();

    fill(210, 1, 1); 
    noStroke();
    circle(this.pos.x, this.pos.y, 14);

    
    this.connectedPets.forEach(p => {
      stroke(0, 0, 0);
      line(this.pos.x, this.pos.y, p.pos.x, p.pos.y);
    });
  }

  tryConnect(pets) {
    if (this.connectedPets.length >= 2) return; 

    pets.forEach(p => {
      if (this.connectedPets.length < 2 && !p.connected && p.state === "yellow") {
        let d = dist(this.pos.x, this.pos.y, p.pos.x, p.pos.y);
        if (d < 100) {
          this.connectedPets.push(p);
          p.connected = true;
        }
      }
    });
  }

  bounce() {
    if (this.pos.x < 0 || this.pos.x > width) this.vel.x *= -1;
    if (this.pos.y < 0 || this.pos.y > height) this.vel.y *= -1;
  }
}

class Shelter {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.size= 20*TWO_PI;
  }

  update(numPets) {
    this.size = constrain(20 + numPets * 10, 20, 100);
  }

  display() {
    fill(0, 0, 0.9); 
    noStroke();
    circle(this.pos.x, this.pos.y, this.size);
  }
}

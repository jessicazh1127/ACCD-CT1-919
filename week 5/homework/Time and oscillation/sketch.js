let numRings = 15;
let strWeight = 15;
let radius;

function setup() {
  createCanvas(600, 600);
  colorMode(HSB, TWO_PI, 1, 1);
  rectMode(CENTER);
  radius = width * 0.1;
}

function draw() {
  background(220);
  noStroke();

  translate(width / 2, height / 2); 

  for (let i = 0; i < numRings; i++) {

    push();

    rotate(sin(millis() * 0.001 * (i * 0.3 + 1)));

    fill(i * TWO_PI / numRings, 0.9, 0.9);

    let r = radius + strWeight * i;
    let step = PI / 5; 

    for (
      let a = QUARTER_PI + HALF_PI;
      a < TWO_PI + QUARTER_PI;
      a += step
    ) {
      push();
      rotate(a);
      translate(r, 0);

      rect(0, 0, strWeight, strWeight);

      pop();
    }

    pop();
  }
}

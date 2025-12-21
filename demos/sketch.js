// Global variable to store the classifier
let classifier;
let video;

// Label (start by showing listening)
let label = "Loading...";

// Teachable Machine model URL:
let soundModelURL = 'https://teachablemachine.withgoogle.com/models/bslup3M8i/';


function preload() {
  // Load the model
  classifier = ml5.soundClassifier(soundModelURL+ 'model.json');
}

function setup() {
  createCanvas(640, 480);
  // Start classifying
  // The sound model will continuously listen to the microphone
  video = createCapture(VIDEO);
  video.size(640, 480);
  video.hide();
  
  classifier.classifyStart(video, gotResult);
}

function draw() {
  background(0);
  image(video, 0, 0);
  push();
  translate(width, 0);
  scale(-1, 1); 
  image(video, 0, 0, width, height);
  pop();
  // Draw the label in the canvas
  fill(255);
  textSize(20);
  textAlign(CENTER, CENTER);
  text(label, width / 2, height - 15);
}

function classifySound() {
  classifier.classify(gotResult);
}

function gotResult(results, error) {
  // If there is an error
  if (error) {
    console.error(error);
    return;
  }
  // The results are in an array ordered by confidence.
  // console.log(results[0]);
  label = results[0].label;
  classifier.classifyStart(gotResult);
}
let people = [];

const initialInfection = 0.05;
const moveChance = 0.01;
const moveSpeed = 0.01;

const infectionDist = 5;
const infectionRate = 0.5;

const recoveryRate = 0.01;

const colours = {
  S: "#10c230",
  I: "#de2669",
  R: "#09aab0",
};

const randomVector = () => createVector(random(500), random(500));

function setup() {
  createCanvas(500, 800);
}

function draw() {
  background(51);
  strokeWeight(0);
}

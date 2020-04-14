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

  people = [...Array(500)].map(() => ({
    pos: randomVector(),
    state: random() < initialInfection ? "I" : "S",
  }));
}

function draw() {
  background(51);
  strokeWeight(0);

  people.forEach((p) => {
    if (random() < moveChance) {
      p.target = randomVector();
    }
    p.pos = p5.Vector.lerp(p.pos, p.target, moveSpeed);
  });

  people.forEach((p) => {
    if (p.state === "S") {
      const nearInfection = people.some(
        (p2) => p2.state === "I" && p2.pos.dist(p.pos) < infectionDist
      );

      if (nearInfection && random() < infectionRate) {
        p.state = "I";
      }
    }

    if (p.state === "I" && random() < recoveryRate) {
      p.state = "R";
    }
  });

  people.forEach((p) => {
    fill(colours[p.state]);
    circle(p.pos.x, p.pos.y, 5);
  });

  drawGraph();
}

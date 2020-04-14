let counts = [];

const drawGraph = () => {
  const count = {
    S: 0,
    I: 0,
    R: 0,
  };

  people.forEach((p) => {
    count[p.state] += 1;
  });

  if (counts.length < 500 || count.I) {
    counts.push(count);
  }

  const graphWidth = Math.min(500, counts.length);

  fill(colours.R);
  rect(0, 500, graphWidth, 300);

  fill(colours.S);
  beginShape();
  vertex(0, 500);
  counts.forEach(({ S }, index) => {
    vertex(
      lerp(0, graphWidth, index / counts.length),
      lerp(500, 800, S / people.length)
    );
  });
  vertex(graphWidth, 500);
  endShape(CLOSE);

  fill(colours.I);
  beginShape();
  vertex(0, 800);
  counts.forEach(({ I }, index) => {
    vertex(
      lerp(0, graphWidth, index / counts.length),
      lerp(800, 500, I / people.length)
    );
  });
  vertex(graphWidth, 800);
  endShape(CLOSE);
};

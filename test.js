function setup() {
	createCanvas(500, 500);
}

function draw() {
	background(300, 300, 25);
beginShape();
  vertex(80, 100);
  quadraticVertex(207, 53, 164, 154);
  bezierVertex(391, 384, 214, 137, 130, 310);
endShape(CLOSE)
}
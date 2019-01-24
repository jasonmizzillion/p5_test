function setup() {
	createCanvas(500, 500);
}

function draw() {
	background(300, 300, 25);
beginShape();
  fill(100,20,20);
  vertex(80, 100);
  quadraticVertex(207, 53, 164, 154);
  bezierVertex(391, 384, 214, 137, 130, 310);
endShape(CLOSE)
beginShape();
  fill(200,20,155);
  vertex(139, 102);
  quadraticVertex(225, 32, 270, 120);
  bezierVertex(369, 209, 379, 35, 319, 244);
endShape(CLOSE)

}
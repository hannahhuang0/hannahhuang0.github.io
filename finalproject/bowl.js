

let woodTextureV;
let woodTextureH;

let rotationAngle = 0;


function preload() {
  cherryWoodH = loadImage('img_cherrywoodH.jpg');

}

function setup() {
  let cnv = createCanvas(windowWidth * 0.5, windowHeight * 0.55, WEBGL);
  cnv.parent('canvas-container');
  angleMode(DEGREES);


  camera(500, -250, 0, 0, 0, 0, 0, 1, 0); 

}



function draw() {
  background('#f5f2ed');
  orbitControl();

  ambientLight(170, 171, 165);
  directionalLight(167, 167, 167, -1, 1, 1);
  directionalLight(50, 50, 50, -1, 1, -1);
  directionalLight(50, 50, 50, 1, 0, -1);
  directionalLight(20, 20, 20, 0, 1, 0);

  strokeWeight(0);

  // drawAxis();

  rotationAngle += 0.5; // rotate speed
  push();
  rotateY(rotationAngle);

  let bowlColour = '#c98e67';

  let torusCount = 215;
  let spacing = 0.3;
  let maxRadius = 48;
  let minRadius = 29;
  let tubeRadius = 2.5;

  let bottomY = -torusCount * spacing / 2;

  // Draw tapered torus stack (downwards)
  for (let i = 0; i < torusCount; i++) {
    let t = i / (torusCount - 1);
    let ringRadius = lerp(maxRadius, minRadius, t);

    push();
    translate(0, bottomY + i * spacing, 0);
    rotateX(90);
    // fill(bowlColour);
    texture(cherryWoodH);
    noStroke();
    torus(ringRadius, tubeRadius, 90, 90);
    pop();
  }

  // Get the Y position of the last torus
  let lastTorusY = bottomY + (torusCount - 1) * spacing - 5; // Position just above the last torus

  // Draw additional torus stack upwards, curving inward (smaller ring, thicker tube)
  let additionalTorusCount = 60;
  let additionalSpacing = 0.1;

  let startRingRadius = 29.5;
  let endRingRadius = 0;

  let startTubeRadius = 3;
  let endTubeRadius = 1;

  for (let i = 0; i < additionalTorusCount; i++) {
    let t = i / (additionalTorusCount - 1);

    let ringRadius = lerp(startRingRadius, endRingRadius, t);
    let tubeRadius = lerp(startTubeRadius, endTubeRadius, t);

    push();
    let y = lastTorusY + i * additionalSpacing;
    translate(0, y, 0);
    rotateX(90);
    // fill(bowlColour);
    texture(cherryWoodH);
    noStroke();
    torus(ringRadius, tubeRadius, 90, 90);
    pop();
  }

  // Draw little dot at the bottom of the inward taper to reduce sharp point
  let plugCount = 7;
  let plugStartRadius = 0;
  let plugEndRadius = 0.6;
  let plugY = lastTorusY + 4.7;

  for (let i = 0; i < plugCount; i++) {
    let t = i / (plugCount - 1);
    let ringRadius = lerp(plugStartRadius, plugEndRadius, t);
    let tubeRadius3 = 0.1;

    push();
    translate(0, plugY, 0);
    rotateX(90);
    // fill(bowlColour);
    texture(cherryWoodH);
    noStroke();
    torus(ringRadius, tubeRadius3, 90, 90);
    pop();
  }

  // Draw cylinder below the stack
  push();
  let cylinderHeight = 7;
  let cylinderY = bottomY + torusCount * spacing + cylinderHeight / 2;
  translate(0, cylinderY, 0);
  // fill(bowlColour);
  texture(cherryWoodH);
  noStroke();
  cylinder(minRadius + tubeRadius / 2, cylinderHeight, 80, 1);
  pop();

  pop(); // end rotation block
}


// --- Resize ---
function windowResized() {
    resizeCanvas(windowWidth * 0.5, windowHeight * 0.55);
}

function drawAxis(size = 300) {
  stroke(255, 0, 0); // X
  line(0, 0, 0, size, 0, 0);
  stroke(0, 255, 0); // Y
  line(0, 0, 0, 0, size, 0);
  stroke(0, 0, 255); // Z
  line(0, 0, 0, 0, 0, size);
}



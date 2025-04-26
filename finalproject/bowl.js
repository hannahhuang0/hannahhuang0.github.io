

let woodTextureV;
let woodTextureH;

let rotationAngle = 0;


// preload image
function preload() {
  cherryWoodH = loadImage('img_cherrywoodH.jpg');
  
}

// setup function
function setup() {
  let cnv = createCanvas(windowWidth * 0.5, windowHeight * 0.55, WEBGL);
  cnv.parent('canvas-container');
  angleMode(DEGREES);
  
  
  camera(500, -250, 0, 0, 0, 0, 0, 1, 0); 
}


// draw function
function draw() {
  background('#f5f2ed');
  
  // -----------------------------------------------
  // Remixed from p5.js orbitControl() tutorial
  // https://p5js.org/reference/p5/orbitControl/
  orbitControl();
  // Code was used to allow the environment and object to be orbitable
  // End remix for orbitControl() tutorial
  // -----------------------------------------------
  
  
  // -----------------------------------------------
  // Remixed from ambientLight() reference
  // https://p5js.org/reference/p5/ambientLight/
  ambientLight(170, 171, 165);
  // Code was remixed to create ambient light in the environment
  // End remix for ambientLight() reference
  // -----------------------------------------------
  
  
  // -----------------------------------------------
  // Remixed from directionalLight() reference
  // https://p5js.org/reference/p5/directionalLight/
  directionalLight(167, 167, 167, -1, 1, 1);
  directionalLight(50, 50, 50, -1, 1, -1);
  directionalLight(50, 50, 50, 1, 0, -1);
  directionalLight(20, 20, 20, 0, 1, 0);
  // Code was remixed to add shadows and highlights to the objects
  // End remix for directionalLight() reference
  // -----------------------------------------------
  
  
  strokeWeight(0);
  
  // drawAxis();
  
  rotationAngle += 0.5; // rotate speed
  push();
  rotateY(rotationAngle);
  
  let bowlColour = '#c98e67';
  
  // -----------------------------------------------
  // Remixed from p5.js torus() and rotateX() tutorial
  // https://p5js.org/reference/p5/torus/   <--- torus tutorial
  // https://p5js.org/reference/p5/rotateX/  <--- rotate tutorial
  let torusCount = 215;
  let spacing = 0.3;
  let maxRadius = 48;
  let minRadius = 29;
  let tubeRadius = 2.5;
  
  let bottomY = -torusCount * spacing / 2;
  
  // draw tapered torus stack (downwards)
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
  
  // get the y position of the last torus
  let lastTorusY = bottomY + (torusCount - 1) * spacing - 5; // Position just above the last torus
  
  // draw additional torus stack upwards, curving inward (smaller ring, thicker tube)
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
  
  // draw little dot at the bottom of the inward taper to reduce sharp point
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
  // Code was remixed to help create the torus stack which forms the bowl, done by modifying the propoerties of the torus, 
  // and also rotating the torus to make it horizontal instead of vertical
  // End remix for torus() and roateX() tutorial
  // -----------------------------------------------
  
  
  
  // -----------------------------------------------
  // Remixed from p5.js Cylinder tutorial
  // https://p5js.org/reference/p5/cylinder/
  // draw cylinder below the stack
  push();
  let cylinderHeight = 7;
  let cylinderY = bottomY + torusCount * spacing + cylinderHeight / 2;
  translate(0, cylinderY, 0);
  // fill(bowlColour);
  texture(cherryWoodH);
  noStroke();
  cylinder(minRadius + tubeRadius / 2, cylinderHeight, 80, 1);
  pop();
  
  pop(); 
}
// Code was remixed to help create the cylindrical base of the bowl
// End remix for Cylinder tutorial
// -----------------------------------------------


// --- resize ---
function windowResized() {
  resizeCanvas(windowWidth * 0.5, windowHeight * 0.55);
}






// -----------------------------------------------
// Remixed from p5.js Materials example
// https://p5js.org/examples/3d-materials/
let textureImage; 

function preload() {
  textureImage = loadImage('material.jpg'); 
  textureImage2 = loadImage('material2.jpg'); 
}
// Code was changed to allow for the use of my own texture files
// End remix for Materials example
// -----------------------------------------------



// -----------------------------------------------
// Remixed from p5.js Geometries example
// https://p5js.org/examples/3d-geometries/
// Edited the parameters for the boxes and added my own variables to allow for the code to be easily edited

// door 1
var door1p1 = {
  w: 100,             
  h: 450,           
  d: 30,            /*    I included the draw function in the variables and used this format for the code so that the 
                    information for each variable is contained and the draw function below will be organized    */
  x: -225,
  y: 200,
  z: 410,      
  colour: '#EEEBE4',
  stroke: 'red',
  
  draw: function() {

    push();                               // <---- this code was the part that I remixed from the example, and I wrote the other code
    fill(this.colour);                    //       this applies the the other variables as well
    texture(textureImage);                //
    noStroke();                           //
    //stroke(this.stroke);                //
    translate(this.x, this.y, this.z);    //
    box(this.w, this.h, this.d);          //
    pop();                                // <-----------
  }
};

var door1p2 = {
  w: 300,       // width of box
  h: 200,       //height of box
  d: 30,        //depth of box
  
  x: -100,      // position of box on x-axis
  y: 75,        // position of box on y-axis
  z: 410,       // position of box on z-axis
  colour: '#EEEBE4',        // colour of box
  stroke: 'red',            // red stroke colour to make it easier to view the outline of the box
  
  draw: function() {
    push();
    fill(this.colour); 
    texture(textureImage);        // add texture to wall
    noStroke();                   // remove stroke to get rid of outlines
    //stroke(this.stroke);        // in case the stroke is needed
    translate(this.x, this.y, this.z); 
    box(this.w, this.h, this.d); 
    pop();
  }
};

var door1p3 = {
  w: 30,      
  h: 300,     
  d: 30,      
  
  x: 35,
  y: 275,
  z: 410,      
  colour: '#EEEBE4',
  stroke: 'red',
  
  draw: function() {
    push();
    fill(this.colour);
    texture(textureImage);
    noStroke();
    //stroke(this.stroke);
    translate(this.x, this.y, this.z); 
    box(this.w, this.h, this.d); 
    pop();
  }
};

var door1wall1 = {
  w: 30,      
  h: 450,     
  d: 150,      
  
  x: 35,
  y: 200,
  z: 330,      
  colour: '#EEEBE4',
  stroke: 'red',
  
  draw: function() {
    push();
    fill(this.colour);
    texture(textureImage);
    noStroke();
    //stroke(this.stroke);
    translate(this.x, this.y, this.z); 
    box(this.w, this.h, this.d); 
    pop();
  }
};

var door1wall2 = {
  w: 30,      
  h: 450,     
  d: 150,      
  
  x: -260,
  y: 200,
  z: 330,      
  colour: '#EEEBE4',
  stroke: 'red',
  
  draw: function() {
    push();
    fill(this.colour);
    texture(textureImage);
    noStroke();
    //stroke(this.stroke);
    translate(this.x, this.y, this.z); 
    box(this.w, this.h, this.d); 
    pop();
  }
};

var door1ceiling = {
  w: 290,      
  h: 30,     
  d: 150,      
  
  x: -100,
  y: -10,
  z: 330,      
  colour: '#EEEBE4',
  stroke: 'red',
  
  draw: function() {
    push();
    fill(this.colour);
    texture(textureImage);
    noStroke();
    //stroke(this.stroke);
    translate(this.x, this.y, this.z); 
    box(this.w, this.h, this.d); 
    pop();
  }
};

// centre stairs
var centrestairsright = {
  w: 230,      
  h: 450,     
  d: 30,      
  
  x: 310,
  y: 200,
  z: 360,      
  colour: '#EEEBE4',
  stroke: 'red',
  
  draw: function() {
    push();
    fill(this.colour);
    texture(textureImage);
    noStroke();
    //stroke(this.stroke);
    translate(this.x, this.y, this.z); 
    box(this.w, this.h, this.d); 
    pop();
  }
};

var centrestairsbase = {
  w: 380,      
  h: 60,     
  d: 80,      
  
  x: 235,
  y: 395,
  z: 385,      
  colour: '#EEEBE4',
  stroke: 'red',
  
  draw: function() {
    push();
    fill(this.colour);
    texture(textureImage);
    noStroke();
    //stroke(this.stroke);
    translate(this.x, this.y, this.z); 
    box(this.w, this.h, this.d); 
    pop();
  }
};

var centrestairs = {
  stepWidth: 145,       // width of step
  stepHeight: 32,       // height of step
  stepDepth: 40,        // depth of step
  overlapFactor: 0.7,  // control how much the steps overlap (less than 1 to overlap)
  numSteps: 16,         // number of steps in the staircase
  colour: '#EEEBE4',
  stroke: '#96572f',  
  
  draw: function() {
    push();
    //stroke(this.stroke);
    fill(this.colour);
    texture(textureImage);      // add texture to the stairs, remixed from Materials example
    
    translate(122.5, 12.5, -70); // initial position for the stairs
    
    // stairs
    for (let i = 0; i < this.numSteps; i++) {
      push();
      translate(0, i * this.stepHeight * this.overlapFactor, i * this.stepDepth * this.overlapFactor);    // translate steps about the same amount as the size of the step, add a bit of overlap (x, y, z)
      box(this.stepWidth, this.stepHeight, this.stepDepth); // create each step
      pop();
    }
    pop();
  }
};

var centrestairsceiling = {
  w: 380,      
  h: 30,     
  d: 140,      
  
  x: 235,
  y: -10,
  z: 355,      
  colour: '#EEEBE4',
  stroke: 'red',
  
  draw: function() {
    push();
    fill(this.colour);
    texture(textureImage);
    noStroke();
    //stroke(this.stroke);
    translate(this.x, this.y, this.z); 
    box(this.w, this.h, this.d); 
    pop();
  }
};

// window 1 
var window1p1 = {
  w: 30,      
  h: 100,     
  d: 300,      
  
  x: 410,
  y: 25,
  z: 195,      
  colour: '#EEEBE4',
  stroke: 'red',
  
  draw: function() {
    push();
    fill(this.colour);
    texture(textureImage);
    noStroke();
    //stroke(this.stroke);
    translate(this.x, this.y, this.z); 
    box(this.w, this.h, this.d); 
    pop();
  }
};

var window1p2 = {
  w: 30,      
  h: 450,     
  d: 60,      
  
  x: 410,
  y: 200,
  z: 315,      
  colour: '#EEEBE4',
  stroke: 'red',
  
  draw: function() {
    push();
    fill(this.colour);
    texture(textureImage);
    noStroke();
    //stroke(this.stroke);
    translate(this.x, this.y, this.z); 
    box(this.w, this.h, this.d); 
    pop();
  }
};

var window1p3 = {
  w: 30,      
  h: 450,     
  d: 60,      
  
  x: 410,
  y: 200,
  z: 75,      
  colour: '#EEEBE4',
  stroke: 'red',
  
  draw: function() {
    push();
    fill(this.colour);
    texture(textureImage);
    noStroke();
    //stroke(this.stroke);
    translate(this.x, this.y, this.z); 
    box(this.w, this.h, this.d); 
    pop();
  }
};

var window1p4 = {
  w: 30,      
  h: 200,     
  d: 300,      
  
  x: 410,
  y: 325,
  z: 195,      
  colour: '#EEEBE4',
  stroke: 'red',
  
  draw: function() {
    push();
    fill(this.colour);
    texture(textureImage);
    noStroke();
    //stroke(this.stroke);
    translate(this.x, this.y, this.z); 
    box(this.w, this.h, this.d); 
    pop();
  }
};

var window1 = {
  w: 10,      
  h: 150,     
  d: 200,      
  
  x: 410,
  y: 150,
  z: 190,      
  colour: '#deb3261A',    // 10% opacity to add a slight tint to the window
  stroke: 'red',
  
  draw: function() {
    push();
    fill(this.colour);
    noStroke();
    //stroke(this.stroke);
    translate(this.x, this.y, this.z); 
    box(this.w, this.h, this.d); 
    pop();
  }
};

// right side
var rightp1 = {
  w: 190,      
  h: 450,     
  d: 30,      
  
  x: 330,
  y: 200,
  z: 30,      
  colour: '#EEEBE4',
  stroke: 'red',
  
  draw: function() {
    push();
    fill(this.colour);
    texture(textureImage);
    noStroke();
    //stroke(this.stroke);
    translate(this.x, this.y, this.z); 
    box(this.w, this.h, this.d); 
    pop();
  }
};

var rightp2 = {
  w: 30,      
  h: 450,     
  d: 240,      
  
  x: 410,
  y: 200,
  z: -75,      
  colour: '#EEEBE4',
  stroke: 'red',
  
  draw: function() {
    push();
    fill(this.colour);
    texture(textureImage);
    noStroke();
    //stroke(this.stroke);
    translate(this.x, this.y, this.z); 
    box(this.w, this.h, this.d); 
    pop();
  }
};

var rightceiling = {
  w: 230,      
  h: 30,     
  d: 580,      
  
  x: 310,
  y: -10,
  z: 90,      
  colour: '#EEEBE4',
  stroke: 'red',
  
  draw: function() {
    push();
    fill(this.colour);
    texture(textureImage);
    noStroke();
    //stroke(this.stroke);
    translate(this.x, this.y, this.z); 
    box(this.w, this.h, this.d); 
    pop();
  }
};

// back stairs
var backstairs = {
  stepWidth: 145,       // width of step
  stepHeight: 32,       // height of step
  stepDepth: 40,        // depth of step
  numSteps: 17,         // number of steps for the staircase
  overlapFactor: 0.7,  // control how much the steps overlap (less than 1 to overlap)
  
  draw: function() {
    push();
    stroke('#96572f');
    fill('#EEEBE4');
    texture(textureImage);
    translate(-188, 349.5, -352.5); // starting position of stairs
    
    // main stairs
    for (let i = 0; i < this.numSteps; i++) {
      push();
      
      let xTranslation = i * this.stepDepth * this.overlapFactor;   // move along x-axis for each step
      let yTranslation = -i * this.stepHeight * this.overlapFactor;   // move along y-axiz for each step
      translate(xTranslation, yTranslation, 0);   // translate, ascend with overlap
      box(this.stepDepth, this.stepHeight, this.stepWidth);   // draw main steps
      
      // steps beneath each step for solid structure
      for (let j = 0; j < i; j++) {
        // translate to add steps beneath the current step
        noStroke();
        translate(0, this.stepHeight * this.overlapFactor, 0); // move down to next level
        box(this.stepDepth, this.stepHeight, this.stepWidth);  // draw support step under the current one
      }

      pop();
    }
    
    pop();
  }
};

var backstairsbase = {
  w: 850,      
  h: 60,     
  d: 150,      
  
  x: 0,
  y: 395,
  z: -350,      
  colour: '#EEEBE4',
  stroke: 'red',
  
  draw: function() {
    push();
    fill(this.colour);
    texture(textureImage);
    noStroke();
    //stroke(this.stroke);
    translate(this.x, this.y, this.z); 
    box(this.w, this.h, this.d); 
    pop();
  }
};

var backstairsbase2 = {
  w: 850,      
  h: 105,     
  d: 100,      
  
  x: 0,
  y: 372,
  z: -230,      
  colour: '#EEEBE4',
  stroke: 'red',
  
  draw: function() {
    push();
    fill(this.colour);
    texture(textureImage);
    noStroke();
    //stroke(this.stroke);
    translate(this.x, this.y, this.z); 
    box(this.w, this.h, this.d); 
    pop();
  }
};

var backstairswall = {
  w: 145,      
  h: 450,     
  d: 240,      
  
  x: 352.5,
  y: 200,
  z: -305,      
  colour: '#EEEBE4',
  stroke: 'red',
  
  draw: function() {
    push();
    fill(this.colour);
    texture(textureImage);
    noStroke();
    //stroke(this.stroke);
    translate(this.x, this.y, this.z); 
    box(this.w, this.h, this.d); 
    pop();
  }
};

var backstairsleftwall = {
  w: 400,      
  h: 450,     
  d: 30,      
  
  x: 150,
  y: 200,
  z: -185,      
  colour: '#EEEBE4',
  stroke: 'red',
  
  draw: function() {
    push();
    fill(this.colour);
    texture(textureImage);
    noStroke();
    //stroke(this.stroke);
    translate(this.x, this.y, this.z); 
    box(this.w, this.h, this.d); 
    pop();
  }
};

// left stairs
var leftstairs = {
  stepWidth: 145,
  stepHeight: 32,
  stepDepth: 40,
  numSteps: 15,
  overlapFactor: 0.7,  // control the overlap (less than 1 to overlap)
  
  draw: function() {
    push();
    stroke('#96572f');
    fill('#EEEBE4');
    texture(textureImage);
    translate(-352.5, 304.5, -102); 
    
    // main stairs
    for (let i = 0; i < this.numSteps; i++) {
      push();
    
      let zTranslation = i * this.stepDepth * this.overlapFactor; // adjust forward translation (z-axis)
      let yTranslation = -i * this.stepHeight * this.overlapFactor; // adjust downward translation (y-axis)
      
      translate(0, yTranslation, zTranslation); 
      box(this.stepWidth, this.stepHeight, this.stepDepth); 
      
      // steps beneath each step for solid structure
      for (let j = 0; j < i; j++) {
        // translate to add steps beneath the current step
        noStroke();
        translate(0, this.stepHeight * this.overlapFactor, 0);
        box(this.stepWidth, this.stepHeight, this.stepDepth); 
      }
      
      pop();
    }
    
    pop();
  }
};

var leftstairsbase = {
  w: 150,      
  h: 105,     
  d: 700,      
  
  x: -350,
  y: 372,
  z: 75,      
  colour: '#EEEBE4',
  stroke: 'red',
  
  draw: function() {
    push();
    fill(this.colour);
    texture(textureImage);
    noStroke();
    //stroke(this.stroke);
    translate(this.x, this.y, this.z); 
    box(this.w, this.h, this.d); 
    pop();
  }
};

var leftstairswall = {
  w: 150,      
  h: 450,     
  d: 115,      
  
  x: -350,
  y: 200,
  z: 367.5,      
  colour: '#EEEBE4',
  stroke: 'red',
  
  draw: function() {
    push();
    fill(this.colour);
    texture(textureImage);
    noStroke();
    //stroke(this.stroke);
    translate(this.x, this.y, this.z); 
    box(this.w, this.h, this.d); 
    pop();
  }
};

// window 2
var window2 = {
  w: 200,      
  h: 150,     
  d: 10,      
  
  x: -150,
  y: 150,
  z: -185,      
  colour: '#deb3261A',    // 10% opacity to add a slight tint to the window
  stroke: 'red',
  
  draw: function() {
    push();
    fill(this.colour);
    noStroke();
    //stroke(this.stroke);
    translate(this.x, this.y, this.z); 
    box(this.w, this.h, this.d); 
    pop();
  }
};

var window2p1 = {
  w: 30,      
  h: 450,     
  d: 510,      
  
  x: -265,
  y: 200,
  z: 55,      
  colour: '#EEEBE4',
  stroke: 'red',
  
  draw: function() {
    push();
    fill(this.colour);
    texture(textureImage);
    noStroke();
    //stroke(this.stroke);
    translate(this.x, this.y, this.z); 
    box(this.w, this.h, this.d); 
    pop();
  }
};

var window2p2 = {
  w: 200,      
  h: 100,     
  d: 30,      
  
  x: -150,
  y: 25,
  z: -185,      
  colour: '#EEEBE4',
  stroke: 'red',
  
  draw: function() {
    push();
    fill(this.colour);
    texture(textureImage);
    noStroke();
    //stroke(this.stroke);
    translate(this.x, this.y, this.z); 
    box(this.w, this.h, this.d); 
    pop();
  }
};

var window2p3 = {
  w: 200,      
  h: 100,     
  d: 30,      
  
  x: -150,
  y: 275,
  z: -185,      
  colour: '#EEEBE4',
  stroke: 'red',
  
  draw: function() {
    push();
    fill(this.colour);
    texture(textureImage);
    noStroke();
    //stroke(this.stroke);
    translate(this.x, this.y, this.z); 
    box(this.w, this.h, this.d); 
    pop();
  }
};

// left stairs 2
var leftstairs2 = {
  stepWidth: 145,
  stepHeight: 32,
  stepDepth: 40,
  numSteps: 14,
  overlapFactor: 0.7,  // control the overlap (less than 1 to overlap)
  
  draw: function() {
    push();
    stroke('#96572f');
    fill('#EEEBE4');
    texture(textureImage);
    translate(-207.5, -41, 244); // starting point for stairs
    
    // main stairs
    for (let i = 0; i < this.numSteps; i++) {
      push();
      
      let zTranslation = -i * this.stepDepth * this.overlapFactor; 
      let yTranslation = -i * this.stepHeight * this.overlapFactor; 
      
      translate(0, yTranslation, zTranslation); 
      box(this.stepWidth, this.stepHeight, this.stepDepth);  
      
      // add steps beneath the current step for solid structure
      for (let j = 0; j < i; j++) {
        noStroke();
        translate(0, this.stepHeight * this.overlapFactor, 0); 
        box(this.stepWidth, this.stepHeight, this.stepDepth);  
      }
      
      pop();
    }
    
    pop();
  }
};

var leftstairswall2 = {
  w: 145,      
  h: 330,     
  d: 60,      
  
  x: -207.5,
  y: -183.5,
  z: -170,      
  colour: '#EEEBE4',
  stroke: 'red',
  
  draw: function() {
    push();
    fill(this.colour);
    texture(textureImage);
    noStroke();
    //stroke(this.stroke);
    translate(this.x, this.y, this.z); 
    box(this.w, this.h, this.d); 
    pop();
  }
};

// top back wall
var topbackwall1 = {
  w: 545,      
  h: 121,     
  d: 30,      
  
  x: -2.5,
  y: -288,
  z: -185,      
  colour: '#EEEBE4',
  stroke: 'red',
  
  draw: function() {
    push();
    fill(this.colour);
    texture(textureImage);
    noStroke();
    //stroke(this.stroke);
    translate(this.x, this.y, this.z); 
    box(this.w, this.h, this.d); 
    pop();
  }
};

var topbackwall2 = {
  w: 545,      
  h: 60,     
  d: 30,      
  
  x: -2.5,
  y: -55,
  z: -185,      
  colour: '#EEEBE4',
  stroke: 'red',
  
  draw: function() {
    push();
    fill(this.colour);
    texture(textureImage);
    noStroke();
    //stroke(this.stroke);
    translate(this.x, this.y, this.z); 
    box(this.w, this.h, this.d); 
    pop();
  }
};

// back wall side
var backwallside1 = {
  w: 60,      
  h: 230,     
  d: 30,      
  
  x: -105,
  y: -143,
  z: -185,      
  colour: '#EEEBE4',
  stroke: 'red',
  
  draw: function() {
    push();
    fill(this.colour);
    texture(textureImage);
    noStroke();
    //stroke(this.stroke);
    translate(this.x, this.y, this.z); 
    box(this.w, this.h, this.d); 
    pop();
  }
};

var backwallside2 = {
  w: 60,      
  h: 411,     
  d: 30,      
  
  x: 250,
  y: -143,
  z: -185,      
  colour: '#EEEBE4',
  stroke: 'red',
  
  draw: function() {
    push();
    fill(this.colour);
    texture(textureImage);
    noStroke();
    //stroke(this.stroke);
    translate(this.x, this.y, this.z); 
    box(this.w, this.h, this.d); 
    pop();
  }
};

// right stairs
var rightstairs = {
  stepWidth: 145,
  stepHeight: 32,
  stepDepth: 40,
  numSteps: 10,
  overlapFactor: 0.7,  // control the overlap (less than 1 to overlap)
  
  draw: function() {
    push();
    stroke('#96572f');
    fill('#EEEBE4');
    texture(textureImage);
    translate(352.5, -41, -112); 
    
    // main stairs
    for (let i = 0; i < this.numSteps; i++) {
      push();
      
      let zTranslation = i * this.stepDepth * this.overlapFactor; 
      let yTranslation = -i * this.stepHeight * this.overlapFactor;
      
      translate(0, yTranslation, zTranslation);  
      box(this.stepWidth, this.stepHeight, this.stepDepth); 
      
      // add steps beneath the current step for solid structure
      for (let j = 0; j < i; j++) {
        noStroke();
        translate(0, this.stepHeight * this.overlapFactor, 0); 
        box(this.stepWidth, this.stepHeight, this.stepDepth);  
      }
      
      pop();
    }
    
    pop();
  }
};

var rightstairswall = {
  w: 145,      
  h: 235,     
  d: 265,      
  
  x: 352.5,
  y: -141,
  z: 292.5,      
  colour: '#EEEBE4',
  stroke: 'red',
  
  draw: function() {
    push();
    fill(this.colour);
    texture(textureImage);
    noStroke();
    //stroke(this.stroke);
    translate(this.x, this.y, this.z); 
    box(this.w, this.h, this.d); 
    pop();
  }
};

// top front wall
var topfrontwall1 = {
  w: 705,      
  h: 30,     
  d: 30,      
  
  x: -72.5,
  y: -243.5,
  z: 410,      
  colour: '#EEEBE4',
  stroke: 'red',
  
  draw: function() {
    push();
    fill(this.colour);
    texture(textureImage);
    noStroke();
    //stroke(this.stroke);
    translate(this.x, this.y, this.z); 
    box(this.w, this.h, this.d); 
    pop();
  }
};

var topfrontwall2 = {
  w: 705,      
  h: 60,     
  d: 30,      
  
  x: -72.5,
  y: -55,
  z: 410,      
  colour: '#EEEBE4',
  stroke: 'red',
  
  draw: function() {
    push();
    fill(this.colour);
    texture(textureImage);
    noStroke();
    //stroke(this.stroke);
    translate(this.x, this.y, this.z); 
    box(this.w, this.h, this.d); 
    pop();
  }
};

// front wall side 
var frontwallside1 = {
  w: 60,      
  h: 230,     
  d: 30,      
  
  x: -395,
  y: -143,
  z: 410,      
  colour: '#EEEBE4',
  stroke: 'red',
  
  draw: function() {
    push();
    fill(this.colour);
    texture(textureImage);
    noStroke();
    //stroke(this.stroke);
    translate(this.x, this.y, this.z); 
    box(this.w, this.h, this.d); 
    pop();
  }
};

var frontwallside2 = {
  w: 60,      
  h: 230,     
  d: 30,      
  
  x: 250,
  y: -143,
  z: 410,      
  colour: '#EEEBE4',
  stroke: 'red',
  
  draw: function() {
    push();
    fill(this.colour);
    texture(textureImage);
    noStroke();
    //stroke(this.stroke);
    translate(this.x, this.y, this.z); 
    box(this.w, this.h, this.d); 
    pop();
  }
};


// first floor
var firstfloor = {
  w: 850,      
  h: 10,     
  d: 850,      
  
  x: 0,
  y: 420,
  z: 0,      
  colour: '#EEEBE4',
  stroke: 'red',
  
  draw: function() {
    push();
    fill(this.colour);
    texture(textureImage);
    noStroke();
    //stroke(this.stroke);
    translate(this.x, this.y, this.z); 
    box(this.w, this.h, this.d); 
    pop();
  }
};

// second floor
var secondfloorp1 = {
  w: 325,      
  h: 30,     
  d: 460,      
  
  x: -112.5,
  y: -10,
  z: 30,      
  colour: '#EEEBE4',
  stroke: 'red',
  
  draw: function() {
    push();
    fill(this.colour);
    texture(textureImage);
    noStroke();
    //stroke(this.stroke);
    translate(this.x, this.y, this.z); 
    box(this.w, this.h, this.d); 
    pop();
  }
};

var secondfloorp2 = {
  w: 150,      
  h: 30,     
  d: 110,      
  
  x: 120,
  y: -10,
  z: -145,      
  colour: '#EEEBE4',
  stroke: 'red',
  
  draw: function() {
    push();
    fill(this.colour);
    texture(textureImage);
    noStroke();
    //stroke(this.stroke);
    translate(this.x, this.y, this.z); 
    box(this.w, this.h, this.d); 
    pop();
  }
};

// bush 1
var bushp1 = {
  sphereSize: 15,         
  x: 200,                   
  y: -30,                 
  z: 390,                   
  colour: '#627808',      
   
  draw: function() {
    push();
    fill(this.colour);
    texture(textureImage2);
    noStroke();
    translate(this.x, this.y, this.z);
    sphere(this.sphereSize); 
    
    pop();
  }
};

var bushp2 = {
  sphereSize: 16,         
  x: 210,                   
  y: -35,                 
  z: 380,                   
  colour: '#627808',      
  
  draw: function() {
    push();
    fill(this.colour);
    texture(textureImage2);
    noStroke();
    translate(this.x, this.y, this.z);
    sphere(this.sphereSize); 
    
    pop();
  }
};

var bushp3 = {
  sphereSize: 20,         
  x: 224,                   
  y: -33,                 
  z: 385,                   
  colour: '#627808',     
  
  draw: function() {
    push();
    fill(this.colour);
    texture(textureImage2);
    noStroke();
    translate(this.x, this.y, this.z);
    sphere(this.sphereSize); 
    
    pop();
  }
};

var bushp4 = {
  sphereSize: 17,         
  x: 225,                   
  y: -25,                 
  z: 373,                         
  colour: '#627808',      
  
  draw: function() {
    push();
    fill(this.colour);
    texture(textureImage2);
    noStroke();
    translate(this.x, this.y, this.z);
    sphere(this.sphereSize); 
    
    pop();
  }
};

var bushp5 = {
  sphereSize: 20,         
  x: 237,                   
  y: -43,                 
  z: 385,                   
  colour: '#627808',     
  
  draw: function() {
    push();
    fill(this.colour);
    texture(textureImage2);
    noStroke();
    translate(this.x, this.y, this.z);
    sphere(this.sphereSize); 
    
    pop();
  }
};

var bushp6 = {
  sphereSize: 22,         
  x: 263,                   
  y: -37,                 
  z: 385,                   
  colour: '#627808',     
  
  draw: function() {
    push();
    fill(this.colour);
    texture(textureImage2);
    noStroke();
    translate(this.x, this.y, this.z);
    sphere(this.sphereSize); 
    
    pop();
  }
};

var bushp7 = {
  sphereSize: 27,         
  x: 258,                   
  y: -24,                 
  z: 373,                         
  colour: '#627808',      
  
  draw: function() {
    push();
    fill(this.colour);
    texture(textureImage2);
    noStroke();
    translate(this.x, this.y, this.z);
    sphere(this.sphereSize); 
    
    pop();
  }
};

// bush 2
var bush2p1 = {
  sphereSize: 15,         
  x: -60,                   
  y: -30,                 
  z: -167,                   
  colour: '#627808',      
  
  draw: function() {
    push();
    fill(this.colour);
    texture(textureImage2);
    noStroke();
    translate(this.x, this.y, this.z);
    sphere(this.sphereSize); 
    
    pop();
  }
};

var bush2p2 = {
  sphereSize: 16,         
  x: -70,                   
  y: -29,                 
  z: -150,                   
  colour: '#627808',      
  
  draw: function() {
    push();
    fill(this.colour);
    texture(textureImage2);
    noStroke();
    translate(this.x, this.y, this.z);
    sphere(this.sphereSize); 
    
    pop();
  }
};

var bush2p3 = {
  sphereSize: 24,         
  x: -85,                   
  y: -33,                 
  z: -155,                   
  colour: '#627808',     
  
  draw: function() {
    push();
    fill(this.colour);
    texture(textureImage2);
    noStroke();
    translate(this.x, this.y, this.z);
    sphere(this.sphereSize); 
    
    pop();
  }
};

var bush2p4 = {
  sphereSize: 17,         
  x: -100,                   
  y: -25,                 
  z: -135,                         
  colour: '#627808',      
  
  draw: function() {
    push();
    fill(this.colour);
    texture(textureImage2);
    noStroke();
    translate(this.x, this.y, this.z);
    sphere(this.sphereSize); 
    
    pop();
  }
};

var bush2p5 = {
  sphereSize: 20,          
  x: -110,               
  y: -43,                
  z: -155,               
  colour: '#627808',     
  
  draw: function() {
    push();
    fill(this.colour);
    texture(textureImage2);
    noStroke();
    translate(this.x, this.y, this.z);
    sphere(this.sphereSize); 
    
    pop();
  }
};

var bush2p6 = {
  sphereSize: 22,        
  x: -120,                  
  y: -37,               
  z: -165,                  
  colour: '#627808',     
  
  draw: function() {
    push();
    fill(this.colour);
    texture(textureImage2);
    noStroke();
    translate(this.x, this.y, this.z);
    sphere(this.sphereSize); 
    
    pop();
  }
};

var bush2p7 = {
  sphereSize: 27,          
  x: -138,               
  y: -24,                  
  z: -140,                    
  colour: '#627808',  
  
  draw: function() {
    push();
    fill(this.colour);
    texture(textureImage2);
    noStroke();
    translate(this.x, this.y, this.z);
    sphere(this.sphereSize); 
    
    pop();
  }
};

// bush 3
var bush3p1 = {
  sphereSize: 15,          
  x: 230,                
  y: 353,               
  z: 385,                  
  colour: '#627808',      
  
  draw: function() {
    push();
    fill(this.colour);
    texture(textureImage2);
    noStroke();
    translate(this.x, this.y, this.z);
    sphere(this.sphereSize); 
    
    pop();
  }
};

var bush3p2 = {
  sphereSize: 18,          
  x: 250,                
  y: 345,               
  z: 387,                  
  colour: '#627808',      
  
  draw: function() {
    push();
    fill(this.colour);
    texture(textureImage2);
    noStroke();
    translate(this.x, this.y, this.z);
    sphere(this.sphereSize); 
    
    pop();
  }
};

var bush3p3 = {
  sphereSize: 22,          
  x: 243,                
  y: 365,               
  z: 390,                 
  colour: '#627808',      
  
  draw: function() {
    push();
    fill(this.colour);
    texture(textureImage2);
    noStroke();
    translate(this.x, this.y, this.z);
    sphere(this.sphereSize); 
    
    pop();
  }
};

var bush3p4 = {
  sphereSize: 25,          
  x: 270,                
  y: 347,               
  z: 384,                 
  colour: '#627808',      
  
  draw: function() {
    push();
    fill(this.colour);
    texture(textureImage2);
    noStroke();
    translate(this.x, this.y, this.z);
    sphere(this.sphereSize); 
    
    pop();
  }
};

var bush3p5 = {
  sphereSize: 27,          
  x: 294,                
  y: 359,               
  z: 380,                                   
  colour: '#627808',      
  
  draw: function() {
    push();
    fill(this.colour);
    texture(textureImage2);
    noStroke();
    translate(this.x, this.y, this.z);
    sphere(this.sphereSize); 
    
    pop();
  }
};

var bush3p6 = {
  sphereSize: 17,          
  x: 283,                
  y: 360,               
  z: 400,                  
  colour: '#627808',      
  
  draw: function() {
    push();
    fill(this.colour);
    texture(textureImage2);
    noStroke();
    translate(this.x, this.y, this.z);
    sphere(this.sphereSize); 
    
    pop();
  }
};

var bush3p7 = {
  sphereSize: 17,          
  x: 261,                
  y: 355,               
  z: 403,                  
  colour: '#627808',      
  
  draw: function() {
    push();
    fill(this.colour);
    texture(textureImage2);
    noStroke();
    translate(this.x, this.y, this.z);
    sphere(this.sphereSize); 
    
    pop();
  }
};

// bush 4
var bush4p1 = {
  sphereSize: 25,          
  x: 230,                
  y: 323,               
  z: -235,                  
  colour: '#627808',      
  
  draw: function() {
    push();
    fill(this.colour);
    texture(textureImage2);
    noStroke();
    translate(this.x, this.y, this.z);
    sphere(this.sphereSize); 
    
    pop();
  }
};

var bush4p2 = {
  sphereSize: 35,          
  x: 265,                
  y: 315,               
  z: -225,                  
  colour: '#627808',      
  
  draw: function() {
    push();
    fill(this.colour);
    texture(textureImage2);
    noStroke();
    translate(this.x, this.y, this.z);
    sphere(this.sphereSize); 
    
    pop();
  }
};

var bush4p3 = {
  sphereSize: 40,          
  x: 255,                
  y: 323,               
  z: -255,                  
  colour: '#627808',      
  
  draw: function() {
    push();
    fill(this.colour);
    texture(textureImage2);
    noStroke();
    translate(this.x, this.y, this.z);
    sphere(this.sphereSize); 
    
    pop();
  }
};

var bush4p4 = {
  sphereSize: 25,          
  x: 225,                
  y: 320,               
  z: -260,                   
  colour: '#627808',      
  
  draw: function() {
    push();
    fill(this.colour);
    texture(textureImage2);
    noStroke();
    translate(this.x, this.y, this.z);
    sphere(this.sphereSize); 
    
    pop();
  }
};
// End remix for Geometries example
// -----------------------------------------------



// -----------------------------------------------
// Remixed from p5.js Orbit Control example
// https://p5js.org/examples/3d-orbit-control/ 

  function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  angleMode(DEGREES);
  strokeWeight(0.5);
  noFill();
  stroke('#96572f');
  
// -----------------------------------------------
// Remixed from p5.js camera() reference
// https://p5js.org/reference/p5.Camera/camera/

  camera(0, 0, 2800, 0, 0, 0, 0, 1, 0); // camera([x], [y], [z], [centerX], [centerY], [centerZ], [upX], [upY], [upZ])
// Remixing to change camera angle
// End remix for camera() reference
// -----------------------------------------------
}


function draw() {
  background('#f5f4f0');
  
  // call every frame to adjust camera based on mouse/touch
  orbitControl();
// I used the same functions, added the camera function, and edited the parameters
// End remix for Orbit Control example
// -----------------------------------------------
  

// -----------------------------------------------
// Remixed from ambientLight() reference
// https://p5js.org/reference/p5/ambientLight/

  ambientLight(155, 151, 145);  // soft, dim ambient light gray tone
// End remix for ambientLight() reference
// -----------------------------------------------


// -----------------------------------------------
// Remixed from directionalLight() reference
// https://p5js.org/reference/p5/directionalLight/

  directionalLight(195, 195, 195, 1, 1, -1);  // from upper-right diagonal direction
  directionalLight(12, 12, 12, 1, 0, 0);  // from right, moving along the x-axis 
  directionalLight(27, 27, 27, 0, 1, 0);  // from above
// End remix for directionalLight() reference
// -----------------------------------------------

  door1p1.draw();         // draw all of the boxes that were created earlier
  door1p2.draw();
  door1p3.draw();
  door1wall1.draw();
  door1wall2.draw();
  door1ceiling.draw();
  
  centrestairsright.draw();
  centrestairsbase.draw();
  centrestairsceiling.draw();
  centrestairs.draw();
  
  window1p1.draw();
  window1p2.draw();
  window1p3.draw();
  window1p4.draw();
  window1.draw();
  
  rightp1.draw();
  rightp2.draw();
  rightceiling.draw();
  
  backstairs.draw()
  backstairsbase.draw();
  backstairsbase2.draw();
  backstairswall.draw();
  backstairsleftwall.draw();
  
  leftstairs.draw();
  leftstairsbase.draw();
  leftstairswall.draw();
  
  window2.draw();
  window2p1.draw();
  window2p2.draw();
  window2p3.draw();
  
  leftstairs2.draw();
  leftstairswall2.draw();
  
  rightstairs.draw();
  rightstairswall.draw();
  
  topfrontwall1.draw();
  topfrontwall2.draw();
  frontwallside1.draw();
  frontwallside2.draw();
  
  topbackwall1.draw();
  topbackwall2.draw();
  backwallside1.draw();
  backwallside2.draw();
  
  firstfloor.draw();
  
  secondfloorp1.draw();
  secondfloorp2.draw();

  bushp1.draw();          // draw all of the spheres that were created earlier
  bushp2.draw();
  bushp3.draw();
  bushp4.draw();
  bushp5.draw();
  bushp6.draw();
  bushp7.draw();

  bush2p1.draw();
  bush2p2.draw();
  bush2p3.draw();
  bush2p4.draw();
  bush2p5.draw();
  bush2p6.draw();
  bush2p7.draw();

  bush3p1.draw();
  bush3p2.draw();
  bush3p3.draw();
  bush3p4.draw();
  bush3p5.draw();
  bush3p6.draw();
  bush3p7.draw();

  bush4p1.draw();
  bush4p2.draw();
  bush4p3.draw();
  bush4p4.draw();
}

// -----------------------------------------------
// Remixed from windowResized() reference
// https://p5js.org/reference/p5/windowResized/
function windowResized(){         
  resizeCanvas(windowWidth, windowHeight);        // resize canvas when window is resized
}
// End remix for windowResized() reference
// -----------------------------------------------


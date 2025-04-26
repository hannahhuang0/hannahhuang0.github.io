// plane() could be useful

// camera movement could be useful https://p5js.org/reference/p5.Camera/camera/


// rotate x https://p5js.org/reference/p5/rotateX/

// cylinder https://p5js.org/reference/p5/cylinder/

// vertex https://p5js.org/reference/p5/vertex/
// torus https://p5js.org/reference/p5/torus/


/// pattern block 

// nolights() https://p5js.org/reference/p5/noLights/



// switch case https://www.w3schools.com/js/js_switch.asp
// request fullscreen https://www.w3schools.com/jsref/met_element_requestfullscreen.asp


// --- add home pg  ---


// --- add instruction manual to stool

// --- add citations ---





    // -----------------------------------------------
    // Remixed from p5.js noLights() tutorial
    // https://p5js.org/reference/p5/noLights/
    noLights();
    // Code was used to allow for some areas to be impacted by the code for the light, while other parts are not
    // End remix for noLights() tutorial
    // -----------------------------------------------


// let origin = {
//     radius: 5,
//     colour: '#FF0000',
    
//     draw: function(){
//         push();
//         fill(this.colour)
//         noStroke();
//         sphere(this.radius);
//         pop();
//     },
// };

// // --- Main box ---
// let mainBox = {
//     w: 115,
//     h: 60,
//     d: 160,
//     x: 0,
//     y: 0,
//     z: 0,
//     colour: '#ede4d3',
//     strokeColour: '#7a7469',
    
//     draw: function () {
//         push();
//         fill(this.colour);
//         texture(woodTextureV);
//         stroke(this.strokeColour);
//         translate(this.x, this.y, this.z);
//         box(this.w, this.h, this.d);
//         pop();
//     },
// };

// // --- Cubes ---

// let cube = {
//     w: 23,
//     h: 23,
//     d: 23,
//     x: 0,
//     y: -26,
//     z: 0,
//     colour: '#fdfdfc',
//     strokeColour: '#7E8DD3',
    
//     draw: function () {
//         let w = this.w / 2;
//         let h = this.h / 2;
//         let d = this.d / 2;
        
//         push();
//         translate(this.x, this.y, this.z);
//         stroke(this.strokeColour);
//         strokeWeight(0.1);
        
//         // --- Top face with texture ---
//         texture(cubeTexture);
//         beginShape();
//         vertex(-w, -h, -d, 0, 0);
//         vertex(w, -h, -d, 1, 0);
//         vertex(w, -h, d, 1, 1);
//         vertex(-w, -h, d, 0, 1);
//         endShape(CLOSE);
        
//         // --- Other faces with fill only ---
//         fill(this.colour);
//         noStroke();
        
//         // Bottom
//         beginShape();
//         vertex(-w, h, -d);
//         vertex(w, h, -d);
//         vertex(w, h, d);
//         vertex(-w, h, d);
//         endShape(CLOSE);
        
//         // Front
//         beginShape();
//         vertex(-w, -h, d);
//         vertex(w, -h, d);
//         vertex(w, h, d);
//         vertex(-w, h, d);
//         endShape(CLOSE);
        
//         // Back
//         beginShape();
//         vertex(-w, -h, -d);
//         vertex(w, -h, -d);
//         vertex(w, h, -d);
//         vertex(-w, h, -d);
//         endShape(CLOSE);
        
//         // Left
//         beginShape();
//         vertex(-w, -h, -d);
//         vertex(-w, -h, d);
//         vertex(-w, h, d);
//         vertex(-w, h, -d);
//         endShape(CLOSE);
        
//         // Right
//         beginShape();
//         vertex(w, -h, -d);
//         vertex(w, -h, d);
//         vertex(w, h, d);
//         vertex(w, h, -d);
//         endShape(CLOSE);
        
//         pop();
//     }
// };


// // --- Buttons ---
// let button1 = {
//     radius: 2,
//     h: 10,
//     x: 0,
//     y: 0,
//     z: 0,
//     colour: '#ede4d3',
//     strokeColour: '#7a7469',
    
//     draw: function () {
//         push();
//         fill(this.colour);
//         texture(woodTextureV);
//         stroke(this.strokeColour);
//         translate(this.x, this.y, this.z);
//         cylinder(this.radius, this.h);
//         pop();
//     },
// };



// let shelfPhase = 0;
// let shelfPosition = { x: 0, y: 0, z: 0 };

// let woodTextureV;
// let woodTextureH;

// let cubeTexture;

// function preload() {
//     woodTextureV = loadImage('img_woodV.jpg');
//     woodTextureH = loadImage('img_woodH.jpg');
//     cubeTexture = loadImage('img_cubetop.jpg');
// }


// function setup() {
//     let cnv = createCanvas(windowWidth * 0.5, windowHeight * 0.55, WEBGL);
//     cnv.parent('canvas-container');
//     angleMode(DEGREES);

//     // camera(0, -200, 700, 0, 0, 0, 0, 1, 0);     // front view (x,y,z)

//     // camera(300, -200, 700, 0, 0, 0, 0, 1, 0);     // 3/4 view (x,y,z)
    
//     camera(0, -700, 0, 0, 0, 0, 0, 0, 1); // top view
    
//     // camera(-1000, 0, 0, 0, 0, 0, 0, 1, 0); // left view
    
//     // camera(1000, 0, 0, 0, 0, 0, 0, 1, 0); // right view
// }

// function draw() {
//     background('#f5f2ed');
//     orbitControl();
    
//     // -----------------------------------------------
//     // Remixed from ambientLight() reference
//     // https://p5js.org/reference/p5/ambientLight/
    
//     ambientLight(155, 151, 145);  // soft, dim ambient light gray tone
//     // End remix for ambientLight() reference
//     // -----------------------------------------------
    
    
//     // -----------------------------------------------
//     // Remixed from directionalLight() reference
//     // https://p5js.org/reference/p5/directionalLight/
    
//     directionalLight(195, 187, 187, -1, 1, 1);
//     directionalLight(50, 50, 50, -1, 1, -1);
//     directionalLight(50, 50, 50, 1, 0, -1);
//     directionalLight(20, 20, 20, 0, 1, 0);
    
//     // End remix for directionalLight() reference
//     // -----------------------------------------------
    
//     textureMode(NORMAL);
    
//     drawAxis();
//     strokeWeight(0.5);
    
//     // Draw the main box
//     mainBox.draw();
    
//     // --- Shift all cubes by a certain amount ---
//     let shiftX = 11.5;  // Shift the grid along the X axis
//     let shiftZ = -12;  // Shift the grid along the Z axis
    
//     // Loop to draw cubes in a 4x4 grid along the Z and X axes
//     let gap = 1;
//     let rows = 4;
//     let cols = 4;
//     let startX = -((cube.w * cols + gap * (cols - 1)) / 2);  // Start at left along the X axis
//     let startZ = -((cube.d * rows + gap * (rows - 1)) / 2);  // Start at front along the Z axis
    
//     for (let row = 0; row < rows; row++) {
//         for (let col = 0; col < cols; col++) {
//             let xOffset = startX + col * (cube.w + gap) + shiftX;  // Apply X translation
//             let zOffset = startZ + row * (cube.d + gap) + shiftZ;  // Apply Z translation
//             cube.x = xOffset;  // Set the X position of the cube
//             cube.z = zOffset;  // Set the Z position of the cube
//             cube.draw();  // Draw the cube at the calculated position
//         }
//     }
// }

// // Camera & View
// function setIsometricView() {
//     let camX = 600;
//     let camY = -400;
//     let camZ = 600;
//     camera(camX, camY, camZ, 0, 0, -300, 0, 1, 0);
// }

// function windowResized() {
//     resizeCanvas(windowWidth * 0.5, windowHeight * 0.55);
// }

// function drawAxis(size = 300) {
//     // X axis - Red
//     stroke(255, 0, 0);
//     line(0, 0, 0, size, 0, 0);
//     // Y axis - Green
//     stroke(0, 255, 0);
//     line(0, 0, 0, 0, size, 0);
//     // Z axis - Blue
//     stroke(0, 0, 255);
//     line(0, 0, 0, 0, 0, size);
// }

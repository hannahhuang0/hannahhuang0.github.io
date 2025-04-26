
let origin = {
    radius: 5,
    colour: '#FF0000',
    
    draw: function(){
        push();
        fill(this.colour);
        noStroke();
        sphere(this.radius);
        pop();
    },
};

// --- Main box ---
let mainBox = {
    w: 115,
    h: 60,
    d: 160,
    x: 0,
    y: 0,
    z: 0,
    colour: '#ede4d3',
    strokeColour: '#7a7469',
    
    draw: function () {
        push();
        fill(this.colour);
        texture(woodTextureV);
        // stroke(this.strokeColour);
        noStroke();
        translate(this.x, this.y, this.z);
        box(this.w, this.h, this.d);
        pop();
    },
};

// -----------------------------------------------
// Remixed from p5.js vertex() tutorial
// https://p5js.org/reference/p5/vertex/
// --- Cubes ---
let cube = {
    w: 23,
    h: 23,
    d: 23,
    x: 0,
    y: -26,
    z: 0,
    strokeColour: '#7E8DD3',
    
    draw: function () {
        let w = this.w / 2;
        let h = this.h / 2;
        let d = this.d / 2;
        
        push();
        translate(this.x, this.y, this.z);
        stroke(this.strokeColour);
        strokeWeight(0);
        
        // top face with design 
        texture(currentCubeTexture);
        beginShape();
        vertex(-w, -h, -d, 0, 0);
        vertex(w, -h, -d, 1, 0);
        vertex(w, -h, d, 1, 1);
        vertex(-w, -h, d, 0, 1);
        endShape(CLOSE);
        
        // other faces with color
        fill(currentCubeColor);
        
        // Bottom
        beginShape();
        vertex(-w, h, -d);
        vertex(w, h, -d);
        vertex(w, h, d);
        vertex(-w, h, d);
        endShape(CLOSE);
        
        // Front
        beginShape();
        vertex(-w, -h, d);
        vertex(w, -h, d);
        vertex(w, h, d);
        vertex(-w, h, d);
        endShape(CLOSE);
        
        // Back
        beginShape();
        vertex(-w, -h, -d);
        vertex(w, -h, -d);
        vertex(w, h, -d);
        vertex(-w, h, -d);
        endShape(CLOSE);
        
        // Left
        beginShape();
        vertex(-w, -h, -d);
        vertex(-w, -h, d);
        vertex(-w, h, d);
        vertex(-w, h, -d);
        endShape(CLOSE);
        
        // Right
        beginShape();
        vertex(w, -h, -d);
        vertex(w, -h, d);
        vertex(w, h, d);
        vertex(w, h, -d);
        endShape(CLOSE);
        
        pop();
    }
};
// Code was remixed to help create the sides of cubes individually, which allows for the top surface to have a design while the sides are plain
// End remix for vertex() tutorial
// -----------------------------------------------



// -----------------------------------------------
// Remixed from p5.js Cylinder tutorial
// https://p5js.org/reference/p5/cylinder/
// --- buttons ---
let buttons = [
    { radius: 3.25, h: 10, x: -38, y: -31, z: 48, colour: '#9cbbd9', strokeColour: '#9cbbd9', moveDirection: 1, moveTimer: 0, isMoving: false, hasMoved: false, phase: 0 },
    { radius: 3.25, h: 10, x: -13, y: -31, z: 48, colour: '#d1a669', strokeColour: '#d1a669', moveDirection: 1, moveTimer: 0, isMoving: false, hasMoved: false, phase: 1 },
    { radius: 3.25, h: 10, x: 13, y: -31, z: 48, colour: '#bccf78', strokeColour: '#bccf78', moveDirection: 1, moveTimer: 0, isMoving: false, hasMoved: false, phase: 2 },
    { radius: 3.25, h: 10, x: 38, y: -31, z: 48, colour: '#c46f60', strokeColour: '#c46f60', moveDirection: 1, moveTimer: 0, isMoving: false, hasMoved: false, phase: 3 }
];
// Code was remixed to help create the cylidrical buttons
// End remix for Cylinder tutorial
// -----------------------------------------------


// --- texture and colour variables ---
let woodTextureV;
let woodTextureH;
let cubeTextures = [];
let currentCubeTexture;

let cubeColors = ['#6d80d2', '#d2a96f', '#8fb53d', '#d16b6b'];
let currentCubeColor;

// --- button animation ---
function drawButton(button) {
    if (button.isMoving) {
        button.moveTimer++;
        
        if (button.moveDirection === 1) {
            button.y += 0.1;
            if (button.y >= -27) {
                button.moveDirection = -1;
                
                // change texture and color here
                if (button.phase < cubeTextures.length) {
                    currentCubeTexture = cubeTextures[button.phase];
                    currentCubeColor = cubeColors[button.phase];
                }
            }
        } else if (button.moveDirection === -1) {
            button.y -= 0.1;
            if (button.y <= -31) {
                button.isMoving = false;
                button.hasMoved = true;
                triggerNextButtonMovement();
            }
        }
    }
    
    push();
    fill(button.colour);
    stroke(button.strokeColour);
    translate(button.x, button.y, button.z);
    cylinder(button.radius, button.h);
    pop();
}

function triggerNextButtonMovement() {
    let allButtonsMoved = true;
    for (let i = 0; i < buttons.length; i++) {
        if (!buttons[i].hasMoved) {
            allButtonsMoved = false;
            break;
        }
    }
    
    if (allButtonsMoved) {
        resetButtons();
    } else {
        for (let i = 0; i < buttons.length; i++) {
            if (!buttons[i].hasMoved) {
                buttons[i].isMoving = true;
                buttons[i].moveDirection = 1;
                break;
            }
        }
    }
}

function resetButtons() {
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].hasMoved = false;
        buttons[i].y = -31;
    }
    triggerNextButtonMovement();
}

function startButtonSequence() {
    buttons[0].isMoving = true;
    buttons[0].moveDirection = 1;
}



// --- Preload ---
function preload() {
    woodTextureV = loadImage('img_woodV.jpg');
    woodTextureH = loadImage('img_woodH.jpg');
    
    cubeTextures[0] = loadImage('img_cube1.jpg');
    cubeTextures[1] = loadImage('img_cube2.jpg');
    cubeTextures[2] = loadImage('img_cube3.jpg');
    cubeTextures[3] = loadImage('img_cube4.jpg');
}


// --- Setup ---
function setup() {
    let cnv = createCanvas(windowWidth * 0.5, windowHeight * 0.55, WEBGL);
    cnv.parent('canvas-container');
    angleMode(DEGREES);
    
    camera(370, -370, 370, 0, 0, 0, 0, 1, 0);     // front view (x,y,z)
    
    currentCubeTexture = cubeTextures[0];
    currentCubeColor = cubeColors[0];
    
    startButtonSequence();
}


// --- Draw ---
function draw() {
    background('#f5f2ed');
    
    // -----------------------------------------------
    // Remixed from p5.js orbitControl() tutorial
    // https://p5js.org/reference/p5/orbitControl/
    orbitControl();
    // Code was used to allow the environment and object to be orbitable
    // End remix for orbitControl() tutorial
    // -----------------------------------------------


    textureMode(NORMAL);
    // drawAxis();
    strokeWeight(0);
    

    // -----------------------------------------------
    // Remixed from p5.js noLights() tutorial
    // https://p5js.org/reference/p5/noLights/
    noLights();
    // Code was used to allow for some areas to be impacted by the code for the light, while other parts are not
    // End remix for noLights() tutorial
    // -----------------------------------------------
    
    
    // draw cube grid
    let shiftX = 11.5;
    let shiftZ = -12;
    let gap = 1;
    let rows = 4;
    let cols = 4;
    let startX = -((cube.w * cols + gap * (cols - 1)) / 2);
    let startZ = -((cube.d * rows + gap * (rows - 1)) / 2);
    
    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            let xOffset = startX + col * (cube.w + gap) + shiftX;
            let zOffset = startZ + row * (cube.d + gap) + shiftZ;
            cube.x = xOffset;
            cube.z = zOffset;
            cube.draw();
        }
    }
    
    // add lighting to the environment, impacting the surfaces, except for the cube surfaces
    ambientLight(155, 151, 145);
    directionalLight(187, 187, 187, -1, 1, 1);
    directionalLight(50, 50, 50, -1, 1, -1);
    directionalLight(50, 50, 50, 1, 0, -1);
    directionalLight(20, 20, 20, 0, 1, 0);
    
    mainBox.draw();
    
    // draw buttons
    for (let button of buttons) {
        drawButton(button);
    }
}


// --- resize ---
function windowResized() {
    resizeCanvas(windowWidth * 0.5, windowHeight * 0.55);
}


// --- axis ---
function drawAxis(size = 300) {     // to help with drawing out the objects
    stroke(255, 0, 0); // X
    line(0, 0, 0, size, 0, 0);
    stroke(0, 255, 0); // Y
    line(0, 0, 0, 0, size, 0);
    stroke(0, 0, 255); // Z
    line(0, 0, 0, 0, 0, size);
}

// for playing and pausing the video
function toggleVideo() {
    const video = document.getElementById('myVideo');
    const btn = document.getElementById('pauseBtn');
    if (video.paused) {
        video.play();
        btn.textContent = 'PAUSE';
    } else {
        video.pause();
        btn.textContent = 'PLAY';
    }
}

// for fullscreen video
function toggleFullscreen() {
    const video = document.getElementById('myVideo');
    const btn = document.getElementById('fullscreenBtn');
    if (video.requestFullscreen) {
        video.requestFullscreen();
    }
}

// keeps the pause/play button in sync with fullscreen pause/play
document.addEventListener('fullscreenchange', () => {
    const video = document.getElementById('myVideo');
    const btn = document.getElementById('pauseBtn');
    
    if (video.paused) {
        btn.textContent = 'PLAY';
    } else {
        btn.textContent = 'PAUSE';
    }
});
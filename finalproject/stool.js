
let origin = {
    radius: 5,
    colour: '#FF0000',
    
    draw: function(){
        push();
        fill(this.colour)
        noStroke();
        sphere(this.radius);
        pop();
    },
};

// -----------------------------------------------
// Remixed from p5.js box() tutorial
// https://p5js.org/reference/p5/box/
// --- Left legs ---
let leftFrontLeg = {
    w: 4,
    h: 160,
    d: 60,
    x: -36,
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


let leftFrontLeg1 = {
    w: 8,
    h: 46,
    d: 60,
    x: -34,
    y: -57,
    z: 0,
    colour: '#ede4d3',
    strokeColour: '#7a7469',
    
    draw: function () {
        push();
        fill(this.colour);
        texture(woodTextureV);
        noStroke();
        translate(this.x, this.y, this.z);
        box(this.w, this.h, this.d);
        pop();
    },
};


let leftFrontLeg2 = {
    w: 8,
    h: 64.5,
    d: 60,
    x: -34,
    y: 6.75,
    z: 0,
    colour: '#ede4d3',
    strokeColour: '#7a7469',
    
    draw: function () {
        push();
        fill(this.colour);
        texture(woodTextureV);
        noStroke();
        translate(this.x, this.y, this.z);
        box(this.w, this.h, this.d);
        pop();
    },
};

let leftFrontLeg3 = {
    w: 4,
    h: 32.5,
    d: 60,
    x: -32,
    y: 63.75,
    z: 0,
    colour: '#ede4d3',
    strokeColour: '#7a7469',
    
    draw: function () {
        push();
        fill(this.colour);
        texture(woodTextureV);
        noStroke();
        translate(this.x, this.y, this.z);
        box(this.w, this.h, this.d);
        pop();
    },
};


let leftBackLeg = {
    w: 8,
    h: 160,
    d: 60,
    x: -15,
    y: 0,
    z: -70,
    colour: '#ede4d3',
    strokeColour: '#7a7469',
    
    draw: function () {
        
        push();
        fill(this.colour);
        texture(woodTextureV);
        noStroke();
        rotateY(30);
        translate(this.x, this.y, this.z);
        box(this.w, this.h, this.d);
        pop();
    },
};



// --- Right legs ---
let rightFrontLeg = {
    w: 4,
    h: 160,
    d: 60,
    x: 36,
    y: 0,
    z: 0,
    colour: '#ede4d3',
    strokeColour: '#7a7469',
    
    draw: function () {
        push();
        fill(this.colour);
        texture(woodTextureH);
        noStroke();
        translate(this.x, this.y, this.z);
        box(this.w, this.h, this.d);
        pop();
    },
};

let rightFrontLeg1 = {
    w: 8,
    h: 46,
    d: 60,
    x: 34,
    y: -57,
    z: 0,
    colour: '#ede4d3',
    strokeColour: '#7a7469',
    
    draw: function () {
        push();
        fill(this.colour);
        texture(woodTextureH);
        noStroke();
        translate(this.x, this.y, this.z);
        box(this.w, this.h, this.d);
        pop();
    },
};


let rightFrontLeg2 = {
    w: 8,
    h: 64.5,
    d: 60,
    x: 34,
    y: 6.75,
    z: 0,
    colour: '#ede4d3',
    strokeColour: '#7a7469',
    
    draw: function () {
        push();
        fill(this.colour);
        texture(woodTextureH);
        noStroke();
        translate(this.x, this.y, this.z);
        box(this.w, this.h, this.d);
        pop();
    },
};

let rightFrontLeg3 = {
    w: 4,
    h: 32.5,
    d: 60,
    x: 32,
    y: 63.75,
    z: 0,
    colour: '#ede4d3',
    strokeColour: '#7a7469',
    
    draw: function () {
        push();
        fill(this.colour);
        texture(woodTextureH);
        noStroke();
        translate(this.x, this.y, this.z);
        box(this.w, this.h, this.d);
        pop();
    },
};

let rightBackLeg = {
    w: 8,
    h: 160,
    d: 60,
    x: 15,
    y: 0,
    z: -70,
    colour: '#ede4d3',
    strokeColour: '#7a7469',
    
    draw: function () {
        
        push();
        fill(this.colour);
        texture(woodTextureH);
        noStroke();
        rotateY(-30);
        translate(this.x, this.y, this.z);
        box(this.w, this.h, this.d);
        pop();
    },
};

// --- Centre ---
let centre = {
    w: 60,
    h: 100,
    d: 8,
    x: 0,
    y: -10,
    z: -27,
    colour: '#ede4d3',
    strokeColour: '#7a7469',
    
    draw: function () {
        push();
        fill(this.colour);
        texture(woodTextureV);
        noStroke();
        translate(this.x, this.y, this.z);
        box(this.w, this.h, this.d);
        pop();
    },
};

let centreBottomRight = {
    w: 4,
    h: 10,
    d: 4,
    x: 32,
    y: 45,
    z: -28,
    colour: '#ede4d3',
    strokeColour: '#7a7469',
    
    draw: function () {
        push();
        fill(this.colour);
        texture(woodTextureV);
        noStroke();
        translate(this.x, this.y, this.z);
        box(this.w, this.h, this.d);
        pop();
    },
};

let centreBottomLeft = {
    w: 4,
    h: 10,
    d: 4,
    x: -32,
    y: 45,
    z: -28,
    colour: '#ede4d3',
    strokeColour: '#7a7469',
    
    draw: function () {
        push();
        fill(this.colour);
        texture(woodTextureV);
        noStroke();
        translate(this.x, this.y, this.z);
        box(this.w, this.h, this.d);
        pop();
    },
};


// --- Shelves ---
let fixedShelf = {
    w: 60,
    h: 8,
    d: 60,
    x: 0,
    y: 35,
    z: 0,
    colour: '#ede4d3',
    strokeColour: '#7a7469',
    
    draw: function () {
        push();
        fill(this.colour);
        texture(woodTextureH);
        noStroke();
        translate(this.x, this.y, this.z);
        box(this.w, this.h, this.d);
        pop();
    },
};

let adjustableShelf = {
    w: 68,
    h: 8,
    d: 60,
    x: 0,
    y: -29.5,
    z: 0,
    colour: '#ede4d3',
    strokeColour: '#7a7469',
    
    draw: function () {
        push();
        fill(this.colour);
        texture(woodTextureH);
        noStroke();
        translate(this.x, this.y, this.z);
        box(this.w, this.h, this.d);
        pop();
    },
};


// --- Seat ---
let frontSeat = {
    w: 150,
    h: 8,
    d: 60,
    x: 0,
    y: -84,
    z: 8,
    colour: '#ede4d3',
    strokeColour: '#7a7469',
    
    draw: function () {
        push();
        fill(this.colour);
        texture(woodTextureH);
        noStroke();
        translate(this.x, this.y, this.z);
        box(this.w, this.h, this.d);
        pop();
    },
};

let backSeat = {
    w: 150,
    h: 8,
    d: 60,
    x: 0,
    y: -84,
    z: -60,
    colour: '#ede4d3',
    strokeColour: '#7a7469',
    
    draw: function () {
        push();
        fill(this.colour);
        texture(woodTextureH);
        noStroke();
        translate(this.x, this.y, this.z);
        box(this.w, this.h, this.d);
        pop();
    },
};
// Code was referenced to help understand how to form boxes, which create the individual parts of the stool
// End remix for box() tutorial
// -----------------------------------------------


let shelfPhase = 0;
let shelfPosition = { x: 0, y: 0, z: 0 };
let shelfSpeed = 0.45;

let woodTextureV;
let woodTextureH;


// preload images
function preload() {
    woodTextureV = loadImage('img_woodV.jpg');
    woodTextureH = loadImage('img_woodH.jpg');
    
}

//setup function
function setup() {
    let cnv = createCanvas(windowWidth * 0.5, windowHeight * 0.55, WEBGL);
    cnv.parent('canvas-container');
    angleMode(DEGREES);
    
    
    camera(520, -390, 550, 0, 0, 0, 0, 1, 0);     // front view (x,y,z)
    
}

// draw
function draw() {
    background('#f5f2ed');
    orbitControl();
    
    // -----------------------------------------------
    // Remixed from ambientLight() reference
    // https://p5js.org/reference/p5/ambientLight/
    ambientLight(155, 151, 145);  // soft, dim ambient light gray tone
    // Code was remixed to create ambient light in the environment
    // End remix for ambientLight() reference
    // -----------------------------------------------
    
    
    // -----------------------------------------------
    // Remixed from directionalLight() reference
    // https://p5js.org/reference/p5/directionalLight/
    directionalLight(195, 187, 187, -1, 1, 1);
    directionalLight(50, 50, 50, -1, 1, -1);
    directionalLight(50, 50, 50, 1, 0, -1);
    directionalLight(20, 20, 20, 0, 1, 0);
    // Code was remixed to add shadows and highlights to the objects
    // End remix for directionalLight() reference
    // -----------------------------------------------
    

    // drawAxis();
    // strokeWeight(0);
    // origin.draw();
    
    leftFrontLeg.draw();
    leftFrontLeg1.draw();
    leftFrontLeg2.draw();
    leftFrontLeg3.draw();
    leftBackLeg.draw();
    
    rightFrontLeg.draw();
    rightFrontLeg1.draw();
    rightFrontLeg2.draw();
    rightFrontLeg3.draw();
    rightBackLeg.draw();
    
    centre.draw();
    centreBottomRight.draw();
    centreBottomLeft.draw();
    
    frontSeat.draw();
    backSeat.draw();
    
    fixedShelf.draw();
    // // strokeWeight(0.1);
    // adjustableShelf.draw();
    // // strokeWeight(0);
    
    
    
    // animate adjustable shelf
    push();
    translate(shelfPosition.x, shelfPosition.y, shelfPosition.z);
    adjustableShelf.draw();
    pop();
    

    // -----------------------------------------------
    // Remixed from w3schools The JavaScript Switch Statement tutorial
    // https://www.w3schools.com/js/js_switch.asp
    // shelf movement

         // --- This is my favourite block in my code because I was able to learn something new and its easy to understand.
         //     I found it quite straightforward and its also effective in translating the adjustable shelf, as it is just a few simple lines being repeated.
         //     The code is also quite organized and is convenient to modify, which I find very helpful.
    switch (shelfPhase) {
        case 0: // Move forward along Z
        shelfPosition.z += shelfSpeed;
        if (shelfPosition.z >= 70) shelfPhase = 1;
        break;
        
        case 1: // Move down along Y
        shelfPosition.y += shelfSpeed;
        if (shelfPosition.y >= 73) shelfPhase = 2;
        break;
        
        case 2: // Move back along Z
        shelfPosition.z -= shelfSpeed;
        if (shelfPosition.z <= 0) shelfPhase = 3;
        break;
        
        case 3: // Move forward along Z
        shelfPosition.z += shelfSpeed;
        if (shelfPosition.z >= 70) shelfPhase = 4;
        break;
        
        case 4: // Move up to original Y
        shelfPosition.y -= shelfSpeed;
        if (shelfPosition.y <= 0) shelfPhase = 5;
        break;
        
        case 5: // Move back along Z
        shelfPosition.z -= shelfSpeed;
        if (shelfPosition.z <= 0) shelfPhase = 6;
        break;
        
        case 6: // for looping
        shelfPhase = 0;
        break;
    }
    // Code was referenced to help switch directions in the translation of the animated object
    // End remix for The JavaScript Switch Statement tutorial
    // -----------------------------------------------
}



function windowResized() {
    resizeCanvas(windowWidth * 0.5, windowHeight * 0.55);
}


// axis function to help with drawing the objects
function drawAxis(size = 300) {
    // X axis - Red
    stroke(255, 0, 0);
    line(0, 0, 0, size, 0, 0);
    // Y axis - Green
    stroke(0, 255, 0);
    line(0, 0, 0, 0, size, 0);
    // Z axis - Blue
    stroke(0, 0, 255);
    line(0, 0, 0, 0, 0, size);
}

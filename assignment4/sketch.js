

// Variables
var fishArray = []; 
var redFishChance = 0.45; // chance of red fish appearing

var lilyPads = [];
var numLilypads = 15;

var timeRemaining; // var for displaying countdown timer in seconds
var numSecsTimer = 30; // var for number of seconds for the countdown
var currentTime = 0;

var score = 0;
var highscore = 0;

var feedingMode = false;
var gameStarted = false;
var playButton;
let playedOnce = false;

var clickMessage = { // message that shows at the beginning when play is pressed
  showing: false,
  startTime: 0,
  duration: 2000 // in milliseconds
};

var messageTextSize = 20; // text size for displayed messages



// function to preload image
function preload() {
  water = loadImage('img_water.jpg'); // texture for water
  
}


// function for setup
function setup() {
  createCanvas(windowWidth, windowHeight * 0.68);
  background(200, 230, 255);
  
  if (getItem('highscore') !== null) {
    highscore = getItem('highscore');   // store highscore
  }
  
  document.getElementById('scoreboard').style.display = 'none';   // hide scoreboard
  
  // -----------------------------------------------
  // Remixed from p5.js select() and parent() tutorial
  // https://p5js.org/reference/p5/select/  <--- select()
  // https://p5js.org/reference/p5.Element/parent/   <--- parent()
  // create buttons and container to allow for styling
  let buttonContainer = select('#buttonContainer');
  
  // play button
  playButton = createButton('Play');
  playButton.parent(buttonContainer);
  playButton.mousePressed(() => {
    gameStarted = true;
    feedingMode = false;  // disables feeding mode when playing
    currentTime = 0;
    score = 0;
    fishArray = [];
    for (let i = 0; i < 14; i++) {  // spawn initial fish
      createFishFromEdge();
    }
    
    clickMessage.showing = true;  // displays a message that tells user how to play
    clickMessage.startTime = millis();   // message lasts for 2 seconds
    
    document.getElementById('scoreboard').style.display = 'block';   // show scoreboard
    
    if (!playedOnce) {    // change button from "play" to "play again", if already played once
      playedOnce = true;
      playButton.html('Play Again');
    }
    playButton.hide();
    feedButton.hide();
    loop();
  });
  
  // feed button
  feedButton = createButton('Feed');
  feedButton.parent(buttonContainer);
  feedButton.mousePressed(() => {
    feedingMode = !feedingMode;
    if (feedingMode) {
      feedButton.html('Stop Feeding');   // toggles feeding mode
    } else {
      feedButton.html('Feed');
    }    
    loop();
  });
  
  // reset button
  resetButton = createButton('Reset');
  resetButton.parent(buttonContainer);
  resetButton.mousePressed(() => {
    // clearStorage();   // clears highscore
    // highscore = 0;
    score = 0;
    currentTime = 0;
    timeRemaining = 30;
    gameStarted = false;
    feedingMode = false;
    if (feedingMode) {
      feedButton.html('Stop Feeding');
    } else {
      feedButton.html('Feed');
    }
    document.getElementById('scoreboard').style.display = 'none';
    playButton.show();
    feedButton.show();
    loop();
  });
  // Code was remixed to create a container to store the buttons, allowing them to be styled
  // End remix for select() and parent() tutorial
  // -----------------------------------------------
  
  
  // create fish at the start
  for (let i = 0; i < 10; i++) {
    createFishFromEdge();
  }
  
  // create lily pads at the start
  let preloadFrames = 240;  // simulate 4 seconds worth of motion so that lily pads have travelled closer to the centre of the screen
  for (let i = 0; i < preloadFrames; i++) {
    for (let pad of lilyPads) {
      pad.update();   // move them forward as if time passed
    }
  }
  
  for (let i = 0; i < 8; i++) {
    createLilyPadFromEdge();  // spawn lily pads
  }
  
}


// function to drawing
function draw() {
  background(200, 230, 255, 200);
  
  // -----------------------------------------------
  // Remixed from p5.js tint() tutorial
  // https://p5js.org/reference/p5/tint/ 
  tint(255, 95);
  image(water, 0, 0, width, height);
  // Code was remixed to allow for partial opacity for the water texture image
  // End remix for tint() tutorial
  // -----------------------------------------------
  
  noTint(); // remove tint for the rest of code
  
  // draw fish that swim around
  for (let fish of fishArray) {
    fish.draw();
  }
  // remove fish that go off screen
  fishArray = fishArray.filter(fish => {
    return fish.x > -50 && fish.x < width + 50 && fish.y > -50 && fish.y < height + 50;
  });
  // add new fish regularly
  if (frameCount % 20 === 0) {
    createFishFromEdge();
  }
  
  // draw and update lily pads
  for (let pad of lilyPads) {
    pad.draw();
    pad.update();
  }
  // remove lily pads that go off screen
  lilyPads = lilyPads.filter(pad => {
    return pad.x > -pad.r && pad.x < width + pad.r && pad.y > -pad.r && pad.y < height + pad.r;
  });
  // add lily pads after some have been removed
  let removed = numLilypads - lilyPads.length;
  for (let i = 0; i < removed; i++) {
    createLilyPadFromEdge();
  } 
  // bounce lily pads off each other
  for (let pad of lilyPads) {
    for (let otherPad of lilyPads) {
      if (pad === otherPad) continue;
      let d = dist(pad.x, pad.y, otherPad.x, otherPad.y);
      if (d < pad.r + otherPad.r) {
        pad.direction += PI;
      }
    }
  }
  
  // only update timer and scoreboard when "play" has been pressed and game has started
  if (gameStarted) {
    updateScoreboard();
    
    // -----------------------------------------------
    // Remixed from p5.js round() tutorial
    // https://p5js.org/reference/p5/round/
    let remaining = round(numSecsTimer - (currentTime / 1000), 0);
    if (remaining <= 0) {
      timesUpMessage();
      noLoop(); // stop loop, everything stops moving
      gameStarted = false;
      playButton.show(); // show Play button again
    }
  }
  // Code was used to round the number to the closest integer for the timer
  // End remix for round() tutorial
  // -----------------------------------------------
  
  // display message about how to play, only for 2 seconds
  if (clickMessage.showing) {
    if (millis() - clickMessage.startTime < clickMessage.duration) {
      displayClickMessage();
    } else {
      clickMessage.showing = false;
    }
  }
} 


// function to create fish from the edges
function createFishFromEdge() {
  let edge = floor(random(4));   // pick a random edge (0 = left, 1 = right, 2 = top, 3 = bottom)
  let x, y, angle;
  
  // randomly spawn fish along edges and set direction
  if (edge === 0) {
    x = -20;
    y = random(height);
    angle = random(-PI / 4, PI / 4); // towards right
  } else if (edge === 1) {
    x = width + 20;
    y = random(height);
    angle = PI + random(-PI / 4, PI / 4); // towards left
  } else if (edge === 2) {
    x = random(width);
    y = -20;
    angle = HALF_PI + random(-PI / 4, PI / 4); // downwards
  } else {
    x = random(width);
    y = height + 20;
    angle = -HALF_PI + random(-PI / 4, PI / 4); // upwards
  }
  
  // creating red fish, based on chance
  let redfish = random(1) < redFishChance;
  createFish(x, y, angle, redfish);
}


// function to create a fish
function createFish(x, y, angle, redfish = false) {
  let speedValue;
  
  // different speeds for the fish
  if (redfish) {
    speedValue = random(2, 4);  // red fish are faster than the blue
  } else {
    speedValue = random(1.5, 2.5);
  }
  
  let fishColour;
  
  // -----------------------------------------------
  // Remixed from p5.js lerpColor() tutorial
  // https://p5js.org/reference/p5/lerpColor/ 
  if (redfish) {
    fishColour = lerpColor(color(211, 126, 126), color(0), random(0.1, 0.5));
  } else {
    fishColour = randomBlueShade();
  }
  // Code was remixed to allow for interpolation between two colours, creating different shades of red
  // End remix for lerpColor() tutorial
  // -----------------------------------------------
  
  let fish = {
    x: x,
    y: y,
    angle: angle,
    speed: speedValue,
    wobbleOffset: random(1000),
    redfish: redfish,
    colour: fishColour,
    clicked: false,
    
    draw: function () {
      this.update();
      push();
      translate(this.x, this.y);
      rotate(this.angle);
      
      
      // -----------------------------------------------
      // Remixed from p5.js curveVertex() tutorial
      // https://p5js.org/reference/p5/curveVertex/
      // draw fish body
      noStroke();
      fill(this.colour);
      beginShape();
      curveVertex(18, 0);
      curveVertex(18, 0);
      curveVertex(10, 8);
      curveVertex(-5, 6);
      curveVertex(-15, 3);
      curveVertex(-20, 0);
      curveVertex(-15, -3);
      curveVertex(-5, -6);
      curveVertex(10, -8);
      curveVertex(18, 0);
      curveVertex(18, 0);
      endShape(CLOSE);
      // Code was remixed to create the curved shape of the fish
      // End remix for curveVertex() tutorial
      // ----------------------------------------------- 
      
      // draw tail
      fill(red(this.colour) * 0.8, green(this.colour) * 0.8, blue(this.colour) * 0.8, 220);
      triangle(-20, 0, -30, -10, -30, 10);
      
      // draw fins
      fill(255, 255, 255, 100);
      ellipse(0, -10, 8, 4);
      ellipse(0, 10, 8, 4);
      
      // draw eye
      fill(0);
      ellipse(15, -3, 2.5, 2.5);
      
      pop();
      
      // draw food if feeding mode is on
      if (feedingMode) {
        drawFood(mouseX, mouseY);
      }
    },
    
    // update fish position and direction for feeding mode
    update: function () {
      if (feedingMode) {
        // check if mouse is inside canvas
        if (mouseX >= 0 && mouseX <= width && mouseY >= 0 && mouseY <= height) {
          // move toward mouse
          let dx = mouseX - this.x;
          let dy = mouseY - this.y;
          let angleToMouse = atan2(dy, dx);
          this.angle = angleToMouse;
        } else {
          // if mouse is outside canvas, fish return to natural movement
          this.angle += sin(frameCount * 0.05 + this.wobbleOffset) * 0.02;
        }
      } else {
        // wobble movement if not in feeding mode
        this.angle += sin(frameCount * 0.05 + this.wobbleOffset) * 0.02;
      }
      
      // move the fish based on current angle and speed
      this.x += cos(this.angle) * this.speed;
      this.y += sin(this.angle) * this.speed;
    }
  };
  
  fishArray.push(fish);
}


// function to draw the food near mouse
function drawFood(x, y) {
  fill(217, 185, 137);  // orange-ish colour for food
  noStroke();
  ellipse(x - 10, y, 10, 10); 
  ellipse(x + 10, y, 10, 10); 
  ellipse(x, y + 10, 10, 10); 
  ellipse(x, y + 10, 10, 10); 
  ellipse(x + 5, y + 5, 10, 10); 
  ellipse(x - 5, y + 5, 10, 10); 
  ellipse(x + 15, y + 15, 10, 10); 
  ellipse(x - 15, y + 15, 10, 10); 
}


// function for random blue colour of the same shade
function randomBlueShade() { 
  let base = color(126, 141, 211);
  let factor = random(0.7, 1.3);
  
  
  // -----------------------------------------------
  // Remixed from p5.js constrain() tutorial
  // https://p5js.org/reference/p5/constrain/
  return color(
    constrain(red(base) * factor, 0, 255),
    constrain(green(base) * factor, 0, 255),
    constrain(blue(base) * factor, 0, 255)
  );
  // Code was used to keep colour value between a min and max value
  // End remix for constrain() tutorial
  // -----------------------------------------------
}


// function to create lily pads from the edge of the screen
function createLilyPadFromEdge() {
  let edge = floor(random(4));
  let x, y, direction;
  let spawnArea = 30;
  
  if (edge === 0) {         // left
    x = -spawnArea;
    y = random(height);
    direction = 0;          // right
  } else if (edge === 1) {  // right
    x = width + spawnArea;
    y = random(height);
    direction = PI;         // left
  } else if (edge === 2) {  // top
    x = random(width);
    y = -spawnArea;
    direction = HALF_PI;    // down
  } else {                  // bottom
    x = random(width);
    y = height + spawnArea;
    direction = -HALF_PI;   // up
  }
  
  createLilyPadObject(x, y, direction); 
}


// function to create lily pads
function createLilyPadObject(x, y, direction = null) {
  let overlap = true;
  let r, speed;
  
  // make sure lilypads don't overlap with each other
  while (overlap) {
    r = random(20, 50);
    speed = random(0.1, 0.25);
    if (direction === null) {
      direction = random(TWO_PI);
    }
    overlap = false;
    for (let other of lilyPads) {
      let d = dist(x, y, other.x, other.y);
      if (d < r + other.r) {
        overlap = true;
        x = random(width);
        y = random(height);
        direction = null;
        break;
      }
    }
  }
  
  let pad = {
    x: x,
    y: y,
    r: r,
    speed: speed,
    direction: direction,
    rotation: random(TWO_PI),
    rotationSpeed: random(-0.003, 0.003),
    
    // draw the lily pad
    draw: function () {
      push();
      translate(this.x, this.y);
      rotate(this.rotation);
      
      // -----------------------------------------------
      // Remixed from p5.js arc() tutorial
      // https://p5js.org/reference/p5/arc/
      fill(120, 160, 98);   // darker green
      noStroke();
      arc(0, 0, this.r * 2, this.r * 2, PI / 6, TWO_PI, PIE);
      // Code was remixed to create curved lily pad shape with a slice cut out
      // End remix for arc() tutorial
      // -----------------------------------------------
      
      // draw lines for texture on lily pads
      stroke(150, 180, 120);   // lighter green
      strokeWeight(2 / 3);
      
      let len1 = this.r / 1.6;
      
      let angle1 = radians(-25);
      line(-len1 * cos(angle1), -len1 * sin(angle1), len1 * cos(angle1), len1 * sin(angle1));
      
      let angle2 = radians(110);
      let vx = len1 * cos(angle2);
      let vy = len1 * sin(angle2);
      line(-vx, -vy, vx, vy);
      
      let angle3 = radians(60);
      let dx = len1 * cos(angle3);
      let dy = len1 * sin(angle3);
      line(-dx, -dy, dx, dy);
      
      let len = this.r / 1.8;
      let angle = PI / 9 + PI;
      let x = len * cos(angle);
      let y = len * sin(angle);
      line(0, 0, x, y);
      
      pop();
    },
    
    // update lily pad position and rotation
    update: function () {
      this.x += cos(this.direction) * this.speed;
      this.y += sin(this.direction) * this.speed;
      this.rotation += this.rotationSpeed;
    }
  };
  
  lilyPads.push(pad);
}


// function clicking on red fish
function mousePressed() {
  console.log("Mouse pressed");  // for debugging
  
  if (!gameStarted) return;  // if game hasn't started, don't do anything
  
  // making red fish clickable
  for (let fish of fishArray) {
    if (fish.redfish) { 
      let d = dist(mouseX, mouseY, fish.x, fish.y);  // check if mouse is on the red fish
      if (d < 20) {
        console.log("Red fish clicked!");
        score++;  // increase the score 
        fish.clicked = true;
        
        // update highscore if new score is higher
        if (score > highscore) {
          highscore = score;
          storeItem('highscore', highscore);  // save new highscore
        }
      }
    }
  }
  // remove clicked red fish from the array
  fishArray = fishArray.filter(fish => !(fish.redfish && fish.clicked));
}


// function for the scoreboard display
function updateScoreboard() {
  // show score
  document.getElementById('score').textContent = "Your score: " + score;
  
  // if highscore hasn't been set yet, show ???
  let highscoreDisplay;
  if (highscore === 0) {
    highscoreDisplay = '???';
  } else {
    highscoreDisplay = highscore;
  }
  // show highscore
  document.getElementById('highscore').textContent = 'Highscore: ' + highscoreDisplay;
  
  // show timer
  currentTime += deltaTime;
  let timeRemaining = round(numSecsTimer - (currentTime / 1000), 0);
  document.getElementById('timeRemaining').textContent = 'Time remaining: ' + timeRemaining;  
  
  fill(0);
  // textSize(18);
  // textAlign(LEFT, TOP);
  // text('Fish count: ' + fishArray.length, 10, 10);    // for debugging
  // text('Lily pad count: ' + lilyPads.length, 10, 30);   // for debugging
}


// function to show time's up message
function timesUpMessage() {
  textSize(messageTextSize);
  textAlign(CENTER, CENTER);
  
  // rectangular box for background
  rectMode(CENTER);
  stroke(126, 141, 211);       // blue, border colour
  strokeWeight(1/2);           // border thickness
  fill(236, 238, 249, 150);    // light blue, semi-transluscent
  rect(width / 2, height / 2, 220, 60, 2);
  
  // text
  noStroke();                  
  fill('#2c2b2b');                 
  text("Time's up!", width / 2, height / 2);
  
  // show play and feed buttons, play button will now say "play again"
  playButton.show();
  feedButton.show();
  
}


// function for how to play message
function displayClickMessage() {
  textSize(messageTextSize);
  textAlign(CENTER, CENTER);
  // same style as time's up message
  rectMode(CENTER);
  stroke(126, 141, 211);
  strokeWeight(1/2);
  fill(236, 238, 249, 150); 
  rect(width / 2, height / 2, 280, 60, 5);
  
  noStroke();
  fill('#2c2b2b');
  text("Click on the red fish!", width / 2, height / 2);
}


// function to resize canvas when wndow is resized
function windowResized() {
  resizeCanvas(windowWidth, windowHeight * 0.68); 
} 
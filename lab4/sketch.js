let blue, orange, green, red;

function setup() {
  noCanvas();
  
  // Create and display the video
  let video;
  video = createVideo(('pattern.mp4'));
  video.volume(0); // Mute the video to autoplay

  video.loop();
  video.play();

  // Create the images
  blue = createImg('img_blue.png');
  orange = createImg('img_orange.png');
  green = createImg('img_green.png');
  red = createImg('img_red.png');

  positionImages();
}

function windowResized() {
  positionImages(); // Reposition the images
  video.play();
  video.loop();
}

function positionImages() {
  let squareSize = 60; // Define the size of the images
  let distanceFromBottom = 85;

  // Position the images and set their size
  blue.position(windowWidth * 1 / 5, windowHeight - distanceFromBottom);  
  blue.size(squareSize, squareSize);

  orange.position(windowWidth * 2 / 5, windowHeight - distanceFromBottom);
  orange.size(squareSize, squareSize);

  green.position(windowWidth * 3 / 5, windowHeight - distanceFromBottom);
  green.size(squareSize, squareSize);

  red.position(windowWidth * 4 / 5, windowHeight - distanceFromBottom);
  red.size(squareSize, squareSize);
}


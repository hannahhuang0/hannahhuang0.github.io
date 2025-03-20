let blue, orange, green, red;

function setup() {
  noCanvas();
  
  // create and display the video
  let video;
  video = createVideo(('pattern.mp4'));
  video.loop();
  video.play();

  // create the images
  blue = createImg('img_blue.png');
  orange = createImg('img_orange.png');
  green = createImg('img_green.png');
  red = createImg('img_red.png');

  positionImages();
}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  positionImages();
  video.play();
  video.loop();
}

function positionImages() {
  blue.position(windowWidth * 1 / 5, windowHeight - 60);  
  blue.size(50, 50);

  orange.position(windowWidth * 2 / 5, windowHeight - 60);
  orange.size(50, 50);

  green.position(windowWidth * 3 / 5, windowHeight - 60);
  green.size(50, 50);

  red.position(windowWidth * 4 / 5, windowHeight - 60);
  red.size(50, 50);
}

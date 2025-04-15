
var shape;

function preload(){
    //last line of code in JSON file shouldn't end with comma
    shape = loadJSON('shape.json');
}

function setup(){
    createCanvas(windowWidth, windowHeight);
    console.log(shape);
}

function draw(){
    background('#f1f0e3');
    fill('#6a7ed1');
    stroke('#6a7ed1');

    for (let c of shape.circles) {
        ellipse(c.x, c.y, c.r * 2); 
      }

    for (let c of shape.circlesreversed) {
        ellipse(c.x, c.y, c.r * 2); 
      }

}

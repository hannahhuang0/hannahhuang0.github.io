var x = 0;
var y = 0;

var r = 8.5;
var s = 0;

var rectWidth = 6

let canvas1, keys;
let numSquare = 15
let shift = 62


function setup(){
    canvas1 = createCanvas(windowWidth * 0.23, windowHeight * 0.45);
    canvas1.position((windowWidth - width) / 2, (windowHeight - height) / 2.5);

    keys = createGraphics(windowWidth * 0.23, windowHeight * 0.1);

    var typing = "A small animation of keys typing info which is then displayed on a desktop"; 
    console.log(typing)

    console.log('Number of keys on the keyboard: ' + numSquare);
}

function windowResized() {
    resizeCanvas(windowWidth * 0.23, windowHeight * 0.45);
    canvas1.position((windowWidth - width) / 2, (windowHeight - height) / 2.5);
    console.log('Window resized (use fullscreen for best results):', windowWidth, windowHeight);
    
}

function draw(){
    clear();
    fill('#777777')
    rect(x,y,rectWidth,8);

    rectWidth += 0.3;
    rectWidth = rectWidth % (width - 12); 
    y = 10; 

    rect(r,s,1,8);
    r = r + 0.3;
    r = r % (width - 12); 
    s = 10; 

    keys.clear(); 
    keys.fill('#777777');

    for (let i = 0; i < numSquare; i++) {
        let offset = shift + i * 10.2; 
        let squareY = height * 0.06 + Math.sin(frameCount * 0.14 + i) * 1.1; 

        keys.rect(offset, squareY, 6, 6); 
    }
    
    image(keys, 0, canvas1.height / 1.2);
    
}

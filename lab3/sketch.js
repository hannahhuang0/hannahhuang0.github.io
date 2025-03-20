var colourPicker; // function scope
let strokeWeightSlider;
var bgColourPicker;
var squareColourPicker;
let cornerRoundnessSlider;
let spacing = 60;
let rows = 14;
let colourSchemeIndex = 0; // Variable to track which color scheme is active

var pattern = {
    draw: function() {
        fill('#f1f0e3');
        stroke(colourPicker.value());
        
        for (var i = 0; i < rows; i++) {  
            for (var j = 0; j < 100; j++) {  
                rect(j * spacing, i * spacing, 60, 60, cornerRoundnessSlider.value());
            }
        }   
    }
}

function setup(){
    createCanvas(windowWidth, windowHeight * (2/3));
    
    // remixed from https://p5js.org/reference/#DOM
    colourPicker = createColorPicker('#6a7ed1');
    
    strokeWeightSlider = createSlider(1,4,1,1);
    
    cornerRoundnessSlider = createSlider(1,30,10,1);
    
    bgColourPicker = createColorPicker('#7e8dd3');
    
    var bgColorButton = createButton('Refresh');
    bgColorButton.mousePressed(repaint);
    bgColourPicker.changed(repaint);
    
    squareColourPicker = createColorPicker('#f1f0e3');
    // end remix
    
    
    colourPicker.position(windowWidth * (1/7) - colourPicker.width / 2, windowHeight / 1.08 - colourPicker.height / 2);
    strokeWeightSlider.position(windowWidth * (2/7) - strokeWeightSlider.width / 2, windowHeight / 1.08 - strokeWeightSlider.height / 2);
    squareColourPicker.position(windowWidth * (3/7) - squareColourPicker.width / 2, windowHeight / 1.08 - squareColourPicker.height / 2);
    bgColourPicker.position(windowWidth * (4/7) - bgColourPicker.width / 2, windowHeight / 1.08 - bgColourPicker.height / 2);
    cornerRoundnessSlider.position(windowWidth * (5/7) - cornerRoundnessSlider.width / 2, windowHeight / 1.08 - cornerRoundnessSlider.height / 2);
    bgColorButton.position(windowWidth * (6/7) - bgColorButton.width / 2, windowHeight / 1.08 - bgColorButton.height / 2);
    
    applyColourScheme(colourSchemeIndex);
    background(bgColourPicker.value());
    pattern.draw();
    
    createColorPickerLabel1('Stroke Colour', colourPicker);
    createColorPickerLabel2('Drawing Tool Colour', squareColourPicker);
    createColorPickerLabel3('Background Colour', bgColourPicker);
    
    createSliderLabel('Stroke Weight', strokeWeightSlider);
    createSliderLabel('Corner Radius', cornerRoundnessSlider);    
    
    bgColorButton.style('font-family', 'Helvetica');
    bgColorButton.style('font-size', '10px');
    bgColorButton.style('font-weight', '500');
    bgColorButton.style('text-transform', 'uppercase');
    bgColorButton.style('letter-spacing', '2.3px');
    bgColorButton.style('color', '#2c2b2b');

    arrowKeys('Use left and right arrow keys to use the suggested colour schemes');

}


function draw (){
    strokeWeight(strokeWeightSlider.value());
    stroke(colourPicker.value());
    
    fill(squareColourPicker.value());

    if(mouseIsPressed){
        rect(mouseX - 30, mouseY - 30, 60, 60, cornerRoundnessSlider.value());
    }

    pattern.draw();

}

function repaint(){
    background(bgColourPicker.value());
    fill('#f1f0e3');
    stroke(colourPicker.value());
    
    pattern.draw();
}


function keyPressed() {
    if (keyCode === LEFT_ARROW) {
        // Go to previous colour scheme
        colourSchemeIndex--;
        
        // Loop back to last scheme when gone below 0
        if (colourSchemeIndex < 0) {
            colourSchemeIndex = 3;
        }
        
        applyColourScheme(colourSchemeIndex);
        repaint();  // Update canvas with new colours
    } else if (keyCode === RIGHT_ARROW) {
        // Go to next colour scheme
        colourSchemeIndex++;
        
        // Loop back to first scheme if last index is exceeded
        if (colourSchemeIndex > 3) {
            colourSchemeIndex = 0;
        }
        
        applyColourScheme(colourSchemeIndex);
        repaint(); 
    }
}


function applyColourScheme(index) {
    if (index === 0) {
        bgColourPicker.elt.value = '#7e8dd3';  // Default, blue
        colourPicker.elt.value = '#6a7ed1';    
    } else if (index === 1) {
        bgColourPicker.elt.value = '#d9b989';  // Orange
        colourPicker.elt.value = '#d1a76b';    
    } else if (index === 2) {
        bgColourPicker.elt.value = '#afc678';  // Green
        colourPicker.elt.value = '#8eb53b';    
    } else if (index === 3) {
        bgColourPicker.elt.value = '#d37e7e';  // Red
        colourPicker.elt.value = '#d16b6b';    
    }
}


function createColorPickerLabel1(text, control) {
    let label = createDiv(text);
    label.style('font-family', 'Helvetica');
    label.style('color', '#2c2b2b');
    label.style('font-size', '10px');
    label.style('letter-spacing', '2.3px');
    label.style('font-weight', '500');
    label.style('text-transform', 'uppercase');
    label.position(control.x - 32, control.y + 36);
    
}


function createColorPickerLabel2(text, control) {
    let label = createDiv(text);
    label.style('font-family', 'Helvetica');
    label.style('color', '#2c2b2b');
    label.style('font-size', '10px');
    label.style('letter-spacing', '2.3px');
    label.style('font-weight', '500');
    label.style('text-transform', 'uppercase');
    label.position(control.x - 55, control.y + 36);
    
}


function createColorPickerLabel3(text, control) {
    let label = createDiv(text);
    label.style('font-family', 'Helvetica');
    label.style('color', '#2c2b2b');
    label.style('font-size', '10px');
    label.style('letter-spacing', '2.3px');
    label.style('font-weight', '500');
    label.style('text-transform', 'uppercase');
    label.position(control.x - 50, control.y + 36);
    
}


function createSliderLabel(text, control) {
    let label = createDiv(text);
    label.style('font-family', 'Helvetica');
    label.style('color', '#2c2b2b');
    label.style('font-size', '10px');
    label.style('letter-spacing', '2.3px');
    label.style('font-weight', '500');
    label.style('text-transform', 'uppercase');
    label.position(control.x + 8.5, control.y + 30);
    label.style('text-align', 'center');

}

function arrowKeys(text){
    let arrowText = createDiv(text);
    arrowText.style('font-family', 'Helvetica');
    arrowText.style('color', '#2c2b2b');
    arrowText.style('font-size', '12px');
    arrowText.style('letter-spacing', '2.3px');
    arrowText.style('font-weight', '500');
    arrowText.style('text-align', 'center');
    arrowText.style('padding-top', '15px');
}

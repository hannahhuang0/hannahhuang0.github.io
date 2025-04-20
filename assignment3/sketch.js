
// -----------------------------------------------
// Remixed from p5.js Multiple Canvases example
// https://p5js.org/examples/advanced-canvas-rendering-multiple-canvases/

// ----- CANVAS 1 -----
let mySketch = function(p) {
  let canvas;
  let textElements = [];
  let selectedText = null;
  let offsetX, offsetY;
  let input, contentInput;
  let sizeSlider, opacitySlider, colourPicker, strokecolourPicker, strokeWeightSlider, fontSelector;
  let backgroundcolourPicker;
  let widthInput, heightInput, resizeButton;
  let rotating = false;
  
  let isInteractingWithUI = false;
  let isEditing = false;
  
  const MAX_WIDTH = 900;
  const MAX_HEIGHT = 900;
  
  var minStrokeWeight = 0;
  var maxStrokeWeight = 10;
  
  var minFontSize = 5;
  var maxFontSize = 550;
  var defaultFontSize = 30;
  
  var bgcolour;
  var lightBlue;
  let textInputWidth = 375; 
  let canvasInputBarSize = 55;
  
  let availableFonts = [
    // web fonts
    'Helvetica',
    'Arial',
    'Times New Roman',
    'Georgia',
    'Impact',
    
    // google fonts
    'Montserrat',
    'Roboto',
    'Lobster',
    'Oswald',
    'Playfair Display',
    'Merriweather',
    'Raleway',
    'Lora',
    'Poppins',
    'Bebas Neue',
    'Open Sans Condensed',
    'Roboto Condensed',
    'Anton',
    'Barlow Condensed',
    'Abril Fatface'
  ];
  
  
  // set up function
  p.setup = function() {
    let canvasW = p.floor(p.windowWidth * 0.55);
    let canvasH = p.floor(p.windowHeight * 0.6);
    canvas = p.createCanvas(canvasW, canvasH);
    centreCanvas();
    bgcolour = p.color(255);
    lightBlue = p.color('#7e8dd3');
    createUI(); // create UI/controls
  };
  
  

  // -----------------------------------------------
  // Remixed from p5.js createSpan() tutorial
  // https://p5js.org/reference/p5/createSpan/
    // create UI and controls
  function createUI() {
    // ----- canvas dimensions, width and height -----
    widthInput = p.createInput(p.width + "").size(canvasInputBarSize).parent('controls');
    widthInput.mousePressed(() => isInteractingWithUI = true);
    
    heightInput = p.createInput(p.height + "").size(canvasInputBarSize).style('margin-right', '10px').parent('controls');
    heightInput.mousePressed(() => isInteractingWithUI = true);    
    
    resizeButton = p.createButton('Resize Canvas').parent('controls').style('margin-right', '45px');
    resizeButton.mousePressed(() => {
      resizeCustomCanvas();
      isInteractingWithUI = true;
    });
    
    // ----- font size -----
    p.createSpan(' Size: ').parent('controls');
    sizeSlider = p.createSlider(minFontSize, maxFontSize, defaultFontSize).parent('controls');
    sizeSlider.input(() => {
      if (selectedText) selectedText.size = sizeSlider.value();
    });
    sizeSlider.mousePressed(() => isInteractingWithUI = true);
    sizeSlider.style('margin-top', '5px').style('margin-right', '45px');
    
    // ----- fill opacity -----
    p.createSpan(' Opacity: ').parent('controls');
    opacitySlider = p.createSlider(0, 255, 255).parent('controls');
    opacitySlider.input(() => {
      if (selectedText) selectedText.opacity = opacitySlider.value();
    });
    opacitySlider.mousePressed(() => isInteractingWithUI = true);
    opacitySlider.style('margin-top', '5px').style('margin-right', '45px');
    
    // ----- fill colour -----
    p.createSpan(' Fill: ').parent('controls');
    colourPicker = p.createColorPicker('#000000').parent('controls');
    colourPicker.input(() => {
      if (selectedText) selectedText.colour = colourPicker.color();
    });
    colourPicker.mousePressed(() => isInteractingWithUI = true);
    colourPicker.style('margin-right', '45px');
    
    // ----- stroke colour -----
    p.createSpan(' Stroke: ').parent('controls');
    strokecolourPicker = p.createColorPicker('#000000').parent('controls');
    strokecolourPicker.input(() => {
      if (selectedText) selectedText.strokecolour = strokecolourPicker.color();
    });
    strokecolourPicker.mousePressed(() => isInteractingWithUI = true);
    strokecolourPicker.style('margin-right', '45px');
    
    // ----- stroke weight -----
    p.createSpan(' Stroke Weight: ').parent('controls');
    strokeWeightSlider = p.createSlider(0, maxStrokeWeight, minStrokeWeight).parent('controls');
    strokeWeightSlider.input(() => {
      if (selectedText) selectedText.strokeW = strokeWeightSlider.value();
    });
    strokeWeightSlider.mousePressed(() => isInteractingWithUI = true);
    strokeWeightSlider.style('margin-top', '5px').style('margin-right', '2px');
    
    // ----- background colour -----
    p.createSpan(' Background: ').parent('controls');
    backgroundcolourPicker = p.createColorPicker('#ffffff').parent('controls');
    backgroundcolourPicker.input(() => {
      bgcolour = backgroundcolourPicker.color();
      p.background(bgcolour);
    });
    backgroundcolourPicker.mousePressed(() => isInteractingWithUI = true);
    backgroundcolourPicker.style('margin-right', '40px');
    
    /// ----- font type -----
    p.createSpan(' Font: ').parent('controls');
    fontSelector = p.createSelect().parent('controls');
    for (let font of availableFonts) fontSelector.option(font);
    fontSelector.changed(() => {
      if (selectedText) {
        selectedText.font = fontSelector.value();
        contentInput.style('font-family', fontSelector.value());
      }
    });
    fontSelector.mousePressed(() => isInteractingWithUI = true);
    fontSelector.style('margin-right', '40px');
    
    // ----- text input -----
    p.createElement('br').parent('controls');
    input = p.createInput('').size(textInputWidth).parent('controls');
    input.elt.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') addText();
    });
    input.mousePressed(() => isInteractingWithUI = true);
    // ----- add text -----
    let addButton = p.createButton('Add Text').parent('controls');
    addButton.mousePressed(addText);
    addButton.style('margin-left', '10px').style('margin-right', '40px');
    
    // ----- delete -----
    let deleteButton = p.createButton('Delete').parent('controls');
    deleteButton.mousePressed(deleteSelectedText);
    deleteButton.id('deleteBtn');
    deleteButton.style('margin-right', '40px');
    deleteButton.hide();
    
    // ----- export -----
    let exportButton = p.createButton('Export as PNG').parent('controls');
    exportButton.id('exportBtn');  
    exportButton.mousePressed(exportCanvasAsImage);
    exportButton.style('margin-left', 'auto');
    
    // ----- inline text editor -----
    contentInput = p.createInput('');
    contentInput.id('text-editor');
    contentInput.input(() => {
      if (selectedText) selectedText.content = contentInput.value();
    });
    contentInput.mousePressed(() => isInteractingWithUI = true);    // update text and hide inline text editor when enter key is pressed
    contentInput.elt.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {    
        contentInput.hide();
        isEditing = false;
        isInteractingWithUI = false;
      }
    });
    contentInput.elt.addEventListener('blur', () => {   // update text and hide inline text editor when focus is lost, so when mouse clicks outside of the box
      if (selectedText) {
        selectedText.content = contentInput.value();
        contentInput.hide();
        isEditing = false;
        isInteractingWithUI = false;
      }
    });
    contentInput.hide();
  }
  // Code remixed to create container for elements to allow for different styles
  // End remix for createSpan() tutorial
  // -----------------------------------------------
  
  
  // draw function
  p.draw = function() {
    p.background(bgcolour);   // set background colour - input value
    p.stroke(200);
    p.noFill();
    p.strokeWeight(2);
    p.rect(0, 0, p.width, p.height);    // draw light border around canvas
    
    // text elements, input values from text input, sliders, and colour pickers
    for (let t of textElements) {
      p.push();
      p.translate(t.x, t.y);
      p.rotate(t.rotation);
      p.fill(p.red(t.colour), p.green(t.colour), p.blue(t.colour), t.opacity);
      p.stroke(t.strokecolour || p.color(0));
      p.textFont(t.font || 'Helvetica');
      p.textSize(t.size);
      p.textAlign(p.CENTER, p.CENTER);
      p.strokeWeight(t.strokeW || 1);
      p.text(t.content, 0, 0);
      
      // add border around text element to highlight
      if (t === selectedText && !isEditing) {
        let tw = p.textWidth(t.content);
        let th = t.size;
        p.noFill();
        p.stroke(lightBlue);
        p.strokeWeight(1);
        p.rectMode(p.CENTER);
        p.rect(0, 0, tw + 10, th + 10);
        drawRotateIcon(tw / 2 + 15, 0);   // rotating icon 
      }
      p.pop();
    }
    
  };
  
  
  // rotate icon function
  function drawRotateIcon(x, y) {
    p.push();
    
    // set rotation and positioning for the icon
    p.translate(x + 10, y);
    p.scale(0.5);
    p.stroke(lightBlue);
    p.noFill();
    p.strokeWeight(2);
    let r = 16;   // arc radius
    let ah = 6;   // arrowhead size
    
    // first arc with arrow
    p.arc(0, 0, r * 2, r * 2, p.radians(20), p.radians(160));
    let angle1 = p.radians(160);
    let ax1 = p.cos(angle1) * r;
    let ay1 = p.sin(angle1) * r;
    let tangent1 = angle1 + p.HALF_PI;
    p.line(ax1, ay1, ax1 - p.cos(tangent1 - p.QUARTER_PI) * ah, ay1 - p.sin(tangent1 - p.QUARTER_PI) * ah);
    p.line(ax1, ay1, ax1 - p.cos(tangent1 + p.QUARTER_PI) * ah, ay1 - p.sin(tangent1 + p.QUARTER_PI) * ah);
    
    // second arc with arrow
    p.arc(0, 0, r * 2, r * 2, p.radians(200), p.radians(340));
    let angle2 = p.radians(340);
    let ax2 = p.cos(angle2) * r;
    let ay2 = p.sin(angle2) * r;
    let tangent2 = angle2 + p.HALF_PI;
    p.line(ax2, ay2, ax2 - p.cos(tangent2 - p.QUARTER_PI) * ah, ay2 - p.sin(tangent2 - p.QUARTER_PI) * ah);
    p.line(ax2, ay2, ax2 - p.cos(tangent2 + p.QUARTER_PI) * ah, ay2 - p.sin(tangent2 + p.QUARTER_PI) * ah);
    p.pop();
  }
  
  
  // function to add new text
  function addText() {
    let txt = input.value().trim();
    if (txt === '') return;   // do nothing if empty
    
    // properties for new text
    let newText = {
      content: txt,
      x: p.width / 2, // start in centre of canvas
      y: p.height / 2,
      size: sizeSlider.value(),
      opacity: opacitySlider.value(),
      colour: colourPicker.color(),
      strokecolour: strokecolourPicker.color(),
      strokeW: strokeWeightSlider.value(),
      font: fontSelector.value(),
      rotation: 0
    };
    // add new text to text array
    textElements.push(newText);
    input.value(''); // clear text input field
    contentInput.style('font-family', newText.font); // update content input style
  }
  
  


  // event to handle interactions with text elements
  p.mousePressed = function() {
    if (isMouseOverUI() || isEditing) return;   // don't interact if UI is active or editing
    let clickedText = false;
    
    // loop through text elements in reverse to detect which one is clicked
    for (let i = textElements.length - 1; i >= 0; i--) {
      let t = textElements[i];
      p.textSize(t.size);
      let tw = p.textWidth(t.content);
      let th = t.size;
      let dx = p.mouseX - t.x;
      let dy = p.mouseY - t.y;
      let rotateHandleDist = p.dist(p.mouseX, p.mouseY, t.x + p.cos(t.rotation) * (tw / 2 + 15), t.y + p.sin(t.rotation) * (tw / 2 + 15));
      
      // if the rotate handle is clicked, start rotating the text
      if (rotateHandleDist < 15) {
        selectedText = t;
        rotating = true;
        clickedText = true;
        p.select('#deleteBtn').show();    // show delete button when text is being rotated
      }
      
      // check if clicked area is inside text bounds
      let rotatedX = p.cos(-t.rotation) * dx - p.sin(-t.rotation) * dy;
      let rotatedY = p.sin(-t.rotation) * dx + p.cos(-t.rotation) * dy;
      
      // -----------------------------------------------
      // Remixed from p5.js toString() tutorial
      // https://p5js.org/reference/p5.Color/toString/ 
        // if text is clicked, select it and show relevant UI controls, and show delete button
      if (p.abs(rotatedX) < tw / 2 && p.abs(rotatedY) < th / 2) {
        selectedText = t;
        offsetX = rotatedX;
        offsetY = rotatedY;
        sizeSlider.value(t.size);
        opacitySlider.value(t.opacity);
        colourPicker.value(t.colour.toString('#rrggbb'));
        strokecolourPicker.value(t.strokecolour.toString('#rrggbb'));
        fontSelector.value(t.font || 'Arial');
        strokeWeightSlider.value(t.strokeW || 1);
        clickedText = true;
        p.select('#deleteBtn').show();    // show delete button when text is selected
      }
      // Code was referenced to convert a number, like the colour component, into a hexadecimal string, which is needed for representing colors in hex format
      // End remix for toString() tutorial 
      // -----------------------------------------------
      if (clickedText) break;
    }
    
    // if no text was clicked, deselect and hide delete button
    if (!clickedText) {
      selectedText = null;
      rotating = false;
      p.select('#deleteBtn').hide();
      contentInput.hide();
    }
  };

  
  // -----------------------------------------------
  // Remixed from p5.js mouseDragged tutorial
  // https://p5js.org/reference/p5/mouseDragged/
    // event to move or rotate text
  p.mouseDragged = function() {
    if (isInteractingWithUI || isEditing) return;
    if (selectedText) {
      // if rotating, update rotation of selected text
      if (rotating) {
        selectedText.rotation = p.atan2(p.mouseY - selectedText.y, p.mouseX - selectedText.x);
      } 
      // move the selected text by updating its position
      else {
        selectedText.x = p.mouseX - offsetX;
        selectedText.y = p.mouseY - offsetY;
      }
    }
  };

  // Code was referenced to create mouseDragged function
  // End remix for mouseDragged tutorial
  // -----------------------------------------------
  

  // -----------------------------------------------
  // Remixed from p5.js mouseReleased tutorial
  // https://p5js.org/reference/p5/mouseReleased/
    // event to stop text interactions
  p.mouseReleased = function() {
    isInteractingWithUI = false;
    rotating = false;
  };
  
  
  // function to delete selected text
  function deleteSelectedText() {
    if (selectedText) {
      textElements = textElements.filter(t => t !== selectedText);    // remove selected text
      selectedText = null;
      p.select('#deleteBtn').hide();    // hide delete button when text isn't selected
      contentInput.hide();    // hide inline text editor for editing content
    }
  }
  // Code was referenced to create mouseReleased function
  // End remix for mouseReleased tutorial
  // -----------------------------------------------
  


  // -----------------------------------------------
  // Remixed from W3schools Java String matches() Method example
  // https://www.w3schools.com/java/ref_string_matches.asp
    // function to check when mouse it over UI/controls
  function isMouseOverUI() {
    return (
      colourPicker.elt.matches(':hover') ||
      strokecolourPicker.elt.matches(':hover') ||
      sizeSlider.elt.matches(':hover') ||
      opacitySlider.elt.matches(':hover') ||
      widthInput.elt.matches(':hover') ||
      heightInput.elt.matches(':hover') ||
      resizeButton.elt.matches(':hover') ||
      input.elt.matches(':hover') ||
      contentInput.elt.matches(':hover') ||
      strokeWeightSlider.elt.matches(':hover') ||
      fontSelector.elt.matches(':hover')
    );
  }
  // Code was referenced to allow elements to matche a specific CSS selector so that they can be styled
  // End remix for Java String matches() Method example
  // -----------------------------------------------
  
  
  // event to allow editing of selected text
  p.doubleClicked = function() {
    
    for (let t of textElements) {
      p.textSize(t.size);
      let tw = p.textWidth(t.content);
      let th = t.size;
      let dx = p.mouseX - t.x;
      let dy = p.mouseY - t.y;
      let rotatedX = p.cos(-t.rotation) * dx - p.sin(-t.rotation) * dy;
      let rotatedY = p.sin(-t.rotation) * dx + p.cos(-t.rotation) * dy;
      
      // if clicked inside text bounds, start editing
      if (p.abs(rotatedX) < tw / 2 && p.abs(rotatedY) < th / 2) {
        selectedText = t;
        isEditing = true;
        contentInput.value(t.content);
        
        // position input field below text element
        let inputX = canvas.elt.offsetLeft + t.x - tw / 2;
        let inputY = canvas.elt.offsetTop + t.y + th / 2 + 5;
        contentInput.position(inputX, inputY);
        contentInput.size(tw + 20, t.size + 10);
        contentInput.style('font-size', t.size + 'px');
        contentInput.style('colour', t.colour.toString('#rrggbb'));
        contentInput.style('background-colour', 'rgba(255,255,255,0)');
        contentInput.style('font-family', t.font);
        contentInput.show(); // show input input field for editing
        contentInput.elt.focus(); // focus on input field 
        return;
      }
    }
    
  };
  

  
  // function to export canvas as image
  function exportCanvasAsImage() {
    p.saveCanvas('myDrawing', 'png');     // save the canvas as PNG file
  }
  
  
  // resize canvas to custom dimensions
  function resizeCustomCanvas() {
    let newW = p.constrain(p.int(widthInput.value()), 100, MAX_WIDTH);    // get new width, constrained within limits
    let newH = p.constrain(p.int(heightInput.value()), 100, MAX_HEIGHT);  // get new height
    p.resizeCanvas(newW, newH);   // resize canvas
    let x = (p.windowWidth - newW) / 2;   // centre horizontally
    let y = canvas.elt.offsetTop;
    canvas.position(x, y);
    p.background(bgcolour);
  }
  
  
  // function to centre canvas
  function centreCanvas() {
    let x = (p.windowWidth - p.width) / 2;
    let y;
    if (p.fullscreen()) {
      y = 0;    // set y to 0 in fullscreen mode
    } else {
      y = 284;  // set to original position
    }
    canvas.position(x, y);
  }
  

  // handle window resize event to centre the canvas
  p.windowResized = function() {
    centreCanvas();
  };
  

  // event to handle interactions with keys
  p.keyPressed = function() {

  // -----------------------------------------------
  // Remixed from p5.js fullscreen() tutorial
  // https://p5js.org/reference/p5/fullscreen/ 
    // enter fullscreen with F2
    if (p.keyCode === 113) {
      p.fullscreen(true);   // entering fullscreen editing mode, everything stays the same size, but window stuff is removed
    }

    // exit fullscreen with esc
    if (p.keyCode === p.ESCAPE) {
      p.fullscreen(false);
    }
  // Code was referenced to allow for fullscreen mode for cleaner appearance
  // End remix for fullscreen() tutorial
  // -----------------------------------------------

      
    // additional key press events for text deletion
    if ((p.keyCode === p.BACKSPACE || p.keyCode === p.DELETE) && selectedText && !isEditing && !isInteractingWithUI) {
      deleteSelectedText();
    }
    
    // key press events for updating or entering text input, in addition to the buttons
    if (p.key === 'Enter') {
      if (document.activeElement === widthInput.elt || document.activeElement === heightInput.elt) {
        resizeCustomCanvas();
      }
    }
  };
  
  
};

new p5(mySketch);




// ----- CANVAS 2 for spacing -----
function spacerCanvas(p) {
  p.setup = function () {
    let canvasWidth = p.windowWidth * 0.87;   // set canvas width as 87% of the window width
    let canvasHeight = 1000;    // fixed height for the canvas to create a fixed window height, allowing for a margin between the customizable canvas and the bottom of the website page
    let canvas = p.createCanvas(canvasWidth, canvasHeight);
    canvas.parent('canvas-container');
    
    // centre the canvas horizontally
    let centreX = (p.windowWidth - canvasWidth) / 2;
    canvas.position(centreX, 284); 
    
    p.background(255);
    p.noLoop(); // no need to redraw
  };
}

new p5(spacerCanvas);
// Code was referenced to allow for the creation of two canvases
// End remix for Multiple Canvases example
// -----------------------------------------------


// -----------------------------------------------
// Remixed from W3schools W3.CSS Modal example
// https://www.w3schools.com/w3css/w3css_modal.asp
  // function to open image in fullscreen image
function openImage(imgElement) {
  const modal = document.getElementById("imageModal");
  const modalImage = document.getElementById("modalImage");
  
  modal.style.display = "flex";   // show modal
  modalImage.src = imgElement.src;    // set source of modal image to clicked image
}

// function to close image in fullscreen
function closeModal() {
  const modal = document.getElementById("imageModal");
  modal.style.display = "none";   // hide modal
}
// Code was referenced to allow for modal creation for fullscreen images
// End remix for W3.CSS Modal example
// -----------------------------------------------


function setup(){
    createCanvas(windowWidth, windowHeight);
}

function draw(){
    background(108, 129, 214, 100);
    fill('#f1f0e3');
    stroke('#6a7ed1');
    
    let spacing = 60;
    let rows = 14;

    for (var i = 0; i < rows; i++) {  
        for (var j = 0; j < 100; j++) {  
            rect(j * spacing, i * spacing, 60, 60, 60);
        }
    }

    fill('#6c81d6');
    stroke('#6c81d6');
    if (mouseX < windowWidth * 1/3) {
        rect(mouseX, mouseY, 60, 60,60);
    } else if (mouseX >= windowWidth * 1/3 && mouseX < windowWidth * 2/3) {
        let offsetX = 30; 
        let offsetY = 30;
        
        rect(mouseX - offsetX, mouseY - offsetY, 60, 60, 60);
        rect(mouseX + offsetX, mouseY - offsetY, 60, 60, 60);
        
        rect(mouseX - offsetX, mouseY + offsetY, 60, 60, 60);
        rect(mouseX + offsetX, mouseY + offsetY, 60, 60, 60);
    } else {
        let offsetX = 60; 
        let offsetY = 60; 
        
        rect(mouseX - offsetX, mouseY - offsetY, 60, 60, 60); 
        rect(mouseX, mouseY - offsetY, 60, 60, 60); 
        rect(mouseX + offsetX, mouseY - offsetY, 60, 60, 60); 
        
        rect(mouseX - offsetX, mouseY, 60, 60, 60); 
        rect(mouseX, mouseY, 60, 60, 60); 
        rect(mouseX + offsetX, mouseY, 60, 60, 60); 
        
        rect(mouseX - offsetX, mouseY + offsetY, 60, 60, 60); 
        rect(mouseX, mouseY + offsetY, 60, 60, 60); 
        rect(mouseX + offsetX, mouseY + offsetY, 60, 60, 60);
    }
}

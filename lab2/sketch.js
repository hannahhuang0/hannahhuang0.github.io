var drop1 = {
    x: 0, 
    y: 0,
    w: 5,
    h: 10,
    r: 10,
    ySpeed: 2.75,
    colour: '#6a7ed1',
    startingPosition: 0,

    draw: function(){
        fill(this.colour);
        rect(this.x, this.y, this.w, this.h, this.r);
    },
    move: function(){ 
        this.y += this.ySpeed;

        if(this.y >= windowHeight / 2 ){
            this.y = this.startingPosition;
        }
    }
};

var drop2 = {
    x: 0, 
    y: -30,
    w: 5,
    h: 10,
    r: 10,
    ySpeed: 2.75,
    colour: '#6a7ed1',
    startingPosition: -30,

    draw: function(){
        fill(this.colour);
        rect(this.x, this.y, this.w, this.h, this.r);
    },
    move: function(){ 
        this.y += this.ySpeed;

        if(this.y >= windowHeight / 2 ){
            this.y = this.startingPosition;
        }
    }
};

var drop3 = {
    x: 0, 
    y: -60,
    w: 5,
    h: 10,
    r: 10,
    ySpeed: 2.75,
    colour: '#6a7ed1',
    startingPosition: -60,

    draw: function(){
        fill(this.colour);
        rect(this.x, this.y, this.w, this.h, this.r);
    },
    move: function(){ 
        this.y += this.ySpeed;

        if(this.y >= windowHeight / 2 ){
            this.y = this.startingPosition;
        }
    }
};

var drop4 = {
    x: 0, 
    y: -90,
    w: 5,
    h: 10,
    r: 10,
    ySpeed: 2.75,
    colour: '#6a7ed1',
    startingPosition: -90,

    draw: function(){
        fill(this.colour);
        rect(this.x, this.y, this.w, this.h, this.r);
    },
    move: function(){ 
        this.y += this.ySpeed;

        if(this.y >= windowHeight / 2 ){
            this.y = this.startingPosition;
        }
    }
};

var puddle = {
    x: 0,
    y: 0,
    w: 0,
    h: 7,
    r: 8,
    colour: '#6a7ed1',
    widthIncrement: 0.24,

    draw: function() {
        fill(this.colour);
        rect(this.x - this.w / 2, this.y, this.w, this.h, this.r);

        this.y = windowHeight / 2;
    },
    move: function() {
        this.w += this.widthIncrement;

        if (this.w > windowWidth) {
            this.w = 5;
        }
    }
};

var ground = {
    x: 0,
    y: 0,
    w: 1, 
    h: 1, 
    colour: '#2c2b2b',

    draw: function(){
        fill(this.colour);
        rect(this.x, this.y, this.w, this.h);
        this.y = (windowHeight / 2) + 7;
        this.w = windowWidth;
    }
}


function setup(){
    createCanvas(windowWidth,windowHeight);

    drop1.x = windowWidth / 2 ;
    drop2.x = windowWidth / 2 ;
    drop3.x = windowWidth / 2 ;
    drop4.x = windowWidth / 2 ;
    puddle.x = windowWidth / 2;
}

function draw(){
    background('#f1f0e3');
    stroke('#6a7ed1');
    drop1.draw();
    drop1.move();

    drop2.draw();
    drop2.move();

    drop3.draw();
    drop3.move();

    drop4.draw();
    drop4.move();

    puddle.draw();
    puddle.move();
    
    stroke('#cdcaa2');
    ground.draw();
}

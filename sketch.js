var drawing = [];

function setup() {
    canvas = createCanvas(400,400);
  
    str = 200;
}

function draw(){
    background(0);
    if(mouseIsPressed){
        var point = {
            x : mouseX,
            y : mouseY 
        }
        drawing.push(point);
 
    }

    beginShape();
    stroke(str);

    noFill();
    for (var i = 0; i < drawing.length;i++) {
        vertex(drawing[i].x,drawing[i].y);
    }
    endShape();
    console.log(drawing);
}
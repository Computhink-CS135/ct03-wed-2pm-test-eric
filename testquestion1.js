
let posX, xSpeed;

function setup(){
    createCanvas(600, 400);
    posX = width/ 2;
    xSpeed = 5;
    fill('limegreen');
}
function draw() {
    background("lightblue");
    circle(posX, height / 2, 50);
    posX += xSpeed
    
    if (posX > width - 25) {
        xSpeed = -5
    }
    if (posX < 0 + 25) {
        xSpeed = 5;
    }
}
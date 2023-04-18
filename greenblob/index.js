const canvas = document.getElementById("gameArea");
const ctx = canvas.getContext("2d");

let px = 400;
let py = 300;
let pradius = 50;
let speed = 10;

let upPressed = false;
let downPressed = false;
let leftPressed = false;
let rightPressed = false;

//Game loop
function drawGame(){
    requestAnimationFrame(drawGame);
    clearScreen();
    inputs();
    drawPlayer();
}

function inputs(){
    if(upPressed) {
        py = py - speed;
    }
    if(downPressed) {
        py = py + speed;
    }
    if(rightPressed) {
        px = px + speed;
    }
    if(leftPressed) {
        px = px - speed;
    }
}

function drawPlayer() {
    ctx.fillStyle = "green"
    ctx.beginPath();
    ctx.arc(px, py, pradius,0, Math.PI * 2);
    ctx.fill();
}

function clearScreen(){
    ctx.fillStyle = "black"
    ctx.fillRect(0,0, canvas.clientWidth, canvas.height)
}

document.body.addEventListener("keydown", keyDown);
document.body.addEventListener("keyup", keyUp);

function keyDown(event) {
    // down
    if(event.keyCode == 40) {
        downPressed = true;
    }
    // up
    if(event.keyCode == 38) {
        upPressed = true;
    }
    // left
    if(event.keyCode == 37) {
        leftPressed = true;
    }
    // right
    if(event.keyCode == 39) {
        rightPressed = true;
    }
}

function keyUp(event) {
    // down
    if(event.keyCode == 40) {
        downPressed = false;
    }
    // up
    if(event.keyCode == 38) {
        upPressed = false;
    }
    // left
    if(event.keyCode == 37) {
        leftPressed = false;
    }
    // right
    if(event.keyCode == 39) {
        rightPressed = false;
    }
}

drawGame();

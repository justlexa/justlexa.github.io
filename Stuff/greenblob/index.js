const canvas = document.getElementById("gameArea");
const scoreNode = document.getElementById("score");
const ctx = canvas.getContext("2d");

let px = 400;
let py = 300;
let pradius = 25;
let speed = 5;

let randomx = 0;
let randomy = 0;
let erandomx = 0;
let erandomy = 0;
let score = 0;
let cx = 400;
let cy = 300;
let cradius = 10;
let ex = 400;
let ey = 300;
let eradius = 10;

let upPressed = false;
let downPressed = false;
let leftPressed = false;
let rightPressed = false;
let shiftPressed = false;

//Game loop
function drawGame(){
    requestAnimationFrame(drawGame);
    clearScreen();
    inputs();
    boundaryCheck();
    drawCoin();
    drawEnemy();
    drawPlayer();
    coinCheck();
    enemyCheck();
    scoreNode.innerText = score
}

function boundaryCheck() {
    // up
    if(py < pradius) {
        py = pradius;
    }
    // down
    if(py > canvas.height - pradius) {
        py = canvas.height - pradius;
    }
    // left
    if(px < pradius) {
        px = pradius;
    }
    // right
    if(px > canvas.width - pradius) {
        px = canvas.width - pradius;
    }
}

function inputs(){
    if(shiftPressed) {
        speed = 10
    } else {
        speed = 5
    }
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

function drawCoin() {
    cx = randomx * canvas.width
    cy = randomy * canvas.height
    ctx.fillStyle = "yellow"
    ctx.beginPath();
    ctx.arc(cx, cy, cradius,0, Math.PI * 2);
    ctx.fill();
}

function drawEnemy() {
    ex = erandomx * canvas.width
    ey = erandomy * canvas.height
    ctx.fillStyle = "red"
    ctx.beginPath();
    ctx.arc(ex, ey, eradius,0, Math.PI * 2);
    ctx.fill();
}

function coinCheck() {
    if(py < cy + pradius) {
    if(py > cy - pradius) {
    if(px < cx + pradius) {
    if(px > cx - pradius) {
        randomx = Math.random()
        randomy = Math.random() 
        score = score + 1
    }}}}
}

function enemyCheck() {
    if(py < ey + pradius) {
    if(py > ey - pradius) {
    if(px < ex + pradius) {
    if(px > ex - pradius) {
        erandomx = Math.random()
        erandomy = Math.random() 
        score = score - 1
    }}}}
}
        
function drawPlayer() {
    ctx.fillStyle = "green"
    if(shiftPressed){ ctx.fillStyle = "greenyellow"; }
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
    if(event.keyCode == 40 || event.keyCode == 83) {
        downPressed = true;
    }
    // up
    if(event.keyCode == 38 || event.keyCode == 87) {
        upPressed = true;
    }
    // left
    if(event.keyCode == 37 || event.keyCode == 65) {
        leftPressed = true;
    }
    // right
    if(event.keyCode == 39 || event.keyCode == 68) {
        rightPressed = true;
    }
    // shift
    if(event.keyCode == 16) {
        shiftPressed = true;
    }
}

function keyUp(event) {
    // down
    if(event.keyCode == 40 || event.keyCode == 83) {
        downPressed = false;
    }
    // up
    if(event.keyCode == 38 || event.keyCode == 87) {
        upPressed = false;
    }
    // left
    if(event.keyCode == 37 || event.keyCode == 65) {
        leftPressed = false;
    }
    // right
    if(event.keyCode == 39 || event.keyCode == 68) {
        rightPressed = false;
    }
    // shift
    if(event.keyCode == 16) {
        shiftPressed = false;
    }
}

(function randomSetup() {
    randomx = Math.random()
    randomy = Math.random()
    erandomx = Math.random()
    erandomy = Math.random()
})();

drawGame();
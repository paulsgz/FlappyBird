// const canvas = document.getElementById("canvas1");
const canvas = document.querySelector('#canvas1');
const context = canvas.getContext('2d')    

canvas.width = 600;
canvas.height = 400;

let space = false;
let angle = 0;
let hue = 0;
let frame = 0;
let score = 0;
let gamespeed = 2;

// const gradient = context.createLinearGradient(0,0,0,70);
// gradient.addColorStop('0.4', '#fff');
// gradient.addColorStop('0.5', '#000');
// gradient.addColorStop('0.55', '#4040ff');
// gradient.addColorStop('0.6', '#000');
// gradient.addColorStop('0.9', '#fff');

const background1 = new Image();
const background2 = new Image();
const background3 = new Image();
const background4 = new Image();
const background5 = new Image();
const background6 = new Image();
background1.src = 'Forest/Parallax Forest Background - Blue/10_Sky.png';
background2.src = 'Forest/Parallax Forest Background - Blue/09_Forest.png';
background3.src = 'Forest/Parallax Forest Background - Blue/08_Forest.png';
background4.src = 'Forest/Parallax Forest Background - Blue/07_Forest.png';
background5.src = 'Forest/Parallax Forest Background - Blue/06_Forest.png';
background6.src = 'Forest/Parallax Forest Background - Blue/05_Particles.png'  ;
const BG = {
    x1: 0,
    x2: canvas.width,
    x3: 0,
    x4: canvas.width,
    x5: 0,
    x6: canvas.width,
    x7: 0,
    x8: canvas.width,
    x9: 0,
    x10: canvas.width,
    x11: 0,
    x12: canvas.width,
    y: 0,
    width: canvas.width,
    height: canvas.height 
}
function holdBackground() { 
    if(BG.x1 <= -BG.width + gamespeed) BG.x1 = BG.width;
    else BG.x1 -= gamespeed;
    if(BG.x2 <= -BG.width + gamespeed) BG.x2 = BG.width;
    else(BG.x2 -= gamespeed);
    if(BG.x3 <= -BG.width + gamespeed+10) BG.x3 = BG.width;
    else BG.x3 -= gamespeed+0.2;
    if(BG.x4 <= -BG.width + gamespeed+10) BG.x4 = BG.width;
    else(BG.x4 -= gamespeed+0.2);
    if(BG.x5 <= -BG.width + gamespeed+10) BG.x5 = BG.width;
    else BG.x5 -= gamespeed+0.1;
    if(BG.x6 <= -BG.width + gamespeed+10) BG.x6 = BG.width;
    else(BG.x6 -= gamespeed+0.1);
    if(BG.x7 <= -BG.width + gamespeed+10) BG.x7 = BG.width;
    else BG.x7 -= gamespeed+0.2;
    if(BG.x8 <= -BG.width + gamespeed+10) BG.x8 = BG.width;
    else(BG.x8 -= gamespeed+0.2);
    if(BG.x9 <= -BG.width + gamespeed+10) BG.x9 = BG.width;
    else BG.x9 -= gamespeed+0.5;
    if(BG.x10 <= -BG.width + gamespeed+10) BG.x10 = BG.width;
    else(BG.x10 -= gamespeed+0.5);
    if(BG.x11 <= -BG.width + gamespeed+15) BG.x11 = BG.width;
    else BG.x11 -= gamespeed+1.5;
    if(BG.x12 <= -BG.width + gamespeed+15) BG.x12 = BG.width;
    else(BG.x12 -= gamespeed+1.5);
    context.drawImage(background1, BG.x1, BG.y, BG.width, BG.height);
    context.drawImage(background1, BG.x2, BG.y, BG.width, BG.height);
    context.drawImage(background2, BG.x3, BG.y, BG.width, BG.height);
    context.drawImage(background2, BG.x4, BG.y, BG.width, BG.height);
    context.drawImage(background3, BG.x5, BG.y, BG.width, BG.height);
    context.drawImage(background3, BG.x6, BG.y, BG.width, BG.height);
    context.drawImage(background4, BG.x7, BG.y, BG.width, BG.height);
    context.drawImage(background4, BG.x8, BG.y, BG.width, BG.height);
    context.drawImage(background5, BG.x9, BG.y, BG.width, BG.height);
    context.drawImage(background5, BG.x10, BG.y, BG.width, BG.height);
    context.drawImage(background6, BG.x11, BG.y, BG.width, BG.height);
    context.drawImage(background6, BG.x12, BG.y, BG.width, BG.height);
}

function animate() {
    context.clearRect(0,0,canvas.width, canvas.height);
    // context.fillRect(10,canvas.height - 90,50,50)
    holdBackground()
    holdObstacles();
    holdParticles();
    bird.update();
    bird.draw();
    context.fillStyle = 'red';
    context.font = "90px Georgia";
    context.strokeText(score,450,70);
    context.fillText(score,450,70);
    if(holdCollision()) return; 
    requestAnimationFrame(animate);
    angle+=0.12;
    hue++;
    frame++;
}
animate();

window.addEventListener('keydown',function(e){
    if (e.code === 'Space') space = true;
})
window.addEventListener('keyup',function(e){
    if (e.code === 'Space') space = false;
    bird.frameD = 0;
})

const collision = new Image();
collision.src = 'bang.png';
function holdCollision() {
    for(let i=0; i<obstaclesArr.length;i++){
        if(bird.x < obstaclesArr[i].x + obstaclesArr[i].width &&
            bird.x + bird.width > obstaclesArr[i].x &&
            ((bird.y < 0 + obstaclesArr[i].top && bird.y + bird.height > 0) ||
            (bird.y > canvas.height - obstaclesArr[i].bottom && bird.y + bird.height < canvas.height))){
                context.drawImage(collision, bird.x, bird.y, 50 ,50);
                context.font ="35px Georgia";
                context.fillStyle = "black";
                context.fillText(`Game Over, Your Score is ${score}`,80,canvas.height/2 -10);
                return true; 
            }
    }
}


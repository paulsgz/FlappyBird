const particlesArray = [];

class Particle {
    constructor(){
        this.x = bird.x;
        this.y = bird.y;
        this.size = Math.random() * 7 + 3;
        this.speedY = (Math.random() * 1) - 0.5;
        this.color = 'hsla('+ hue + ', 100%, 50%, 0.8)';
    }
    update() {
        this.x -= gamespeed;
        this.y += this.speedY;
    }
    draw() {
        context.fillStyle = this.color;
        context.beginPath();
        context.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        context.fill();
    }
}

function holdParticles () {
    particlesArray.unshift(new Particle);
    for(i=0; i<particlesArray.length; i++){
        particlesArray[i].update();
        particlesArray[i].draw();
    }
    if(particlesArray.length > 200) {
        for(let i = 0; i<20; i++){
            particlesArray.pop(particlesArray[i])
        }
    }
}
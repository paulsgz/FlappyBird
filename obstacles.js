const obstaclesArr = [];


class Obstacle {
    constructor() {
        this.top =(Math.random() * canvas.height/3)+ 50;
        this.bottom = (Math.random() * canvas.height/3) + 50;
        this.x = canvas.width;
        this.width = 70;
        this.color = '#5E74C6';
        this.counted = false;
    }
    draw() {
        context.fillStyle = this.color;
        context.fillRect(this.x, 0, this.width, this.top);
        context.fillRect(this.x, canvas.height - this.bottom, this.width, this.bottom);   
        this.x, 0, this.width, this.top
    }
    update() {
        this.x -= gamespeed;
        if(!this.counted && this.x < bird.x){
            score++;
            this.counted = true;
        }
        this.draw();
    }
}

function holdObstacles(){
    if(frame % 85 === 0){
        obstaclesArr.unshift(new Obstacle);
    }
    for(let i=0; i< obstaclesArr.length; i++){
        obstaclesArr[i].update();
    }
    if(obstaclesArr.length > 20){
        obstaclesArr.pop(obstaclesArr[0])
    }
}
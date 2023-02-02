const dragon = new Image();
dragon.src = 'spritesheet.png'
class Bird {
    constructor(){
        this.x = 150;
        this.y = 200;
        this.vy = 0;
        this.originalWidth = 941;
        this.originalHeight = 680;
        this.width = this.originalWidth/20;
        this.height = this.originalHeight/20;
        this.width = 20;
        this.height = 20;
        this.weight = 1;
        this.frameD = 0;
    }
    update(){
        let curve = Math.sin(angle) * 20;
        if(this.y > canvas.height - (this.height * 3) + curve){
            this.y = canvas.height-(this.height * 3) + curve;
            this.vy = 0;
        } else {
        this.vy += this.weight;
        this.vy *= 0.9
        this.y += this.vy;
        }
        if(this.y <0 + this.height){
            this.y = 0 + this.height;
            this.vy = 0;
        }
        if(space && this.y > this.height * 3) this.flap();
    }
    draw() {
        context.fillStyle = 'red';
        // context.fillRect(this.x,this.y,this.width,this.height);
        context.drawImage(dragon, this.frameD * this.originalWidth ,0, this.originalWidth, this.originalHeight, this.x-20, this.y-12, this.width*1.7, this.height*1.7);
    }
    flap() {
        this.vy -=2;
        if(this.frameD >= 3) this.frameD = 0;
        else if(frame%4 ===0) this.frameD++;
    }
}
const bird = new Bird(); 
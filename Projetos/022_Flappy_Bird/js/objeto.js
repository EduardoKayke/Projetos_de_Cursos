class Obj{

    frame = 0;
    timer = 0;

    constructor(x, y, width, height, image){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.image = image;
    };

    draw(){
        var img = new Image();
        img.src = this.image;
        canvas.drawImage(img, this.x, this.y, this.width, this.height);
    };

    animation(vel, limit, nome){
        this.timer += 1;
        if(this.timer >= vel){
            this.timer = 0;
            this.frame += 1;
        };
        if(this.frame >= limit){
            this.frame = 0;
        };

        this.image = "assets/images/" + nome + this.frame + ".png";
    };
};

class Bg extends Obj {
    move(speed, limit, pos){
        this.x -= speed;

        if(this.x <= limit){
            this.x = pos;
        };
    };
};

class Ground extends Bg {

};

class Bird extends Obj {

};
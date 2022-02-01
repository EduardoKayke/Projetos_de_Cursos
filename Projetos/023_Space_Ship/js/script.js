var canvas = document.getElementById('canvas').getContext("2d");
canvas.imageSmoothingEnabled = false;

document.addEventListener("click", function(e){
    changeScene(game);
});

document.addEventListener("mousemove", function(e){
    if(currentScene.moveShip){
        currentScene.moveShip(e);
    };
});

var currentScene = {};

function changeScene(scene){
    currentScene = scene;
};

var infinityBg = {
    bg : new Obj(0, 0, 500, 900, "assets/images/fundo.png"),
    bg2 : new Obj(0, -900, 500, 900, "assets/images/fundo.png"),

    draw(){
        this.bg.draw();
        this.bg2.draw();
    },

    moveBg(){
        this.bg.y += 1;
        this.bg2.y += 1;

        if(this.bg.y >= 900){
            this.bg.y = 0;
        };

        if(this.bg2.y >= 0){
            this.bg2.y = -900;
        };
    },
};

var menu = {

    title : new Text("Space Ship"),
    label : new Text("Click to Play"),
    ship : new Obj(220, 800, 60, 50, "assets/images/nave.png"),

    draw(){
        infinityBg.draw();
        this.title.draw_text(60, "Arial", 100, 300, "White");
        this.label.draw_text(20, "Arial", 200, 400, "White");
        this.ship.draw();
    },
    
    update(){
        infinityBg.moveBg();
    },

};

var game = {

    score : new Text("0"),
    ship : new Obj(220, 800, 60, 50, "assets/images/nave.png"),

    moveShip(event){
        this.ship.x = event.clientX - 290;
        this.ship.y = event.clientY - 65;
    },

    draw(){
        infinityBg.draw();
        this.score.draw_text(30, "Arial", 40, 40, "White");
        this.ship.draw();
    },
    
    update(){
        infinityBg.moveBg();
    },

};

var gameover = {

    score : new Text("0"),

    draw(){
        infinityBg.draw();
        this.score.draw_text(30, "Arial", 40, 40, "White");
    },

    update(){
        infinityBg.moveBg();
    },
};

function main(){
    canvas.clearRect(0, 0, 500, 900);
    currentScene.draw();
    currentScene.update();
    requestAnimationFrame(main);
};

changeScene(menu);
main();
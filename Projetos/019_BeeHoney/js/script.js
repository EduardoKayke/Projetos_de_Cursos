// Controle do canvas
var canvas = document.getElementById('canvas').getContext('2d');

var bee = new Bee(200, 500, 100, 100, "yellow");
var spider = new Spider(100, 100, 100, 100, "black");
var spider2 = new Obj(0, 0, 100, 100, "orange");

document.addEventListener('keydown', function(event) {
    if(event.key === "a") {
        bee.dir = -1;
    }else if(event.key === "d") {
        bee.dir = 1;
    }
});

document.addEventListener('keyup', function(event) {
    if(event.key === "a") {
        bee.dir = 0;
    }else if(event.key === "d") {
        bee.dir = 0;
    }
});

// desenhar
function draw() {
    bee.draw();
    spider.draw();
    spider2.draw();
};

// Atualizar.
function update() {
    bee.move();
    spider.move();
};

// Receber todas as outras informações.
function main() {
    canvas.clearRect(0, 0, 500, 900);
    update();
    draw();
};

// Chama uma função a cada 10 milissegundos
setInterval(main, 10);

// 30794958 opcao 7
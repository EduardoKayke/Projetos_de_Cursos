// Controle do canvas
var canvas = document.getElementById('canvas').getContext('2d');

var bee = new Obj(200, 500, 100, 100, "yellow");
var spider = new Obj(100, 100, 100, 100, "black");
var spider2 = new Obj(0, 0, 100, 100, "orange");

document.addEventListener('keydown', function(event) {
    if(event.key === "a") {
        console.log('Olá alunos');
    }
});

document.addEventListener('keyup', function(event) {
    if(event.key === "a") {
        console.log('Tchau alunos');
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

};

// Receber todas as outras informações.
function main() {
    canvas.clearRect(0, 0, 1280, 720);
    update();
    draw();
};

// Chama uma função a cada 10 milissegundos
setInterval(main, 10);

// 30794958 opcao 7
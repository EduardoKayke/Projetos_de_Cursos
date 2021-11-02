var canvas = document.getElementById('canvas');
var container = canvas.getContext('2d');

container.fillStyle = "#8b8b8b";
var jogador1 = {
    px: 70,
    py: 260,
    tx: 30,
    ty: 200,
    dir: 0,
};

var jogador2 = {
    px: 1200,
    py: 260,
    tx: 30,
    ty: 200,
};

var bolinha = {
    px: 625,
    py: 345,
    tx: 30,
    ty: 30,
    dir: 8,
};

container.font = "20px Arial";
var pts1 = 0;
var pts2 = 0;

document.addEventListener('keydown', function (e) {
    if (e.keyCode === 87) {
        jogador1.dir = -8
    }
    else if (e.keyCode === 83) {
        jogador1.dir = 8
    }
});

document.addEventListener('keyup', function (e) {
    if (e.keyCode === 87) {
        jogador1.dir = 0
    }
    else if (e.keyCode === 83) {
        jogador1.dir = 0
    }
});

function Move_jogador() {
    if (jogador1.py < 0) {
        jogador1.py = 0
    }
    else if (jogador1.py > 520) {
        jogador1.py = 520
    }

    jogador1.py += jogador1.dir
};

function Move_Ball() {
    bolinha.px += bolinha.dir;

    if (bolinha.px > 1200) {
        bolinha.dir *= -1;
    } else if (bolinha.px < 80) {
        bolinha.dir *= -1;
    }
};

function Draw() {
    container.fillRect(jogador1.px, jogador1.py, jogador1.tx, jogador1.ty);
    container.fillRect(jogador2.px, jogador2.py, jogador2.tx, jogador2.ty);
    container.fillRect(bolinha.px, bolinha.py, bolinha.tx, bolinha.ty);
    container.fillText("Score 1: " + pts1, 200, 50);
    container.fillText("Score 2: " + pts2, 1000, 50);
};

function Main() {
    container.clearRect(0, 0, 1280, 720);
    Draw();
    Move_Ball();
    Move_jogador();
};

setInterval(Main, 10);

// Para ouvir a tecla de resposta e descobrir seu respectivo número.
// document.addEventListener('keydown', function(e){console.log(e.keyCode)})
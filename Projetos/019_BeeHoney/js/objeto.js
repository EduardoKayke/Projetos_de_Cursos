// Classe pra criar objetos.
class Obj{
    constructor(x, y, width, height, color) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;
    };
    draw() {
        canvas.fillStyle = this.color;
        canvas.fillRect(this.x, this.y, this.width, this.height);
    };
};

// extends trás o Obj pra dentro de Bee.
// Podemos invocar váriaveis e usar aqui.
class Bee extends Obj{
    // Direção
    dir = 0;

    move() {
        this.x += this.dir;
    }
}

class Spider extends Obj{
    move() {
        this.y += 2;

        if(this.y > 900) {
            this.y = -50;
        }
    }
}
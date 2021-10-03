var heroi = {
    nome: `Yegner`,
    vida: 100,
    poder: 10,
    defesa: 5,
};

var orc = {
    nome: `Cronch`,
    vida: 120,
    poder: 20, 
    defesa: 6, 
};

function Main() {
    console.log(`A batalha começa!`);
    console.log(`U orc gigante apareceu.`);
    console.log(`Qual a sua escolha?`);
    console.log(`1 - Atacar`);
    console.log(`2 - Defender`);
    console.log(`3 - Fugir`);

    var escolha = 1

    if (escolha == 1) {
        Atacar()
    }
}

function Atacar() {
    console.log(`O herói ataca!`);
    console.log(`O orc tomou ${heroi.poder - orc.defesa} de dano. Sua vida está em ${orc.vida - (heroi.poder - orc.defesa)}.`);
}

function Defender() {
    console.log(`O herói está em guarda.`);
    console.log(`Todo o dano é reduzido pela metade.`);
}

Main()
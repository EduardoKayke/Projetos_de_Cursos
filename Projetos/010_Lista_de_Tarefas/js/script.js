// Referenciar o input.
// Referenciar o button, colocando um evento.
// Referenciar a lista.

let input = document.querySelector('input[name=tarefa');
let btn = document.querySelector('#botao');
let lista = document.querySelector('#lista');

let tarefas = [
    'Jogar GTA V',
    'Estudar Python',
    'Estudar JavaScript',
    'Ver u filme',
    'Ler um livro',   
];

// <li class="list-group-item list-group-item-action">Jogar GTA V</li>
// <li class="list-group-item list-group-item-action">Estudar Python</li>
// <li class="list-group-item list-group-item-action">Estudar JavaScript</li>
// <li class="list-group-item list-group-item-action">Ver u filme</li>
// <li class="list-group-item list-group-item-action">Ler um livro</li>
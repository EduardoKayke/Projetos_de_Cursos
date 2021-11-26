
let input = document.querySelector('input[name=tarefa');
let btn = document.querySelector('#botao');
let lista = document.querySelector('#lista');

let tarefas = [
    'Jogar GTA V',
    'Estudar Python',
    'Estudar JavaScript',
    'Ver um filme',
    'Ler um livro',
];

function renderizarTarefas(){
    for(tarefa of tarefas){

        //Cria o item da lista.
        let itemLista = document.createElement('li');

        //Adiciona classes no item da lista.
        itemLista.setAttribute('class', 'list-group-item list-group-item-action')

        //Cria um texto.
        let itemTexto = document.createTextNode(tarefa);

        //Adicionar o texto no item da lista.
        itemLista.appendChild(itemTexto);

        //Adicionar o item da lista na lista.
        lista.appendChild(itemLista);
    }
};

//Executando a função para renderizar as tarefas.
renderizarTarefas();
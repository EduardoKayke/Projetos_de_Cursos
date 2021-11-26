// Referenciar o input, button e a lista.

let input = document.querySelector('input[name=tarefa');
let btn = document.querySelector('#botao');
let lista = document.querySelector('#lista');
// Usado para os spans de erro. Local da mensagem.
let card = document.querySelector('.card');

let tarefas = JSON.parse(localStorage.getItem('tarefas')) || [];

function renderizarTarefas(){
    //limpar a listagem de itens antes de renderizar novamente a tela.
    lista.innerHTML = '';

    for(tarefa of tarefas){

        //Cria o item da lista.
        let itemLista = document.createElement('li');

        //Adiciona classes no item da lista.
        itemLista.setAttribute('class', 'list-group-item list-group-item-action');

        //Adicionar evento de clique no item da lista.
        itemLista.onclick = function(){
            deletarTarefa(this);
        };

        //Cria um texto.
        let itemTexto = document.createTextNode(tarefa);

        //Adicionar o texto no item da lista.
        itemLista.appendChild(itemTexto);

        //Adicionar o item da lista na lista.
        lista.appendChild(itemLista);
    };
};

// Escutar o evento do botão.
btn.onclick = function(){
    // Capturar o valor digitado pelo usuário no input.
    let novaTarefa = input.value;

    // Para não criar uma lista vazia.
    if(novaTarefa !== ''){
        // Atualizar a nova tarefa na lista (array) de tarefas e renderizar a tela.
        tarefas.push(novaTarefa);

        //Executando a função para renderizar as tarefas.
        renderizarTarefas(); 

        //Limpar o input. Quando o usuário digitar não fica texto no campo.
        input.value = '';

        // Remove os spans de erro.
        removerSpans();

        //Salva os novos dados no banco de dados.
        salvarDadosNoStorage();
    }else{
        // Remove os spans de erro para que não se repitam.
        removerSpans();

        let span = document.createElement('span');
        span.setAttribute('class', 'alert alert-warning');

        let msg = document.createTextNode('Você precisa informar a tarefa!');

        span.appendChild(msg);

        card.appendChild(span);
    };
};

function removerSpans(){
    // Recuperamos os spans de erro.
    let spans = document.querySelectorAll('span');
    
    //Varre o array de spans removendo cada um deles.
    for(let i = 0; i < spans.length; i++){
        card.removeChild(spans[i]);
    };
};

function deletarTarefa(tar){
    //Remove a tarefa do array.
    tarefas.splice(tarefas.indexOf(tar.textContent), 1);

    //Renderiza novamente a tela.
    renderizarTarefas();

    //Salva os novos dados no banco de dados.
    salvarDadosNoStorage();
};

function salvarDadosNoStorage(){
    //Todo navegador Web possui essa capacidade.
    localStorage.setItem('tarefas', JSON.stringify(tarefas));
};

function main(){
    renderizarTarefas();
    deletarTarefa();
};

main();
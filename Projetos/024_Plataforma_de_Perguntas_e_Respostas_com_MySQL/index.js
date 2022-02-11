/** Instalações
 *  Primeiro de tudo demos o comando:
 *  node init
 *  npm install express --save
 *  npm install ejs --save 
 * 
 *  Ejs é uma biblioteca pra mostrar HTML e poder colocar 
 *  variáveis.
*/


// ---------------------PARTE 1------------------------------
// Estrutura básica de uma aplicação Express.
const express = require("express"); // Importei o módulo.
const app = express(); // Cópia do Express na variável.

// ---------------------PARTE 3------------------------------
// Colocar o EJS no Express.
app.set('view engine', 'ejs');

// Arquivos estáticos.
app.use(express.static('public')); 

// PS: Estou dizendo ao Express para usar o EJS como view 
// engine.
// Crie uma pasta chamada views, é importante que tenha esse 
// nome para salvar os arquivos HTML. 
// Podemos colocar pastas dentro da pasta views para 
// organizar.
// Arquivos com a extensão .ejs
// Agora que o arquivos está pronto, vamos juntar com Express.
// Observe o que foi feito na parte 1. 

// ---------------------PARTE 4------------------------------
app.get("/", (requisition, response) => {


    response.render("index");



    
    // <!-------PARTE 4 DO INDEX.JS--------->
    // <!-- <h1>Perguntas e Respostas</h1>
    // <hr>
    // <h3>Lista de perguntas</h3>
    // <img src="/source/img/desenvolvedor.png" alt="Desenvolvedor">
    // <p>Nome: <%= nome %></p>
    // <p>Linguagem Favorita: <%= lang %></p>
    // <p>Empresa: <%= empresa %></p>
    // <p>Inscritos: <%= inscritos %></p>

    // <% if(msg == true){ %>
    //     <h3>Isso é uma mensagem de erro!</h3>
    // <% } else { %>
    //     <h3>Está tudo em ordem</h3>
    // <% }; %>

    // <% produtos.forEach(function(produto) { %>
    // <hr>
    // <h3><%= produto.nome %></h3>
    // <h4><%= produto.preco %></h4>
    // <% }); %> --></hr>

    // Parte de cima foi o INDEX.EJS antigo
    // Essa de baixo foi aqui com Express.js

    // Vamos linkar as variáveis do JS para o HTML do EJS
    // No HTML a tag da variável deve ser assim
    // <%= lang %>, sendo lang qualquer variável.
    // <%= nome %> e etc...
    // Para criar uma condição(if, else etc..) é diferente. 
    // Observe no arquivo index.ejs

    // USADO NO INDEX.EJS
    // var nome = requisition.params.nome;
    // var lang = requisition.params.lang;
    // var exibirMsg = true;
    // // Vamos usar forEach no EJS veja no arquivo.
    // var produtos = [
    //     {nome: "Doritos", preco: 3.14},
    //     {nome: "Coca-cola", preco: 5},
    //     {nome: "Leite", preco: 1.45},
    //     {nome: "Carne", preco: 15},
    //     {nome: "Redbull", preco: 6},
    //     {nome: "Nescau", preco: 4},
    // ];

    // response.render("index", {
    //     // USADO NO INDEX.EJS
    //     // nome: nome, 
    //     // lang: lang,
    //     // empresa: "Desenvolvedor Freelancer",
    //     // inscritos: 8000,
    //     // msg: exibirMsg,
    //     // produtos: produtos,        
    // }); //leia mais na parte 3


    // response.send("Bem vindo ao meu site!"); exemplo passado antes de criar o response.render("index");

});

app.get("/perguntar", (requisition, response) => {
    response.render("perguntar");
});

// ---------------------PARTE 2------------------------------
// Porta do servidor localhost:8080/
app.listen(8080, () => {
    console.log("App Rodando");
});
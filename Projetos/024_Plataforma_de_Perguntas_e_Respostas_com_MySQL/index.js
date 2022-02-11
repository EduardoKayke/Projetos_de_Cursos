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

app.get("/", (requisition, response) => {

    // response.send("Bem vindo ao meu site!"); exemplo passado

    response.render("principal/perfil"); //leia mais na parte 3

});



// ---------------------PARTE 3------------------------------
// Colocar o EJS no Express.
app.set('view engine', 'ejs');
// PS: Estou dizendo ao Express para usar o EJS como view 
// engine.
// Crie uma pasta chamada views, é importante que tenha esse 
// nome para salvar os arquivos HTML. 
// Podemos colocar pastas dentro da pasta views para 
// organizar.
// Arquivos com a extensão .ejs
// Agora que o arquivos está pronto, vamos juntar com Express.
// Observe o que foi feito na parte 1. 



// ---------------------PARTE 2------------------------------
// Porta do servidor localhost:8080/
app.listen(8080, () => {
    console.log("App Rodando");
});
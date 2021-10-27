const email = `laviedouce@gmail.com`;

console.log(`O seu email é: ${email}`);

document.getElementById('btn-submit').addEventListener('click', e => {    
    console.log(`O botão foi clicado.`);
});

document.getElementById('form-login').addEventListener('mouseenter', e => {    
    console.log(`O mouse está sobre o formulário.`);
});

document.querySelector('#form-login').addEventListener('mouseleave', e => {    
    console.log(`O mouse saiu do formulário.`);
});

document.querySelector('#form-login').addEventListener('submit', e => {
    
    e.preventDefault();
    
    let email = document.querySelector('#email').value;
    let password = document.querySelector('#password').value;

    let json = {
        email: email,
        password: password
    };

    if (!json.email) {
        console.error(`O campo email deve ser preenchido.`);        
    } else if (!json.password) {        
        console.error(`O campo da senha deve ser preenchido.`);
    } else {
        console.info(`Dados validados com sucesso!`);        
    }

})
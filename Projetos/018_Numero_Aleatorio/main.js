let botao = document.querySelector('#button');

botao.onclick = function(){
    let input = document.querySelector('#input').value;
    const numeroaleatorio = input * Math.floor(Math.random() * 9).toFixed(0);

    if(input > 0 && input <= 10){
        alert(`
        Você acertou!
        O número digitado foi ${input}.
        Seu número aleatório é ${numeroaleatorio}.`);

        console.log(numeroaleatorio);
    }else{
        alert(`
        Você digitou ${input}.
        escolha entre 1 e 10.`)
    };

};
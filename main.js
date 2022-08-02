
const calcular = document.getElementById('calcular');


function imc (){
    
    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;

    const resultado = document.getElementById('resultado');

    if (nome !== '' && altura !== '' && peso !== ''){
        const valorimc = (peso / (altura * altura));

        resultado.textContent = valorimc.toFixed(1);

    }else{
        resultado.textContent = 'Preencha todos os Campos!';
    }

}

calcular.addEventListener('click', imc);
const botao = document.getElementById('calcular');

function imc(){
    const peso = document.getElementById('peso').value;
    const altura = document.getElementById('altura').value;

    const resultado  = document.getElementById('resultado')
    let descriçao;

    
    if(peso == "" && altura == ""){
        resultado.textContent = "Preencha os campos"
    } else {
        const imc = peso/altura**2
        if (imc < 18.5){
            descriçao = "peso abaixo do ideal"
        } else if (imc >= 18.5 && imc <= 24.9){
            descriçao = "peso ideal"
        } else if(imc >= 25 && imc <= 29.9){
            descriçao = "sobrepeso"
        } else if (imc >= 30 && imc <= 34.9){
            descriçao = "obesidade grau I"
        } else if (imc >= 35 && imc <= 39.9){
            descriçao = "obesidade grau II"
        } else if (imc > 40){
            descriçao = "obesidade grau III"
        }

        resultado.innerHTML = `Seu IMC é de ${imc.toFixed(1)}<br>
        Você está com ${descriçao} `
    }
}

botao.addEventListener('click', imc)


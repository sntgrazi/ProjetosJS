const insert = (num) => {
    let  numero = document.getElementById('visor').innerHTML;
    document.getElementById('visor').innerHTML = numero + num;
}

const clean = () => {
    document.getElementById('visor').innerHTML = "";
}

const back = () =>{
    let visor = document.getElementById('visor').innerHTML;
    document.getElementById('visor').innerHTML = visor.substring(0, visor.length -1);
}

const calcular = () =>{
    let resultado = document.getElementById('visor').innerHTML;
    if(resultado){
        document.getElementById('visor').innerHTML = eval(resultado);
    }else{
        alert('Nada para calcular')
    }
}
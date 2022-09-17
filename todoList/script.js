const botaoAdd = document.getElementById('botaoAdd')
const tarefa = document.getElementById('entrada')

const getBanco  = () => JSON.parse(localStorage.getItem('notas')) ?? [];

const setBanco = (banco) => localStorage.setItem('notas', JSON.stringify(banco));


function criarNota(tarefa, status, indice){
    const nota = document.createElement('label');
    nota.classList.add('nota-item')
    nota.innerHTML = `
    <input type='checkbox' ${status} data-indice=${indice}>
    <div>${tarefa}</div>
    <input type='button' data-indice=${indice}>
    `

    document.getElementById('notas').appendChild(nota)
}


function limparNotas(){
    const novaNota = document.getElementById('notas')
    while(novaNota.firstChild){
        novaNota.removeChild(novaNota.lastChild)
    } 
}

function atualizarTela(){
    limparNotas()
    const banco = getBanco()
    banco.forEach((item, indice) => criarNota(item.tarefa, item.status, indice))
}

function adicionarNota(){
    if(tarefa.value === ''){
        alert('Digite algo...')
    } else {
        const banco = getBanco()
        const texto = tarefa.value
        banco.push({'tarefa': texto, 'status': ''})
        setBanco(banco)
        atualizarTela()
        tarefa.value = ''
    }
}


function adicionarTecla(evento){
    const tecla = evento.key
    const texto = evento.target.value
    if(tecla === "Enter"){
        const banco = getBanco()
        banco.push({'tarefa': texto, 'status': ''})
        setBanco(banco)
        atualizarTela()
        evento.target.value = ''
    }
}

function removerItem(indice){
    const banco = getBanco()
    banco.splice(indice, 1)
    setBanco(banco)
    atualizarTela()
}

function atualizarNota(indice){
    const banco = getBanco()
    banco[indice].status = banco[indice].status === '' ? 'checked' : ''
    setBanco(banco)
    atualizarTela()
}

function clickNota(evento){
    const elemento = evento.target;
    if(elemento.type === 'button'){
        const indice = elemento.dataset.indice
        removerItem(indice)
    } else if (elemento.type === 'checkbox'){
        const indice = elemento.dataset.indice
        atualizarNota(indice)
    }
}

botaoAdd.addEventListener('click', adicionarNota)
document.getElementById('notas').addEventListener('click', clickNota)
document.getElementById('entrada').addEventListener('keypress', adicionarTecla)

atualizarTela()
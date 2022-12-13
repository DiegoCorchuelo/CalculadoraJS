function boton(valor) {
    let pantalla = document.getElementById('input').value += valor;
    return pantalla;
}

function reset() {
    document.getElementById('input').value = '';
}


function total() {
    let operacion = document.getElementById('input').value;
    document.getElementById('input').value = eval(operacion);
    if (operacion === '') {
        document.getElementById('input').value = '';
    }
}

function raiz() {
    let raiz = document.getElementById('input').value;
    document.getElementById('input').value = Math.sqrt(raiz);
}
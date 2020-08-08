// Práctica II.2.3

var sizeGrid = 2; // Tamaño visible de la tabla en cada dimensión
var size; // Tamaño del arreglo de datos en cada dimensión
var data; // Arreglo 2D para almacenar la información del grid

var offsetGridX = 0;
var offsetGridY = 0;

function datosIniciales() {
    for (var x = 1; x <= size; x++) {
        for (var y = 1; y <= size; y++) {
            data[x - 1][y - 1] = '(' + x + ',' + y + ')'; // Inicializa los valores del arreglo
        }
    }
}

function setupPag(_tamanho) {
    document.getElementById('info').innerHTML = 'Cargando...';
    document.getElementById('tabla').bgColor = 'blue';
    document.getElementById('tabla').cellPadding = '10';
    size = _tamanho;
    data = new Array(size);
    for (var i = 0; i < size; i++) {
        data[i] = new Array(size);
    }
    datosIniciales();
}

function actualizaGrid() {
    for (var x = 1; x <= sizeGrid; x++) {
        for (var y = 1; y <= sizeGrid; y++) {
            // Actualiza la tabla utilizando los valores del arreglo a partir de 0,0
            document.getElementById('elemento' + x + '.' + y).innerHTML = data[x - 1 + offsetGridX][y - 1 + offsetGridY];
        }
    }
}

function gridInicial() {
    document.getElementById('info').innerHTML = 'Iniciando cuadrícula...';
    offsetGridX = 0;
    offsetGridY = 0;
    actualizaGrid();
}

function mueveGrid(_direccion) {
    var msj = "Movimiento hacia: ";
    document.getElementById('info').innerHTML = msj + _direccion;
    if (_direccion === 'derecha') {
        if (offsetGridX < size - sizeGrid)
            offsetGridX++;
        else
            document.getElementById('info').innerHTML = msj + _direccion + ' (límite derecha)';
    } else if (_direccion === 'izquierda') {
        if (offsetGridX > 0)
            offsetGridX--;
        else
            document.getElementById('info').innerHTML = msj + _direccion + ' (límite izquierda)';
    } else if (_direccion === 'arriba') {
        if (offsetGridY < size - sizeGrid)
            offsetGridY++;
        else
            document.getElementById('info').innerHTML = msj + _direccion + ' (límite superior)';
    } else if (_direccion === 'abajo') {
        if (offsetGridY > 0)
            offsetGridY--;
        else
            document.getElementById('info').innerHTML = msj + _direccion + ' (límite inferior)';
    }
    actualizaGrid();
}
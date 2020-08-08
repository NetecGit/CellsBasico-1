/*
  Práctica II.5.1 Expresiones Regulares

  
    * Encontrar el tercer carácter, este puede ser un número del cero al cinco.

    * Encontrar el tercer carácter, este puede ser del cero al cinco o una letra minúscula.

    * Encontrar el tercer carácter, este puede ser . ó :

    * Encontrar el tercer carácter, este no puede ser ni 0, 1 ni tampoco 2.


*/

var codigos = ['se1', 'se9', 'ma2', 'se:', 'se.', 'se2', 'hu2', 'se3', 'sea', 'sec'];
var sep = "---------------------------------------";

for (ele of codigos) {
    var patron = undefined; // el tercer carácter puede ser nº de 0-5
    if (true) {
        console.log(ele);
    }
}
console.log(sep);

for (ele of codigos) {
    patron = undefined; // el tercer carácter nº de 0 a 3 y letra de a a z
    if (true) {
        console.log(ele);
    }
}

console.log(sep);

for (ele of codigos) {
    patron = undefined; // el tercer carácter puede ser . ó :
    if (true) {
        console.log(ele);
    }
}

console.log(sep);

for (ele of codigos) {
    patron = undefined; // Encontrar el 3er carácter, este no puede ser ni 0, 1 ni tampoco 2.
    if (true) {
        console.log(ele);
    }
}
console.log(sep);
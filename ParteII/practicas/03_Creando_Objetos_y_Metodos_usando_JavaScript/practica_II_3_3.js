/*
    Práctica II.3.2 Dados

    2. Agregue los métodos gets y sets para obtener o cambiar el número de caras.

    3. Agregue el método lanzar() que devuelva el numero entero entre 1 y el número de caras, use un método aleatorio para simular el lanzamiento.

    4. Pruebe su solución creando un par de Dados y láncelos varias veces.

    5. Opcionalmente, escriba código para tirar el dado 100,000 veces y luego crear una lista que muestre cuantas veces se lanzó cada lado. Debería de generar algo como lo siguiente:

        [(1, 16422), (2, 16596), (3, 16567), (4, 16761), (5, 16951), (6, 16703)]
*/

class Dado {
    constructor(caras = 6) {
        if (caras >= 3) {
            this._caras = caras;
        }
    }

    // Agregar método set's / get's

    // Agregar método lanzar()
}
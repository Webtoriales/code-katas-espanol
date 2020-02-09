Link de YouTube: --NA--
Fecha: 8 de Feb, 2020.

---

## Calcular numero de inversiones de un arreglo

### URL: https://www.codewars.com/kata/537529f42993de0e0b00181f

### Puntuación: 6kyu

### inversiones-arreglo.js

La inversion de un arreglo indica que tan lejos esta de estar ordenado.

Inversiones son pares de elementos en un arreglo que no estan en orden.

Ejemplos:

```
[1, 2, 3, 4]  =>  0 inversiones
[1, 3, 2, 4]  =>  1 inversion: 2 y 3
[4, 1, 2, 3]  =>  3 inversiones: 4 y 1, 4 y 2, 4 y 3
[4, 3, 2, 1]  =>  6 inversiones: 4 y 3, 4 y 2, 4 y 1, 3 y 2, 3 y 1, 2 y 1
```

---

## Bombillos de luuz

### URL: https://www.codewars.com/kata/5901555b63bf404a66000029

### Puntuación: 6kyu

### bombillos-luz.js

Algunos bombillos estan puestos en circulo, en direccion a las manecillas del reloj. Estan encendidos (1) o apagados (0).

Cada turno, los bombillos de luz cambian su estado. Si un bombillo estaba encendido el turno anterior, el bombillo a su derecha cambiara estado. Por ejemplo, si bombillos[0] estaba encendido, bombillos[1] cambiara su estado.

Encuentra el estado de los bombillos despues de n cantidad de turnos.

Ejemplo

Para `bombillos = [0,1,1,0,1,1], n = 2` la salida debera ser `[1, 0, 1, 1, 0, 1]`.

Asi es como los bombillos cambian cada turno:

```
0) 0 1 1 0 1 1   -- estado original
1) 1 1 0 1 1 0   -- 1st turn
2) 1 0 1 1 0 1   -- 2nd turn
```

---

## Arreglos intercalados

### URL: https://www.codewars.com/kata/523d2e964680d1f749000135

### Puntuación: 5kyu

### arreglos-intercalados.js

Crea una funcion que acepte un numero arbitrario de arreglos y devuelva un solo arreglo generado al alternar agregar elementos de cada arreglo que fue como argumento. Si un arreglo es mas corto que los otros, el resultado debe ser "acolchado" con valores nulos.

Ejemplos:

```
interleave([1, 2, 3], ["c", "d", "e"]) === [1, "c", 2, "d", 3, "e"]
interleave([1, 2, 3], [4, 5]) === [1, 4, 2, 5, 3, null]
interleave([1, 2, 3], [4, 5, 6], [7, 8, 9]) === [1, 4, 7, 2, 5, 8, 3, 6, 9]
interleave([]) === []
```
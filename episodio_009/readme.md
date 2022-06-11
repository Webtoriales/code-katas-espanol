Link de YouTube: TBD
Fecha: TBD

---

## El lenguaje de los ladrones

### URL: https://www.codewars.com/kata/629e4d5f24b98110a83b2d0d

### Puntuación: 7kyu

### lenguaje-de-los-ladrones.js

El lenguaje de los ladrones ( Rövarspråket ) es un canto sueco que utilizan los niños para engañar a las personas que no están familiarizadas con el idioma. La idea es que cada consonante en una oración se duplique, con una `o` insertada en el medio (`b` se convierte en `bob`). Las vocales se dejan intactas (`a` sigue siendo una `a`). Es bastante difícil para un oído inexperto entender una conversación codificada de esta manera, especialmente si se habla rápidamente.

**Ejemplo**

En este ejemplo, se modifican las consonantes `f`, `b` y `r`. Las vocales `o` y `a` se dejan intactas.

`'foo bar' => 'fofoo bobaror'`

**La tarea**

Nuestra tarea es implementar una función `function robberEncode(sentence)` que toma una `oración` de cadena de caracteres y devuelve el resultado, convertido en lenguaje de ladrón, como una cadena de caracteres.

**Notas**

* Solo se deben modificar las consonantes; deja todos los demás caracteres sin cambios.
* Se probarán tanto los caracteres en mayúsculas como en minúsculas.
* El caso del carácter o y las consonantes vecinas deben coincidir (`F => FOF` y `f => fof`).
* A los efectos de este kata, un carácter se considera una consonante si es igual a una de las letras `BCDFGHJKLMNPQRSTVWXYZ`.


---

## Vecindario celular en 2D

### URL: https://www.codewars.com/kata/5b2e5a02a454c82fb9000048

### Puntuación: 7kyu

### vecindario-celular-2d.js

El vecindario de una celda (en una matriz) son las celdas que están cerca de ella. Hay dos tipos populares:

El [vecindario de Moore](https://en.wikipedia.org/wiki/Moore_neighborhood) son ocho celdas que rodean una celda dada
La [vecindad de Von Neumann](https://en.wikipedia.org/wiki/Von_Neumann_neighborhood) son cuatro celdas que comparten un borde con la celda dada

**Tarea**

Dado un tipo de vecindario (`"moore"` o `"von_neumann"`), una matriz 2D (un arreglo de arreglos) y un par de coordenadas, devuelva la lista de vecinos de la celda dada.

**Notas:**

* El orden de los elementos en la lista de salida no es importante
* Si los índices de entrada están fuera de la matriz, devuelve una lista vacía
* Si la matriz está vacía, devuelve una lista vacía
* Orden de los índices: el primer índice se debe aplicar para la capa de matriz externa/primera y el último índice para la capa más interna/última. `coordinates = (m, n)` deben aplicarse como `mat[m][n]`

---

## Un par de guantes

### URL: https://www.codewars.com/kata/58235a167a8cb37e1a0000db

### Puntuación: 6kyu

### par-de-guantes.js

Se acerca el invierno, debes preparar tus vacaciones de esquí. El objetivo de este kata es determinar el número de pares de guantes que puedes formar con los guantes que tienes en tu cajón.

Dada una matriz que describe el color de cada guante, devuelva el número de pares que puede formar, asumiendo que solo los guantes del mismo color pueden formar pares.

Ejemplos:

```
input = ["red", "green", "red", "blue", "blue"]
result = 2 (1 red pair + 1 blue pair)

input = ["red", "red", "red", "red", "red", "red"]
result = 3 (3 red pairs)
```

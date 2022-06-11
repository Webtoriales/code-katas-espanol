Link de YouTube: https://www.youtube.com/watch?v=UmoNElSWfNE
Fecha: 7 de Abril, 2020.

---

## A quien le gusta?

### URL: https://www.codewars.com/kata/5266876b8f4bf2da9b000362

### Puntuación: 6kyu

### a-quien-le-gusta.js

Probablemente conoces el sistema de "me gusta" de Facebook y otras paginas. Las personas pueden hacer click en "me gusta" en blog posts, imagenes u otros items. Queremos crear el texto que debe mostrarse al lado de esos items.

Implementa una funcion `likes` que tome un arreglo como entrada, conteniendo el nombre de las personas que les gusta ese item. Debe devolver el texto a mostrar, tal como se ven en los ejemplos:

```
likes [] // debe ser "no one likes this"
likes ["Peter"] // debe ser "Peter likes this"
likes ["Jacob", "Alex"] // debe ser "Jacob and Alex like this"
likes ["Max", "John", "Mark"] // debe ser "Max, John and Mark like this"
likes ["Alex", "Jacob", "Mark", "Max"] // debe ser "Alex, Jacob and 2 others like this"
```

---

## Crea un numero de telefono

### URL: https://www.codewars.com/kata/525f50e3b73515a6db000b83

### Puntuación: 6kyu

### crea-numero-telefono.js

Escribe una funcion que acepte un arreglo de 10 enteros (entre 0 y 9), que devuelva una hilera de caracteres de esos numeros en la forma de un numero de telefono (formato EEUU).

Por ejemplo:

```
createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => devuelve "(123) 456-7890"
```

Tip: no te olvides del espacio luego de los parentesis.

---

## Tu Orden, por favor

### URL: https://www.codewars.com/kata/55c45be3b2079eccff00010f

### Puntuación: 6kyu

### orden.js

Tu tarea es ordenar una hilera de caracteres. Cada palabra en la hilera va a contener un numero. Este numero es la posicion de la palabra en la hilera resultante.

Nota: Los numeros iran de 1 a 9. El primer numero siempre sera 1 (no 0).

Si la hilera que entra esta vacia, devuelve una hilera vacia. Las palabras en la hilera entrante solo contendran numeros validos consecutivos.

Ejemplos:

```
"is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
"4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
""  -->  ""
```

Link de YouTube: TBD
Fecha: 5 de Marzo, 2020.

---

## Necio Persistente

### URL: https://www.codewars.com/kata/55bf01e5a717a0d57e0000ec

### Puntuación: 6kyu

### necio-persistente.js

Escribe una funcion llamada *persistence* que tome como parametro un numero positivo y devuelva su persistencia multiplicativa, que es el numero de veces que debes multiplicar sus digitos hasta que alcances un numero de un solo digito.

Por ejemplo:

```
 persistence(39) === 3 // porque 3*9 = 27, 2*7 = 14, 1*4=4 (3 ocurrencias)

 persistence(999) === 4 // porque 9*9*9 = 729, 7*2*9 = 126,
                        // 1*2*6 = 12, y finalmente 1*2 = 2

 persistence(4) === 0 // porque 4 ya es un numero de un digito
```

---

## Paridad atípica

### URL: https://www.codewars.com/kata/5526fc09a1bbd946250002dc

### Puntuación: 6kyu

### paridad-atipica.js

Recibiras un arreglo (de longitud de al menos tres elementos, pero podria ser muy largo) que contiene numeros enteros. El arreglo esta enteramente compuesto de numeros pares, o enteramente compuesto por numeros impares, a excepcion de un unico entero N. Escribe una funcion que tome el arreglo como argumento y devuelva esta "excepcion" N.

Ejemplo

```
[2, 4, 0, 100, 4, 11, 2602, 36]
Deberia devolver: 11 (el unico valor impar)

[160, 3, 1719, 19, 11, 13, -21]
Deberia devolver: 160 (el unico valor par)
```

---

## Dubstep

### URL: https://www.codewars.com/kata/551dc350bf4e526099000ae5

### Puntuación: 5kyu

### dubstep.js

Polycarpus trabaja como DJ en el mejor club nocturno de Berland, y frecuentemente usa musica Dubstep en sus presentaciones. Recientemente ha decidido tomar un par de canciones viejas y hacer mezclas de dubstep de ellas.

Asumamos que una cancion consiste del mismo numero de palabras (que no contienen WUB). Para hacer una mezcla de esta cacion, Polycarpus inserta una cierta cantidad de palabras "WUB" antes de la primer palabra de la cancion (este numero puede ser cero), despues de la ultima palabra (puede ser cero) y entre palabras (por lo menos una entre cada par de palabras vecinas), y luego el chico pega todas las palabras, uncluido "WUB", en una sola hilera de caracteres y reproduce la cancion en el club.

Por ejemplo, una cancion con las palabras "I AM X" se transforma en una mezcla dubstep como "WUBWUBIWUBAMWUBWUBX" y no se puede trasnformar en "WUBWUBIAMWUBX".

Recientemente, Jonny empezo a escuchar las canciones dubstepo de Polycarpus, pero como no le gusta la musica moderna, ha decidido averiguar cual es la cancion original que Polycarpus mezclo. Ayuda a Jonny a restaurar la cancion original.

**Input**

Consiste de una sola hilera de caracteres, no vacia, y contiene unicamente letras en mayuscula. La hilera no supera 200 caracteres.

**Output**

Devuelve las palabras de la cancion inicial que Polycarpus uso para hacer la mezcla dubstep.

Ejemplos:

```
songDecoder("WUBWEWUBAREWUBWUBTHEWUBCHAMPIONSWUBMYWUBFRIENDWUB")
  // =>  WE ARE THE CHAMPIONS MY FRIEND
```
Link de YouTube: https://www.youtube.com/watch?v=lj-hPuBeYwM
Fecha: 18 ene. 2020.

---

## Suma de Dígitos - Digital Root

### URL: https://www.codewars.com/kata/541c8630095125aba6000c00

### Puntuación: 6kyu

### digital-root.js

En esta kata, debes crear una funcion tipo digital root.

Una función tipo digital root es la suma recursiva de todos los dígitos en un número. Dado n, realiza la suma de todos los dígitos de n. Si ese valor tiene más de un dígito, continua reduciendo de esta manera hasta que un número de un sólo dígito sea producido. Esto es solo aplicable a número naturales.

Así es como funciona:

```
digital_root(16)
=> 1 + 6
=> 7

digital_root(942)
=> 9 + 4 + 2
=> 15 ...
=> 1 + 5
=> 6

digital_root(132189)
=> 1 + 3 + 2 + 1 + 8 + 9
=> 24 ...
=> 2 + 4
=> 6

digital_root(493193)
=> 4 + 9 + 3 + 1 + 9 + 3
=> 29 ...
=> 2 + 9
=> 11 ...
=> 1 + 1
=> 2
```

---

## Funcion Diferencia

### URL: https://www.codewars.com/kata/523f5d21c841566fde000009

### Puntuación: 6kyu

### funcion-diferencia.js

Tu objetivo en este kata es implementar una función de diferencia, que sustrae una lista de otra y devuelve el resultado.

Debe remover todos los valores de una lista A, que están presentes en una lista B.


`array_diff([1,2],[1]) == [2]`

Si un valor está presente en B, deben ser removidos todos los valores de A.

`array_diff([1,2,2,2,3],[2]) == [1,3]`
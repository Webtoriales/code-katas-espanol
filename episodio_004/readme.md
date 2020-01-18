Link de YouTube: https://youtu.be/k93z7nq-njY
Fecha: 16 dec. 2020.

---

## Calcular bit de paridad

### URL: https://www.codewars.com/kata/5df261342964c80028345a0a

### Puntuación: 7kyu

### calcular-bit-paridad.js

Tienes los parámetros parity y bin.
Parity siempre será 'even' (par) or 'odd' (impar).
Tu tarea es devolver un entero (0 or 1).

Un bit de paridad, o check bit, es un bit agregado a una hilera de bits para asegurarse que el número total de bits-1 en la hilera es par o impar. Los bits de paridad son usados como la forma más simple de detectar errores de código.

Ejemplo:

  Parity: 'even'
  Bin: '0101010'
  Resultado: 1

Ya que hay un número impar de bits-1 (3), necesitas agregar otro 1 a la hilera para obtener un número par de bits-1.

Para más información: https://en.wikipedia.org/wiki/Parity_bit


---


## Vocal ausente

### URL: https://www.codewars.com/kata/56414fdc6488ee99db00002c

### Puntuación: 7kyu

### vocal-ausente.js

Tu trabajo es encontrar el índice de la vocal que falta de una hilera de caracteres.

A tiene un índice de 0,

E tiene un índice de 1,

I tiene un índice de 2,

O tiene un índice de 3,

U tiene un índice de 4.

Ejemplo: "John Doe hs 7 red pples under his bsket" => 0;

Ejemplo: "Bb Smith sent us six neatly arranged range bicycles" => 3;

No tienes que validar el string y cada oración tendrá todas las vocales excepto una. Tampoco te tendrás que preocupar de mayúsculas.

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
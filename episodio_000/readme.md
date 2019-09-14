# Corrige los errores del software de reconocimiento de caracteres

## URL: https://www.codewars.com/kata/577bd026df78c19bca0002c0

## Puntuación: 8kyu

## error-reconocimiento-caracteres.js

Los programas de reconocimiento de caracteres son muy utilizados para digitalizar textos impresos. De esta forma, los textos pueden ser editados, buscados y guardados en una computadora.

Cuando los documentos (especialmente los más antiguos escritos con máquina de escribir) son digitalizados, el software de reconocimiento suele hacer errores.

Nuestro trabajo es corregir los errores en el texto digitalizado. Solo tenendremos que manejar los siguientes errores:

* S es interpretado como 5
* O es interpretado como 0
* I es interpretado como 1

Los casos de prueba contienen números únicamente por error.

---


# Grillo - Saludo Personalizado

## URL: https://www.codewars.com/kata/5772da22b89313a4d50012f7

## Puntuación: 8kyu

## grillo-saludo-personalizado.js

Crea una función que devuelva un saludo personalizado. Esta función toma dos parámetros: nombre y dueño. Usa condicionales para devolver el mensaje apropiado:

**case**                  **return**
name equals owner 	      'Hello boss'
otherwise 	              'Hello guest'


---


# ¡Impares afuera!

## URL: https://www.codewars.com/kata/5d376cdc9bcee7001fcb84c0

## Puntuación: 7kyu

## impares-afuera.js

¡Al sheriff del pueblo no le gustan los números impares y quiere a todas las familias de números impares fuera de la cuidad! En el pueblo, gentíos se pueden formar e individuos son comúnmente mezclados con con otra gente y familias. Sin embargo, nosotros podemos distinguir la familia a la que esos individuos pertenecen por el número de camisetas que usan. Como asistente del sheriff, es nuestro trabajo encontrar todas las familias de números impares y sacarlas de la ciudad.

Desafío: Te han dado una lista de números. Los números se repiten cierta cantidad de veces. Remueve todos los números que se repiten una cantidad de veces impar mientras mantienes todo lo demás igual.

```oddOnesOut([1, 2, 3, 1, 3, 3]) = [1, 1]```

En el ejemplo anterior:

    el número 1 aparece dos veces
    el número 2 aparece una vez
    el número 3 aparece tres veces

2 y 3 aparecen una cantidad impar de veces, entonces son removidos de la lista. El resultado final es: [1,1]

Aquí hay mas ejemplos:

oddOnesOut([1, 1, 2, 2, 3, 3, 3]) = [1, 1, 2, 2]
oddOnesOut([26, 23, 24, 17, 23, 24, 23, 26]) = [26, 24, 24, 26]
oddOnesOut([1, 2, 3]) = []
oddOnesOut([1]) = []

¿Estás listo para el desafío?

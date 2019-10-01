// String.charCodeAt

function findMissingLetter(array)
{
  let resultado;
  // Tener una variable global con todo el alfabeto, arreglo
  const alfMinusc = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  // Iterar sobre el arreglo del alfabeto
  for (let i = 0; i < alfMinusc.length; i++) {
    // Cuando encontremos que array[0] === iteracion actual del alfabeto
    if (array[0] === alfMinusc[i]) {
      // Comparar de uno en uno cada arreglo hasta encontrar una iteracion donde cada elemento sea diferente
      for (let j = 1; j < array.length; j++) {
        if (array[j] !== alfMinusc[i + j]) {
          resultado = alfMinusc[i + j];
          break;
        }
      }
      break;
    }
  }
  const alfMayusc = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  for (let i = 0; i < alfMayusc.length; i++) {
    // Cuando encontremos que array[0] === iteracion actual del alfabeto
    if (array[0] === alfMayusc[i]) {
      // Comparar de uno en uno cada arreglo hasta encontrar una iteracion donde cada elemento sea diferente
      for (let j = 1; j < array.length; j++) {
        console.log(alfMayusc[i + j]);
        if (array[j] !== alfMayusc[i + j]) {
          resultado = alfMayusc[i + j];
          break;
        }
      }
      break;
    }
  }
  return resultado;
}

console.log(findMissingLetter(['a','b','c','d','f']), 'e');
console.log(findMissingLetter(['O','Q','R','S']), 'P');
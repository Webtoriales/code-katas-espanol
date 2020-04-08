function createPhoneNumber(numbers){
  // accediendo a cada posicion del arreglo SIN loop
  return `(${numbers[0]}${numbers[1]}${numbers[2]}) ${numbers[3]}${numbers[4]}${numbers[5]}-${numbers[6]}${numbers[7]}${numbers[8]}${numbers[9]}`
}

function createPhoneNumber(numbers){
  // Array.reduce
  return numbers.reduce((acc, actual, index) => {
    // indice sea 0, ingresar un parentesis al inicio
    if (index === 0) {
      return `(${actual}`;
    }
    // indice sea 2, ingresar un parentesis al final
    if (index === 2) {
      return `${acc}${actual})`;
    }
    // indice sea 3, ingresar un espacio al inicio
    if (index === 3) {
      return `${acc} ${actual}`
    }
    // indice sea 5, ingresar un - al final
    if (index === 5) {
      return `${acc}${actual}-`
    }
    return `${acc}${actual}`
  }, "");
}

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]), "(123) 456-7890");
console.log(createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), "(111) 111-1111");
console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]), "(123) 456-7890");
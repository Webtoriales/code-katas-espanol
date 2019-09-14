function oddOnesOut(array) {
  // Crear un objeto para guardar cantidad
  const obj = {};
  // Iterar sobre el arreglo
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    // Record en el objeto el numero
    if (obj[element]) {
      obj[element] += 1;
    } else {
      obj[element] = 1;
    }
  }
  const resultArray = [];
  // Iterar nuevamente sobre el arreglo
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if (obj[element] % 2 == 0) {
      // Cuando encontremos un valor par, agreguemoslo al arreglo nuevo
      resultArray.push(element);
    }
  }
  // Devolver el arreglo final
  return resultArray;
}

console.log(oddOnesOut([1, 1, 2, 2, 3, 3, 3]), [1, 1, 2, 2]);
console.log(oddOnesOut([26, 23, 24, 17, 23, 24, 23, 26]), [26, 24, 24, 26]);
console.log(oddOnesOut([1, 2, 3]), []);
console.log(oddOnesOut([1]), []);
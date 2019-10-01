function flattenAndSort(array) {
  // Guardar el resultado final en una variable
  const resultado = [];
  // Iterar sobre el primer arreglo
  for (let i = 0; i < array.length; i++) {
    const arregloInterno = array[i];
    // Iterar sobre el arreglo interno
    for (let j = 0; j < arregloInterno.length; j++) {
      // Agregar cada elemento del arreglo interno al resultado final
      const elementoInterno = arregloInterno[j];
      resultado.push(elementoInterno);
    }
  }
  // devolver el resultado final
  resultado.sort((primerElemento, siguienteElemento) => {
    return primerElemento - siguienteElemento;
  })
  return resultado;
}

console.log(flattenAndSort([]), []);
console.log(flattenAndSort([[], [1]]), [1]);
console.log(flattenAndSort([[3, 2, 1], [7, 9, 8], [6, 4, 5]]), [1, 2, 3, 4, 5, 6, 7, 8, 9]);
console.log(flattenAndSort([[1, 3, 5], [100], [2, 4, 6]]), [1, 2, 3, 4, 5, 6, 100]);
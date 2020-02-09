function interleave(...argumentos) {
  const resultado = [];
  const longitud = argumentos.length;
  let arregloMasLargo = argumentos[0];
  for (let i = 0; i < longitud; i++) {
    if (argumentos[i + 1] && argumentos[i + 1].length > arregloMasLargo.length) {
      arregloMasLargo = argumentos[i + 1];
    }
  }
  
  for (let i = 0; i < arregloMasLargo.length; i++) {
    for (let j = 0; j < longitud; j++) {
      const valorAcutal = argumentos[j][i] !== undefined ? argumentos[j][i] : null;
      resultado.push(valorAcutal);
    }
  }
  return resultado;
}


console.log(interleave([1, 2, 0], ["c", "d", "e"]), [1, "c", 2, "d", 3, "e"]);
console.log(interleave([1, 2, 3], [4, 5]), [1, 4, 2, 5, 3, null]);
console.log(interleave([1, 2, 3], [4, 5, 6], [7, 8, 9]), [1, 4, 7, 2, 5, 8, 3, 6, 9]);
console.log(interleave([]), []);
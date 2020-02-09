function countInversions(array){
  if (!array.length) return 0;
  let desordenado = true;
  let inversiones = 0;

  while (desordenado) {
    desordenado = false;
    for (let i = 0; i < array.length; i++) {
      let actual = array[i];
      let siguiente = array [i + 1];
      if (siguiente && actual > siguiente) {
        const temporal = actual;
        array[i] = siguiente;
        array[i + 1] = temporal;
        inversiones++;
        desordenado = true;
      }
    }
  }
  return inversiones;
}

// console.log(countInversions([]), 0);
// console.log(countInversions([1,2,3]), 0);
// console.log(countInversions([2,1,3]), 1);
// console.log(countInversions([6,5,4,3,2,1]), 15);
console.log(countInversions([6,5,4,3,3,3,3,2,1]), 30);
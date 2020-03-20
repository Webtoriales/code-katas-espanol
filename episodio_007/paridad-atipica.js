function findOutlier(integers){
  // ordernar el arreglo basado en si son pares o impares
  const arregloOrdenado = integers.sort((a) => {
    if (a % 2 === 0) {
      return -1
    } else if (a % 2 !== 0) {
      return 1
    }
    return 0;
  });
  
  if (arregloOrdenado[0] % 2 === 0 && arregloOrdenado[1] % 2 === 0) {
    return arregloOrdenado[arregloOrdenado.length -1];
  }
  return arregloOrdenado[0];
}

console.log(findOutlier([0, 1, 2]), 1)
console.log(findOutlier([1, 2, 3]), 2)
console.log(findOutlier([2,6,8,10,3]), 3)
console.log(findOutlier([0,0,3,0,0]), 3)
console.log(findOutlier([1,1,0,1,1]), 0)
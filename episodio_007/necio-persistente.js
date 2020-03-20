function persistence(num) {
  const hilera = num.toString();
  let persistencias = 0;

  if (hilera.length === 1) {
    return persistencias;
  }

  const cantidad = hilera.length;
  let resultado = hilera[0];

  for (let i = 1; i < cantidad; i++) {
    resultado = resultado * hilera[i];
  }

  return persistence(resultado) + 1;
}


// en honor a la idea de bypepe77
function persistence(num) {
  let arreglo = num.toString().split("");
  let resultado = 0;

  while (arreglo.length > 1) {
    resultado++;
    arreglo = arreglo.reduce((anterior, actual) => anterior * actual, 1).toString().split("");
  }

  return resultado;
}

console.log(persistence(39), 3);
console.log(persistence(4), 0);
console.log(persistence(25), 2);
console.log(persistence(999), 4);
function checkParity(parity, bin){
  // un lugar donde guardar el resultado
  let resultado = 0;
  // loopear por el string para obtener cada caracter
  for (let i = 0; i < bin.length; i++) {
    const caracter = bin[i];
    // revisar si el caracter es igual a '1'
    if (caracter === '1') {
      // si es igual a uno, aumentar resultado en 1
      resultado++;
    }
  }
  // comparamos el resultado con parity
  const paridad = resultado % 2 === 0 ? 'even' : 'odd';
  if (parity === paridad) {
    return 0;
  } else {
    return 1;
  }
}

console.log(checkParity('even','101010'), 1);
console.log(checkParity('odd','101010'), 0);
console.log(checkParity('even','101011'), 0);
console.log(checkParity('odd','101011'), 1);
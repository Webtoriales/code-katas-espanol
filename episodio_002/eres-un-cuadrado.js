var isSquare = function(n){
  if (n < 0) return false;
  let resultado;
  // for loop
  for (let i = 0; i <= n; i++) {
    const mult = i * i;
    if (mult === n) {
      // n es un cuadrado perfecto
      resultado = true;
      break;
    } else if (mult > n) {
      // n no es un cuadrado perfecto
      resultado = false;
      break;
    }
  }
  return resultado  
}

isSquare = function(n){
  const raizCuadrada = Math.sqrt(n);
  const restante = raizCuadrada % 1;
  if (restante === 0) {
    return true;
  } else {
    return false;
  }
}

var isSquare = function(n){
 return Math.sqrt(n) % 1 === 0 ? true : false;
}

// Math
console.log(isSquare(-1), false);
console.log(isSquare( 0), true);
console.log(isSquare( 3), false);
console.log(isSquare( 4), true);
console.log(isSquare(25), true);
console.log(isSquare(26), false);

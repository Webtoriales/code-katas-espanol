function solve(s){
  // Necesitamos una estructura que contenga las vocales
  const vocales = {
    a: true,
    e: true,
    i: true,
    o: true,
    u: true,
  };
  // Necesitamos un valor que mantenga registro de la MAYOR cantidad de vocales seguidas (0)
  let cantidadMayor = 0;
  // Necesitar otro valor que mantenga registro de la cantidad de vocales actual
  let cantidadActual = 0;
  
  const arreglo = s.split("");
  // Recorrer el arreglo
  for (let i = 0; i < arreglo.length; i++) {
    const elemento = arreglo[i];
    if (vocales[elemento]) {
      // Si el elemento es una vocal, aumentamos en 1 al resultado actual
      cantidadActual++;
    } else {
       // Si el elemeneto es una consonante, no aumentamos el resultado
       // Verificatmos si la cantidad actual es mayor a la cantidad mayor
      if (cantidadActual > cantidadMayor) {
        cantidadMayor = cantidadActual;
      }
      cantidadActual = 0;
    }
  }
  // devolvemos el valor final
  return cantidadMayor;
}

console.log(solve("codewarriors"),2);
console.log(solve("suoidea"),3);
console.log(solve("ultrarevolutionariees"),3);
console.log(solve("strengthlessnesses"),1);
console.log(solve("cuboideonavicuare"),2);
console.log(solve("chrononhotonthuooaos"),5);
console.log(solve("iiihoovaeaaaoougjyaw"),8);

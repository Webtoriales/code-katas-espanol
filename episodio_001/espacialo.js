function spacify(str) {
  //  separar el string en un arreglo
  const arreglo = str.split("");
  const arregloEspaciado = arreglo.map((caracter, indice) => {
    // a cada posicion del arreglo, le vamos a agregar un espacio
    if (indice !== arreglo.length - 1) {
      return caracter + "\xa0"
    }
    return caracter
  });
  // devolvemos el arreglo
  return arregloEspaciado.join("");
}

console.log(spacify('hello world'),'h e l l o   w o r l d');
console.log(spacify('12345'),'1 2 3 4 5');

console.log('h e l l o   w o r l d' === 'h e l l o   w o r l d')
function correct(string)
{
  // Convertir nuestra hilera de caracteres en un arreglo
  const array = string.split("");
  
  // Iterar sobre nuestro arreglo
  for (let i = 0; i < array.length; i++) {
    let element = array[i];
    // Cuando encontremos un 5, 0, 1 reemplazarlo por el caracter correcto
    if (element == 5) {
      array[i] = "S";
    } else if (element == 0 && element !== " ") {
      array[i] = "O";
    } else if (element == 1) {
      array[i] = "I"
    };
  }
  // volver a unir el arreglo
  const newString = array.join('');
  // devolver el arreglo unido
  return newString;
}

console.log(correct("L0ND0N"),"LONDON");
console.log(correct("DUBL1N"),"DUBLIN");
console.log(correct("51NGAP0RE"),"SINGAPORE");
console.log(correct("BUDAPE5T"),"BUDAPEST");
console.log(correct("PAR15"),"PARIS");
console.log(correct("IF-RUDYARD KIPLING"), 'IF-RUDYARD KIPLING')
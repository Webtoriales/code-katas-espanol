function likes(names) {
  // primera condicion donde el arreglo esta vacio
  if (names.length === 0) {
    return 'no one likes this';
  }

  // segunda condicion: arreglo de longitud 1
  if (names.length === 1) {
    return `${names[0]} likes this`;
  }

  // tercera condicion: arreglo longitud 2
  if (names.length === 2) {
    return `${names[0]} and ${names[1]} like this`;
  }

  // cuarta condicion: arreglo longitud 3
  if (names.length === 3) {
    return `${names[0]}, ${names[1]} and ${names[2]} like this`;
  }

  // cuarta condicion: arreglo longitud 4 o mas
  return `${names[0]}, ${names[1]} and ${names.length -2} others like this`;
}

console.log(likes([]), 'no one likes this');
console.log(likes(['Peter']), 'Peter likes this');
console.log(likes(['Jacob', 'Alex']), 'Jacob and Alex like this');
console.log(likes(['Max', 'John', 'Mark']), 'Max, John and Mark like this');
console.log(likes(['Alex', 'Jacob', 'Mark', 'Max']), 'Alex, Jacob and 2 others like this');
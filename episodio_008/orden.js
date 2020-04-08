function order(words){
  const arregloEntrante = words.split(" ");
  console.log(arregloEntrante);

  let arregloResultante = [...arregloEntrante];
  
  arregloEntrante.forEach(palabra => {
    for (let i = 0; i < palabra.length; i++) {
      const letra = palabra[i];
      if (!isNaN(letra)) {
        arregloResultante[letra - 1] = palabra;
        // console.log(letra -1)
      }
    }
  });
  return arregloResultante.join(" ");
  // creditos a abuelitoVIP
}

console.log(order("is2 Thi1s T4est 3a"), "Thi1s is2 3a T4est")
console.log(order("4of Fo1r pe6ople g3ood th5e the2"), "Fo1r the2 g3ood 4of th5e pe6ople")
// console.log(order(""), "")

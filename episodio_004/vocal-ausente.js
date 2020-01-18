function absentVowel(x){
  const banco = {
    a: 1,
    e: 2,
    i: 3,
    o: 4,
    u: 5
  };
  
  let resultado = "a e i o u";
  
  for (let i = 0; i < x.length; i++) {
    const valorActual = x[i];
    if (banco[valorActual]) {
      resultado = resultado.replace(valorActual, "");
    } 
  }

  return banco[resultado.trim()] - 1;
}

console.log(absentVowel("John Doe hs seve/n red pples under his bsket"), 0);
console.log(absentVowel("Bb Smith sent us six neatly arranged range bicycles"), 3);
function digital_root(n) {
  const numberAsString = "" + n;
  let result = 0;
  for (let i = 0; i < numberAsString.length; i++) {
    result += +numberAsString[i];
  }
  const resultLength = ("" + result).length;
  return resultLength > 1 ? digital_root(result) : result;
}

console.log( digital_root(16), 7 )
console.log( digital_root(456), 6 )
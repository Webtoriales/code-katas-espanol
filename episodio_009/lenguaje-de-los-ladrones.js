function robberEncode(sentence) {
  const consonants = 'BCDFGHJKLMNPQRSTVWXYZ'
  const result = [];

  for (let i = 0; i < sentence.length; i++) {
    let element = sentence[i];

    const upperCaseMatch = consonants.includes(element)
    if (upperCaseMatch) {
      element = `${element}O${element}`
    }

    const lowerCaseMatch = consonants.toLowerCase().includes(element)
    if (lowerCaseMatch) {
      element = `${element}o${element}`
    }

    result.push(element)
  }
  return result.join("")
}

console.log(robberEncode("hello world"), "hohelollolo wowororloldod");
// console.log(robberEncode("coding is fun"), "cocododinongog isos fofunon");
// console.log(robberEncode("follow the white rabbit"), "fofolollolowow tothohe wowhohitote rorabobbobitot");
// console.log(robberEncode("S.O.S"), "SOS.O.SOS");
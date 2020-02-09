function lightBulbs(lights, n) {
  let temporal = [...lights];
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < lights.length; j++) {
      const actual = lights[j];
      if (actual === 1) {
        if (j === lights.length -1) {
          temporal[0] = temporal[0] ? 0 : 1;
        } else {
          temporal[j + 1] = temporal[j + 1] ? 0 : 1;
        }
      }
    }
    lights = [...temporal];
  }
  return temporal;
}

 
console.log(lightBulbs([0, 1, 1, 0, 1, 1],2), [1, 0, 1, 1, 0, 1])
// console.log(lightBulbs([0, 0, 1, 1, 1],5), [1, 1, 1, 0, 1])
// console.log(lightBulbs([1, 0, 1, 1, 0, 1, 1, 0, 1],10), [0, 1, 1, 0, 1, 1, 0, 1, 1])
// console.log(lightBulbs([1, 1, 0, 0, 0, 1, 1, 1, 1, 1],20), [1, 0, 0, 0, 0, 0, 1, 1, 0, 1])
// console.log(lightBulbs([1, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 1, 0, 0, 0, 1],50),[0, 0, 1, 0, 0, 1, 1, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0])
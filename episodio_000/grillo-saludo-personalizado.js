function greet (name, owner) {
  return name === owner ? 'Hello boss' : 'Hello guest';
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
}


console.log(greet('Daniel', 'Daniel'), 'Hello boss')
console.log(greet('Greg', 'Daniel'), 'Hello guest')
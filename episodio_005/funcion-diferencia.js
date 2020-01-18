function array_diff(a, b) {
  if (!a.length || !b.length) return a;
  const result = [];
  for (let i = 0; i < a.length; i++) {
    let match = false;
    const valorA = a[i];
    for (let j = 0; j < b.length; j++) {
      const valorB = b[j];
      if (valorA === valorB) {
        match = true;
      };
    }
    if (!match) {
      result.push(valorA);
    }
  }
  return result;
}

function array_diff(a, b) {
  if (!a.length || !b.length) return a;

  const bank = b.reduce((acc, valorB) => {
    acc[valorB] = true;
    return acc;
  }, {});

  return a.reduce((acc, valorA) => {
    if (bank[valorA]) {
      return acc;
    };
    acc.push(valorA);
    return acc;
  }, []);
}

console.log(array_diff([], [4,5]), []);
console.log(array_diff([3,4], [3]), [4]);
console.log(array_diff([1,8,2], []), [1,8,2]);
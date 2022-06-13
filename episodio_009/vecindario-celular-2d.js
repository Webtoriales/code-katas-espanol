function getNeighbourhood(type, matrix, coordinates) {
  if (coordinates[0] < 0 ||
      coordinates[1] < 0 ||
      coordinates[0] > matrix.length - 1 ||
      coordinates[1] > matrix[0].length - 1 ||
      matrix.length == 0 ||
      matrix[0].length == 0)
  {
    return []
  }
  // [2, 0]

  const result = []
  // revisar si type es moore o von_neumann
  if (type === 'von_neumann' || type === 'moore') {
    // revisar norte
    let outOfBounds = coordinates[0] == 0
    if (!outOfBounds) {
      let verticalPosition = coordinates[0] - 1
      let horizontalPosition = coordinates[1]
      result.push(matrix[verticalPosition][horizontalPosition])
    }
    // revisar este
    outOfBounds = coordinates[1] == matrix[0].length - 1
    if (!outOfBounds) {
      verticalPosition = coordinates[0]
      horizontalPosition = coordinates[1] + 1
      result.push(matrix[verticalPosition][horizontalPosition])
    }
    // revisar sur
    outOfBounds = coordinates[0] == matrix.length - 1
    if (!outOfBounds) {
      verticalPosition = coordinates[0] + 1
      horizontalPosition = coordinates[1]
      result.push(matrix[verticalPosition][horizontalPosition])
    }
    // revisar oeste
    outOfBounds = coordinates[1] == 0
    if (!outOfBounds) {
      verticalPosition = coordinates[0]
      horizontalPosition = coordinates[1] - 1
      result.push(matrix[verticalPosition][horizontalPosition])
    }
  }

  if (type === 'moore') {
    // revisar noroeste
    outOfBounds = coordinates[0] == 0 || coordinates[1] == 0
    if (!outOfBounds) {
      verticalPosition = coordinates[0] - 1
      horizontalPosition = coordinates[1] - 1
      result.push(matrix[verticalPosition][horizontalPosition])
    }

    // revisar noreste
    outOfBounds = coordinates[0] == 0 || coordinates[1] == matrix[0].length - 1
    if (!outOfBounds) {
      verticalPosition = coordinates[0] - 1
      horizontalPosition = coordinates[1] + 1
      result.push(matrix[verticalPosition][horizontalPosition])
    }

    // revisar suroeste
    outOfBounds = coordinates[0] == matrix.length - 1 || coordinates[1] == 0
    if (!outOfBounds) {
      verticalPosition = coordinates[0] + 1
      horizontalPosition = coordinates[1] - 1
      result.push(matrix[verticalPosition][horizontalPosition])
    }

    // revisar sureste
    outOfBounds = coordinates[0] == matrix.length - 1 || coordinates[1] == matrix[0].length - 1
    if (!outOfBounds) {
      verticalPosition = coordinates[0] + 1
      horizontalPosition = coordinates[1] + 1
      result.push(matrix[verticalPosition][horizontalPosition])
    }
  }
  return result
}

//    N
// O     E
//    S
// 


// const matrix = [
//   [0, 1, 2],
//   [3, 4, 5],
//   [6, 7, 8],
// ];

const matrix = [
  [6,9],
  [7,2],
  [7,3],
  [7,8],
  [0,10]
]

// console.log(getNeighbourhood('moore', matrix, [10,2], [121,44,73,54,16,90,50,19]));
// console.log(getNeighbourhood('moore', matrix, [0, 0], [1, 3, 4]));
// console.log(getNeighbourhood('moore', matrix, [2, 2], [4, 5, 7]));
// console.log(getNeighbourhood('moore', matrix, [-1, -1], []));
// console.log(getNeighbourhood('moore', matrix, [3, 3], []));
// console.log(getNeighbourhood('moore', [[]], [0, 0], []));

console.log(getNeighbourhood('von_neumann', matrix, [2, 0], [7,3,7]))
// console.log(getNeighbourhood('von_neumann', matrix, [0, 0], [1, 3]))
// console.log(getNeighbourhood('von_neumann', matrix, [2, 2], [5, 7]))
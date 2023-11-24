export function createSquareSurrounding ({ newBoard, filaIndex, columnIndex, gridIndex }) {
  const squaresSurrounding = []

  for (let x = 0; x < 9; x++) {
    for (let z = 0; z < 9; z++) {
      if (x === filaIndex && squaresSurrounding.includes(newBoard[x][z]) === false) {
        squaresSurrounding.push(newBoard[x][z])
      }
      if (z === columnIndex && squaresSurrounding.includes(newBoard[x][z]) === false) {
        squaresSurrounding.push(newBoard[x][z])
      }
      if (newBoard[x][z].position.indexGrid === gridIndex && squaresSurrounding.includes(newBoard[x][z]) === false) {
        squaresSurrounding.push(newBoard[x][z])
      }
    }
  }
  return squaresSurrounding
}

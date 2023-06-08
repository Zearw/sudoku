export const paintSquare = (fila, columna) => {
  const currentSelect = document.getElementById([fila, columna])
  currentSelect.className += ' selected'
}

export const unpaintSquare = (fila, columna) => {
  const previusSelect = document.getElementById([fila, columna])
  previusSelect.classList.remove('selected')
}

export const paintAllSquares = (newBoard, current) => {
  const { fila, columna } = current
  const filaIndex = newBoard[fila][columna].position.indexFila
  const columnIndex = newBoard[fila][columna].position.indexColumna
  const gridIndex = newBoard[fila][columna].position.indexGrid

  for (let x = 0; x < 9; x++) {
    for (let z = 0; z < 9; z++) {
      if (newBoard[x][z].position.indexFila === filaIndex) {
        paintSquare(x, z)
      }
      if (newBoard[x][z].position.indexColumna === columnIndex) {
        paintSquare(x, z)
      }
      if (newBoard[x][z].position.indexGrid === gridIndex) {
        paintSquare(x, z)
      }
    }
  }
}

export const unpaintAllSquare = (newBoard, previusSelected) => {
  const { fila, columna } = previusSelected
  const filaIndex = newBoard[fila][columna].position.indexFila
  const columnIndex = newBoard[fila][columna].position.indexColumna
  const gridIndex = newBoard[fila][columna].position.indexGrid

  for (let x = 0; x < 9; x++) {
    for (let z = 0; z < 9; z++) {
      if (newBoard[x][z].position.indexFila === filaIndex) {
        unpaintSquare(x, z)
      }
      if (newBoard[x][z].position.indexColumna === columnIndex) {
        unpaintSquare(x, z)
      }
      if (newBoard[x][z].position.indexGrid === gridIndex) {
        unpaintSquare(x, z)
      }
    }
  }
}

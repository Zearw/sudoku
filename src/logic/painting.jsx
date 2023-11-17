export const paintSquare = (fila, columna, styleClass) => {
  const currentSelect = document.getElementById([fila, columna])
  currentSelect.className += styleClass
}

export const unpaintSquare = (fila, columna, styleClass) => {
  const previusSelect = document.getElementById([fila, columna])
  previusSelect.classList.remove(styleClass)
}

// Pinta los cuadrados que estan en la misma fila, columna y grid que el cuadrado seleccionado
export const paintSquares = (newBoard, square, whatToDo) => {
  const { fila, columna } = square
  const filaIndex = newBoard[fila][columna].position.indexFila
  const columnIndex = newBoard[fila][columna].position.indexColumna
  const gridIndex = newBoard[fila][columna].position.indexGrid
  if (whatToDo === 'paint') {
    for (let x = 0; x < 9; x++) {
      for (let z = 0; z < 9; z++) {
        if (newBoard[x][z].position.indexFila === filaIndex) {
          paintSquare(x, z, ' selected')
        }
        if (newBoard[x][z].position.indexColumna === columnIndex) {
          paintSquare(x, z, ' selected')
        }
        if (newBoard[x][z].position.indexGrid === gridIndex) {
          paintSquare(x, z, ' selected')
        }
      }
    }
  } else {
    for (let x = 0; x < 9; x++) {
      for (let z = 0; z < 9; z++) {
        if (newBoard[x][z].position.indexFila === filaIndex) {
          unpaintSquare(x, z, 'selected')
        }
        if (newBoard[x][z].position.indexColumna === columnIndex) {
          unpaintSquare(x, z, 'selected')
        }
        if (newBoard[x][z].position.indexGrid === gridIndex) {
          unpaintSquare(x, z, 'selected')
        }
      }
    }
  }
}

export function formatting ({ squareSelected, newBoard }) {
  const { fila, columna } = squareSelected

  const filaIndex = newBoard[fila][columna].position.indexFila
  const columnIndex = newBoard[fila][columna].position.indexColumna
  const gridIndex = newBoard[fila][columna].position.indexGrid
  const newValue = newBoard[fila][columna].value
  const currentSquare = newBoard[fila][columna]

  return { filaIndex, columnIndex, gridIndex, newValue, currentSquare }
}

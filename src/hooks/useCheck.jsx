import { paintSquare, unpaintSquare } from '../service/painting'

export function useCheck (newBoard, squareSelected) {
  const { fila, columna } = squareSelected
  const newValue = newBoard[fila][columna].value
  const filaIndex = newBoard[fila][columna].position.indexFila
  const columnIndex = newBoard[fila][columna].position.indexColumna
  const gridIndex = newBoard[fila][columna].position.indexGrid

  const squaresSurrounding = []
  let auxValueExist = false

  for (let x = 0; x < 9; x++) {
    for (let z = 0; z < 9; z++) {
      if (newBoard[x][z].position.indexFila === filaIndex) {
        squaresSurrounding.push(newBoard[x][z])
      }
      if (newBoard[x][z].position.indexColumna === columnIndex) {
        squaresSurrounding.push(newBoard[x][z])
      }
      if (newBoard[x][z].position.indexGrid === gridIndex) {
        squaresSurrounding.push(newBoard[x][z])
      }
    }
  }

  for (let i = 0; i < squaresSurrounding.length; i++) {
    if (squaresSurrounding[i].value === newValue) {
      if (squaresSurrounding[i] !== newBoard[fila][columna]) {
        paintSquare(squaresSurrounding[i].position.indexFila, squaresSurrounding[i].position.indexColumna, ' check_value')
        auxValueExist = true
      } else if (auxValueExist === true) {
        paintSquare(squareSelected.fila, squareSelected.columna, ' check_value')
      }
    } else {
      unpaintSquare(squaresSurrounding[i].position.indexFila, squaresSurrounding[i].position.indexColumna, 'check_value')
    }
  }
}

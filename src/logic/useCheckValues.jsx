import { usePaintValues } from '../hooks/usePaintValues'

export function useCheckValues () {
  const { assignValues } = usePaintValues()

  const pushValueInRed = ({ newBoard, squareSelected }) => {
    const { fila, columna } = squareSelected
    const newValue = newBoard[fila][columna].value
    const filaIndex = newBoard[fila][columna].position.indexFila
    const columnIndex = newBoard[fila][columna].position.indexColumna
    const gridIndex = newBoard[fila][columna].position.indexGrid

    const squaresSurrounding = []
    let auxValueExist = false
    let valueAdded = true

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

    for (let i = 0; i < squaresSurrounding.length; i++) {
      if (squaresSurrounding[i].value === newValue) {
        if (squaresSurrounding[i] !== newBoard[fila][columna]) {
          const aux = squaresSurrounding[i]
          assignValues(aux)
          auxValueExist = true
        }

        if (auxValueExist === true && valueAdded === true) {
          const aux = newBoard[fila][columna]
          assignValues(aux)
          valueAdded = false
        }
      }
    }
  }

  return { pushValueInRed }
}

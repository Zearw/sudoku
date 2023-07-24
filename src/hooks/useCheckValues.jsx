import { unpaintSquare } from '../logic/painting'
import { usePaintValues } from './usePaintValues'

export function useCheckValues () {
  const { assignValues, valuesInRed } = usePaintValues()

  const pushValueInRed = ({ newBoard, squareSelected }) => {
    const { fila, columna } = squareSelected
    const newValue = newBoard[fila][columna].value
    const filaIndex = newBoard[fila][columna].position.indexFila
    const columnIndex = newBoard[fila][columna].position.indexColumna
    const gridIndex = newBoard[fila][columna].position.indexGrid

    const squaresSurrounding = []
    const auxValuesRed = []
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
          auxValuesRed.push(squaresSurrounding[i])
          auxValueExist = true
        }

        if (auxValueExist === true && valueAdded === true) {
          auxValuesRed.unshift(newBoard[fila][columna])
          valueAdded = false
        }
      }
    }
    if (auxValuesRed.length > 0) {
      assignValues(auxValuesRed)
    }
  }

  const checkValueInput = ({ newBoard, squareSelected }) => {
    const { fila, columna } = squareSelected
    const newValue = newBoard[fila][columna].value
    const filaIndex = newBoard[fila][columna].position.indexFila
    const columnIndex = newBoard[fila][columna].position.indexColumna
    const gridIndex = newBoard[fila][columna].position.indexGrid

    const squaresSurrounding = []
    let auxValuesRed = []
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
          auxValuesRed.push(squaresSurrounding[i])
          auxValueExist = true
        }

        if (auxValueExist === true && valueAdded === true) {
          auxValuesRed.unshift(newBoard[fila][columna])
          valueAdded = false
        }
      }
    }
    // comprobar si el square select esta en valuesInRed
    for (let i = 0; i < valuesInRed.length; i++) {
      if (valuesInRed[i].includes(newBoard[fila][columna])) {
        if (valuesInRed[i][0].value === valuesInRed[i][1].value) return
        else {
          // despintar
          valuesInRed.forEach((value) => {
            value.forEach((square) => {
              unpaintSquare(square.position.indexFila, square.position.indexColumna, 'check_value')
            }
            )
          })
          // filtrar
          const aux = valuesInRed.filter(value => value !== valuesInRed[i])
          auxValuesRed = [...aux].concat([auxValuesRed])
        }
      }
    }

    assignValues(auxValuesRed)
  }
  return { pushValueInRed, checkValueInput }
}

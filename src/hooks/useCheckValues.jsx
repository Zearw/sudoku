import { unpaintSquare } from '../logic/painting'
import { createSquareSurrounding } from '../service/createSquareSurrounding'
import { formatting } from '../service/formate'
import { usePaintValues } from './usePaintValues'

export function useCheckValues () {
  const { assignValues, valuesInRed } = usePaintValues()

  const pushValueInRed = ({ newBoard, squareSelected }) => {
    const { filaIndex, columnIndex, gridIndex, newValue, currentSquare } = formatting({ squareSelected, newBoard })

    const squaresSurrounding = createSquareSurrounding({ newBoard, filaIndex, columnIndex, gridIndex })
    const auxValuesRed = []
    let auxValueExist = false
    let valueAdded = true

    for (let i = 0; i < squaresSurrounding.length; i++) {
      if (squaresSurrounding[i].value === newValue) {
        if (squaresSurrounding[i] !== currentSquare) {
          auxValuesRed.push(squaresSurrounding[i])
          auxValueExist = true
        }

        if (auxValueExist === true && valueAdded === true) {
          auxValuesRed.unshift(currentSquare)
          valueAdded = false
        }
      }
    }
    if (auxValuesRed.length > 0) {
      assignValues(auxValuesRed)
    }
  }

  const checkValueInput = ({ newBoard, squareSelected }) => {
    const { filaIndex, columnIndex, gridIndex, newValue, currentSquare } = formatting({ squareSelected, newBoard })
    const squaresSurrounding = createSquareSurrounding({ newBoard, filaIndex, columnIndex, gridIndex })
    let auxValuesRed = []
    let auxValueExist = false
    let valueAdded = true

    for (let i = 0; i < squaresSurrounding.length; i++) {
      if (squaresSurrounding[i].value === newValue) {
        if (squaresSurrounding[i] !== currentSquare) {
          auxValuesRed.push(squaresSurrounding[i])
          auxValueExist = true
        }

        if (auxValueExist === true && valueAdded === true) {
          auxValuesRed.unshift(currentSquare)
          valueAdded = false
        }
      }
    }
    // comprobar si el square select esta en valuesInRed
    for (let i = 0; i < valuesInRed.length; i++) {
      if (valuesInRed[i].includes(currentSquare)) {
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

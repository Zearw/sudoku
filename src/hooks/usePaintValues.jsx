import { useEffect, useState } from 'react'
import { paintSquare, unpaintSquare } from '../logic/painting'

export function usePaintValues () {
  const [valuesInRed, setValuesInRed] = useState([])

  const assignValues = (value) => {
    console.log(value)
    console.log(valuesInRed)
    let newValueRed = []

    if (valuesInRed.length === 0 || value.length === valuesInRed.length) {
      console.log('entre al primero valueRed lenght igual a 0')
      if (value.length === 0) {
        newValueRed = []
      } else if (valuesInRed.length === 0) {
        newValueRed = [value]
      } else {
        newValueRed = value
      }
    } else if (value.length > valuesInRed.length) {
      console.log('entre al segundo valuesInRed lenght menor a value')
      newValueRed = [...valuesInRed].concat([value])
    } else if (value.length < valuesInRed.length && value.length !== 0) {
      console.log('entre al tercero []')
      newValueRed = [value]
    }
    const auxNewValueRed = newValueRed.filter(value => value.length > 0)
    setValuesInRed(auxNewValueRed)
  }

  const resetValuesinRed = () => {
    for (let x = 0; x < 9; x++) {
      for (let z = 0; z < 9; z++) {
        unpaintSquare(x, z, 'check_value')
      }
    }
    const aux = []
    setValuesInRed(aux)
  }

  useEffect(() => {
    console.log(valuesInRed)
    if (valuesInRed.length > 0) {
      for (let i = 0; i < valuesInRed.length; i++) {
        valuesInRed.forEach((value) => {
          value.forEach((square) => {
            paintSquare(square.position.indexFila, square.position.indexColumna, ' check_value')
          }
          )
        })
      }
    }
  }, [valuesInRed])

  return { assignValues, valuesInRed, resetValuesinRed }
}

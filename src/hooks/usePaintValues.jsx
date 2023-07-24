import { useEffect, useState } from 'react'
import { paintSquare, unpaintSquare } from '../logic/painting'

export function usePaintValues () {
  const [valuesInRed, setValuesInRed] = useState([])

  const assignValues = (value) => {
    console.log(value)
    console.log(valuesInRed)
    if (valuesInRed.length === 0 || value.length === valuesInRed.length) {
      console.log('entre al primero valueRed lenght igual a 0')
      if (valuesInRed.length === 0) {
        const newValueRed = [value]
        setValuesInRed(newValueRed)
      } else {
        const newValueRed = value
        setValuesInRed(newValueRed)
      }
    } else if (value.length > valuesInRed.length) {
      console.log('entre al segundo valuesInRed lenght menor a value')
      const newValueRed = [...valuesInRed].concat([value])
      setValuesInRed(newValueRed)
    } else if (value.length < valuesInRed.length && value.length !== 0) {
      console.log('entre al tercero []')
      const newValueRed = value
      setValuesInRed([newValueRed])
    }
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
    if (valuesInRed.length > 0) { // hay que poner una condicion si el valueRed es igual a []
      valuesInRed.forEach((value) => {
        value.forEach((square) => {
          paintSquare(square.position.indexFila, square.position.indexColumna, ' check_value')
        }
        )
      })
    }
  }, [valuesInRed])

  return { assignValues, valuesInRed, resetValuesinRed }
}

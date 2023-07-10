import { useEffect, useState } from 'react'
import { paintSquare } from '../logic/painting'

export function usePaintValues () {
  const [valuesInRed, setValuesInRed] = useState([])

  const assignValues = (value) => {
    if (valuesInRed === undefined) {
      const newValueRed = value
      setValuesInRed(newValueRed)
    } else {
      const newValueRed = [...valuesInRed, value]
      setValuesInRed(newValueRed)
    }
  }

  useEffect(() => {
    console.log(valuesInRed)
    if (valuesInRed !== undefined) {
      valuesInRed.forEach((value) => {
        console.log(value)
        paintSquare(value.position.indexFila, value.position.indexColumna, ' check_value')
      })
    }
  }, [valuesInRed])

  return { assignValues }
}

import { useEffect, useState } from 'react'
import { paintSquare } from '../logic/painting'

export function usePaintValues () {
  const [valuesInRed, setValuesInRed] = useState(undefined)

  const assignValues = (value) => {
    if (valuesInRed === undefined) {
      const newValueRed = value
      setValuesInRed(newValueRed)
    } else {
      const newValueRed = [...valuesInRed].concat(value)
      setValuesInRed(newValueRed)
    }
  }

  useEffect(() => {
    if (valuesInRed !== undefined) {
      valuesInRed.forEach((value) => {
        paintSquare(value.position.indexFila, value.position.indexColumna, ' check_value')
      })
    }
  }, [valuesInRed])

  return { assignValues }
}

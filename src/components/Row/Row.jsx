import { Square } from '../Square/Square'

export function Row ({ fila }) {
  return (
    fila.map((columna, indexColumna) => {
      return (
        <Square
          key={indexColumna}
          columna={columna}
          columnaIndex={indexColumna}
        />
      )
    })
  )
}

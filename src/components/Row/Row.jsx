import { Square } from '../Square/Square'

export function Row ({ fila, indexFila, updateBoard }) {
  return (
    fila.map((columna, indexColumna) => {
      return (
        <Square
          key={indexColumna}
          indexFila={indexFila}
          columna={columna}
          columnaIndex={indexColumna}
          updateBoard={updateBoard}
        />
      )
    })
  )
}

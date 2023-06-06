import { useContext } from 'react'
import BoardContext from '../../context/BoardContext'

export function Square ({ indexFila, columna, columnaIndex }) {
  const { updateBoard } = useContext(BoardContext)
  const handleClick = () => {
    updateBoard(indexFila, columnaIndex)
  }
  return (
    <div key={columnaIndex} className={columna.blocked ? `${columna.border} blocked_number` : columna.border} onClick={handleClick} id={[`${indexFila},${columnaIndex}`]}>
      {columna.value}
    </div>
  )
}

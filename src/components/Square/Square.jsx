import { useContext } from 'react'
import BoardContext from '../../context/BoardContext'

export function Square ({ columna, columnaIndex }) {
  const { updateBoard } = useContext(BoardContext)
  const handleClick = () => {
    updateBoard(columna.position.indexFila, columna.position.indexColumna)
  }
  return (
    <div key={columnaIndex} className={columna.blocked ? `${columna.border} blocked_number` : columna.border} onClick={handleClick} id={[`${columna.position.indexFila},${columna.position.indexColumna}`]}>
      {columna.value}
    </div>
  )
}

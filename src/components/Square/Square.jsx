import { useContext } from 'react'
import BoardContext from '../../context/BoardContext'

export function Square ({ columna, columnaIndex }) {
  const { updateBoard, squareSelected, updateValue } = useContext(BoardContext)

  const handleClick = () => {
    updateBoard(columna.position.indexFila, columna.position.indexColumna)
  }

  const handleKeyPressed = (e) => {
    const value = parseInt(e.key)
    updateValue({ value, squareSelected })
  }

  return (
    <div key={columnaIndex} className={columna.blocked ? `${columna.border} blocked_number` : columna.border} onClick={handleClick} id={[`${columna.position.indexFila},${columna.position.indexColumna}`]} onKeyDown={handleKeyPressed} tabIndex='0'>
      {columna.value}
    </div>
  )
}

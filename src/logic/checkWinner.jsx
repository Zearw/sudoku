import { useContext } from 'react'
import { paintSquare, unpaintSquare } from './painting'
import BoardContext from '../context/BoardContext'

export function checkWinner (newBoard, solution) {
  const { setWinner } = useContext(BoardContext)
  const 
  for (let fila = 0; fila < 9; fila++) {
    for (let columna = 0; columna < 9; columna++) {
      if (newBoard[fila][columna].value === null) return
      if (newBoard[fila][columna].value !== solution[fila][columna]) {
        paintSquare(fila, columna, ' check_value')
      } else {
        unpaintSquare(fila, columna, 'check_value')
      }
    }
  }
}

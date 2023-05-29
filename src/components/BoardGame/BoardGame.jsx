import { useBoard } from '../../hooks/useBoard'
import { Row } from '../Row/Row'

export function BoardGame () {
  const { boardGame, setBoardGame } = useBoard()

  const updateBoard = (fila, columna) => {
    const newBoard = [...boardGame]
    if (newBoard[fila][columna].value === null || newBoard[fila][columna].value === 9) {
      newBoard[fila][columna].value = 1
    } else {
      newBoard[fila][columna].value += 1
    }
    setBoardGame(newBoard)
  }
  return (
    <section className='game'>
      {boardGame && boardGame.map((fila, indexFila) => {
        return (
          <Row
            key={indexFila}
            indexFila={indexFila}
            fila={fila}
            updateBoard={updateBoard}
          />
        )
      })}
    </section>
  )
}

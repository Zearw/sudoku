import { useContext } from 'react'
import BoardContext from '../../context/BoardContext'
import { checkWinner } from '../../logic/checkWinner'

// Parte de abajo del tablero, contiene los botones de reset, check game y la dificultad
export function SummaryGame () {
  const { resetGame, boardGame, solution, difficulty } = useContext(BoardContext)

  const handleClick = () => {
    resetGame()
  }

  const handleCheckSolution = () => {
    const newBoard = [...boardGame]
    checkWinner(newBoard, solution)
  }

  return (
    <section>
      <div>
        <p>Difficulty: {difficulty}</p>
        <button onClick={handleClick}> Reset Game </button>
        <button onClick={handleCheckSolution}> Check Game</button>
      </div>
    </section>
  )
}

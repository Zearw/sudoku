import { useContext } from 'react'
import { useBoard } from '../../hooks/useBoard'
import BoardContext from '../../context/BoardContext'
import { checkWinner } from '../../logic/checkWinner'

export function SummaryGame () {
  const { resetGame, boardGame, solution } = useContext(BoardContext)
  const { difficulty } = useBoard()

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

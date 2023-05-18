import { useEffect, useState } from 'react'
import { getBoard } from '../service/board'

export function useBoard () {
  const [boardGame, setBoardGame] = useState()
  const [difficulty, setDifficulty] = useState('')
  const [solution, setSolution] = useState()
  const [message, setMessage] = useState('')

  const refreshBoard = () => {
    getBoard().then(board => configStates(board))
  }

  const configStates = (board) => {
    if (board !== undefined) {
      if (board.newboard.grids[0].value) {
        setBoardGame(board.newboard.grids[0].value)
      }
      if (board.newboard.grids[0].solution) {
        setSolution(board.newboard.grids[0].solution)
      }
      if (board.newboard.grids[0].difficulty) {
        setDifficulty(board.newboard.grids[0].difficulty)
      }
      if (board.newboard.message) {
        setMessage(board.newboard.message)
      }
    }
  }

  useEffect(refreshBoard, [])
  console.log(boardGame)
  console.log(difficulty)
  console.log(solution)
  console.log(message)

  return { boardGame, refreshBoard }
}

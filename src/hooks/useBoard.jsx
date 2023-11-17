import { useEffect, useState } from 'react'
import { getBoard } from '../service/board'
import { boardPartitions } from '../logic/boardPartitions'

export function useBoard () {
  const [boardGame, setBoardGame] = useState()
  const [difficulty, setDifficulty] = useState('')
  const [solution, setSolution] = useState()

  // Reseteo el tablero
  const refreshBoard = () => {
    getBoard().then(board => configStates(board))
  }

  // Seteo el tablero traido de la API
  const configStates = (board) => {
    if (board) {
      if (board.newboard.grids[0].value) {
        const rawBoard = board.newboard.grids[0].value
        const processBoard = boardPartitions(rawBoard)
        setBoardGame(processBoard.rawBoard)
      }
      if (board.newboard.grids[0].solution) {
        setSolution(board.newboard.grids[0].solution)
      }
      if (board.newboard.grids[0].difficulty) {
        setDifficulty(board.newboard.grids[0].difficulty)
      }
    }
  }

  useEffect(refreshBoard, [])

  return { boardGame, refreshBoard, setBoardGame, difficulty, solution }
}

import { useEffect, useState } from 'react'
import { getBoard } from '../service/board'
import { boardPartitions } from '../service/boardPartitions'
import { boardBigPartitions } from '../service/boardBigPartitions'

export function useBoard () {
  const [boardGame, setBoardGame] = useState()
  const [difficulty, setDifficulty] = useState('')
  const [solution, setSolution] = useState()
  const [message, setMessage] = useState('')

  const refreshBoard = () => {
    getBoard().then(board => configStates(board))
  }

  const configStates = (board) => {
    if (board) {
      if (board.newboard.grids[0].value) {
        const rawBoard = board.newboard.grids[0].value
        const processBoard = boardPartitions(rawBoard)
        const ninePartitionBoard = boardBigPartitions(rawBoard)
        setBoardGame(processBoard.rawBoard)
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

  return { boardGame, refreshBoard, setBoardGame }
}

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
    if (board) {
      if (board.newboard.grids[0].value) {
        const aux = board.newboard.grids[0].value
        for (let fila = 0; fila < aux.length; fila++) {
          for (let columna = 0; columna < aux[fila].length; columna++) {
            if (aux[fila][columna] === 0) {
              aux[fila][columna] = { value: null, blocked: false }
            } else {
              aux[fila][columna] = { value: aux[fila][columna], blocked: true }
            }
          }
        }
        setBoardGame(aux)
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

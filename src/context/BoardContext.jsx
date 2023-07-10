import { createContext, useState } from 'react'
import { useBoard } from '../hooks/useBoard'
import { paintSquares } from '../logic/painting'
import { useCheckValues } from '../logic/useCheckValues'

const BoardContext = createContext([])

export function BoardProvider ({ children }) {
  const [squareSelected, setSquareSelected] = useState(null)
  const [previusSelected, setPreviusSelected] = useState(null)
  const [winner, setWinner] = useState(false)
  const { boardGame, setBoardGame, refreshBoard, solution } = useBoard()
  const { pushValueInRed } = useCheckValues()

  const validNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

  const updateBoard = (fila, columna) => {
    const newBoard = [...boardGame]
    const current = { fila, columna }
    if (squareSelected === null) {
      setSquareSelected(current)
      setPreviusSelected(current)
      paintSquares(newBoard, current, 'paint')
    } else if (squareSelected !== current) {
      paintSquares(newBoard, previusSelected)
      setSquareSelected(current)
      paintSquares(newBoard, current, 'paint')
      setPreviusSelected(current)
    }
  }

  const updateValue = ({ value, squareSelected }) => {
    if (validNumbers.includes(value)) {
      const newValue = value
      const newBoard = [...boardGame]
      newBoard[squareSelected.fila][squareSelected.columna].value = newValue
      pushValueInRed({ newBoard, squareSelected })
      paintSquares(newBoard, squareSelected)

      setPreviusSelected(null)
      setBoardGame(newBoard)
      setSquareSelected(null)
    }
  }

  const resetGame = () => {
    refreshBoard()
  }

  const data = {
    updateBoard,
    boardGame,
    updateValue,
    squareSelected,
    validNumbers,
    resetGame,
    solution,
    setWinner
  }

  return (
    <BoardContext.Provider value={data}>
      {children}
    </BoardContext.Provider>
  )
}

export default BoardContext

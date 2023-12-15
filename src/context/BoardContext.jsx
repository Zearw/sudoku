import { createContext, useState } from 'react'
import { useBoard } from '../hooks/useBoard'
import { paintSquares } from '../logic/painting'
import { useCheckValues } from '../hooks/useCheckValues'
import { usePaintValues } from '../hooks/usePaintValues'

const BoardContext = createContext([])

export function BoardProvider ({ children }) {
  const [squareSelected, setSquareSelected] = useState(null)
  const [winner, setWinner] = useState(false)
  const { boardGame, setBoardGame, refreshBoard, solution, difficulty } = useBoard()
  const { pushValueInRed, checkValueInput } = useCheckValues()
  const { resetValuesinRed } = usePaintValues()

  const validNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

  // Actualizo el tablero con el valor seleccionado
  const updateBoard = (fila, columna) => {
    const newBoard = [...boardGame]
    const current = { fila, columna }
    if (squareSelected === null) {
      setSquareSelected(current)
      paintSquares(newBoard, current, 'paint')
    } else if (squareSelected !== current) {
      paintSquares(newBoard, squareSelected)
      paintSquares(newBoard, current, 'paint')
      setSquareSelected(current)
    }
  }

  const updateValue = ({ value, squareSelected }) => {
    if (validNumbers.includes(value)) {
      const newValue = value
      const newBoard = [...boardGame]
      if (newBoard[squareSelected.fila][squareSelected.columna].value === null) {
        newBoard[squareSelected.fila][squareSelected.columna].value = newValue
        pushValueInRed({ newBoard, squareSelected })
        paintSquares(newBoard, squareSelected)

        setBoardGame(newBoard)
        setSquareSelected(null)
      } else {
        newBoard[squareSelected.fila][squareSelected.columna].value = newValue
        checkValueInput({ newBoard, squareSelected })
        paintSquares(newBoard, squareSelected)
        setBoardGame(newBoard)
        setSquareSelected(null)
      }
    }
  }

  const resetGame = () => {
    const newBoard = [...boardGame]
    if (squareSelected) {
      paintSquares(newBoard, squareSelected)
    }
    refreshBoard()
    setSquareSelected(null)
    resetValuesinRed()
  }

  const data = {
    difficulty,
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

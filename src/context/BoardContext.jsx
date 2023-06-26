import { createContext, useState } from 'react'
import { useBoard } from '../hooks/useBoard'
import { paintSquares } from '../service/painting'
import { useCheck } from '../hooks/useCheck'

const BoardContext = createContext([])

export function BoardProvider ({ children }) {
  const { boardGame, setBoardGame } = useBoard()
  const [squareSelected, setSquareSelected] = useState(null)
  const [previusSelected, setPreviusSelected] = useState(null)

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

  const updateValue = (event, squareSelected) => {
    const newValue = parseInt(event.target.innerHTML)
    const newBoard = [...boardGame]
    newBoard[squareSelected.fila][squareSelected.columna].value = newValue
    useCheck(newBoard, squareSelected)
    paintSquares(newBoard, squareSelected)

    setPreviusSelected(null)
    setBoardGame(newBoard)
    setSquareSelected(null)
  }

  const data = {
    updateBoard,
    boardGame,
    updateValue,
    squareSelected
  }

  return (
    <BoardContext.Provider value={data}>
      {children}
    </BoardContext.Provider>
  )
}

export default BoardContext

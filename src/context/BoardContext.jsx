import { createContext, useState } from 'react'
import { useBoard } from '../hooks/useBoard'
import { paintAllSquares, unpaintAllSquare } from '../service/painting'

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
      paintAllSquares(newBoard, current)
    } else if (squareSelected !== current) {
      unpaintAllSquare(newBoard, previusSelected)
      setSquareSelected(current)
      paintAllSquares(newBoard, current)
      setPreviusSelected(current)
    }
  }

  const updateValue = (event, squareSelected) => {
    const newValue = event.target.innerHTML
    const newBoard = [...boardGame]

    newBoard[squareSelected.fila][squareSelected.columna].value = newValue
    unpaintAllSquare(newBoard, squareSelected)

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

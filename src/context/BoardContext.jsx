import { createContext, useState } from 'react'
import { useBoard } from '../hooks/useBoard'

const BoardContext = createContext([])

export function BoardProvider ({ children }) {
  const { boardGame, setBoardGame } = useBoard()
  const [squareSelected, setSquareSelected] = useState(null)
  const [previusSelected, setPreviusSelected] = useState(null)

  const updateBoard = (fila, columna) => {
    const current = { fila, columna }
    if (squareSelected === null) {
      setSquareSelected(current)
      setPreviusSelected(current)
      const currentSelect = document.getElementById([fila, columna])
      currentSelect.className += ' selected'
    } else if (squareSelected !== current) {
      const previusSelect = document.getElementById([previusSelected.fila, previusSelected.columna])
      previusSelect.classList.remove('selected')

      setSquareSelected(current)
      const currentSelect = document.getElementById([fila, columna])
      currentSelect.className += ' selected'
      setPreviusSelected(current)
    }
  }

  const updateValue = (event, squareSelected) => {
    const newValue = event.target.innerHTML
    const newBoard = [...boardGame]

    newBoard[squareSelected.fila][squareSelected.columna].value = newValue
    const d = document.getElementById([squareSelected.fila, squareSelected.columna])
    d.classList.remove('selected')

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

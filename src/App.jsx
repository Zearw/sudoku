import './App.css'
import { useBoard } from './hooks/useBoard'

const Square = ({ children, updateBoard, index }) => {
  return (
    children.map((e, i) => {
      return (
        <div className='square' key={i}>
          {e.value}
        </div>
      )
    })
  )
}

export function App () {
  const { boardGame } = useBoard()
  return (
    <main className='board'>
      <h1>Sudoku</h1>
      <section className='game'>
        {boardGame && boardGame.map((e, index) => {
          return (
            <Square
              key={index}
              index={index}
            >
              {e}
            </Square>
          )
        })}
      </section>
    </main>
  )
}

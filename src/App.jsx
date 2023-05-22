import './App.css'
import { useBoard } from './hooks/useBoard'

const Square = ({ children, updateBoard, index }) => {
  return (
    children.map((e, indexColumna) => {
      return (
        <div className={e.border} key={indexColumna}>
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
        {boardGame && boardGame.map((e, indexFila) => {
          return (
            <Square
              key={indexFila}
              index={indexFila}
            >
              {e}
            </Square>
          )
        })}
      </section>
    </main>
  )
}

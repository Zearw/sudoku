import './App.css'
import { BoardGame } from './components/BoardGame/BoardGame'
export function App () {
  return (
    <main className='board'>
      <h1>Sudoku</h1>
      <BoardGame />
    </main>
  )
}

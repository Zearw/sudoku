import './App.css'
import { BoardGame } from './components/BoardGame/BoardGame'
import { InputNumber } from './components/InputNumber/InputNumber'
import { BoardProvider } from './context/BoardContext'

export function App () {
  return (
    <BoardProvider>
      <main className='board'>
        <h1>Sudoku</h1>
        <div className='complete_game'>
          <InputNumber />
          <BoardGame />
        </div>
      </main>
    </BoardProvider>
  )
}

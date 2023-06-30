import './App.css'
import { BoardGame } from './components/BoardGame/BoardGame'
import { InputNumber } from './components/InputNumber/InputNumber'
import { SummaryGame } from './components/SummaryGame/SummaryGame'
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
        <SummaryGame />
      </main>
    </BoardProvider>
  )
}

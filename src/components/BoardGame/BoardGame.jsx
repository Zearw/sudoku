import { useBoard } from '../../hooks/useBoard'
import { Square } from '../Square/Square'

export function BoardGame () {
  const { boardGame } = useBoard()

  return (
    <section className='game'>
      {boardGame && boardGame.map((fila, indexFila) => {
        return (
          <Square
            key={indexFila}
            index={indexFila}
            fila={fila}
          />
        )
      })}
    </section>
  )
}

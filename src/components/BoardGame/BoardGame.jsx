import { useContext } from 'react'
import BoardContext from '../../context/BoardContext'
import { Row } from '../Row/Row'

export function BoardGame () {
  const { boardGame } = useContext(BoardContext)

  return (
    <section className='game'>
      {boardGame && boardGame.map((fila, indexFila) => {
        return (
          <Row
            key={indexFila}
            indexFila={indexFila}
            fila={fila}
          />
        )
      })}
    </section>
  )
}

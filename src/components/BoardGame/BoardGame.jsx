import { useContext } from 'react'
import BoardContext from '../../context/BoardContext'
import { Row } from '../Row/Row'

export function BoardGame () {
  const { boardGame } = useContext(BoardContext)

  return (
    <section className='game'>
      {boardGame && boardGame.map((fila, Filaindex) => {
        return (
          <Row
            key={Filaindex}
            fila={fila}
          />
        )
      })}
    </section>
  )
}

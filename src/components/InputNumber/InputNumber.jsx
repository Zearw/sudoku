import { useContext } from 'react'
import './InputNumber.css'
import BoardContext from '../../context/BoardContext'

export function InputNumber () {
  const { squareSelected, updateValue } = useContext(BoardContext)
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]

  const handleClickNumbers = (event) => {
    updateValue(event, squareSelected)
  }

  return (
    <div className='input_numbers'>
      {numbers.map((number, i) => {
        return (
          <div key={i} className='number' onClick={handleClickNumbers} on>
            {number}
          </div>
        )
      })}
    </div>
  )
}

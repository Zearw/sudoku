import { useContext } from 'react'
import './InputNumber.css'
import BoardContext from '../../context/BoardContext'

export function InputNumber () {
  const { squareSelected, updateValue, validNumbers } = useContext(BoardContext)

  const handleClickNumbers = (event) => {
    const value = parseInt(event.target.innerHTML)
    updateValue(value, squareSelected)
  }

  return (
    <div className='input_numbers'>
      {validNumbers.map((number, i) => {
        return (
          <div key={i} className='number' onClick={handleClickNumbers}>
            {number}
          </div>
        )
      })}
    </div>
  )
}

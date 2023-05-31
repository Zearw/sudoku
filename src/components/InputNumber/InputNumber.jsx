import './InputNumber.css'

export function InputNumber () {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]

  const handleClickNumbers = (event) => { console.log(event.target.innerHTML) }

  return (
    <div className='input_numbers'>
      {numbers.map((number, i) => {
        return (
          <div key={i} className='number' onClick={handleClickNumbers}>
            {number}
          </div>
        )
      })}
    </div>
  )
}

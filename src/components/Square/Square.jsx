export const Square = ({ fila, updateBoard, index }) => {
  return (
    fila.map((columna, indexColumna) => {
      console.log(columna)

      const handleClick = () => {
        if (columna.value === null) {
          columna.value = 1
        } else {
          columna.value += 1
        }
      }
      return (
        <div key={indexColumna} className={columna.blocked ? `${columna.border} blocked_number` : columna.border} onClick={handleClick}>
          {columna.value}
        </div>
      )
    })
  )
}

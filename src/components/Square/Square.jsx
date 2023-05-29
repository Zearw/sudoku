export function Square ({ indexFila, columna, columnaIndex, updateBoard }) {
  const handleClick = () => {
    updateBoard(indexFila, columnaIndex)
  }
  return (
    <div key={columnaIndex} className={columna.blocked ? `${columna.border} blocked_number` : columna.border} onClick={handleClick}>
      {columna.value}
    </div>
  )
}

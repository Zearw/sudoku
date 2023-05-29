export function boardPartitions (rawBoard) {
  for (let fila = 0; fila < rawBoard.length; fila++) {
    for (let columna = 0; columna < rawBoard[fila].length; columna++) {
      if (rawBoard[fila][columna] === 0) {
        rawBoard[fila][columna] = { value: null, blocked: false, border: 'square' }
      } else {
        rawBoard[fila][columna] = { value: rawBoard[fila][columna], blocked: true, border: 'square' }
      }

      if (fila === 3 || fila === 6) {
        rawBoard[fila][columna].border += ' top_Border'
      }

      if (columna === 2 || columna === 5) {
        rawBoard[fila][columna].border += ' right_Border'
      }
    }
  }

  return { rawBoard }
}

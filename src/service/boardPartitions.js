export function boardPartitions (rawBoard) {
  for (let fila = 0; fila < rawBoard.length; fila++) {
    for (let columna = 0; columna < rawBoard[fila].length; columna++) {
      if (rawBoard[fila][columna] === 0) {
        rawBoard[fila][columna] = { value: null, blocked: false, border: 'square' }
      } else {
        rawBoard[fila][columna] = { value: rawBoard[fila][columna], blocked: true, border: 'square' }
      }

      if (rawBoard[fila][columna] === rawBoard[3][columna] || rawBoard[fila][columna] === rawBoard[6][columna]) {
        rawBoard[fila][columna].border = 'square top_Border'
      }

      if (rawBoard[fila][columna] === rawBoard[fila][2] || rawBoard[fila][columna] === rawBoard[fila][5]) {
        rawBoard[fila][columna].border = 'square right_Border'
      }

      if (rawBoard[fila][columna] === rawBoard[3][2] || rawBoard[fila][columna] === rawBoard[3][5]) {
        rawBoard[fila][columna].border = 'square top_Border right_Border'
      }
      if (rawBoard[fila][columna] === rawBoard[6][2] || rawBoard[fila][columna] === rawBoard[6][5]) {
        rawBoard[fila][columna].border = 'square top_Border right_Border'
      }
    }
  }

  return { rawBoard }
}

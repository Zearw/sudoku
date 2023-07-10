export function boardPartitions (rawBoard) {
  let indexGridAux = 0

  for (let fila = 0; fila < rawBoard.length; fila++) {
    for (let columna = 0; columna < rawBoard[fila].length; columna++) {
      if (rawBoard[fila][columna] === 0) {
        rawBoard[fila][columna] = { value: null, blocked: false, border: 'square', position: { indexGrid: 0, indexColumna: columna, indexFila: fila } }
      } else {
        rawBoard[fila][columna] = { value: rawBoard[fila][columna], blocked: true, border: 'square', position: { indexGrid: 0, indexColumna: columna, indexFila: fila } }
      }

      if (fila === 3 || fila === 6) {
        rawBoard[fila][columna].border += ' top_Border'
      }

      if (columna === 2 || columna === 5) {
        rawBoard[fila][columna].border += ' right_Border'
      }
    }
  }

  for (let i = 1; i < 9; i += 3) {
    for (let z = 1; z < 9; z += 3) {
      for (let fila = i - 1; fila <= i + 1; fila++) {
        for (let columna = z - 1; columna <= z + 1; columna++) {
          rawBoard[fila][columna].position.indexGrid = indexGridAux
        }
      }
      indexGridAux++
    }
  }

  return { rawBoard }
}

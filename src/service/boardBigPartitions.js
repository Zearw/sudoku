export function boardBigPartitions (rawBoard) {
  const boardBigPartitions = [[], [], [], [], [], [], [], [], []]
  let gridBoard = 0

  for (let i = 1; i < 9; i += 3) {
    for (let z = 1; z < 9; z += 3) {
      for (let fila = i - 1; fila <= i + 1; fila++) {
        for (let columna = z - 1; columna <= z + 1; columna++) {
          boardBigPartitions[gridBoard].push(rawBoard[fila][columna])
        }
      }
      gridBoard++
    }
  }
  return { boardBigPartitions }
}

const SUDOKU_API = 'https://sudoku-api.vercel.app/api/dosuku'

export const getBoard = async () => {
  const res = await fetch(SUDOKU_API)
  const data = await res.json()
  const board = data
  return board
}

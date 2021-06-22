export const gameBoard = (function () {
	return {
		board: [
			[0, 0, 0],
			[0, 0, 0],
			[0, 0, 0],
		],
	}
})()

export const playerFactory = name => {
	const moves = () => console.log(`${name} makes his move...`)
	return { name, moves }
}

const player1 = createPlayer('Pandau')
const player2 = createPlayer('Jared')

console.log(gameBoard.board)
console.log(player1.name)
player1.moves()
console.log(player2.name)
player2.moves()

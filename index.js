'use strict'

// ################################
// #		Board
// ################################
const gameBoard = (function () {
	let board = [
		['x', 0, 0],
		[0, 0, 0],
		[0, 0, 'o'],
	]
	return { board }
})()

// ################################
// #		Player
// ################################
const player = name => {
	const moves = () => console.log(`${name} makes his move...`)
	return { name, moves }
}

// ################################
// #		Script
// ################################
const player1 = player('Pandau')
const player2 = player('enemy')

player1.moves()
console.log(player2)
console.log(gameBoard.board)

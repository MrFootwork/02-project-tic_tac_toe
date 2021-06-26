'use strict'

// ################################
// #		Board
// ################################
const gameBoard = (function () {
	let state = [
		['x', 0, 0],
		[0, 0, 0],
		[0, 0, 'o'],
	]
	const addMove = function (player) {}
	return { state, addMove }
})()

// ################################
// #		Player
// ################################
const player = name => {
	const moves = () => {
		console.log(`${name} makes his move...`)
		return ''
	}
	return { name, moves }
}

// ################################
// #		Script
// ################################
const player1 = player('Pandau')
const player2 = player('enemy')

player1.moves()
console.log(player2)
console.log(gameBoard.state)

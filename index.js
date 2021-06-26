'use strict'

const gameController = (function () {
	const WIN_COMBINATIONS = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6],
	]
	const X_CLASS = 'x'
	const O_CLASS = 'o'
	const cellElements = document.querySelectorAll('[data-cell]')
	const board = document.querySelector('#board')
	const message = document.querySelector('.winning-message-text')
	let crossTurn = true

	cellElements.forEach(cell => {
		cell.addEventListener('click', handleClick, { once: true })
	})
	function handleClick(e) {
		const currentClass = crossTurn ? X_CLASS : O_CLASS
		const nextClass = !crossTurn ? X_CLASS : O_CLASS
		const cell = e.target
		placeMark(cell, currentClass)
		if (hasWinner(currentClass)) {
			message.innerHTML = `${currentClass} wins!`
			document.getElementById('winning-message').dataset.showMessage = true
		}
		if (isDraw()) {
			message.innerHTML = `It's a draw!`
			document.getElementById('winning-message').dataset.showMessage = true
		}
		switchTurn()
		setBoardHoverClass(currentClass, nextClass)
	}
	function placeMark(cell, currentClass) {
		cell.classList.add(currentClass)
	}
	function hasWinner(currentClass) {
		return WIN_COMBINATIONS.some(combination => {
			return combination.every(index => {
				return cellElements[index].classList.contains(currentClass)
			})
		})
	}
	function isDraw() {
		const markedCells = document.querySelectorAll(
			'[data-cell].x, [data-cell].o'
		)
		return markedCells.length === 9
	}
	function switchTurn() {
		crossTurn = !crossTurn
	}
	function setBoardHoverClass(currentClass, nextClass) {
		board.classList.remove(currentClass)
		board.classList.add(nextClass)
	}
})()

const gameBoard = (function () {
	let state = [
		[0, 0, 0],
		[0, 0, 0],
		[0, 0, 0],
	]
	const addMove = function (player) {}
	return { state, addMove }
})()

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

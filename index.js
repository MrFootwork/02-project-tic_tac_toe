'use strict'

import gameController from './js/gameController.js'

// const gameController = (function () {
// 	function handleClick(e) {
// 		const currentClass = crossTurn ? X_CLASS : O_CLASS
// 		const nextClass = !crossTurn ? X_CLASS : O_CLASS
// 		const cell = e.target
// 		placeMark(cell, currentClass)
// 		if (hasWinner(currentClass)) {
// 			message.innerText = `${currentClass} wins!`
// 			gameOverModal.dataset.showMessage = true
// 		}
// 		if (isDraw()) {
// 			message.innerText = `It's a draw!`
// 			gameOverModal.dataset.showMessage = true
// 		}
// 		switchTurn()
// 		setBoardHoverClass(currentClass, nextClass)
// 	}

// 	function placeMark(cell, currentClass) {
// 		cell.classList.add(currentClass)
// 	}

// 	function hasWinner(currentClass) {
// 		return WIN_COMBINATIONS.some(combination => {
// 			return combination.every(index => {
// 				return cellElements[index].classList.contains(currentClass)
// 			})
// 		})
// 	}

// 	function isDraw() {
// 		const markedCells = document.querySelectorAll(
// 			'[data-cell].x, [data-cell].o'
// 		)
// 		return markedCells.length === 9
// 	}

// 	function switchTurn() {
// 		crossTurn = !crossTurn
// 	}

// 	function setBoardHoverClass(currentClass, nextClass) {
// 		board.classList.remove(currentClass)
// 		board.classList.add(nextClass)
// 	}
// })()

// const gameBoard = (function () {
// 	let state = [
// 		[0, 0, 0],
// 		[0, 0, 0],
// 		[0, 0, 0],
// 	]
// 	const addMove = function (player) {}
// 	return { state, addMove }
// })()

// const player = name => {
// 	const moves = () => {
// 		console.log(`${name} makes his move...`)
// 		return ''
// 	}
// 	return { name, moves }
// }

// // ################################
// // #		Script
// // ################################
// const player1 = player('Pandau')
// const player2 = player('enemy')

// player1.moves()
// console.log(player2)
// console.log(gameBoard.state)

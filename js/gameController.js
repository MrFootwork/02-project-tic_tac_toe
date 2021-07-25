import gameBoard from './board.js'
import player from './player.js'

//FIXME start/restart button
//TODO AI with minimax algorithm

export default function () {
	const board = gameBoard()
	console.log(board)

	function init() {
		DOMrestartButton.addEventListener('click', restartHandler)
		resetEventListeners()
	}

	function showWinningMessage(show) {
		DOMgameOver.dataset.showMessage = show
	}

	function restartHandler() {
		board.crossTurn = true
		board.board.className = `board ${X_CLASS}`
		board.cells.forEach(cell => {
			cell.className = 'cell'
		})
		showWinningMessage(false)
		resetEventListeners()
	}

	function resetEventListeners() {
		board.cells.forEach(cell => {
			cell.addEventListener('click', handleClick, { once: true })
		})
	}

	function handleClick(e) {
		const currentClass = board.crossTurn ? X_CLASS : O_CLASS
		const nextClass = !board.crossTurn ? X_CLASS : O_CLASS
		const cell = e.target

		board.placeMark(cell, currentClass)

		if (isWinner(currentClass)) {
			DOMmessage.innerText = `${currentClass.toUpperCase()} wins!`
			showWinningMessage(true)
		}

		if (isDraw()) {
			DOMmessage.innerText = `It's a draw!`
			showWinningMessage(true)
		}

		board.switchTurn()

		setBoardHoverClass(currentClass, nextClass)
	}

	function isWinner(currentClass) {
		return board.WIN_COMBINATIONS.some(combination => {
			return combination.every(index => {
				return board.cells[index].classList.contains(currentClass)
			})
		})
	}

	function isDraw() {
		const markedCells = document.querySelectorAll(
			'[data-cell].x, [data-cell].o'
		)
		return markedCells.length === 9
	}

	function setBoardHoverClass(currentClass, nextClass) {
		board.board.classList.remove(currentClass)
		board.board.classList.add(nextClass)
	}

	return { init }
}

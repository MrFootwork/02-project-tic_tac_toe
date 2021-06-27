import gameBoard from './board.js'
import player from './player.js'

export default function () {
	const board = gameBoard()

	function init() {
		DOMrestartButton.addEventListener('click', restartHandler)
		resetEventListeners()
	}

	function showWinningMessage(show) {
		DOMgameOver.dataset.showMessage = show
	}

	function restartHandler() {
		crossTurn = true
		DOMboard.className = `board ${X_CLASS}`
		DOMcells.forEach(cell => {
			cell.className = 'cell'
		})
		showWinningMessage(false)
		resetEventListeners()
	}

	function resetEventListeners() {
		DOMcells.forEach(cell => {
			cell.addEventListener('click', handleClick, { once: true })
		})
	}

	function handleClick(e) {
		const currentClass = crossTurn ? X_CLASS : O_CLASS
		const nextClass = !crossTurn ? X_CLASS : O_CLASS
		const cell = e.target

		placeMark(cell, currentClass)

		if (hasWinner(currentClass)) {
			DOMmessage.innerText = `${currentClass} wins!`
			showWinningMessage(true)
		}

		if (isDraw()) {
			DOMmessage.innerText = `It's a draw!`
			showWinningMessage(true)
		}

		switchTurn()

		setBoardHoverClass(currentClass, nextClass)
	}

	function placeMark(cell, currentClass) {
		cell.classList.add(currentClass)
	}

	function hasWinner(currentClass) {
		return board.WIN_COMBINATIONS.some(combination => {
			return combination.every(index => {
				return DOMcells[index].classList.contains(currentClass)
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
		DOMboard.classList.remove(currentClass)
		DOMboard.classList.add(nextClass)
	}

	return { init }
}

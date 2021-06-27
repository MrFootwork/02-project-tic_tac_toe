const board = (function () {
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
	const board = document.getElementById('board')
	function handleClick(e) {
		const currentClass = crossTurn ? X_CLASS : O_CLASS
		const nextClass = !crossTurn ? X_CLASS : O_CLASS
		const cell = e.target
		placeMark(cell, currentClass)
		if (hasWinner(currentClass)) {
			message.innerText = `${currentClass} wins!`
			gameOverModal.dataset.showMessage = true
		}
		if (isDraw()) {
			message.innerText = `It's a draw!`
			gameOverModal.dataset.showMessage = true
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
	return {}
})()
export default board

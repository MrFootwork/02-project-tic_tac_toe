export default function () {
	const board = document.getElementById('board')
	const cells = document.querySelectorAll('[data-cell]')

	var crossTurn = true

	function placeMark(cell, currentClass) {
		cell.classList.add(currentClass)
	}

	function switchTurn() {
		this.crossTurn = !this.crossTurn
	}

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

	return { cells, board, crossTurn, placeMark, switchTurn, WIN_COMBINATIONS }
}

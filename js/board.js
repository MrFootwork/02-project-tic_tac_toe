const board = (function () {
	let state = [
		[0, 0, 0],
		[0, 0, 0],
		[0, 0, 0],
	]
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
	const addMove = function (player) {}
	const test = function () {
		console.log('test FUnktion funktioniert')
	}
	return { state, addMove, test }
})()
export default board

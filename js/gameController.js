import board from './board.js'
import player from './player.js'

const gameController = (function () {
	const gameOverModal = document.getElementById('winning-message')
	const message = document.getElementById('winning-message-text')
	const restartButton = document.getElementById('restart-button')
	let crossTurn = true

	;(function init() {
		restartButton.addEventListener('click', restartHandler)
		resetEventListeners()
	})()

	const showWinningMessage = function () {
		gameOverModal.dataset.showMessage = true
	}

	showWinningMessage()

	function restartHandler() {
		crossTurn = true
		board.className = `board ${X_CLASS}`
		cellElements.forEach(cell => {
			cell.className = 'cell'
		})
		gameOverModal.dataset.showMessage = 'false'
		resetEventListeners()
	}

	function resetEventListeners() {
		cellElements.forEach(cell => {
			cell.addEventListener('click', handleClick, { once: true })
		})
	}
})()
export default gameController

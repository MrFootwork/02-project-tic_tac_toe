import { gameBoard as boardMarks } from '../board/board.js'
import * as display from './display.js'
import { listeners } from './listeners.js'

export const gameController = (function () {
	console.log('game starts')
	let turn = 'x'
	let round = 1
	boardMarks.forEach((mark, i) => {
		// TODO optimise dataset bubbling
		display.renderField(mark, i)
	})
	const renderedBoard = document.getElementById('gameBoard')
	listeners.move(turn, renderedBoard, 'click', display.renderAfterMove)
})()

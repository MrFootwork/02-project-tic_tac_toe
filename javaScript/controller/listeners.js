import { CONST } from '../constants/constants.js'

export const listeners = {
	move: (turn, element, eventType, updateUI) => {
		element.addEventListener(eventType, e => {
			const pos = e.target.dataset.boardIndex
			const iconTag = document.querySelector(`i[data-board-index='${pos}']`)
			console.log(iconTag.classList)

			if (turn === 'x') {
				iconTag.classList.add(CONST.xClassList.join(''))
			}
			if (turn === 'o') iconTag.classList.add(CONST.xClassList.join(''))
			updateUI()
		})
	},
}

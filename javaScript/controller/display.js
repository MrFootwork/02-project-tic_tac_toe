export const renderField = function (fieldMark = '', index) {
	const board = document.getElementById('gameBoard')

	const fieldContainer = document.createElement('div')
	fieldContainer.className = 'gameField'
	fieldContainer.dataset.boardIndex = index

	board.appendChild(fieldContainer)

	const paragraph = document.createElement('p')
	paragraph.className = 'mark'
	paragraph.dataset.boardIndex = index
	fieldContainer.appendChild(paragraph)

	const iconTag = 'icon-tag'
	const xClassList = [iconTag, 'fas', 'fa-times']
	const oCLassList = [iconTag, 'far', 'fa-circle']

	const awsomeFont = document.createElement('i')
	if (fieldMark === 'x') {
		awsomeFont.className = xClassList.join(' ')
	}
	if (fieldMark === 'o') {
		awsomeFont.className = oCLassList.join(' ')
	}
	awsomeFont.dataset.boardIndex = index
	paragraph.appendChild(awsomeFont)
}

export const renderAfterMove = function () {
	//do stuff
	console.log('field-render updates field..')
}

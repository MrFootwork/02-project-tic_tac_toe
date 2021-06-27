const X_CLASS = 'x'
const O_CLASS = 'o'

const DOMboard = document.getElementById('board')
const DOMcells = document.querySelectorAll('[data-cell]')

const DOMgameOver = document.getElementById('winning-message')
const DOMmessage = document.getElementById('winning-message-text')
const DOMrestartButton = document.getElementById('restart-button')

var crossTurn = true

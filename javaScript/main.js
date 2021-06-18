import { gameBoard } from './board/board.js'
import { playerFactory as createPlayer } from './player/player.js'
import { gameFlow } from './controller/game.js'

const player1 = createPlayer('Pandau')
const player2 = createPlayer('Jared')

console.log(gameBoard.board)
console.log(player1.name)
player1.moves()
console.log(player2.name)
player2.moves()

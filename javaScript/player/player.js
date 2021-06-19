export const playerFactory = (name, mark) => {
	const moves = () => console.log(`${name} makes his move...`)
	return { name, mark, moves }
}

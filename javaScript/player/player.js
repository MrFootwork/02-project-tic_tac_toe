export const playerFactory = name => {
	const moves = () => console.log(`${name} makes his move...`)
	return { name, moves }
}

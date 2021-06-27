const player = name => {
	const setName = () => {}
	const getName = () => {
		console.log(`${name} makes his move...`)
		return ''
	}
	return { name, setName, getName }
}
export default player

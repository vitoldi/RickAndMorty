const { 
	startedActionCreator,
	successActionCreator,
	failureActionCreator,
	changeCharacterEpisodesActionCreator,
	currentCharacterActionCreator
 	} = require('../../redux/charinfoReducer')

test("charinfo reducer's action creators return correct actions and data", () => {
	const startedAction = startedActionCreator()
	const succesAction = successActionCreator({data: 'data'})
	const failureAction = failureActionCreator('error')
	const changeCharacterEpisodesAction = changeCharacterEpisodesActionCreator([1, 2])
	const currentCharacterAction = currentCharacterActionCreator('rick')

	expect(startedAction.type).toBe('ADD_STARTED_CHAR')
	expect(succesAction.type).toBe('ADD_SUCCESS_CHAR')
	expect(succesAction.payload.data).toBe('data')
	expect(failureAction.type).toBe('ADD_FAILURE_CHAR')
	expect(failureAction.payload.err).toBe('error')
	expect(changeCharacterEpisodesAction.type).toBe('CHANGE_CHARACTER_EPISODES')
	expect(changeCharacterEpisodesAction.payload.characterEpisodes[1]).toBe(2)
	expect(currentCharacterAction.type).toBe('CHANGE_CURRENT_CHARACTER')
	expect(currentCharacterAction.payload.currentCharacter).toBe('rick')
})
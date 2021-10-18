const { 
	startedActionCreator,
	successActionCreator,
	failureActionCreator,
	changeEpisodeCharactersActionCreator,
	currentEpisodeActionCreator
 	} = require('../episodeInfoReducer')

test("episodeInfo reducer's action creators return correct actions and data", () => {
	const startedAction = startedActionCreator()
	const succesAction = successActionCreator({data: 'data'})
	const failureAction = failureActionCreator('error')
	const changeEpisodeCharactersAction = changeEpisodeCharactersActionCreator([1, 2])
	const currentEpisodeAction = currentEpisodeActionCreator('e01s01')

	expect(startedAction.type).toBe('ADD_STARTED_CHAR_EPINFO')
	expect(succesAction.type).toBe('ADD_SUCCESS_CHAR_EPINFO')
	expect(succesAction.payload.data).toBe('data')
	expect(failureAction.type).toBe('ADD_FAILURE_CHAR_EPINFO')
	expect(failureAction.payload.err).toBe('error')
	expect(changeEpisodeCharactersAction.type).toBe('CHANGE_EPISODE_CHARACTERS')
	expect(changeEpisodeCharactersAction.payload.episodeCharacters[1]).toBe(2)
	expect(currentEpisodeAction.type).toBe('CHANGE_CURRENT_CHARACTER_EPINFO')
	expect(currentEpisodeAction.payload.currentEpisode).toBe('e01s01')
})
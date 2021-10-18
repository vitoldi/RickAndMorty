const { 
	startedActionCreator,
	successActionCreator,
	failureActionCreator,
	currentPageActionCreator,
	episodesFilterActionCreator
 	} = require('../episodesReducer')

test("episodes reducer's action creators return correct actions and data", () => {
	const startedAction = startedActionCreator()
	const succesAction = successActionCreator({data: 'data'})
	const failureAction = failureActionCreator('error')
	const currentPageAction = currentPageActionCreator(5)
	const charactersFilterAction = episodesFilterActionCreator('filter')

	expect(startedAction.type).toBe('ADD_STARTED_EPISODES')
	expect(succesAction.type).toBe('ADD_SUCCESS_EPISODES')
	expect(succesAction.payload.data).toBe('data')
	expect(failureAction.type).toBe('ADD_FAILURE_EPISODES')
	expect(failureAction.payload.error).toBe('error')
	expect(currentPageAction.type).toBe('CHANGE_CURRENT_PAGE_EPISODES')
	expect(currentPageAction.payload.currentPage).toBe(5)
	expect(charactersFilterAction.type).toBe('ADD_FILTER_EPISODES')
	expect(charactersFilterAction.payload.filter).toBe('filter')
})
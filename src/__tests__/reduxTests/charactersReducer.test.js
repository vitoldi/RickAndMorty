const { 
	startedActionCreator,
	successActionCreator,
	failureActionCreator,
	currentPageActionCreator,
	charactersFilterActionCreator
 	} = require('../../redux/charactersReducer')

test("characters reducer's action creators return correct actions and data", () => {
	const startedAction = startedActionCreator()
	const succesAction = successActionCreator({data: 'data'})
	const failureAction = failureActionCreator('error')
	const currentPageAction = currentPageActionCreator(5)
	const charactersFilterAction = charactersFilterActionCreator('filter')

	expect(startedAction.type).toBe('ADD_STARTED')
	expect(succesAction.type).toBe('ADD_SUCCESS')
	expect(succesAction.payload.data).toBe('data')
	expect(failureAction.type).toBe('ADD_FAILURE')
	expect(failureAction.payload.error).toBe('error')
	expect(currentPageAction.type).toBe('CHANGE_CURRENT_PAGE')
	expect(currentPageAction.payload.currentPage).toBe(5)
	expect(charactersFilterAction.type).toBe('ADD_FILTER_CHARACTERS')
	expect(charactersFilterAction.payload.filter).toBe('filter')
})
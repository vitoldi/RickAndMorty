const { 
	startedActionCreator,
	successActionCreator,
	failureActionCreator,
 	} = require('../../redux/searchReducer')

test("search reducer's action creators return correct actions and data", () => {
	const startedAction = startedActionCreator()
	const succesAction = successActionCreator({data: 'data'})
	const failureAction = failureActionCreator('error')

	expect(startedAction.type).toBe('ADD_STARTED_SEARCH')
	expect(succesAction.type).toBe('ADD_SUCCESS_SEARCH')
	expect(succesAction.payload.data).toBe('data')
	expect(failureAction.type).toBe('ADD_FAILURE_SEARCH')
	expect(failureAction.payload.error).toBe('error')
})
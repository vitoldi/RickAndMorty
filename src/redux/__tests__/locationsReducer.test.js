const { 
	startedActionCreator,
	successActionCreator,
	failureActionCreator,
	currentPageActionCreator,
	locationsFilterActionCreator
 	} = require('../locationsReducer')

test("locations reducer's action creators return correct actions and data", () => {
	const startedAction = startedActionCreator()
	const succesAction = successActionCreator({data: 'data'})
	const failureAction = failureActionCreator('error')
	const currentPageAction = currentPageActionCreator(5)
	const locationsFilterAction = locationsFilterActionCreator('filter')

	expect(startedAction.type).toBe('ADD_STARTED_LOCATIONS')
	expect(succesAction.type).toBe('ADD_SUCCESS_LOCATIONS')
	expect(succesAction.payload.data).toBe('data')
	expect(failureAction.type).toBe('ADD_FAILURE_LOCATIONS')
	expect(failureAction.payload.error).toBe('error')
	expect(currentPageAction.type).toBe('CHANGE_CURRENT_PAGE_LOCATIONS')
	expect(currentPageAction.payload.currentPage).toBe(5)
	expect(locationsFilterAction.type).toBe('ADD_FILTER_LOCATIONS')
	expect(locationsFilterAction.payload.filter).toBe('filter')
})
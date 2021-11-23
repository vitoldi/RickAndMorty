const { 
	startedActionCreator,
	successActionCreator,
	failureActionCreator,
	changeResidentsActionCreator,
	currentLocationActionCreator
 	} = require('../../redux/locationInfoReducer')

test("locationInfo reducer's action creators return correct actions and data", () => {
	const startedAction = startedActionCreator()
	const succesAction = successActionCreator({data: 'data'})
	const failureAction = failureActionCreator('error')
	const currentLocationAction = currentLocationActionCreator(5)
	const changeResidentsAction = changeResidentsActionCreator([1, 2])

	expect(startedAction.type).toBe('ADD_STARTED_CHAR_LOCINFO')
	expect(succesAction.type).toBe('ADD_SUCCESS_CHAR_LOCINFO')
	expect(succesAction.payload.data).toBe('data')
	expect(failureAction.type).toBe('ADD_FAILURE_CHAR_LOCINFO')
	expect(failureAction.payload.err).toBe('error')
	expect(currentLocationAction.type).toBe('CHANGE_CURRENT_CHARACTER_LOCINFO')
	expect(currentLocationAction.payload.currentLocation).toBe(5)
	expect(changeResidentsAction.type).toBe('CHANGE_RESIDENTS')
	expect(changeResidentsAction.payload.residents[1]).toBe(2)
})
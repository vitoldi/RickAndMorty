import { getLocationInfoApi, getCharacterInfoApi} from "../api/api"

const ADD_STARTED_LOCINFO = 'ADD_STARTED_CHAR_LOCINFO'
const ADD_SUCCESS_LOCINFO = 'ADD_SUCCESS_CHAR_LOCINFO'
const ADD_FAILURE_LOCINFO = 'ADD_FAILURE_CHAR_LOCINFO'
const CHANGE_CURRENT_LOCATION = 'CHANGE_CURRENT_CHARACTER_LOCINFO'
const CHANGE_RESIDENTS = 'CHANGE_RESIDENTS'

const initialState = {
	loading: false,
	locationInfo: {},
	error: null,
	currentLocation: 1,
	residents: []
}

export const locationInfoReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_STARTED_LOCINFO:
			return {...state, loading: true}
		case ADD_SUCCESS_LOCINFO:
			return {...state, loading: false, error: null, locationInfo: action.payload}
		case ADD_FAILURE_LOCINFO:
			return { ...state, loading: false, error: action.payload.error}
		case CHANGE_CURRENT_LOCATION:
			return { ...state, currentLocation: action.payload.currentLocation}
		case CHANGE_RESIDENTS:
			return { ...state, residents: action.payload.residents }
		default:
			return state
	}
}

export const getLocationInfoThunkCreator = (dispatch, currentLocation) => {
	return (dispatch) => {
	dispatch(startedActionCreator())
	getLocationInfoApi(currentLocation).then(data => {
		dispatch(successActionCreator(data))
		if (data.residents[0]) {
			const residentsId = data.residents.map(res => {
				const resArr = res.split('/')
				return resArr[resArr.length - 1]
			})
			getCharacterInfoApi(residentsId).then(data => {
				if (data.constructor === Array) {
					dispatch(changeResidentsActionCreator(data))
				} else {
					dispatch(changeResidentsActionCreator([data]))
				}
			})
				.catch(err => {
					dispatch(failureActionCreator(err))
				})
		} else {
			dispatch(changeResidentsActionCreator([]))
		}
	})
	.catch(err => {
		dispatch(failureActionCreator(err))
	})
}
}

export const startedActionCreator = () => ({ type: ADD_STARTED_LOCINFO })

export const successActionCreator = (data) => ({
	type: ADD_SUCCESS_LOCINFO,
	payload: {
		...data
	}
})

export const changeResidentsActionCreator = (data) => ({
	type: CHANGE_RESIDENTS,
	payload: {
		residents: [...data]
	}
})

export const failureActionCreator = (err) => ({
	type: ADD_FAILURE_LOCINFO,
	payload: {
		err
	}
})

export const currentLocationActionCreator = (currentLocation) => ({
	type: CHANGE_CURRENT_LOCATION,
	payload: {
		currentLocation
	}
})
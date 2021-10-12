import { getAllLocationsApi } from "../api/api"

const ADD_STARTED_LOCATIONS = 'ADD_STARTED_LOCATIONS'
const ADD_SUCCESS_LOCATIONS = 'ADD_SUCCESS_LOCATIONS'
const ADD_FAILURE_LOCATIONS = 'ADD_FAILURE_LOCATIONS'
const CHANGE_CURRENT_PAGE_LOCATIONS = 'CHANGE_CURRENT_PAGE_LOCATIONS'
const ADD_FILTER_LOCATIONS = 'ADD_FILTER_LOCATIONS'

const initialState = {
	loading: false,
	allLocations: {
		info: {
			count: 108
	}},
	error: null,
	currentPage: 1,
	filter: {
		name: '',
		dimension: '',
		type: ''
	}
}

export const locationsReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_STARTED_LOCATIONS:
			return {...state, loading: true}
		case ADD_SUCCESS_LOCATIONS:
			return {...state, loading: false, error: null, allLocations: action.payload}
		case ADD_FAILURE_LOCATIONS:
			return { ...state, loading: false, error: action.payload.error}
		case CHANGE_CURRENT_PAGE_LOCATIONS:
			return { ...state, currentPage: action.payload.currentPage}
		case ADD_FILTER_LOCATIONS:
			return { ...state, filter: action.payload.filter }
		default:
			return state
	}
}

export const getAllLocationsThunkCreator = (dispatch, currentPage, filter) => {
	return (dispatch) => {
	dispatch(startedActionCreator())
	getAllLocationsApi(currentPage, filter).then(data => {
		dispatch(successActionCreator(data))
	})
	.catch(err => {
		dispatch(failureActionCreator(err))
	})
}
}

const startedActionCreator = () => ({ type: ADD_STARTED_LOCATIONS })

const successActionCreator = (data) => ({
	type: ADD_SUCCESS_LOCATIONS,
	payload: {
		...data
	}
})

const failureActionCreator = (err) => ({
	type: ADD_FAILURE_LOCATIONS,
	payload: {
		error: err
	}
})

export const currentPageActionCreator = (currentPage) => ({
	type: CHANGE_CURRENT_PAGE_LOCATIONS,
	payload: {
		currentPage
	}
})

export const locationsFilterActionCreator = (filter) => ({
	type: ADD_FILTER_LOCATIONS,
	payload: {
		filter
	}
})
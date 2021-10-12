import { getAllLocationsApi } from "../api/api"
import { getAllCharactersApi } from "../api/api"
import { getAllEpisodesApi } from "../api/api"

const ADD_STARTED_SEARCH = 'ADD_STARTED_SEARCH'
const ADD_SUCCESS_SEARCH = 'ADD_SUCCESS_SEARCH'
const ADD_FAILURE_SEARCH = 'ADD_FAILURE_SEARCH'

const initialState = {
	loading: false,
	result: null,
	error: null,
}

export const searchReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_STARTED_SEARCH:
			return {...state, loading: true}
		case ADD_SUCCESS_SEARCH:
			return {...state, loading: false, error: null, result: action.payload}
		case ADD_FAILURE_SEARCH:
			return { ...state, loading: false, error: action.payload.error}
		default:
			return state
	}
}

const getApiRequest = (type) => {
	switch (type) {
		case '/locations':
			return getAllLocationsApi
		case '/episodes':
			return getAllEpisodesApi
		default:
			return getAllCharactersApi
	}
}

export const getSearchThunkCreator = (dispatch, currentPage, filter, type) => {
	return (dispatch) => {
	dispatch(startedActionCreator())
	getApiRequest(type)(currentPage, filter).then(data => {
		dispatch(successActionCreator(data))
	})
	.catch(err => {
		dispatch(failureActionCreator(err))
	})
}
}

const startedActionCreator = () => ({ type: ADD_STARTED_SEARCH })

const successActionCreator = (data) => ({
	type: ADD_SUCCESS_SEARCH,
	payload: {
		...data
	}
})

const failureActionCreator = (err) => ({
	type: ADD_FAILURE_SEARCH,
	payload: {
		error: err
	}
})
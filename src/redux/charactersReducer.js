import { getAllCharactersApi } from "../api/api"

const ADD_STARTED = 'ADD_STARTED'
const ADD_SUCCESS = 'ADD_SUCCESS'
const ADD_FAILURE = 'ADD_FAILURE'
const CHANGE_CURRENT_PAGE = 'CHANGE_CURRENT_PAGE'
const ADD_FILTER_CHARACTERS = 'ADD_FILTER_CHARACTERS'

const initialState = {
	loading: false,
	allCharacters: {
		info: {
			count: 671
	}},
	error: null,
	currentPage: 1,
	filter: {
		name: '',
		status: '',
		species: '',
		gender: '',
		type: ''
	}
}

export const charactersReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_STARTED:
			return {...state, loading: true}
		case ADD_SUCCESS:
			return {...state, loading: false, error: null, allCharacters: action.payload}
		case ADD_FAILURE:
			return { ...state, loading: false, error: action.payload.error}
		case CHANGE_CURRENT_PAGE:
			return { ...state, currentPage: action.payload.currentPage}
		case ADD_FILTER_CHARACTERS:
			return { ...state, filter: action.payload.filter }
		default:
			return state
	}
}

export const getAllCharactersThunkCreator = (dispatch, currentPage, filter) => {
	return (dispatch) => {
	dispatch(startedActionCreator())
	getAllCharactersApi(currentPage, filter).then(data => {
		dispatch(successActionCreator(data))
	})
	.catch(err => {
		dispatch(failureActionCreator(err))
	})
}
}

export const startedActionCreator = () => ({ type: ADD_STARTED })

export const successActionCreator = (data) => ({
	type: ADD_SUCCESS,
	payload: {
		...data
	}
})

export const failureActionCreator = (err) => ({
	type: ADD_FAILURE,
	payload: {
		error: err
	}
})

export const currentPageActionCreator = (currentPage) => ({
	type: CHANGE_CURRENT_PAGE,
	payload: {
		currentPage
	}
})

export const charactersFilterActionCreator = (filter) => ({
	type: ADD_FILTER_CHARACTERS,
	payload: {
		filter
	}
})
import { getAllEpisodesApi } from "../api/api"

const ADD_STARTED_EPISODES = 'ADD_STARTED_EPISODES'
const ADD_SUCCESS_EPISODES = 'ADD_SUCCESS_EPISODES'
const ADD_FAILURE_EPISODES = 'ADD_FAILURE_EPISODES'
const CHANGE_CURRENT_PAGE_EPISODES = 'CHANGE_CURRENT_PAGE_EPISODES'
const ADD_FILTER_EPISODES = 'ADD_FILTER_EPISODES'

const initialState = {
	loading: false,
	allEpisodes: {
		info: {
			count: 41
		}
	},
	error: null,
	currentPage: 1,
	filter: {
		name: '',
		episode: ''
	}
}

export const episodesReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_STARTED_EPISODES:
			return {...state, loading: true}
		case ADD_SUCCESS_EPISODES:
			return {...state, loading: false, error: null, allEpisodes: action.payload}
		case ADD_FAILURE_EPISODES:
			return { ...state, loading: false, error: action.payload.error}
		case CHANGE_CURRENT_PAGE_EPISODES:
			return { ...state, currentPage: action.payload.currentPage}
		case ADD_FILTER_EPISODES:
			return { ...state, filter: action.payload.filter }
		default:
			return state
	}
}

export const getAllEpisodesThunkCreator = (dispatch, currentPage, filter) => {
	return (dispatch) => {
	dispatch(startedActionCreator())
	getAllEpisodesApi(currentPage, filter).then(data => {
		dispatch(successActionCreator(data))
	})
	.catch(err => {
		dispatch(failureActionCreator(err))
	})
}
}

const startedActionCreator = () => ({ type: ADD_STARTED_EPISODES })

const successActionCreator = (data) => ({
	type: ADD_SUCCESS_EPISODES,
	payload: {
		...data
	}
})

const failureActionCreator = (err) => ({
	type: ADD_FAILURE_EPISODES,
	payload: {
		error: err
	}
})

export const currentPageActionCreator = (currentPage) => ({
	type: CHANGE_CURRENT_PAGE_EPISODES,
	payload: {
		currentPage
	}
})

export const episodesFilterActionCreator = (filter) => ({
	type: ADD_FILTER_EPISODES,
	payload: {
		filter
	}
})
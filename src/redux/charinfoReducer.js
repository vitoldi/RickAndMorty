import { getCharacterInfoApi, getEpisodeInfoApi } from "../api/api"

const ADD_STARTED_CHAR = 'ADD_STARTED_CHAR'
const ADD_SUCCESS_CHAR = 'ADD_SUCCESS_CHAR'
const ADD_FAILURE_CHAR = 'ADD_FAILURE_CHAR'
const CHANGE_CURRENT_CHARACTER = 'CHANGE_CURRENT_CHARACTER'
const CHANGE_CHARACTER_EPISODES = 'CHANGE_CHARACTER_EPISODES'

const initialState = {
	loading: false,
	characterInfo: {},
	error: null,
	currentCharacter: 1,
	characterEpisodes: []
}

export const charinfoReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_STARTED_CHAR:
			return {...state, loading: true}
		case ADD_SUCCESS_CHAR:
			return {...state, loading: false, error: null, characterInfo: action.payload}
		case ADD_FAILURE_CHAR:
			return { ...state, loading: false, error: action.payload.error}
		case CHANGE_CURRENT_CHARACTER:
			return { ...state, currentCharacter: action.payload.currentCharacter}
		case CHANGE_CHARACTER_EPISODES:
			return { ...state, characterEpisodes: action.payload.characterEpisodes }
		default:
			return state
	}
}

export const getCharacterInfoThunkCreator = (dispatch, currentCharacter) => {
	return (dispatch) => {
	dispatch(startedActionCreator())
	getCharacterInfoApi(currentCharacter).then(data => {
		dispatch(successActionCreator(data))
		if (data.episode) {
			const episodesId = data.episode.map(res => {
				const resArr = res.split('/')
				return resArr[resArr.length - 1]
			})
			getEpisodeInfoApi(episodesId).then(data => {
				if (data.constructor === Array) {
					dispatch(changeCharacterEpisodesActionCreator(data))
				} else {
					dispatch(changeCharacterEpisodesActionCreator([data]))
				}
			})
				.catch(err => {
					dispatch(failureActionCreator(err))
				})
		} else {
			dispatch(changeCharacterEpisodesActionCreator([]))
		}
	})
	.catch(err => {
		dispatch(failureActionCreator(err))
	})
}
}

const startedActionCreator = () => ({ type: ADD_STARTED_CHAR })

const successActionCreator = (data) => ({
	type: ADD_SUCCESS_CHAR,
	payload: {
		...data
	}
})

const changeCharacterEpisodesActionCreator = (data) => ({
	type: CHANGE_CHARACTER_EPISODES,
	payload: {
		characterEpisodes: [...data]
	}
})

const failureActionCreator = (err) => ({
	type: ADD_FAILURE_CHAR,
	payload: {
		err
	}
})

export const currentCharacterActionCreator = (currentCharacter) => ({
	type: CHANGE_CURRENT_CHARACTER,
	payload: {
		currentCharacter
	}
})

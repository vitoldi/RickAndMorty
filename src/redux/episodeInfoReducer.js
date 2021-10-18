import { getEpisodeInfoApi, getCharacterInfoApi} from "../api/api"

const ADD_STARTED_EPINFO = 'ADD_STARTED_CHAR_EPINFO'
const ADD_SUCCESS_EPINFO = 'ADD_SUCCESS_CHAR_EPINFO'
const ADD_FAILURE_EPINFO = 'ADD_FAILURE_CHAR_EPINFO'
const CHANGE_CURRENT_EPINFO = 'CHANGE_CURRENT_CHARACTER_EPINFO'
const CHANGE_EPISODE_CHARACTERS = 'CHANGE_EPISODE_CHARACTERS'

const initialState = {
	loading: false,
	episodeInfo: {},
	error: null,
	currentEpisode: 1,
	episodeCharacters: []
}

export const episodeInfoReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_STARTED_EPINFO:
			return {...state, loading: true}
		case ADD_SUCCESS_EPINFO:
			return {...state, loading: false, error: null, episodeInfo: action.payload}
		case ADD_FAILURE_EPINFO:
			return { ...state, loading: false, error: action.payload.error}
		case CHANGE_CURRENT_EPINFO:
			return { ...state, currentEpisode: action.payload.currentEpisode}
		case CHANGE_EPISODE_CHARACTERS:
			return { ...state, episodeCharacters: action.payload.episodeCharacters }
		default:
			return state
	}
}

export const getEpisodeInfoThunkCreator = (dispatch, currentEpisode) => {
	return (dispatch) => {
	dispatch(startedActionCreator())
	getEpisodeInfoApi(currentEpisode).then(data => {
		dispatch(successActionCreator(data))
		if (data.characters[0]) {
			const episodeCharactersId = data.characters.map(res => {
				const resArr = res.split('/')
				return resArr[resArr.length - 1]
			})
			getCharacterInfoApi(episodeCharactersId).then(data => {
				if (data.constructor === Array) {
					dispatch(changeEpisodeCharactersActionCreator(data))
				} else {
					dispatch(changeEpisodeCharactersActionCreator([data]))
				}
			})
				.catch(err => {
					dispatch(failureActionCreator(err))
				})
		} else {
			dispatch(changeEpisodeCharactersActionCreator([]))
		}
	})
	.catch(err => {
		dispatch(failureActionCreator(err))
	})
}
}

export const startedActionCreator = () => ({ type: ADD_STARTED_EPINFO })

export const successActionCreator = (data) => ({
	type: ADD_SUCCESS_EPINFO,
	payload: {
		...data
	}
})

export const changeEpisodeCharactersActionCreator = (data) => ({
	type: CHANGE_EPISODE_CHARACTERS,
	payload: {
		episodeCharacters: [...data]
	}
})

export const failureActionCreator = (err) => ({
	type: ADD_FAILURE_EPINFO,
	payload: {
		err
	}
})

export const currentEpisodeActionCreator = (currentEpisode) => ({
	type: CHANGE_CURRENT_EPINFO,
	payload: {
		currentEpisode
	}
})
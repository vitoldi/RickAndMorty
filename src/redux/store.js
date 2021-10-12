import { createStore, combineReducers, applyMiddleware } from 'redux'
import {charactersReducer} from './charactersReducer'
import {charinfoReducer} from './charinfoReducer'
import thunk from 'redux-thunk'
import { locationsReducer } from './locationsReducer'
import { locationInfoReducer } from './locationInfoReducer'
import { episodesReducer } from './episodesReducer'
import { episodeInfoReducer } from './episodeInfoReducer'
import { searchReducer } from './searchReducer'

const reducers = combineReducers({
	charactersPage:charactersReducer,
	charinfoPage:charinfoReducer,
	locationsPage:locationsReducer,
	locationInfoPage:locationInfoReducer,
	episodesPage:episodesReducer,
	episodeInfoPage: episodeInfoReducer,
	searchPage: searchReducer,
})

const store = createStore(reducers, applyMiddleware(thunk))

export default store
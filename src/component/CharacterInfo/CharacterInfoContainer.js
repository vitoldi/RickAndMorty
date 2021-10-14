import CharacterInfo from './CharacterInfo'
import { useSelector, useDispatch } from 'react-redux'
import { getCharacterInfoThunkCreator, currentCharacterActionCreator } from '../../redux/charinfoReducer'
import React, { useEffect } from 'react'
import { currentLocationActionCreator } from '../../redux/locationInfoReducer'
import { currentEpisodeActionCreator } from '../../redux/episodeInfoReducer'
import Preloader from '../Preloader/Preloader'

const CharacterInfoContainer = () => {
	const characterInfo = useSelector(state => state.charinfoPage.characterInfo)
	const currentCharacter = useSelector(state => state.charinfoPage.currentCharacter)
	const countCharacters = useSelector(state => state.charactersPage.allCharacters)
	const characterEpisodes = useSelector(state => state.charinfoPage.characterEpisodes)
	const loading = useSelector(state => state.charinfoPage.loading)

	const dispatch = useDispatch()

	const onCharacterInfo = (currentCharacter) => {
		dispatch(getCharacterInfoThunkCreator(dispatch, currentCharacter))
	}
	const onChangeCharacter = (character) => {
		dispatch(currentCharacterActionCreator(character))
	}
	const onChangeLocation = (location) => {
		dispatch(currentLocationActionCreator(location))
	}
	const onChangeEpisode = (episode) => {
		dispatch(currentEpisodeActionCreator(episode))
	}

	useEffect(() => {
		onCharacterInfo(currentCharacter)
	}, currentCharacter)

		if (loading) {
			return <Preloader />
		}

		return (
			<CharacterInfo
				characterInfo={characterInfo}
				onChangeCharacter={onChangeCharacter}
				countCharacters={countCharacters.info.count}
				onCharacterInfo={onCharacterInfo}
				characterEpisodes={characterEpisodes}
				onChangeLocation={onChangeLocation}
				onChangeEpisode={onChangeEpisode}
			/>
		)
}

export default CharacterInfoContainer
import EpisodeInfo from './EpisodeInfo'
import { useSelector, useDispatch } from 'react-redux'
import { getEpisodeInfoThunkCreator, currentEpisodeActionCreator} from '../../redux/episodeInfoReducer'
import { currentCharacterActionCreator } from '../../redux/charinfoReducer'
import React, {useEffect} from 'react'
import Preloader from '../Preloader/Preloader'

const EpisodeInfoContainer = () => {
	const dispatch = useDispatch()

	const episodeInfo = useSelector(state => state.episodeInfoPage.episodeInfo)
	const currentEpisode = useSelector(state => state.episodeInfoPage.currentEpisode)
	const countEpisodes = useSelector(state => state.episodesPage.allEpisodes)
	const episodeCharacters = useSelector(state => state.episodeInfoPage.episodeCharacters)
	const loading = useSelector(state => state.episodeInfoPage.loading)

	const onEpisodeInfo = (currentEpisode) => {
		dispatch(getEpisodeInfoThunkCreator(dispatch, currentEpisode))
		}
	const	onChangeEpisode = (episode) => {
			dispatch(currentEpisodeActionCreator(episode))
		}
	const onChangeCharacter = (character) => {
				dispatch(currentCharacterActionCreator(character))
		}


	useEffect(() => {
		onEpisodeInfo(currentEpisode)
	}, [currentEpisode])

		if (loading) {
			return <Preloader />
		}
		return (
			<EpisodeInfo
				episodeInfo={episodeInfo}
				onChangeEpisode={onChangeEpisode}
				countEpisodes={countEpisodes.info.count}
				onEpisodeInfo={onEpisodeInfo}
				episodeCharacters={episodeCharacters}
				onChangeCharacter={onChangeCharacter}
			/>
		)
}

export default EpisodeInfoContainer
 
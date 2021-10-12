import EpisodeInfo from './EpisodeInfo'
import { connect } from 'react-redux'
import { getEpisodeInfoThunkCreator, currentEpisodeActionCreator} from '../../redux/episodeInfoReducer'
import { currentCharacterActionCreator } from '../../redux/charinfoReducer'
import React from 'react'
import Preloader from '../Preloader/Preloader'

class EpisodeInfoContainer extends React.Component {
	componentDidMount() {
		this.props.onEpisodeInfo(this.props.currentEpisode)
	}

	render () {
		if (this.props.loading) {
			return <Preloader />
		}
		return (
			<EpisodeInfo
				episodeInfo={this.props.episodeInfo}
				onChangeEpisode={this.props.onChangeEpisode}
				countEpisodes={this.props.countEpisodes.info.count}
				onEpisodeInfo={this.props.onEpisodeInfo}
				episodeCharacters={this.props.episodeCharacters}
				onChangeCharacter={this.props.onChangeCharacter}
			/>
		)
	}
}

const mapDispatchToProps = dispatch => {
	return {
		onEpisodeInfo: (currentEpisode) => {
			dispatch(getEpisodeInfoThunkCreator(dispatch, currentEpisode))
		},
		onChangeEpisode: (episode) => {
			dispatch(currentEpisodeActionCreator(episode))
		},
		onChangeCharacter: (character) => {
			dispatch(currentCharacterActionCreator(character))
		}
	}
}

const mapStateToProps = state => {
	return {
		episodeInfo: state.episodeInfoPage.episodeInfo,
		currentEpisode: state.episodeInfoPage.currentEpisode,
		countEpisodes: state.episodesPage.allEpisodes,
		episodeCharacters: state.episodeInfoPage.episodeCharacters,
		loading: state.episodeInfoPage.loading
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(EpisodeInfoContainer)
 
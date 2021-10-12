import CharacterInfo from './CharacterInfo'
import { connect } from 'react-redux'
import { getCharacterInfoThunkCreator, currentCharacterActionCreator } from '../../redux/charinfoReducer'
import React from 'react'
import { currentLocationActionCreator } from '../../redux/locationInfoReducer'
import { currentEpisodeActionCreator } from '../../redux/episodeInfoReducer'
import Preloader from '../Preloader/Preloader'

class CharacterInfoContainer extends React.Component {
	componentDidMount() {
		this.props.onCharacterInfo(this.props.currentCharacter)
	}

	render () {
		if (this.props.loading) {
			return <Preloader />
		}

		return (
			<CharacterInfo
				characterInfo={this.props.characterInfo}
				onChangeCharacter={this.props.onChangeCharacter}
				countCharacters={this.props.countCharacters.info.count}
				onCharacterInfo={this.props.onCharacterInfo}
				characterEpisodes={this.props.characterEpisodes}
				onChangeLocation={this.props.onChangeLocation}
				onChangeEpisode={this.props.onChangeEpisode}
			/>
		)
	}
}

const mapDispatchToProps = dispatch => {
	return {
		onCharacterInfo: (currentCharacter) => {
			dispatch(getCharacterInfoThunkCreator(dispatch, currentCharacter))
		},
		onChangeCharacter: (character) => {
			dispatch(currentCharacterActionCreator(character))
		},
		onChangeLocation: (location) => {
			dispatch(currentLocationActionCreator(location))
		},
		onChangeEpisode: (episode) => {
			dispatch(currentEpisodeActionCreator(episode))
		}
	}
}

const mapStateToProps = state => {
	return {
		characterInfo: state.charinfoPage.characterInfo,
		currentCharacter: state.charinfoPage.currentCharacter,
		countCharacters: state.charactersPage.allCharacters,
		characterEpisodes: state.charinfoPage.characterEpisodes,
		loading: state.charinfoPage.loading
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(CharacterInfoContainer)
 
import Characters from './Characters'
import { connect } from 'react-redux'
import { charactersFilterActionCreator, currentPageActionCreator, getAllCharactersThunkCreator } from '../../redux/charactersReducer'
import React from 'react'
import { currentCharacterActionCreator } from '../../redux/charinfoReducer'
import NotFound from '../NotFound/NotFound'
import CharactersFilter from './CharactersFilter/CharactersFilter'
import Preloader from '../Preloader/Preloader'

class CharactersContainer extends React.Component {
	componentDidMount() {
		this.props.onCharacters(this.props.currentPage, this.props.filter)
	}

	render () {
		if (this.props.loading) {
			return <Preloader />
		}

		if (this.props.error) {
			return (
			<div>
					<CharactersFilter
						onChangeFilter={this.props.onChangeFilter}
						onCharacters={this.props.onCharacters}
						filter={this.props.filter} />
					<NotFound />
			</div>
			)
		} else {
			return (
				<Characters
					allCharacters={this.props.allCharacters}
					currentPage={this.props.currentPage}
					onChangePage={this.props.onChangePage}
					onCharacters={this.props.onCharacters}
					onChangeCharacter={this.props.onChangeCharacter}
					onChangeFilter={this.props.onChangeFilter}
					filter={this.props.filter} />
			)
		}
	}
}

const mapDispatchToProps = dispatch => {
	return {
		onCharacters: (currentPage, filter) => {
			dispatch(getAllCharactersThunkCreator(dispatch, currentPage, filter))
		},
		onChangePage: (page) => {
			dispatch(currentPageActionCreator(page))
		},
		onChangeCharacter: (character) => {
			dispatch(currentCharacterActionCreator(character))
		},
		onChangeFilter: (filter) => {
			dispatch(charactersFilterActionCreator(filter))
		}
	}
}

const mapStateToProps = state => {
	return {
		allCharacters: state.charactersPage.allCharacters,
		currentPage: state.charactersPage.currentPage,
		filter: state.charactersPage.filter,
		error: state.charactersPage.error,
		search: state.charactersPage.search,
		loading: state.charactersPage.loading
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(CharactersContainer)
 
import Episodes from './Episodes'
import { connect } from 'react-redux'
import { currentPageActionCreator, episodesFilterActionCreator, getAllEpisodesThunkCreator } from '../../redux/episodesReducer'
import React from 'react'
import { currentEpisodeActionCreator } from '../../redux/episodeInfoReducer'
import EpisodesFilter from './EpisodesFilter/EpisodesFilter'
import NotFound from '../NotFound/NotFound'
import Preloader from '../Preloader/Preloader'

class EpisodesContainer extends React.Component {
	componentDidMount() {
		this.props.onEpisodes(this.props.currentPage, this.props.filter)
	}

	render () {
		if (this.props.loading) {
			return <Preloader />
		}
		if (this.props.error) {
			return (
				<div>
					<EpisodesFilter
						onChangeFilter={this.props.onChangeFilter}
						onEpisodes={this.props.onEpisodes}
						filter={this.props.filter} />
					<NotFound />
				</div>
			)
		} else {
		return (
			<Episodes
				allEpisodes={this.props.allEpisodes}
				currentPage={this.props.currentPage}
				onChangePage={this.props.onChangePage}
				onEpisodes={this.props.onEpisodes}
				onChangeEpisode={this.props.onChangeEpisode}
				filter={this.props.filter}
				onChangeFilter={this.props.onChangeFilter}
				/>
		)
	}}
}

const mapDispatchToProps = dispatch => {
	return {
		onEpisodes: (currentPage, filter) => {
			dispatch(getAllEpisodesThunkCreator(dispatch, currentPage, filter))
		},
		onChangePage: (page) => {
			dispatch(currentPageActionCreator(page))
		},
		onChangeEpisode: (episode) => {
			dispatch(currentEpisodeActionCreator(episode))
		}, onChangeFilter: (filter) => {
			dispatch(episodesFilterActionCreator(filter))
		}

	}
}

const mapStateToProps = state => {
	return {
		allEpisodes: state.episodesPage.allEpisodes,
		currentPage: state.episodesPage.currentPage,
		filter: state.episodesPage.filter,
		error: state.episodesPage.error,
		loading: state.episodesPage.loading
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(EpisodesContainer)
 
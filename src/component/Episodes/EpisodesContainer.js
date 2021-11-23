import Episodes from './Episodes'
import { useSelector, useDispatch } from 'react-redux'
import { currentPageActionCreator, episodesFilterActionCreator, getAllEpisodesThunkCreator } from '../../redux/episodesReducer'
import React, {useEffect} from 'react'
import { currentEpisodeActionCreator } from '../../redux/episodeInfoReducer'
import EpisodesFilter from './EpisodesFilter/EpisodesFilter'
import NotFound from '../NotFound/NotFound'
import Preloader from '../Preloader/Preloader'

const EpisodesContainer = () => {
	const dispatch = useDispatch()

	const onEpisodes = (currentPage, filter) => {
		dispatch(getAllEpisodesThunkCreator(dispatch, currentPage, filter))
			}
	const onChangePage = (page) => {
			dispatch(currentPageActionCreator(page))
			}
	const onChangeEpisode = (episode) => {
				dispatch(currentEpisodeActionCreator(episode))
			}
	const onChangeFilter = (filter) => {
				dispatch(episodesFilterActionCreator(filter))
			}

	const allEpisodes = useSelector(state => state.episodesPage.allEpisodes)
	const currentPage = useSelector(state => state.episodesPage.currentPage)
	const filter = useSelector(state => state.episodesPage.filter)
	const error = useSelector(state => state.episodesPage.error)
	const loading = useSelector(state => state.episodesPage.loading)

	useEffect(() => {
		onEpisodes(currentPage, filter)
	}, [currentPage, filter.name, filter.episode])

	if (loading) {
		return <Preloader />
	}
	if (error) {
		return (
			<div>
				<EpisodesFilter
					onChangeFilter={onChangeFilter}
					onEpisodes={onEpisodes}
					filter={filter} />
				<NotFound />
			</div>
		)
	} else {
	return (
		<Episodes
			allEpisodes={allEpisodes}
			currentPage={currentPage}
			onChangePage={onChangePage}
			onEpisodes={onEpisodes}
			onChangeEpisode={onChangeEpisode}
			filter={filter}
			onChangeFilter={onChangeFilter}
			/>
	)
}
}

export default EpisodesContainer
 
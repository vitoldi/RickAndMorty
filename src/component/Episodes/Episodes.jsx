import React from 'react'
import { NavLink, useRouteMatch } from 'react-router-dom'
import Paginator from '../paginator/Paginator'
import classes from './Episodes.module.css'
import EpisodesFilter from './EpisodesFilter/EpisodesFilter'

const Episodes = (props) => {
	let match = useRouteMatch()
	if (props.allEpisodes.results) {
		return (
			<div className={classes.wrapper}>

				<EpisodesFilter
					onChangeFilter={props.onChangeFilter}
					onEpisodes={props.onEpisodes}
					filter={props.filter} />

					<div className={classes.content}>
						{props.allEpisodes.results.map(ep => {
							return (
								<NavLink to={`${match.url}/:${ep.id}`} className={classes.characterCard}
								onClick={props.onChangeEpisode.bind(null, ep.id)}
								key = {ep.id}>
									<div className={classes.characterInfo}>
										<div className={classes.characterName}>
											Name: {ep.name}
										</div>
										<div className={classes.characterSpecies}>
											Air date: {ep.air_date}
										</div>
										<div className={classes.characterSpecies}>
											Episode: {ep.episode}
										</div>
									</div>
								</NavLink>)
							})}
						</div >
					<Paginator 
						info={props.allEpisodes.info}
						currentPage={props.currentPage}
						onChangePage={props.onChangePage} 
						onCharacters={props.onEpisodes}
						filter={props.filter}
					/>
					</div>	
					)
				} else {
					return <div></div>
				}
}

export default Episodes
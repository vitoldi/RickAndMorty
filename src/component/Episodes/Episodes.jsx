import React from 'react'
import { NavLink } from 'react-router-dom'
import Paginator from '../paginator/Paginator'
import classes from './Episodes.module.css'
import EpisodesFilter from './EpisodesFilter/EpisodesFilter'

export default class Episodes extends React.Component {
	
	render() {
		if (this.props.allEpisodes.results) {
			return (
				<div className={classes.wrapper}>

					<EpisodesFilter
						onChangeFilter={this.props.onChangeFilter}
						onEpisodes={this.props.onEpisodes}
						filter={this.props.filter} />

						<div className={classes.content}>
							{this.props.allEpisodes.results.map(ep => {
								return (
									<NavLink to='epinfo' className={classes.characterCard}
									onClick={this.props.onChangeEpisode.bind(null, ep.id)}>
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
							info={this.props.allEpisodes.info}
							currentPage={this.props.currentPage}
							onChangePage={this.props.onChangePage} 
							onCharacters={this.props.onEpisodes}
							filter={this.props.filter}
						/>
						</div>	
						)
					} else {
						return <div></div>
					}
	}
}
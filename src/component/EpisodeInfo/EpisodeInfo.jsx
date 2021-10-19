import React from 'react'
import classes from './EpisodeInfo.module.css'
import { NavLink, useHistory } from 'react-router-dom'
import nextImg from '../../images/next.png'
import previosImg from '../../images/previos.png'

const EpisodeInfo = (props) => {
	const history = useHistory()
	
		const changeEpisode = (action) => {
			if (action === 'next') {
				if (props.episodeInfo.id < props.countEpisodes) {
					props.onChangeEpisode(props.episodeInfo.id + 1)
					props.onEpisodeInfo(props.episodeInfo.id + 1)
					history.replace(`/RickAndMorty/episodes/:${props.episodeInfo.id + 1}`)
				} else {
					props.onChangeEpisode(1)
					props.onEpisodeInfo(1)
					history.replace(`/RickAndMorty/episodes/:1`)
				}
			} else if (action === 'previos') {
				if (props.episodeInfo.id > 1) {
					props.onChangeEpisode(props.episodeInfo.id - 1)
					props.onEpisodeInfo(props.episodeInfo.id - 1)
					history.replace(`/RickAndMorty/episodes/:${props.episodeInfo.id - 1}`)
				} else {
					props.onChangeEpisode(props.countEpisodes)
					props.onEpisodeInfo(props.countEpisodes)
					history.replace(`/RickAndMorty/episodes/:${props.countEpisodes}`)
				}
			}
		}

		if (props.episodeInfo.name) {
			return (
				<div className={classes.wrapper}>
					<div className={classes.episodeinfoCard}>
						<div className={classes.cardElement}>
							Name: {props.episodeInfo.name}
						</div>
						<div className={classes.cardElement}>
							Air date: {props.episodeInfo.air_date}
						</div>
						<div className={classes.cardElement}>
							Episode code: {props.episodeInfo.episode}
						</div>
						<div className={classes.cardElement}>
							<div className={classes.characters__wrapper}>
								<div className={classes.characters__title}>
									Characters:
								</div>
								<div className={classes.characters}>
									{props.episodeCharacters.map((res) => {
										return (
											<div className={classes.residents__item} key={res.id}>
												<NavLink to={`/RickAndMorty/characters/:${res.id}`}
													onClick={props.onChangeCharacter.bind(null, res.id)}>
													<div>
														<img src={res.image} alt="Oops" width='100px' height='100px' />
													</div>
													<div>
														{res.name}
													</div>
												</NavLink>
											</div>
										)
									})}
								</div>
							</div>
						</div>

								
						</div>
					<div className={classes.arrows}>
						<div className={classes.previos} 
						onClick={changeEpisode.bind(null, 'previos')}>
							<img src={previosImg} alt="Oops" width='75px' height='25px' />
						</div>
						<div className={classes.next} 
						onClick={changeEpisode.bind(null, 'next')}>
							<img src={nextImg} alt="Oops" width='75px' height='25px' />
						</div>
					</div>
				</div>)				
		} else {
			return <div></div>
		}
}

export default EpisodeInfo
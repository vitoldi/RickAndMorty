import React from 'react'
import classes from './EpisodeInfo.module.css'
import { NavLink } from 'react-router-dom'
import nextImg from '../../images/next.png'
import previosImg from '../../images/previos.png'

export default class EpisodeInfo extends React.Component {
	
	render() {
		const changeEpisode = (action) => {
			if (action === 'next') {
				if (this.props.episodeInfo.id < this.props.countEpisodes) {
					this.props.onChangeEpisode(this.props.episodeInfo.id + 1)
					this.props.onEpisodeInfo(this.props.episodeInfo.id + 1)
				} else {
					this.props.onChangeEpisode(1)
					this.props.onEpisodeInfo(1)
				}
			} else if (action === 'previos') {
				if (this.props.episodeInfo.id > 1) {
					this.props.onChangeEpisode(this.props.episodeInfo.id - 1)
					this.props.onEpisodeInfo(this.props.episodeInfo.id - 1)
				} else {
					this.props.onChangeEpisode(this.props.countEpisodes)
					this.props.onEpisodeInfo(this.props.countEpisodes)
				}
			}
		}

		if (this.props.episodeInfo.name) {
			return (
				<div className={classes.wrapper}>
					<div className={classes.episodeinfoCard}>
						<div className={classes.cardElement}>
							Name: {this.props.episodeInfo.name}
						</div>
						<div className={classes.cardElement}>
							Air date: {this.props.episodeInfo.air_date}
						</div>
						<div className={classes.cardElement}>
							Episode code: {this.props.episodeInfo.episode}
						</div>
						<div className={classes.cardElement}>
							<div className={classes.characters__wrapper}>
								<div className={classes.characters__title}>
									Characters:
								</div>
								<div className={classes.characters}>
									{this.props.episodeCharacters.map((res) => {
										return (
											<div className={classes.residents__item}>
												<NavLink to='charinfo'
													onClick={this.props.onChangeCharacter.bind(null, res.id)}>
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
							<img src={previosImg} width='75px' height='25px' />
						</div>
						<div className={classes.next} 
						onClick={changeEpisode.bind(null, 'next')}>
							<img src={nextImg} width='75px' height='25px' />
						</div>
					</div>
				</div>)				
		} else {
			return <div></div>
		}
	}
}
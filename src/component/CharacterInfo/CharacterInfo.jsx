import React from 'react'
import classes from './CharacterInfo.module.css'
import { NavLink } from 'react-router-dom'
import nextImg from '../../images/next.png'
import previosImg from '../../images/previos.png'

export default class CharacterInfo extends React.Component {
	
	render() {
		const changeCharacter = (action) => {
			if (action === 'next') {
				if (this.props.characterInfo.id < this.props.countCharacters) {
					this.props.onChangeCharacter(this.props.characterInfo.id + 1)
					this.props.onCharacterInfo(this.props.characterInfo.id + 1)
				} else {
					this.props.onChangeCharacter(1)
					this.props.onCharacterInfo(1)
				}
			} else if (action === 'previos') {
				if (this.props.characterInfo.id > 1) {
					this.props.onChangeCharacter(this.props.characterInfo.id - 1)
					this.props.onCharacterInfo(this.props.characterInfo.id - 1)
				} else {
					this.props.onChangeCharacter(this.props.countCharacters)
					this.props.onCharacterInfo(this.props.countCharacters)
				}
			}
		}

		const toLocInfo = (url) => {
			const urlArr = url.split('/')
			this.props.onChangeLocation(urlArr[urlArr.length-1])
		}

		if (this.props.characterInfo.name) {
			return (
				<div className={classes.wrapper}>
					<div className={classes.charinfoCard}>
						<div className={classes.mainInfo}>
							<div>
								{this.props.characterInfo.name}
							</div>
							<div className={classes.image}>
								<img src={this.props.characterInfo.image} />
							</div>
							<div>
								{this.props.characterInfo.status}
							</div>
						</div>
							<div className={classes.secondaryInfo}>
								<div>
									Gender: {this.props.characterInfo.gender}
								</div>
								<div>
									Origin: {this.props.characterInfo.origin.name === 'unknown' ?
										<div>
											{this.props.characterInfo.origin.name}
										</div>
									: <NavLink to='locinfo' className={classes.location__item}
											onClick={toLocInfo.bind(null, this.props.characterInfo.origin.url)}>
											{this.props.characterInfo.origin.name}
										</NavLink>
									}
								</div>
								<div>
									Location: {this.props.characterInfo.location.name === 'unknown' ?
										<div>
											 {this.props.characterInfo.location.name}
										</div>
									: <NavLink className={classes.location__item} to='locinfo'
											onClick={toLocInfo.bind(null, this.props.characterInfo.location.url)}>
											{this.props.characterInfo.location.name}
										</NavLink>
									}
								</div>
								<div className={classes.episodes}>
									<div className={classes.episodes__title}>
										Episodes:
									</div>
									<div className={classes.episodes__numbers}>
										{this.props.characterEpisodes.map((res) => {
											return (
												<NavLink className={classes.episodes__number__item} to='epinfo' onClick={this.props.onChangeEpisode.bind(null, res.id)}>
													{res.episode}
												</NavLink>
											)
										})}
									</div> 	
								</div>
							</div>
						</div>
					<div className={classes.arrows}>
						<div className={classes.previos} 
						onClick={changeCharacter.bind(null, 'previos')}>
							<img src={previosImg} width='75px' height='25px' />
						</div>
						<div className={classes.next}
						onClick={changeCharacter.bind(null, 'next')}>
							<img src={nextImg} width='75px' height='25px'/>
						</div>
					</div>
				</div>)				
		} else {
			return <div></div>
		}
	}
}
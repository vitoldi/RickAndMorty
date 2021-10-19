import React from 'react'
import classes from './CharacterInfo.module.css'
import { NavLink, useHistory } from 'react-router-dom'
import nextImg from '../../images/next.png'
import previosImg from '../../images/previos.png'

const CharacterInfo = (props) => {
	const history = useHistory()
	
		const changeCharacter = (action) => {
			if (action === 'next') {
				if (props.characterInfo.id < props.countCharacters) {
					props.onChangeCharacter(props.characterInfo.id + 1)
					props.onCharacterInfo(props.characterInfo.id + 1)
					history.replace(`/RickAndMorty/characters/:${props.characterInfo.id + 1}`)
				} else {
					props.onChangeCharacter(1)
					props.onCharacterInfo(1)
					history.replace(`/RickAndMorty/characters/:1`)
				}
			} else if (action === 'previos') {
				if (props.characterInfo.id > 1) {
					props.onChangeCharacter(props.characterInfo.id - 1)
					props.onCharacterInfo(props.characterInfo.id - 1)
					history.replace(`/RickAndMorty/characters/:${props.characterInfo.id - 1}`)
				} else {
					props.onChangeCharacter(props.countCharacters)
					props.onCharacterInfo(props.countCharacters)
					history.replace(`/RickAndMorty/characters/:${props.countCharacters}`)
				}
			}
		}

		if (props.characterInfo.name) {
			const originUrl = props.characterInfo.origin.url.split('/')
			const originId = originUrl[originUrl.length - 1]
			const locationUrl = props.characterInfo.location.url.split('/')
			const locationId = locationUrl[locationUrl.length - 1]
			return (
				<div className={classes.wrapper}>
					<div className={classes.charinfoCard}>
						<div className={classes.mainInfo}>
							<div>
								{props.characterInfo.name}
							</div>
							<div className={classes.image}>
								<img src={props.characterInfo.image} alt="Oops" />
							</div>
							<div>
								{props.characterInfo.status}
							</div>
						</div>
							<div className={classes.secondaryInfo}>
								<div>
									Gender: {props.characterInfo.gender}
								</div>
								<div>
									Origin: {props.characterInfo.origin.name === 'unknown' ?
										<div>
											{props.characterInfo.origin.name}
										</div>
									: <NavLink to={`/RickAndMorty/locations/:${originId}`}
											className={classes.location__item}
											onClick={props.onChangeLocation.bind(null, originId)}>
											{props.characterInfo.origin.name}
										</NavLink>
									}
								</div>
								<div>
									Location: {props.characterInfo.location.name === 'unknown' ?
										<div>
											 {props.characterInfo.location.name}
										</div>
									: <NavLink className={classes.location__item} 
										to={`/RickAndMorty/locations/:${locationId}`}
										onClick={props.onChangeLocation.bind(null, locationId)}>
											{props.characterInfo.location.name}
										</NavLink>
									}
								</div>
								<div className={classes.episodes}>
									<div className={classes.episodes__title}>
										Episodes:
									</div>
									<div className={classes.episodes__numbers}>
										{props.characterEpisodes.map((res) => {
											return (
												<NavLink className={classes.episodes__number__item} 
													to={`/RickAndMorty/episodes/:${res.id}`}
													onClick={props.onChangeEpisode.bind(null, res.id)}
													key = {res.id}>
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
							<img src={previosImg} alt="Oops" width='75px' height='25px' />
						</div>
						<div className={classes.next}
						onClick={changeCharacter.bind(null, 'next')}>
							<img src={nextImg} alt="Oops" width='75px' height='25px'/>
						</div>
					</div>
				</div>)				
		} else {
			return <div></div>
		}
	}

export default CharacterInfo
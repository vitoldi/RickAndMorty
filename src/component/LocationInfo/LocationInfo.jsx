import React from 'react'
import classes from './LocationInfo.module.css'
import { NavLink, useHistory } from 'react-router-dom'
import nextImg from '../../images/next.png'
import previosImg from '../../images/previos.png'

const LocationInfo = (props) => {
	const history = useHistory()
	const changeLocation = (action) => {
		if (action === 'next') {
			if (props.locationInfo.id < props.allLocations.info.count) {
				props.onChangeLocation(props.locationInfo.id + 1)
				props.onLocationInfo(props.locationInfo.id + 1)
				history.replace(`/RickAndMorty/locations/:${props.locationInfo.id + 1}`)
			} else {
				props.onChangeLocation(1)
				props.onLocationInfo(1)
				history.replace(`/RickAndMorty/locations/:1`)
			}
		} else if (action === 'previos') {
			if (props.locationInfo.id > 1) {
				props.onChangeLocation(props.locationInfo.id - 1)
				props.onLocationInfo(props.locationInfo.id - 1)
				history.replace(`/RickAndMorty/locations/:${props.locationInfo.id - 1}`)
			} else {
				props.onChangeLocation(props.allLocations.info.count)
				props.onLocationInfo(props.allLocations.info.count)
				history.replace(`/RickAndMorty/locations/:${props.allLocations.info.count}`)
			}
	}}

	if (props.locationInfo.name) {
		return (
			<div className={classes.wrapper}>
				<div className={classes.locinfoCard}>
					<div className={classes.cardElement}>
						Name: {props.locationInfo.name}
					</div>
					<div className={classes.cardElement}>
						Type: {props.locationInfo.type}
					</div>
					<div className={classes.cardElement}>
						Dimension: {props.locationInfo.dimension}
					</div>
					<div className={classes.cardElement}>
						<div className={classes.residents__wrapper}>
							<div className={classes.residents__title}>
								Residents:
							</div>
							<div className={classes.residents}>
								{props.residents[0]
								? props.residents.map((res) => {
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
								})
								: <div>none</div>
							}
							</div>
						</div>
					</div>
					</div>
				<div className={classes.arrows}>
					<div className={classes.previos} 
						onClick={changeLocation.bind(null, 'previos')}>
						<img src={previosImg} width='75px' height='25px' alt="Oops" />
					</div>
					<div className={classes.next} 
						onClick={changeLocation.bind(null, 'next')}>
						<img src={nextImg} width='75px' height='25px' alt="Oops" />
					</div>
				</div>
			</div>)				
	} else {
		return <div></div>
	}
}

export default LocationInfo
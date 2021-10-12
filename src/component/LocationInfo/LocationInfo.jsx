import React from 'react'
import classes from './LocationInfo.module.css'
import { NavLink } from 'react-router-dom'
import nextImg from '../../images/next.png'
import previosImg from '../../images/previos.png'

export default class LocationInfo extends React.Component {
	
	render() {
		const changeLocation = (action) => {
			if (action === 'next') {
				if (this.props.locationInfo.id < this.props.allLocations.info.count) {
					this.props.onChangeLocation(this.props.locationInfo.id + 1)
					this.props.onLocationInfo(this.props.locationInfo.id + 1)
				} else {
					this.props.onChangeLocation(1)
					this.props.onLocationInfo(1)
				}
			} else if (action === 'previos') {
				if (this.props.locationInfo.id > 1) {
					this.props.onChangeLocation(this.props.locationInfo.id - 1)
					this.props.onLocationInfo(this.props.locationInfo.id - 1)
				} else {
					this.props.onChangeLocation(this.props.allLocations.info.count)
					this.props.onLocationInfo(this.props.allLocations.info.count)
				}
			}
		}

		if (this.props.locationInfo.name) {
			return (
				<div className={classes.wrapper}>
					<div className={classes.locinfoCard}>
						<div className={classes.cardElement}>
							Name: {this.props.locationInfo.name}
						</div>
						<div className={classes.cardElement}>
							Type: {this.props.locationInfo.type}
						</div>
						<div className={classes.cardElement}>
							Dimension: {this.props.locationInfo.dimension}
						</div>
						<div className={classes.cardElement}>
							<div className={classes.residents__wrapper}>
								<div className={classes.residents__title}>
									Residents:
								</div>
								<div className={classes.residents}>
									{this.props.residents[0]
									? this.props.residents.map((res) => {
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
							<img src={previosImg} width='75px' height='25px' />
						</div>
						<div className={classes.next} 
						onClick={changeLocation.bind(null, 'next')}>
							<img src={nextImg} width='75px' height='25px' />
						</div>
					</div>
				</div>)				
		} else {
			return <div></div>
		}
	}
}
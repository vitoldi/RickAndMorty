import React from 'react'
import { NavLink, useRouteMatch } from 'react-router-dom'
import Paginator from '../paginator/Paginator'
import classes from './Locations.module.css'
import LocationsFilter from './LocationsFilter/LocationsFilter'

const Locations = (props) => {
	let match = useRouteMatch()
	if (props.allLocations.results) {
		return (
			<div className={classes.wrapper}>
				<LocationsFilter
					onChangeFilter={props.onChangeFilter}
					onLocations={props.onLocations}
					filter={props.filter} />

					<div className={classes.content}>
						{props.allLocations.results.map(loc => {
							return (
								<NavLink to={`${match.url}/:${loc.id}`} className={classes.characterCard}
								onClick={props.onChangeLocation.bind(null, loc.id)}
								key ={loc.id}>
									<div className={classes.characterInfo}>
										<div className={classes.characterName}>
											Name: {loc.name}
										</div>
										<div className={classes.characterSpecies}>
											Type: {loc.type}
										</div>
										<div className={classes.characterSpecies}>
											Dimension: {loc.dimension}
										</div>
									</div>
								</NavLink>)
							})}
						</div >
					<Paginator 
						info={props.allLocations.info}
						currentPage={props.currentPage}
						onChangePage={props.onChangePage} 
						onCharacters={props.onLocations}
						filter={props.filter}
					/>
					</div>	
					)
				} else {
					return <div></div>
				}
}

export default Locations